# Illustrative 3D model of an MT218-type agent: a 7-residue peptide (ZD2, TVRTSAD) linked to the macrocyclic chelate Gd(HP-DO3A).
from rdkit import Chem
from rdkit.Chem import AllChem
import numpy as np
lig = ("C1CN(CC(=O)[O-])CCN(CC(=O)[O-])CCN(CC(=O)[O-])CCN1CC(O)CNC(=O)CCC(=O)"
       "NC(C(C)O)C(=O)NC(C(C)C)C(=O)NC(CCCNC(=N)N)C(=O)NC(C(C)O)C(=O)NC(CO)C(=O)NC(C)C(=O)NC(CC(=O)O)C(=O)O")
m = Chem.RWMol(Chem.MolFromSmiles(lig))
gd = m.AddAtom(Chem.Atom(64))
donors = []
# ring nitrogens
ring = m.GetRingInfo()
for a in m.GetAtoms():
    if a.GetSymbol()=='N' and a.IsInRing() and a.GetIdx()<20: donors.append(a.GetIdx())
    if a.GetSymbol()=='O' and a.GetFormalCharge()==-1: donors.append(a.GetIdx())
# hydroxyl O of the hydroxypropyl arm: first OH after the 4th ring N
patt = Chem.MolFromSmarts('[NX3;R]CC([OX2H])C')
oh = m.GetSubstructMatch(patt)[3]; donors.append(oh)
print('donors', donors, len(donors))
for d in donors: m.AddBond(d, gd, Chem.BondType.DATIVE)
mol = m.GetMol(); Chem.SanitizeMol(mol)
mol = Chem.AddHs(mol)
ps = AllChem.ETKDGv3(); ps.useRandomCoords=True; ps.randomSeed=7
best=None
for seed in [2,5,8,11,13,17]:
    ps.randomSeed=seed
    cid = AllChem.EmbedMolecule(mol, ps)
    if cid<0: print('fail',seed); continue
    try:
        AllChem.UFFOptimizeMolecule(mol, maxIters=4000)
    except Exception as e: print('uff',e)
    c = mol.GetConformer().GetPositions()
    g = c[gd]; dd=[np.linalg.norm(c[d]-g) for d in donors]
    X=c-c.mean(0); rg=np.sqrt((X**2).sum(1).mean())
    print(seed, 'Gd-donor', np.round(dd,2), 'Rg', round(rg,2))
    q=max(dd)+0.3*abs(rg-6.3)
    if max(dd)<5 and (best is None or q<best[0]): best=(q, Chem.Mol(mol))
Chem.MolToMolFile(best[1], 'mt218.mol')
