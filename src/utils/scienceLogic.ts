/**
 * Pure scientific algorithms and bioinformatics logic
 * Tested via Node test runner (node:test)
 */

export interface CodonTranslation {
  codon: string;
  aminoAcid: string;
  abbreviation: string;
  isStart?: boolean;
  isStop?: boolean;
}

// Canonical RNA Codon Table
export const CODON_TABLE: Record<string, { name: string; symbol: string; isStart?: boolean; isStop?: boolean }> = {
  AUG: { name: 'Methionine', symbol: 'Met (M)', isStart: true },
  UUU: { name: 'Phenylalanine', symbol: 'Phe (F)' },
  UUC: { name: 'Phenylalanine', symbol: 'Phe (F)' },
  UUA: { name: 'Leucine', symbol: 'Leu (L)' },
  UUG: { name: 'Leucine', symbol: 'Leu (L)' },
  UCU: { name: 'Serine', symbol: 'Ser (S)' },
  UCC: { name: 'Serine', symbol: 'Ser (S)' },
  UCA: { name: 'Serine', symbol: 'Ser (S)' },
  UCG: { name: 'Serine', symbol: 'Ser (S)' },
  UAU: { name: 'Tyrosine', symbol: 'Tyr (Y)' },
  UAC: { name: 'Tyrosine', symbol: 'Tyr (Y)' },
  UAA: { name: 'Stop (Ochre)', symbol: 'STOP', isStop: true },
  UAG: { name: 'Stop (Amber)', symbol: 'STOP', isStop: true },
  UGU: { name: 'Cysteine', symbol: 'Cys (C)' },
  UGC: { name: 'Cysteine', symbol: 'Cys (C)' },
  UGA: { name: 'Stop (Opal)', symbol: 'STOP', isStop: true },
  UGG: { name: 'Tryptophan', symbol: 'Trp (W)' },
  CUU: { name: 'Leucine', symbol: 'Leu (L)' },
  CUC: { name: 'Leucine', symbol: 'Leu (L)' },
  CUA: { name: 'Leucine', symbol: 'Leu (L)' },
  CUG: { name: 'Leucine', symbol: 'Leu (L)' },
  CCU: { name: 'Proline', symbol: 'Pro (P)' },
  CCC: { name: 'Proline', symbol: 'Pro (P)' },
  CCA: { name: 'Proline', symbol: 'Pro (P)' },
  CCG: { name: 'Proline', symbol: 'Pro (P)' },
  CAU: { name: 'Histidine', symbol: 'His (H)' },
  CAC: { name: 'Histidine', symbol: 'His (H)' },
  CAA: { name: 'Glutamine', symbol: 'Gln (Q)' },
  CAG: { name: 'Glutamine', symbol: 'Gln (Q)' },
  CGU: { name: 'Arginine', symbol: 'Arg (R)' },
  CGC: { name: 'Arginine', symbol: 'Arg (R)' },
  CGA: { name: 'Arginine', symbol: 'Arg (R)' },
  CGG: { name: 'Arginine', symbol: 'Arg (R)' },
  AUU: { name: 'Isoleucine', symbol: 'Ile (I)' },
  AUC: { name: 'Isoleucine', symbol: 'Ile (I)' },
  AUA: { name: 'Isoleucine', symbol: 'Ile (I)' },
  ACU: { name: 'Threonine', symbol: 'Thr (T)' },
  ACC: { name: 'Threonine', symbol: 'Thr (T)' },
  ACA: { name: 'Threonine', symbol: 'Thr (T)' },
  ACG: { name: 'Threonine', symbol: 'Thr (T)' },
  AAU: { name: 'Asparagine', symbol: 'Asn (N)' },
  AAC: { name: 'Asparagine', symbol: 'Asn (N)' },
  AAA: { name: 'Lysine', symbol: 'Lys (K)' },
  AAG: { name: 'Lysine', symbol: 'Lys (K)' },
  AGU: { name: 'Serine', symbol: 'Ser (S)' },
  AGC: { name: 'Serine', symbol: 'Ser (S)' },
  AGA: { name: 'Arginine', symbol: 'Arg (R)' },
  AGG: { name: 'Arginine', symbol: 'Arg (R)' },
  GUU: { name: 'Valine', symbol: 'Val (V)' },
  GUC: { name: 'Valine', symbol: 'Val (V)' },
  GUA: { name: 'Valine', symbol: 'Val (V)' },
  GUG: { name: 'Valine', symbol: 'Val (V)' },
  GCU: { name: 'Alanine', symbol: 'Ala (A)' },
  GCC: { name: 'Alanine', symbol: 'Ala (A)' },
  GCA: { name: 'Alanine', symbol: 'Ala (A)' },
  GCG: { name: 'Alanine', symbol: 'Ala (A)' },
  GAU: { name: 'Aspartic Acid', symbol: 'Asp (D)' },
  GAC: { name: 'Aspartic Acid', symbol: 'Asp (D)' },
  GAA: { name: 'Glutamic Acid', symbol: 'Glu (E)' },
  GAG: { name: 'Glutamic Acid', symbol: 'Glu (E)' },
  GGU: { name: 'Glycine', symbol: 'Gly (G)' },
  GGC: { name: 'Glycine', symbol: 'Gly (G)' },
  GGA: { name: 'Glycine', symbol: 'Gly (G)' },
  GGG: { name: 'Glycine', symbol: 'Gly (G)' },
};

