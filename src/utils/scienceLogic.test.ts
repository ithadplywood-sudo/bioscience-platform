import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getComplementaryBase,
  getComplementaryStrand,
  transcribeDnaToMrna,
  translateMrna,
  getPlddtClassification,
  calculateRespirationAtpYield,
  filterGlossaryTerms,
} from './scienceLogic';

test('getComplementaryBase returns correct Watson-Crick base pairs', () => {
  assert.equal(getComplementaryBase('A'), 'T');
  assert.equal(getComplementaryBase('T'), 'A');
  assert.equal(getComplementaryBase('C'), 'G');
  assert.equal(getComplementaryBase('G'), 'C');
  assert.equal(getComplementaryBase('a'), 'T');
  assert.equal(getComplementaryBase('N'), 'N');
});

test('getComplementaryStrand generates full complementary DNA sequence', () => {
  const sequence = 'ATGCGATCG';
  const complement = getComplementaryStrand(sequence);
  assert.equal(complement, 'TACGCTAGC');
});

test('transcribeDnaToMrna replaces Thymine with Uracil', () => {
  const dna = 'ATGGCCATTTAA';
  const mrna = transcribeDnaToMrna(dna);
  assert.equal(mrna, 'AUGGCCAUUUAA');
});

test('translateMrna translates codons into peptide chain and stops at stop codon', () => {
  // AUG (Met) - GCC (Ala) - AUU (Ile) - UAA (Stop)
  const mrna = 'AUGGCCAUUUAA';
  const result = translateMrna(mrna);
  assert.equal(result.peptides.length, 4);
  assert.equal(result.peptides[0], 'Met (M)');
  assert.equal(result.peptides[1], 'Ala (A)');
  assert.equal(result.peptides[2], 'Ile (I)');
  assert.equal(result.peptides[3], '[STOP]');
  assert.equal(result.codons[0].isStart, true);
  assert.equal(result.codons[3].isStop, true);
});

test('getPlddtClassification correctly maps canonical 4-tier confidence scale', () => {
  const high = getPlddtClassification(95.4);
  assert.equal(high.category, 'very-high');
  assert.equal(high.colorHex, '#0053D6');

  const confident = getPlddtClassification(82.1);
  assert.equal(confident.category, 'confident');
  assert.equal(confident.colorHex, '#65CBF3');

  const low = getPlddtClassification(62.0);
  assert.equal(low.category, 'low');
  assert.equal(low.colorHex, '#FFDB13');

  const veryLow = getPlddtClassification(42.3);
  assert.equal(veryLow.category, 'very-low');
  assert.equal(veryLow.colorHex, '#FF7D45');
});

test('calculateRespirationAtpYield computes metabolic energy outputs', () => {
  const yield1 = calculateRespirationAtpYield(1);
  assert.equal(yield1.glycolysisAtp, 2);
  assert.equal(yield1.tcaCycleAtp, 2);
  assert.equal(yield1.totalAtpMin, 30);
  assert.equal(yield1.totalAtpMax, 32);

  const yield2 = calculateRespirationAtpYield(2);
  assert.equal(yield2.totalAtpMin, 60);
});

test('filterGlossaryTerms filters by query and category', () => {
  const terms = [
    { term: 'CRISPR', category: 'Genetics', definition: 'Clustered Regularly Interspaced Short Palindromic Repeats' },
    { term: 'Mitochondria', category: 'Cell Biology', definition: 'The powerhouse of eukaryotic cells producing ATP' },
    { term: 'Ribosome', category: 'Molecular Biology', definition: 'Complex molecular machine translating mRNA to protein' },
  ];

  const results = filterGlossaryTerms(terms, 'powerhouse', 'All');
  assert.equal(results.length, 1);
  assert.equal(results[0].term, 'Mitochondria');

  const filteredByCat = filterGlossaryTerms(terms, '', 'Genetics');
  assert.equal(filteredByCat.length, 1);
  assert.equal(filteredByCat[0].term, 'CRISPR');
});
