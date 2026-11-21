#!/usr/bin/env python3
"""Builds 3D coordinates for an Fe(III) 1,4,7-triazacyclononane complex with three 2-hydroxypropyl pendant arms (N3O3
coordination), the macrocyclic class in Ferric Contrast's published work (Snyder et al., Angew. Chem. Int. Ed. 2020,
doi:10.1002/anie.201912273). RDKit embed + UFF; writes fe_tacn.sdf for render.py."""
from rdkit import Chem, RDLogger
RDLogger.DisableLog('rdApp.*')
from rdkit.Chem import AllChem
import pathlib
H=pathlib.Path(__file__).resolve().parent
lig=Chem.MolFromSmiles('CC(O)CN1CCN(CC(C)O)CCN(CC(C)O)CC1')
rw=Chem.RWMol(lig)
fe=rw.AddAtom(Chem.Atom(26))
for a in lig.GetAtoms():
    if a.GetSymbol() in ('N','O'): rw.AddBond(a.GetIdx(),fe,Chem.BondType.SINGLE)
m=rw.GetMol()
for a in m.GetAtoms():
    a.SetNoImplicit(False)
m.UpdatePropertyCache(strict=False)
Chem.SanitizeMol(m,Chem.SanitizeFlags.SANITIZE_ALL^Chem.SanitizeFlags.SANITIZE_PROPERTIES)
mh=Chem.AddHs(m)
for a in mh.GetAtoms():
    if a.GetSymbol()=='Fe': a.SetHybridization(Chem.HybridizationType.SP3D2)
best=None
for seed in range(40):
    p=AllChem.ETKDGv3();p.randomSeed=seed;p.useRandomCoords=True
    if AllChem.EmbedMolecule(mh,p)!=0: continue
    try:
        ff=AllChem.UFFGetMoleculeForceField(mh,ignoreInterfragInteractions=False)
        fi=[a.GetIdx() for a in mh.GetAtoms() if a.GetSymbol()=='Fe'][0]
        don=[a.GetIdx() for a in mh.GetAtomWithIdx(fi).GetNeighbors()]
        for d in don: ff.UFFAddDistanceConstraint(fi,d,False,2.0,2.12,800.0)
        for i,a in enumerate(don):
            for b in don[i+1:]:
                ff.UFFAddDistanceConstraint(a,b,False,2.75,4.25,200.0)
        ff.Minimize(maxIts=20000);e=ff.CalcEnergy()
    except Exception as ex: print('uff',ex);continue
    if best is None or e<best[0]: best=(e,Chem.Mol(mh))
print('E',best[0])
mol=best[1]
conf=mol.GetConformer();fi=[a.GetIdx() for a in mol.GetAtoms() if a.GetSymbol()=='Fe'][0]
import numpy as np
for nb in mol.GetAtomWithIdx(fi).GetNeighbors():
    print(nb.GetSymbol(),round(float(np.linalg.norm(np.array(conf.GetAtomPosition(fi))-np.array(conf.GetAtomPosition(nb.GetIdx())))),2))
L=['FeTACN-hp3','  build_mol.py','']
L.append('%3d%3d  0  0  0  0  0  0  0  0999 V2000'%(mol.GetNumAtoms(),mol.GetNumBonds()))
for a in mol.GetAtoms():
    p=conf.GetAtomPosition(a.GetIdx());L.append('%10.4f%10.4f%10.4f %-3s 0  0  0  0  0  0  0  0  0  0  0  0'%(p.x,p.y,p.z,a.GetSymbol()))
for b in mol.GetBonds():
    L.append('%3d%3d%3d  0'%(b.GetBeginAtomIdx()+1,b.GetEndAtomIdx()+1,1))
L.append('M  END')
open(H/'fe_tacn.sdf','w').write('\n'.join(L)+'\n')