/**
 * Returns complementary DNA base: A <-> T, C <-> G
 */
export function getComplementaryBase(base: string): string {
  const upper = base.toUpperCase();
  switch (upper) {
    case 'A': return 'T';
    case 'T': return 'A';
    case 'C': return 'G';
    case 'G': return 'C';
    default: return 'N';
  }
}

/**
 * Generates the complementary DNA strand for a given 5'->3' sequence
 */
export function getComplementaryStrand(sequence: string): string {
  return sequence
    .toUpperCase()
    .replace(/[^ATCG]/g, '')
    .split('')
    .map(getComplementaryBase)
    .join('');
}

/**
 * Transcribes a DNA coding strand into mRNA: Thymine (T) -> Uracil (U)
 */
export function transcribeDnaToMrna(dnaStrand: string): string {
  return dnaStrand
    .toUpperCase()
    .replace(/[^ATCG]/g, '')
    .replace(/T/g, 'U');
}

/**
 * Translates an mRNA sequence into a peptide amino acid chain
 */
export function translateMrna(mrna: string): { peptides: string[]; codons: CodonTranslation[] } {
  const clean = mrna.toUpperCase().replace(/[^AUCG]/g, '');
  const codons: CodonTranslation[] = [];
  const peptides: string[] = [];

  for (let i = 0; i <= clean.length - 3; i += 3) {
    const codon = clean.substring(i, i + 3);
    const entry = CODON_TABLE[codon] || { name: 'Unknown', symbol: 'X' };
    
    codons.push({
      codon,
      aminoAcid: entry.name,
      abbreviation: entry.symbol,
      isStart: entry.isStart,
      isStop: entry.isStop,
    });

    if (entry.isStop) {
      peptides.push('[STOP]');
      break;
    } else {
      peptides.push(entry.symbol);
    }
  }

  return { peptides, codons };
}

/**
 * Calculates AlphaFold pLDDT confidence tier and scientific color
 * Canonical standard:
 * >90: Very High (#0053D6)
 * 70-90: Confident (#65CBF3)
 * 50-70: Low (#FFDB13)
 * <50: Very Low / Disordered (#FF7D45)
 */
export interface PlddtTier {
  score: number;
  label: string;
  category: 'very-high' | 'confident' | 'low' | 'very-low';
  colorHex: string;
  description: string;
}

export function getPlddtClassification(score: number): PlddtTier {
  if (score >= 90) {
    return {
      score,
      label: 'Very High Confidence',
      category: 'very-high',
      colorHex: '#0053D6',
      description: 'High accuracy for both backbone and sidechain rotamers; reliable active sites.',
    };
  }
  if (score >= 70) {
    return {
      score,
      label: 'Confident',
      category: 'confident',
      colorHex: '#65CBF3',
      description: 'Reliable backbone topology and secondary structure.',
    };
  }
  if (score >= 50) {
    return {
      score,
      label: 'Low Confidence',
      category: 'low',
      colorHex: '#FFDB13',
      description: 'Backbone topology caution; potential flexible linker or surface loop.',
    };
  }
  return {
    score,
    label: 'Very Low / Disordered',
    category: 'very-low',
    colorHex: '#FF7D45',
    description: 'Strongly correlates with intrinsically disordered protein regions (IDPRs).',
  };
}

/**
 * Calculates net cellular ATP yield per glucose molecule during aerobic cellular respiration
 * Glycolysis (net 2 ATP, 2 NADH)
 * Pyruvate oxidation (2 NADH)
 * Citric Acid Cycle (2 ATP/GTP, 6 NADH, 2 FADH2)
 * Oxidative Phosphorylation (~26-28 ATP via ATP synthase)
 * Total: 30-32 ATP
 */
export function calculateRespirationAtpYield(glucoseMolecules: number): {
  glycolysisAtp: number;
  tcaCycleAtp: number;
  oxidativePhosphorylationAtp: number;
  totalAtpMin: number;
  totalAtpMax: number;
} {
  const g = Math.max(0, glucoseMolecules);
  return {
    glycolysisAtp: g * 2,
    tcaCycleAtp: g * 2,
    oxidativePhosphorylationAtp: g * 28,
    totalAtpMin: g * 30,
    totalAtpMax: g * 32,
  };
}

/**
 * Searches glossary terms by keyword across term name, category, and definition
 */
export function filterGlossaryTerms<T extends { term: string; category: string; definition: string }>(
  items: T[],
  query: string,
  selectedCategory: string = 'All'
): T[] {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    if (!matchesCat) return false;
    if (!q) return true;
    return (
      item.term.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });
}
