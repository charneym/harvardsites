#!/usr/bin/env python3
"""Arginine vasopressin (argipressin, PubChem CID 644077 SMILES): the natural V1a-receptor hormone whose receptor PHIN-214
partially activates. Builds a compact 3D conformer (ETKDG + MMFF), heavy atoms only, written to avp.json for render.py."""
import json
from rdkit import Chem
from rdkit.Chem import AllChem
import numpy as np
smi = "C1C[C@H](N(C1)C(=O)[C@@H]2CSSC[C@@H](C(=O)N[C@H](C(=O)N[C@H](C(=O)N[C@H](C(=O)N[C@H](C(=O)N2)CC(=O)N)CCC(=O)N)CC3=CC=CC=C3)CC4=CC=C(C=C4)O)N)C(=O)N[C@@H](CCCN=C(N)N)C(=O)NCC(=O)N"
m = Chem.AddHs(Chem.MolFromSmiles(smi))
p = AllChem.ETKDGv3(); p.randomSeed = 214
ids = AllChem.EmbedMultipleConfs(m, 40, p)
AllChem.MMFFOptimizeMoleculeConfs(m, maxIters=2000)
heavy = [a.GetIdx() for a in m.GetAtoms() if a.GetAtomicNum() > 1]
best = None
for cid in ids:
    X = m.GetConformer(cid).GetPositions()[heavy]
    rg = np.sqrt(((X - X.mean(0)) ** 2).sum(1).mean())
    ev = np.linalg.eigvalsh(np.cov((X - X.mean(0)).T))
    score = rg + 0.0 * ev[0]
    if best is None or score < best[0]: best = (score, cid)
X = m.GetConformer(best[1]).GetPositions()
idx = {h: i for i, h in enumerate(heavy)}
atoms = [[m.GetAtomWithIdx(h).GetSymbol()] + list(map(float, X[h])) for h in heavy]
bonds = [[idx[b.GetBeginAtomIdx()], idx[b.GetEndAtomIdx()], b.GetBondTypeAsDouble()] for b in m.GetBonds()
         if b.GetBeginAtomIdx() in idx and b.GetEndAtomIdx() in idx]
json.dump({"atoms": atoms, "bonds": bonds}, open("avp.json", "w"))
print(len(atoms), "atoms", len(bonds), "bonds rg", best[0])
