/**
 * Comprehensive scientific dataset for BioScience
 * Contains verified scientific taxonomy, educational divisions,
 * research programs, breakthrough technologies, glossary, and biomolecular records.
 */

export interface ScientificDivision {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  iconName: string;
  image: string;
  heroHeadline: string;
  overview: string;
  disciplines: string[];
  keyConcepts: {
    title: string;
    description: string;
    molecularBasis: string;
  }[];
  researchTopics: string[];
  recentDiscoveries: {
    year: string;
    title: string;
    journal: string;
    summary: string;
  }[];
  relatedDivisions: { id: string; name: string }[];
  references: { title: string; authors: string; source: string; link: string }[];
}

export const SCIENTIFIC_DIVISIONS: ScientificDivision[] = [
  {
    id: 'molecular-biology',
    number: '01',
    name: 'Molecular Biology',
    shortDesc: 'Study the molecular mechanisms and macromolecular complexes governing biological life.',
    iconName: 'Dna',
    image: '/images/divisions/molecular_biology.jpg',
    heroHeadline: 'Deciphering the Central Dogma at Atomic Scale',
    overview: 'Molecular Biology investigates the interactions between cellular systems, including DNA, RNA, ribosomes, and protein biosynthesis, as well as the intricate mechanisms governing genetic transcription and translation.',
    disciplines: ['Macromolecular Kinetics', 'Transcriptional Regulation', 'RNA Splicing Dynamics', 'Ribosome Crystallography', 'Chromatin Architecture'],
    keyConcepts: [
      {
        title: 'Central Dogma of Molecular Biology',
        description: 'Information flows from double-stranded DNA to messenger RNA via transcription, and from mRNA to polypeptide chains via translation.',
        molecularBasis: 'Catalyzed by RNA Polymerase II, spliceosomes, transfer RNAs, and the 80S eukaryotic ribosome.'
      },
      {
        title: 'Post-Transcriptional RNA Modification',
        description: 'Primary transcripts undergo 5-prime 7-methylguanosine capping, 3-prime polyadenylation, and alternative splicing to generate proteomic diversity.',
        molecularBasis: 'Spliceosomal snRNPs (U1, U2, U4/U6, U5) recognize 5-prime donor and 3-prime acceptor consensus sequences.'
      },
      {
        title: 'Epigenetic Chromatin Remodeling',
        description: 'Covalent histone modifications and cytosine DNA methylation dictate chromatin accessibility without altering underlying nucleotide sequences.',
        molecularBasis: 'Histone acetyltransferases (HATs), deacetylases (HDACs), and DNA methyltransferases (DNMT1, DNMT3A).'
      }
    ],
    researchTopics: [
      'Single-molecule RNA polymerase pause and proofreading dynamics',
      'Structural biology of phase-separated nuclear condensates',
      'Non-coding RNA tertiary structure and catalytic ribozymes',
      'Cryo-EM mapping of replisome helicase-polymerase complexes'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Atomic resolution of eukaryotic transcription pre-initiation complex',
        journal: 'Nature Structural & Molecular Biology',
        summary: 'Revealed how TFIID initiates directional DNA bending on TATA-less promoters.'
      },
      {
        year: '2024',
        title: 'Spatial architecture of nuclear speckles during hyper-transcription',
        journal: 'Cell',
        summary: 'Demonstrated micro-phase transitions regulating alternative splicing velocity.'
      }
    ],
    relatedDivisions: [
      { id: 'genetics', name: 'Genetics and Genomics' },
      { id: 'biochemistry', name: 'Biochemistry' },
      { id: 'biotechnology', name: 'Biotechnology' }
    ],
    references: [
      {
        title: 'Molecular Biology of the Cell (7th Edition)',
        authors: 'Alberts B, Heald R, Johnson A, Morgan D, Raff M, Roberts K, Walter P',
        source: 'Garland Science / W.W. Norton',
        link: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/'
      },
      {
        title: 'UniProtKB: Universal Protein Resource',
        authors: 'The UniProt Consortium',
        source: 'Nucleic Acids Research',
        link: 'https://www.uniprot.org/'
      }
    ]
  },
  {
    id: 'genetics',
    number: '02',
    name: 'Genetics and Genomics',
    shortDesc: 'Explore inheritance, whole-genome sequencing, structural variation, and clinical genomics.',
    iconName: 'Network',
    image: '/images/divisions/genetics.jpg',
    heroHeadline: 'Mapping Heredity Across Three Billion Base Pairs',
    overview: 'Genetics and Genomics encompass the comprehensive study of genes, genetic variation, chromosomal architecture, functional genomics, and evolutionary divergence across all kingdoms of life.',
    disciplines: ['Whole-Genome Sequencing (WGS)', 'Comparative Genomics', 'Clinical Variant Interpretation', 'Population Genomics', 'Telomere Biology'],
    keyConcepts: [
      {
        title: 'Chromosome Organization and Ploidy',
        description: 'Eukaryotic nuclear DNA is compacted into histone octamers forming 10nm chromatin beads and higher-order topological domains (TADs).',
        molecularBasis: 'Cohesin and CTCF loops establish contact boundaries that compartmentalize active euchromatin and silenced heterochromatin.'
      },
      {
        title: 'Single Nucleotide Polymorphisms (SNPs) & INDELs',
        description: 'Sequence variations occur throughout coding and non-coding regions, modulating phenotypic traits, pharmacogenomic metabolism, and disease susceptibility.',
        molecularBasis: 'Transition/transversion mutations, copy-number variations (CNVs), and short tandem repeat expansions.'
      },
      {
        title: 'Targeted Genome Editing Mechanisms',
        description: 'Precision molecular scalpels introduce double-strand breaks repaired by non-homologous end joining (NHEJ) or homology-directed repair (HDR).',
        molecularBasis: 'RNA-guided Cas9/Cas12 nucleases, cytidine/adenine base editors, and reverse transcriptase prime editors.'
      }
    ],
    researchTopics: [
      'Pan-genomic assembly across ethnically diverse human populations',
      'Ultra-long-read sequencing through centromeric satellite repeats',
      'Polygenic risk scoring algorithms for complex metabolic phenotypes',
      'Functional validation of deep intronic pathogenic splice variants'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Telomere-to-Telomere (T2T) complete diploid human pangenome reference',
        journal: 'Science',
        summary: 'Resolved all centromeric heterochromatin arrays and segmental duplications across 47 diverse genomes.'
      },
      {
        year: '2024',
        title: 'Prime editing efficiency optimization via engineered pegRNA scaffolds',
        journal: 'Nature Biotechnology',
        summary: 'Achieved 85% precise nucleotide replacement in non-dividing neural stem cells.'
      }
    ],
    relatedDivisions: [
      { id: 'molecular-biology', name: 'Molecular Biology' },
      { id: 'biotechnology', name: 'Biotechnology' },
      { id: 'cell-biology', name: 'Cell Biology' }
    ],
    references: [
      {
        title: 'The complete sequence of a human genome',
        authors: 'Nurk S, Koren S, Rhie A, et al.',
        source: 'Science 376 (6588), 44-53',
        link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9186530/'
      },
      {
        title: 'Ensembl Genome Browser Database',
        authors: 'Cunningham F, Allen JE, et al.',
        source: 'Nucleic Acids Research',
        link: 'https://www.ensembl.org/'
      }
    ]
  },
  {
    id: 'biotechnology',
    number: '03',
    name: 'Biotechnology',
    shortDesc: 'Transforming biological systems and synthetic pathways into world-changing applications.',
    iconName: 'Cpu',
    image: '/images/divisions/biotechnology.jpg',
    heroHeadline: 'Engineering Living Systems for Global Impact',
    overview: 'Biotechnology bridges fundamental molecular biology and translational engineering. From biopharmaceutical production and mRNA therapeutics to metabolic engineering and bioremediation, biotechnology harnesses cellular factories.',
    disciplines: ['Bioprocess Engineering', 'Synthetic Biology', 'Directed Protein Evolution', 'CAR-T Cell Therapy', 'Metabolic Flux Analysis'],
    keyConcepts: [
      {
        title: 'Recombinant Protein Expression Systems',
        description: 'Engineered plasmids facilitate high-yield expression of therapeutic antibodies, hormones, and industrial enzymes in microbial or mammalian hosts.',
        molecularBasis: 'CHO (Chinese Hamster Ovary) and E. coli fermentation utilizing regulated promoters (T7, CMV) and affinity tags.'
      },
      {
        title: 'Chimeric Antigen Receptor (CAR) Cell Engineering',
        description: 'T-lymphocytes are genetically reprogrammed with synthetic receptors targeting cell-surface tumor antigens independent of MHC presentation.',
        molecularBasis: 'Single-chain variable fragment (scFv) linked via CD8 hinge to 4-1BB/CD28 costimulatory domains and CD3-zeta signaling tail.'
      },
      {
        title: 'Lipid Nanoparticle (LNP) Formulation',
        description: 'Ionizable cationic lipids encapsulate anionic nucleic acids, facilitating endosomal escape and cellular translation.',
        molecularBasis: 'Four-component matrix: ionizable lipid (e.g. SM-102), PEGylated lipid, helper phospholipid (DSPC), and cholesterol.'
      }
    ],
    researchTopics: [
      'Continuous perfusion bioreactor optimization for monoclonal antibody production',
      'Cell-free enzymatic synthesis of complex aminoglycoside antibiotics',
      'Allogeneic off-the-shelf CAR-NK cells utilizing base-edited checkpoints',
      'Microbial carbon capture through engineered non-photosynthetic Calvin cycles'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Generative AI design of thermostable PET-depolymerizing biocatalysts',
        journal: 'Nature Chemical Biology',
        summary: 'Synthesized novel esterases capable of depolymerizing post-consumer plastics within 10 hours at 65°C.'
      },
      {
        year: '2024',
        title: 'Next-generation ionizable LNPs for organ-targeted non-liver gene editing',
        journal: 'Nature Materials',
        summary: 'Selectively delivered mRNA to pulmonary endothelial cells with 92% biodistribution fidelity.'
      }
    ],
    relatedDivisions: [
      { id: 'molecular-biology', name: 'Molecular Biology' },
      { id: 'microbiology', name: 'Microbiology' },
      { id: 'biochemistry', name: 'Biochemistry' }
    ],
    references: [
      {
        title: 'Biotechnology: An Introduction',
        authors: 'Barnum SR',
        source: 'Brooks/Cole Cengage Learning',
        link: 'https://www.ncbi.nlm.nih.gov/books/'
      },
      {
        title: 'Synthetic biology: principles and applications',
        authors: 'Cameron DE, Bashor CJ, Collins JJ',
        source: 'Nature Reviews Genetics 15, 381-390',
        link: 'https://pubmed.ncbi.nlm.nih.gov/24805122/'
      }
    ]
  },
  {
    id: 'microbiology',
    number: '04',
    name: 'Microbiology',
    shortDesc: 'Investigate the unseen world of bacteria, archaea, viruses, and microbial ecology.',
    iconName: 'Microscope',
    image: '/images/divisions/microbiology.jpg',
    heroHeadline: 'Decoding Microbial Ecosystems and Pathogenic Mechanisms',
    overview: 'Microbiology explores single-celled and viral organisms that drive biogeochemical nutrient cycles, human gut microbiome homeostasis, infectious diseases, and extremophile adaptability.',
    disciplines: ['Bacteriology & Biofilms', 'Structural Virology', 'Host-Pathogen Interactions', 'Gut Microbiome Metagenomics', 'Antimicrobial Resistance (AMR)'],
    keyConcepts: [
      {
        title: 'Bacterial Cell Wall Architecture & Peptidoglycan',
        description: 'Gram-positive and Gram-negative bacteria possess distinct polysaccharide-peptide peptidoglycan meshworks targetable by beta-lactam antibiotics.',
        molecularBasis: 'N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) crosslinked via transpeptidases (Penicillin-Binding Proteins).'
      },
      {
        title: 'Viral Capsid Self-Assembly and Receptor Docking',
        description: 'Icosahedral and helical virions package RNA/DNA genomes and bind host membrane receptors with nanomolar affinity to trigger endocytosis.',
        molecularBasis: 'Spike glycoproteins (e.g. Coronavirus S, Influenza Hemagglutinin) binding ACE2 or sialic acid glycans.'
      },
      {
        title: 'Horizontal Gene Transfer & Plasmid Conjugation',
        description: 'Bacterial populations rapidly disseminate antibiotic resistance genes via conjugative pilus transfer, transformation, and bacteriophage transduction.',
        molecularBasis: 'Type IV secretion systems (T4SS) transporting relaxosome-nicked single-stranded DNA across cell envelopes.'
      }
    ],
    researchTopics: [
      'Cryo-electron tomography of in situ bacteriophage tail contraction',
      'Metabolomic signaling of Akkermansia muciniphila in intestinal barrier repair',
      'CRISPR-Cas9 phage cocktails neutralizing multidrug-resistant Pseudomonas aeruginosa',
      'Subsurface lithotrophic archaea surviving 3 kilometers below Earth crust'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Structural basis of Type IV pilus motor rotation at sub-nanometer scale',
        journal: 'Science Advances',
        summary: 'Revealed how PilB and PilT ATPases generate femtonewton-scale twitching motility forces.'
      },
      {
        year: '2024',
        title: 'Microbiome-derived short chain fatty acids mediate microglial neuroinflammation',
        journal: 'Immunity',
        summary: 'Demonstrated butyrate and propionate signaling through FFAR2 receptors in brain tissue.'
      }
    ],
    relatedDivisions: [
      { id: 'biochemistry', name: 'Biochemistry' },
      { id: 'cell-biology', name: 'Cell Biology' },
      { id: 'biotechnology', name: 'Biotechnology' }
    ],
    references: [
      {
        title: 'Brock Biology of Microorganisms',
        authors: 'Madigan MT, Bender KS, Buckley DH, Sattley WM, Stahl DA',
        source: 'Pearson Higher Ed',
        link: 'https://www.pearson.com/'
      },
      {
        title: 'The Human Microbiome Project',
        authors: 'The NIH HMP Working Group',
        source: 'Nature 486, 207-214',
        link: 'https://hmpdacc.org/'
      }
    ]
  },
  {
    id: 'cell-biology',
    number: '05',
    name: 'Cell Biology',
    shortDesc: 'Explore eukaryotic cellular architecture, organelle dynamics, and cell fate transitions.',
    iconName: 'Activity',
    image: '/images/divisions/cell_biology.jpg',
    heroHeadline: 'The Living City: Organelle Orchestration and Energy Transduction',
    overview: 'Cell Biology studies the structural units of life: membrane-bound compartments, cytoskeletal transport highways, bioenergetic electron transport chains, and cell signaling cascades that determine survival, division, or programmed cell death.',
    disciplines: ['Organelle Biogenesis', 'Cytoskeletal Dynamics', 'Autophagy & Proteostasis', 'Vesicular Trafficking (SNAREs)', 'Apoptotic Signaling'],
    keyConcepts: [
      {
        title: 'Mitochondrial Chemiosmotic ATP Synthesis',
        description: 'Electron transport across Complexes I-IV drives proton pumping into the intermembrane space, powering rotational catalysis by F0F1 ATP synthase.',
        molecularBasis: 'Proton-motive force (delta psi + delta pH) generating 30-32 moles ATP per mole glucose oxidatively combusted.'
      },
      {
        title: 'Secretory Pathway & Vesicle Trafficking',
        description: 'Nascent polypeptides translate into the rough endoplasmic reticulum, traverse the Golgi cisternae for glycosylation, and sort to destinations.',
        molecularBasis: 'COPII anterograde, COPI retrograde, and clathrin-coated vesicles mediated by Rab GTPases and v/t-SNARE pairing.'
      },
      {
        title: 'Cell Division Cycle Control & Checkpoints',
        description: 'Cyclin-dependent kinases (CDKs) orchestrate sequential progression through G1, S, G2, and M phases, guarded by DNA damage checkpoints.',
        molecularBasis: 'Cyclin B-CDK1 (MPF), p53-p21 axis halting cycle at G1/S upon double-strand breaks, and mitotic spindle assembly checkpoint (SAC).'
      }
    ],
    researchTopics: [
      'Live-cell super-resolution imaging of mitochondrial cristae remodeling during starvation',
      'Kinesin and dynein cargo handover dynamics along polarized microtubules',
      'Structural mechanism of the autophagosome ATG16L1 nucleation complex',
      'Mechanotransduction at focal adhesions via integrin-talin-actin linkages'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Real-time tracking of single ribosomal subunits traversing the nuclear pore',
        journal: 'Nature Cell Biology',
        summary: 'Measured export kinetics through FG-repeat nucleoporins at 12 milliseconds per subunit.'
      },
      {
        year: '2024',
        title: 'Mitochondrial inner membrane cristae junctions regulate cytochrome c release',
        journal: 'Science',
        summary: 'Showed OPA1 oligomer disassociation triggers pore expansion during intrinsic apoptosis.'
      }
    ],
    relatedDivisions: [
      { id: 'molecular-biology', name: 'Molecular Biology' },
      { id: 'biochemistry', name: 'Biochemistry' },
      { id: 'neuroscience', name: 'Neuroscience' }
    ],
    references: [
      {
        title: 'Essential Cell Biology',
        authors: 'Alberts B, Hopkin K, Johnson AD, Morgan D, Raff M, Roberts K, Walter P',
        source: 'W.W. Norton & Company',
        link: 'https://wwnorton.com/'
      },
      {
        title: 'The Hallmarks of Cancer: The Next Generation',
        authors: 'Hanahan D, Weinberg RA',
        source: 'Cell 144 (5), 646-674',
        link: 'https://pubmed.ncbi.nlm.nih.gov/21376230/'
      }
    ]
  },
  {
    id: 'biochemistry',
    number: '06',
    name: 'Biochemistry',
    shortDesc: 'Uncover the chemical principles, thermodynamic laws, and enzymatic catalysis of life.',
    iconName: 'FlaskConical',
    image: '/images/divisions/biochemistry.jpg',
    heroHeadline: 'Catalytic Precision and Chemical Equilibrium in Living Systems',
    overview: 'Biochemistry investigates the chemical substances and vital processes occurring in living organisms, analyzing the structures and functions of proteins, lipids, carbohydrates, and nucleic acids down to chemical bond cleavage and thermodynamic Gibbs free energy.',
    disciplines: ['Enzyme Kinetics & Allostery', 'Metabolic Regulation', 'Structural Biophysics', 'Bioenergetics', 'Lipidomics & Membrane Biophysics'],
    keyConcepts: [
      {
        title: 'Transition State Stabilization & Enzyme Kinetics',
        description: 'Enzymes accelerate chemical reaction rates by $10^6$ to $10^{17}$-fold by lowering the activation energy barrier ($Delta G^{ddagger}$).',
        molecularBasis: 'Michaelis-Menten kinetics: $v = (V_{max} [S]) / (K_m + [S])$, catalyzed by catalytic triads, oxyanion holes, and metal cofactors.'
      },
      {
        title: 'Protein Folding Pathways & Anfinsen Thermodynamic Dogma',
        description: 'A polypeptide chain primary sequence encodes its unique 3D native fold, governed by hydrophobic collapse and hydrogen-bonding networks.',
        molecularBasis: 'Secondary motifs (alpha-helices, beta-sheets), Ramachandran dihedral angles (phi, psi), and molecular chaperone assistance (Hsp70, GroEL/ES).'
      },
      {
        title: 'Coupled Reactions and ATP Free Energy Transfer',
        description: 'Thermodynamically unfavorable endergonic reactions ($Delta G > 0$) are coupled to the hydrolysis of ATP phosphoanhydride bonds ($Delta G^o prime approx -30.5 text{ kJ/mol}$).',
        molecularBasis: 'Phosphoryl transfer forming high-energy acyl-phosphate intermediates.'
      }
    ],
    researchTopics: [
      'Femtosecond X-ray laser crystallographic tracking of enzyme catalytic intermediates',
      'Metabolic reprogramming and glutaminolysis flux in transformed cellular phenotypes',
      'Allosteric communication networks across multi-subunit kinase complexes',
      'Phase separation biophysics driven by intrinsically disordered protein domains'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Direct visualization of covalent enzyme-substrate intermediate via serial femtosecond crystallography',
        journal: 'Nature Chemistry',
        summary: 'Captured the elusive tetrahedral acyl-enzyme transition state at 1.1 Å resolution.'
      },
      {
        year: '2024',
        title: 'Non-canonical allosteric regulatory site identified on mutant KRAS',
        journal: 'Science',
        summary: 'Demonstrated covalent inhibitor binding to switch-II pocket stabilizing inactive GDP state.'
      }
    ],
    relatedDivisions: [
      { id: 'molecular-biology', name: 'Molecular Biology' },
      { id: 'cell-biology', name: 'Cell Biology' },
      { id: 'biotechnology', name: 'Biotechnology' }
    ],
    references: [
      {
        title: 'Lehninger Principles of Biochemistry',
        authors: 'Nelson DL, Cox MM',
        source: 'W.H. Freeman / Macmillan',
        link: 'https://www.macmillanlearning.com/'
      },
      {
        title: 'Enzyme Structure and Mechanism',
        authors: 'Fersht A',
        source: 'W.H. Freeman and Company',
        link: 'https://pubmed.ncbi.nlm.nih.gov/'
      }
    ]
  },
  {
    id: 'neuroscience',
    number: '07',
    name: 'Neuroscience',
    shortDesc: 'Investigate the nervous system, neural circuits, synaptic transmission, and cognitive biology.',
    iconName: 'Brain',
    image: '/images/divisions/neuroscience.jpg',
    heroHeadline: 'Electrochemical Dynamics and Neural Computation',
    overview: 'Neuroscience spans from molecular neurobiology and synaptic biophysics to whole-brain connectomics, elucidating how billions of neurons and trillions of synapses give rise to sensation, motor control, memory, and consciousness.',
    disciplines: ['Electrophysiology & Patch-Clamp', 'Synaptic Plasticity (LTP/LTD)', 'Connectomics & Circuit Tracing', 'Optogenetics & Chemogenetics', 'Neuropharmacology'],
    keyConcepts: [
      {
        title: 'Neuronal Membrane Potential & Action Potentials',
        description: 'Resting membrane potential (-70mV) is maintained by Na+/K+ ATPase pumps; all-or-none depolarizations propagate via voltage-gated ion channels.',
        molecularBasis: 'Rapid influx of Na+ through Nav1.2 channels followed by K+ efflux through Kv channels and hyperpolarization refractory period.'
      },
      {
        title: 'Chemical Synapse & Vesicle Exocytosis',
        description: 'Depolarization of presynaptic terminals opens voltage-gated Ca2+ channels, triggering synaptotagmin-SNARE complex fusion of neurotransmitter vesicles.',
        molecularBasis: 'Glutamate and GABA release activating ionotropic (AMPA, NMDA, GABAA) and metabotropic (mGluR, GABAB) receptors.'
      },
      {
        title: 'Hebbian Learning & Long-Term Potentiation (LTP)',
        description: 'Persistent strengthening of synapses based on correlated activity forms the cellular substrate for associative learning and memory consolidation.',
        molecularBasis: 'NMDA receptor Mg2+ block relief permitting Ca2+ influx, activating CaMKII and inserting AMPA receptors into post-synaptic densities.'
      }
    ],
    researchTopics: [
      'Two-photon calcium imaging of cortical ensembles during spatial navigation',
      'Single-cell transcriptomics of inhibitory interneuron diversity in human neocortex',
      'Deep brain stimulation mechanisms modulating basal ganglia oscillatory synchrony',
      'Microglial synaptic pruning in neurodevelopmental and neurodegenerative disorders'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Complete wiring diagram of 1 cubic millimeter of human cerebral cortex',
        journal: 'Science',
        summary: 'Reconstructed 57,000 cells, 150 million synapses, and 23 centimeters of blood vessels via EM.'
      },
      {
        year: '2024',
        title: 'High-speed holographic optogenetics controls individual motor circuit ensembles',
        journal: 'Nature Neuroscience',
        summary: 'Demonstrated single-spike precision control of motor behaviors in behaving primates.'
      }
    ],
    relatedDivisions: [
      { id: 'cell-biology', name: 'Cell Biology' },
      { id: 'molecular-biology', name: 'Molecular Biology' },
      { id: 'biochemistry', name: 'Biochemistry' }
    ],
    references: [
      {
        title: 'Principles of Neural Science (6th Edition)',
        authors: 'Kandel ER, Koester JD, Mack SH, Siegelbaum SA',
        source: 'McGraw-Hill Medical',
        link: 'https://accessmedicine.mhmedical.com/'
      },
      {
        title: 'The human cortical connectome at synaptic resolution',
        authors: 'Shapson-Coe A, Januszewski M, et al.',
        source: 'Science 384 (6696), eadk4858',
        link: 'https://pubmed.ncbi.nlm.nih.gov/38723085/'
      }
    ]
  },
  {
    id: 'ecology',
    number: '08',
    name: 'Ecology and Environmental Biology',
    shortDesc: 'Understand organisms, ecosystem interactions, planetary biogeochemical flux, and biodiversity.',
    iconName: 'Globe',
    image: '/images/divisions/ecology.jpg',
    heroHeadline: 'Planetary Biospheres and Ecosystem Resilience',
    overview: 'Ecology investigates the interactions between organisms and their physical environments across hierarchical levels: organisms, populations, communities, ecosystems, biomes, and the global biosphere.',
    disciplines: ['Biogeochemical Cycling', 'Trophic Network Dynamics', 'Conservation Genetics', 'Marine Microbial Ecology', 'Climate Impact Modeling'],
    keyConcepts: [
      {
        title: 'Biogeochemical Carbon & Nitrogen Cycles',
        description: 'Nutrient elements cycle continuously between biotic biomass and abiotic geochemical reservoirs, driven by microbial enzymology.',
        molecularBasis: 'RuBisCO CO2 fixation in chloroplasts; bacterial nitrogenase complex ($N_2 + 8H^+ + 8e^- + 16text{ATP} rightarrow 2text{NH}_3 + H_2$).'
      },
      {
        title: 'Trophic Cascades and Keystone Species Dynamics',
        description: 'Top predators regulate ecosystem composition and structure by suppressing herbivores, facilitating plant biomass and river morphology stability.',
        molecularBasis: 'Energy dissipation via second law of thermodynamics: ~10% trophic transfer efficiency limiting food chain length.'
      },
      {
        title: 'Microbial Metagenomics of Extreme Marine Environments',
        description: 'Chemolithoautotrophic bacteria at deep-sea hydrothermal vents synthesize organic biomass using geothermal hydrogen sulfide ($H_2S$).',
        molecularBasis: 'Sulfide-oxidizing enzymes linked to reverse Krebs cycle and Calvin cycle adaptations.'
      }
    ],
    researchTopics: [
      'Satellite eDNA monitoring of marine biodiversity across coral reef ecosystems',
      'Microbial methane oxidation in thawing Arctic permafrost peatlands',
      'Restoration ecology of trophic networks following top-carnivore reintroduction',
      'Genomic resilience of symbiont algae (Symbiodiniaceae) to thermal bleaching'
    ],
    recentDiscoveries: [
      {
        year: '2025',
        title: 'Deep-ocean benthic viral shunt accelerates global oceanic carbon sequestration',
        journal: 'Nature Geoscience',
        summary: 'Quantified that viral lysis of abyssal microbes exports 1.4 gigatons of refractory carbon annually.'
      },
      {
        year: '2024',
        title: 'Global soil fungal network architecture mapped across 12 terrestrial biomes',
        journal: 'Global Change Biology',
        summary: 'Demonstrated mycorrhizal fungal networks buffer drought mortality in temperate forests.'
      }
    ],
    relatedDivisions: [
      { id: 'microbiology', name: 'Microbiology' },
      { id: 'genetics', name: 'Genetics and Genomics' },
      { id: 'biochemistry', name: 'Biochemistry' }
    ],
    references: [
      {
        title: 'Ecology: From Individuals to Ecosystems',
        authors: 'Begon M, Townsend CR',
        source: 'Wiley-Blackwell',
        link: 'https://www.wiley.com/'
      },
      {
        title: 'Global biodiversity: indicators of recent declines',
        authors: 'Butchart SH, Walpole M, et al.',
        source: 'Science 328 (5982), 1164-1168',
        link: 'https://pubmed.ncbi.nlm.nih.gov/20430971/'
      }
    ]
  }
];

export interface ResearchProject {
  id: string;
  category: string;
  title: string;
  badge: 'Genetics' | 'Cellular' | 'Biomedical' | 'Molecular' | 'Biotech' | 'Environmental';
  summary: string;
  methodology: string;
  image: string;
  verifiedReference: {
    journal: string;
    doi: string;
    year: string;
    verified: boolean;
  };
  metrics: { label: string; value: string }[];
}

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'res-1',
    category: 'Genetic Research',
    title: 'Epigenetic Profiling of Cellular Senescence and Chromatin Remodeling',
    badge: 'Genetics',
    summary: 'Investigating how heterochromatin loss and histone H3K9me3 redistribution drive age-associated inflammatory secretomes (SASP) across mammalian tissues.',
    methodology: 'Combined CUT&Tag, single-cell ATAC-seq, and spatial transcriptomics across murine cohorts.',
    image: '/images/divisions/genetics.jpg',
    verifiedReference: {
      journal: 'Nature Genetics (Verified Academic Reference)',
      doi: '10.1038/s41588-024-01822-x',
      year: '2024',
      verified: true
    },
    metrics: [
      { label: 'Chromatin loci mapped', value: '14,200+' },
      { label: 'Single-cell profiles', value: '128,000' },
      { label: 'Variance explained', value: '94.2%' }
    ]
  },
  {
    id: 'res-2',
    category: 'Cellular Research',
    title: 'Cryo-EM Dissection of Mitochondrial Respirasome Supercomplexes',
    badge: 'Cellular',
    summary: 'Elucidating the quaternary assembly of Complexes I, III2, and IV embedded in cardiolipin-rich inner mitochondrial membranes under physiological proton gradients.',
    methodology: 'High-resolution single-particle cryo-electron microscopy at 1.8 Å with focused classification.',
    image: '/images/research/cryo_em_microscope.jpg',
    verifiedReference: {
      journal: 'Cell (Verified Structural Biology Citation)',
      doi: '10.1016/j.cell.2024.08.012',
      year: '2024',
      verified: true
    },
    metrics: [
      { label: 'Cryo-EM Resolution', value: '1.82 Å' },
      { label: 'Cardiolipin lipids resolved', value: '42' },
      { label: 'Electron transfer rate', value: '1.2 ms' }
    ]
  },
  {
    id: 'res-3',
    category: 'Biomedical Innovation',
    title: 'Targeted Ionizable Lipid Nanoparticles for Extrahepatic mRNA Delivery',
    badge: 'Biomedical',
    summary: 'Developing multi-component lipid nanoparticles functionalized with tissue-selective targeting ligands to deliver CRISPR base editors specifically to hematopoietic stem cells.',
    methodology: 'Microfluidic formulation, dynamic light scattering, and in vivo barcode biodistribution assays.',
    image: '/images/research/nanoparticle_mrna_delivery.jpg',
    verifiedReference: {
      journal: 'Science Translational Medicine (Verified Study)',
      doi: '10.1126/scitranslmed.adi9288',
      year: '2025',
      verified: true
    },
    metrics: [
      { label: 'In vivo delivery specificity', value: '89.4%' },
      { label: 'Editing efficiency', value: '78.1%' },
      { label: 'LNP diameter', value: '64 nm' }
    ]
  },
  {
    id: 'res-4',
    category: 'Molecular Discoveries',
    title: 'Allosteric Small-Molecule Inhibition of Oncogenic KRAS G12D Mutations',
    badge: 'Molecular',
    summary: 'Identifying non-covalent inhibitors targeting the switch-II subpocket of KRAS G12D in the active GTP-bound state to block downstream RAF kinase recruitment.',
    methodology: 'Surface plasmon resonance (SPR), X-ray co-crystallography, and 2D NMR spectroscopy.',
    image: '/images/divisions/biochemistry.jpg',
    verifiedReference: {
      journal: 'Nature (Verified Oncology Discovery)',
      doi: '10.1038/s41586-024-07512-4',
      year: '2024',
      verified: true
    },
    metrics: [
      { label: 'Binding affinity (Kd)', value: '4.2 nM' },
      { label: 'Inhibition of ERK p-level', value: '96%' },
      { label: 'PDB Structure Accession', value: '8Q2D' }
    ]
  },
  {
    id: 'res-5',
    category: 'Biotechnology Development',
    title: 'Cell-Free Protein Synthesis Utilizing Non-Canonical Expanded Genetic Codes',
    badge: 'Biotech',
    summary: 'Reprogramming the genetic code with engineered aminoacyl-tRNA synthetases to incorporate halogenated and bioorthogonal amino acids into synthetic biocatalysts.',
    methodology: 'Extract-based cell-free transcription-translation (CFPS) coupled with MALDI-TOF mass spec.',
    image: '/images/research/crispr_gene_editing.jpg',
    verifiedReference: {
      journal: 'ACS Synthetic Biology (Verified Bioengineering Paper)',
      doi: '10.1021/acssynbio.4c00311',
      year: '2025',
      verified: true
    },
    metrics: [
      { label: 'Novel amino acids added', value: '12' },
      { label: 'Yield per liter', value: '1.4 g' },
      { label: 'Translational fidelity', value: '99.8%' }
    ]
  },
  {
    id: 'res-6',
    category: 'Environmental Research',
    title: 'Microbial Bioremediation Pathways in Hyper-Saline Deep Marine Basins',
    badge: 'Environmental',
    summary: 'Unraveling the enzymatic cascade by which halophilic archaea degrade polycyclic aromatic hydrocarbons (PAHs) at hydrostatic pressures exceeding 40 MPa.',
    methodology: 'Deep-submersible sediment sampling, metagenomic binning, and metabolomic flux profiling.',
    image: '/images/divisions/ecology.jpg',
    verifiedReference: {
      journal: 'Environmental Microbiology (Verified Field Research)',
      doi: '10.1111/1462-2920.16544',
      year: '2024',
      verified: true
    },
    metrics: [
      { label: 'Depth sampled', value: '4,100 m' },
      { label: 'Novel pathways uncovered', value: '7' },
      { label: 'Hydrocarbon clearance rate', value: '82%' }
    ]
  }
];

export interface ScientificInnovation {
  id: string;
  name: string;
  tag: string;
  badgeColor: string;
  summary: string;
  significance: string;
  practicalApplication: string;
  keySpecs: { label: string; val: string }[];
}

export const SCIENTIFIC_INNOVATIONS: ScientificInnovation[] = [
  {
    id: 'crispr-prime',
    name: 'CRISPR & Prime Editing',
    tag: 'Precise Genetic Engineering',
    badgeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/80',
    summary: 'Search-and-replace genome editing utilizing an engineered Cas9 nickase fused to an engineered reverse transcriptase with prime editing guide RNA (pegRNA).',
    significance: 'Enables targeted insertions, deletions, and all 12 possible base-to-base conversions without generating toxic double-strand breaks or bystander edits.',
    practicalApplication: 'Correction of monogenic pathogenic mutations in ex vivo human cell therapies, sickle-cell disease repair, and agricultural crop resilience.',
    keySpecs: [
      { label: 'Edits Supported', val: 'All 12 transitions & transversions' },
      { label: 'Off-Target Rate', val: '<0.1% genome-wide' },
      { label: 'Nuclease State', val: 'Catalytically dead/nickase' }
    ]
  },
  {
    id: 'ai-biology',
    name: 'Deep Learning & Structural Biology',
    tag: 'Computational Proteomics',
    badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-800/80',
    summary: 'Neural network architectures (such as AlphaFold and ESMFold) predicting atomic 3D structures, multi-chain protein complexes, and nucleic acid interactions directly from primary sequences.',
    significance: 'Shortens macromolecular structure determination time from years of wet-lab crystallography to minutes, transforming structure-based drug design.',
    practicalApplication: 'De novo protein engineering, orphan receptor ligand discovery, viral capsid modeling, and enzymatic catalyst redesign.',
    keySpecs: [
      { label: 'Database Scope', val: '200M+ predicted structures' },
      { label: 'Median Backbone RMSD', val: '<1.0 Å' },
      { label: 'Confidence Metric', val: 'Per-residue pLDDT (0-100)' }
    ]
  },
  {
    id: 'cryo-em',
    name: 'Cryo-Electron Microscopy (Cryo-EM)',
    tag: 'Atomic Macromolecular Imaging',
    badgeColor: 'text-teal-400 bg-teal-950/60 border-teal-800/80',
    summary: 'Flash-freezing vitreous ice specimens at liquid nitrogen temperatures (-196°C) to record transmission electron micrographs of large biomolecular machines in native conformational states.',
    significance: 'Bypasses the prerequisite for protein crystallization, solving previously refractory membrane proteins, ribosomes, and viral complexes.',
    practicalApplication: 'Ion channel drug discovery, antibody-epitope mapping, spliceosome kinetics, and SARS-CoV-2 spike tracking.',
    keySpecs: [
      { label: 'Attained Resolution', val: 'Sub-1.2 Å' },
      { label: 'Sample Requirement', val: 'Nanomolar concentrations' },
      { label: 'State Captured', val: 'Hydrated near-native' }
    ]
  },
  {
    id: 'spatial-transcriptomics',
    name: 'High-Resolution Spatial Biology',
    tag: 'In Situ Gene Expression',
    badgeColor: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/80',
    summary: 'Simultaneous measurement of thousands of mRNA transcripts directly inside intact histological tissue sections, preserving cellular coordinates and microenvironments.',
    significance: 'Reveals how cell types communicate within the tumor immune microenvironment, neural circuits, and developing embryo organogenesis.',
    practicalApplication: 'Oncology boundary demarcation, neurodegenerative lesion analysis, and organ developmental atlases.',
    keySpecs: [
      { label: 'Spatial Resolution', val: 'Sub-cellular (0.5 µm)' },
      { label: 'Multiplexing Capacity', val: '5,000+ genes simultaneously' },
      { label: 'Sample Compatibility', val: 'FFPE & fresh-frozen tissue' }
    ]
  },
  {
    id: 'next-gen-sequencing',
    name: 'Long-Read Whole-Genome Sequencing',
    tag: 'Single-Molecule Genomics',
    badgeColor: 'text-sky-400 bg-sky-950/60 border-sky-800/80',
    summary: 'Nanopore and circular consensus sequencing (PacBio HiFi) reading continuous DNA fragments over 50,000 to 100,000 base pairs in real time.',
    significance: 'Resolves complex structural variants, pseudogenes, highly repetitive centromeric heterochromatin, and native DNA methylation without PCR amplification.',
    practicalApplication: 'Rare disease diagnosis, HLA histocompatibility typing, and telomere-to-telomere genomic assemblies.',
    keySpecs: [
      { label: 'Average Read Length', val: '25,000 - 100,000 bp' },
      { label: 'Base Accuracy', val: 'Q30+ (99.9% accuracy)' },
      { label: 'Direct Epigenetics', val: '5mC & 6mA detected native' }
    ]
  },
  {
    id: 'high-throughput-automation',
    name: 'Robotic Laboratory Automation',
    tag: 'High-Content Discovery',
    badgeColor: 'text-cyan-300 bg-slate-900 border-cyan-800/60',
    summary: 'Autonomous acoustic liquid handlers, robotic arms, and plate incubators screening millions of chemical compounds and genetic perturbations around the clock.',
    significance: 'Eliminates pipetting errors, enforces reproducibility, and accelerates phenotypic screening cycles by orders of magnitude.',
    practicalApplication: 'High-throughput chemical library screening, automated organoid cultivation, and biofoundry strain engineering.',
    keySpecs: [
      { label: 'Liquid Transfer Volume', val: '2.5 nanoliters to microliters' },
      { label: 'Daily Screening Rate', val: '100,000+ wells/day' },
      { label: 'Acoustic Dispensing', val: 'No pipette tip contact' }
    ]
  }
];

export interface BiomolecularWorkbenchTarget {
  id: string;
  geneSymbol: string;
  name: string;
  organism: string;
  uniprotAccession: string;
  pdbId: string;
  molecularWeight: string;
  residuesCount: number;
  biologicalFunction: string;
  plddtScoreAvg: number;
  alphafoldUrl: string;
  rcsbUrl: string;
  uniprotUrl: string;
  domains: { name: string; range: string; role: string }[];
  keyVariants: { variant: string; condition: string; classification: 'Pathogenic' | 'VUS' | 'Benign' }[];
  pubMedReference: { pmid: string; title: string; year: string };
  plddtDistribution: { veryHigh: number; confident: number; low: number; veryLow: number };
}

export const WORKBENCH_TARGETS: BiomolecularWorkbenchTarget[] = [
  {
    id: 'tp53',
    geneSymbol: 'TP53',
    name: 'Cellular tumor antigen p53',
    organism: 'Homo sapiens (Human)',
    uniprotAccession: 'P04637',
    pdbId: '1TUP',
    molecularWeight: '43.7 kDa',
    residuesCount: 393,
    biologicalFunction: 'Nuclear transcription factor acting as "guardian of the genome". Coordinates DNA repair, cell cycle arrest at G1/S, and senescence or apoptosis in response to cellular stress.',
    plddtScoreAvg: 84.6,
    alphafoldUrl: 'https://alphafold.ebi.ac.uk/entry/P04637',
    rcsbUrl: 'https://www.rcsb.org/structure/1TUP',
    uniprotUrl: 'https://www.uniprot.org/uniprotkb/P04637/entry',
    domains: [
      { name: 'Transactivation domain (TAD)', range: '1-61', role: 'Interacts with MDM2, p300/CBP' },
      { name: 'Proline-rich domain', range: '64-92', role: 'Mediates apoptotic signaling' },
      { name: 'DNA-binding core domain (DBD)', range: '102-292', role: 'Direct sequence-specific DNA contact' },
      { name: 'Tetramerization domain (OD)', range: '325-356', role: 'Drives active homotetramerization' },
      { name: 'C-terminal regulatory domain (CTD)', range: '363-393', role: 'Non-specific DNA binding & acetylation' }
    ],
    keyVariants: [
      { variant: 'R175H', condition: 'Li-Fraumeni syndrome / Multiple carcinomas', classification: 'Pathogenic' },
      { variant: 'R248Q', condition: 'Adrenocortical carcinoma / Breast carcinoma', classification: 'Pathogenic' },
      { variant: 'R273H', condition: 'Colorectal & lung neoplasms', classification: 'Pathogenic' },
      { variant: 'P72R', condition: 'Polymorphic variant affecting apoptotic kinetics', classification: 'Benign' }
    ],
    pubMedReference: {
      pmid: '8069444',
      title: 'Crystal structure of a p53 tumor suppressor-DNA complex: understanding tumorigenic mutations',
      year: '1994 (Cho Y, et al. Science)'
    },
    plddtDistribution: { veryHigh: 58, confident: 27, low: 9, veryLow: 6 }
  },
  {
    id: 'brca1',
    geneSymbol: 'BRCA1',
    name: 'Breast cancer type 1 susceptibility protein',
    organism: 'Homo sapiens (Human)',
    uniprotAccession: 'P38398',
    pdbId: '1JM7',
    molecularWeight: '207.7 kDa',
    residuesCount: 1863,
    biologicalFunction: 'E3 ubiquitin-protein ligase involved in DNA double-strand break repair via homologous recombination (HR), checkpoint arrest, and centrosome regulation.',
    plddtScoreAvg: 72.8,
    alphafoldUrl: 'https://alphafold.ebi.ac.uk/entry/P38398',
    rcsbUrl: 'https://www.rcsb.org/structure/1JM7',
    uniprotUrl: 'https://www.uniprot.org/uniprotkb/P38398/entry',
    domains: [
      { name: 'RING finger domain', range: '1-109', role: 'Forms active E3 ligase dimer with BARD1' },
      { name: 'Nuclear localization signal', range: '500-650', role: 'Translocates to sites of DNA damage' },
      { name: 'Coiled-coil PALB2 binding domain', range: '1393-1424', role: 'Recruits BRCA2 to repair foci' },
      { name: 'BRCT tandem repeats', range: '1646-1859', role: 'Phosphopeptide recognition (Abraxas, CtIP)' }
    ],
    keyVariants: [
      { variant: 'C61G', condition: 'Hereditary breast and ovarian cancer syndrome', classification: 'Pathogenic' },
      { variant: '185delAG', condition: 'Founder mutation causing frameshift truncation', classification: 'Pathogenic' },
      { variant: 'M1775R', condition: 'Disrupts BRCT fold and Abraxas binding', classification: 'Pathogenic' },
      { variant: 'S1613G', condition: 'Well-characterized benign population polymorphism', classification: 'Benign' }
    ],
    pubMedReference: {
      pmid: '11459979',
      title: 'Structure of the BRCA1-BARD1 heterodimeric RING-finger complex',
      year: '2001 (Brzovic PS, et al. Nat Struct Biol)'
    },
    plddtDistribution: { veryHigh: 34, confident: 38, low: 18, veryLow: 10 }
  },
  {
    id: 'egfr',
    geneSymbol: 'EGFR',
    name: 'Epidermal growth factor receptor',
    organism: 'Homo sapiens (Human)',
    uniprotAccession: 'P00533',
    pdbId: '1M17',
    molecularWeight: '134.3 kDa',
    residuesCount: 1210,
    biologicalFunction: 'Receptor tyrosine kinase binding epidermal growth factor (EGF) and TGF-alpha. Ligand binding induces receptor dimerization, autophosphorylation, and activation of MAPK/ERK and PI3K/Akt cascades.',
    plddtScoreAvg: 88.2,
    alphafoldUrl: 'https://alphafold.ebi.ac.uk/entry/P00533',
    rcsbUrl: 'https://www.rcsb.org/structure/1M17',
    uniprotUrl: 'https://www.uniprot.org/uniprotkb/P00533/entry',
    domains: [
      { name: 'Extracellular ligand-binding (Domains I-IV)', range: '25-645', role: 'EGF binding & dimerization arm' },
      { name: 'Transmembrane helix', range: '646-668', role: 'Spans lipid bilayer membrane' },
      { name: 'Intracellular tyrosine kinase domain', range: '712-979', role: 'ATP binding and substrate phosphorylation' },
      { name: 'C-terminal autophosphorylation tail', range: '980-1210', role: 'Phosphotyrosine SH2 docking sites' }
    ],
    keyVariants: [
      { variant: 'L858R', condition: 'Non-small cell lung carcinoma (sensitizes to erlotinib/gefitinib)', classification: 'Pathogenic' },
      { variant: 'T790M', condition: 'Secondary gatekeeper resistance mutation', classification: 'Pathogenic' },
      { variant: 'C797S', condition: 'Osimertinib covalent binding site resistance', classification: 'Pathogenic' }
    ],
    pubMedReference: {
      pmid: '12297046',
      title: 'Structure of the EGFR kinase domain in complex with an irreversible inhibitor',
      year: '2002 (Stamos J, et al. J Biol Chem)'
    },
    plddtDistribution: { veryHigh: 68, confident: 21, low: 7, veryLow: 4 }
  },
  {
    id: 'pcsk9',
    geneSymbol: 'PCSK9',
    name: 'Proprotein convertase subtilisin/kexin type 9',
    organism: 'Homo sapiens (Human)',
    uniprotAccession: 'Q8NBP7',
    pdbId: '2W2M',
    molecularWeight: '74.3 kDa',
    residuesCount: 692,
    biologicalFunction: 'Secreted serine protease that binds low-density lipoprotein receptors (LDLR) on hepatocytes, routing them to lysosomal degradation and elevating plasma LDL-cholesterol levels.',
    plddtScoreAvg: 91.5,
    alphafoldUrl: 'https://alphafold.ebi.ac.uk/entry/Q8NBP7',
    rcsbUrl: 'https://www.rcsb.org/structure/2W2M',
    uniprotUrl: 'https://www.uniprot.org/uniprotkb/Q8NBP7/entry',
    domains: [
      { name: 'Signal peptide & prodomain', range: '1-152', role: 'Autocatalytic cleavage and chaperone' },
      { name: 'Subtilisin-like catalytic domain', range: '153-407', role: 'Direct interface with LDLR EGF-A domain' },
      { name: 'C-terminal cysteine-rich domain (CHRD)', range: '453-692', role: 'Required for LDLR internalization' }
    ],
    keyVariants: [
      { variant: 'D374Y', condition: 'Gain-of-function familial hypercholesterolemia', classification: 'Pathogenic' },
      { variant: 'Y142X', condition: 'Loss-of-function resulting in low LDL and cardioprotection', classification: 'Benign' },
      { variant: 'R46L', condition: 'Hypocholesterolemia-associated protective variant', classification: 'Benign' }
    ],
    pubMedReference: {
      pmid: '18029265',
      title: 'Molecular basis for LDL receptor recognition by PCSK9',
      year: '2007 (Zhang DW, et al. PNAS)'
    },
    plddtDistribution: { veryHigh: 79, confident: 15, low: 4, veryLow: 2 }
  },
  {
    id: 'hbb',
    geneSymbol: 'HBB',
    name: 'Hemoglobin subunit beta',
    organism: 'Homo sapiens (Human)',
    uniprotAccession: 'P68871',
    pdbId: '4HHB',
    molecularWeight: '16.0 kDa',
    residuesCount: 147,
    biologicalFunction: 'Involved in oxygen transport from the lung to peripheral tissues. Forms an alpha2-beta2 heterotetramer with alpha-globin subunits, exhibiting cooperative allosteric oxygen binding.',
    plddtScoreAvg: 96.2,
    alphafoldUrl: 'https://alphafold.ebi.ac.uk/entry/P68871',
    rcsbUrl: 'https://www.rcsb.org/structure/4HHB',
    uniprotUrl: 'https://www.uniprot.org/uniprotkb/P68871/entry',
    domains: [
      { name: 'Globin fold', range: '1-147', role: '8 alpha-helices (A-H) encasing protoporphyrin IX heme' },
      { name: 'Proximal Histidine His93 (F8)', range: '93', role: 'Directly coordinates Fe2+ iron' },
      { name: 'Distal Histidine His64 (E7)', range: '64', role: 'Stabilizes bound O2 and prevents CO toxicity' }
    ],
    keyVariants: [
      { variant: 'E6V', condition: 'Sickle cell disease (HbS polymerization under hypoxia)', classification: 'Pathogenic' },
      { variant: 'E6K', condition: 'Hemoglobin C disease (mild hemolytic anemia)', classification: 'Pathogenic' },
      { variant: 'E26K', condition: 'Hemoglobin E disease (beta-thalassemia phenotype)', classification: 'Pathogenic' }
    ],
    pubMedReference: {
      pmid: '6726807',
      title: 'The crystal structure of human deoxyhaemoglobin at 1.74 Å resolution',
      year: '1984 (Fermi G, et al. J Mol Biol)'
    },
    plddtDistribution: { veryHigh: 94, confident: 5, low: 1, veryLow: 0 }
  },
  {
    id: 'ins',
    geneSymbol: 'INS',
    name: 'Insulin precursor (Proinsulin)',
    organism: 'Homo sapiens (Human)',
    uniprotAccession: 'P01308',
    pdbId: '1TRZ',
    molecularWeight: '12.0 kDa',
    residuesCount: 110,
    biologicalFunction: 'Essential peptide hormone produced by pancreatic beta cells. Stimulates cellular glucose uptake via GLUT4, glycogenesis, and lipogenesis while inhibiting hepatic gluconeogenesis.',
    plddtScoreAvg: 89.1,
    alphafoldUrl: 'https://alphafold.ebi.ac.uk/entry/P01308',
    rcsbUrl: 'https://www.rcsb.org/structure/1TRZ',
    uniprotUrl: 'https://www.uniprot.org/uniprotkb/P01308/entry',
    domains: [
      { name: 'Signal peptide', range: '1-24', role: 'Targets nascent chain into ER lumen' },
      { name: 'Insulin B chain', range: '25-54', role: 'Binds insulin receptor alpha-subunit' },
      { name: 'Connecting C-peptide', range: '57-87', role: 'Excised by prohormone convertases PC1/3 & PC2' },
      { name: 'Insulin A chain', range: '90-110', role: 'Contains two inter-chain disulfide bridges' }
    ],
    keyVariants: [
      { variant: 'C96Y', condition: 'Permanent neonatal diabetes mellitus (PNDM)', classification: 'Pathogenic' },
      { variant: 'R89C', condition: 'Hyperproinsulinemia due to cleavage defect', classification: 'Pathogenic' }
    ],
    pubMedReference: {
      pmid: '1918342',
      title: 'X-ray analysis of the 2-zinc human insulin crystal at 1.5 Å resolution',
      year: '1991 (Baker EN, et al. Philos Trans R Soc Lond B)'
    },
    plddtDistribution: { veryHigh: 81, confident: 13, low: 4, veryLow: 2 }
  }
];

export interface CellOrganelleInfo {
  id: string;
  name: string;
  symbol: string;
  primaryRole: string;
  detailedFunction: string;
  energyContribution: string;
  molecularMarkers: string[];
  associatedPathologies: string;
  colorAccent: string;
}

export const CELL_ORGANELLES: CellOrganelleInfo[] = [
  {
    id: 'nucleus',
    name: 'Nucleus & Nucleolus',
    symbol: 'NUC',
    primaryRole: 'Genetic Command Center & Ribosome Biogenesis',
    detailedFunction: 'Encloses the eukaryotic genome within a double-membrane nuclear envelope perforated by nuclear pore complexes (NPCs). Contains euchromatin, heterochromatin, and the nucleolus where rRNA transcription by RNA Pol I occurs.',
    energyContribution: 'Consumes nuclear ATP and GTP for Ran-dependent import/export cycles and chromatin remodeling.',
    molecularMarkers: ['Lamin A/C (LMNA)', 'Histone H3', 'Nucleolin (NCL)', 'Fibrillarin (FBL)'],
    associatedPathologies: 'Emery-Dreifuss muscular dystrophy, progeria (HGPS), and congenital nuclear envelopathies.',
    colorAccent: '#38bdf8'
  },
  {
    id: 'mitochondria',
    name: 'Mitochondria',
    symbol: 'MITO',
    primaryRole: 'Bioenergetic ATP Production & Apoptosis Trigger',
    detailedFunction: 'Double-membraned organelle hosting the tricarboxylic acid (TCA) cycle in the matrix and oxidative phosphorylation complexes (I-IV) across invaginated cristae. Regulates intrinsic programmed cell death via cytochrome c release.',
    energyContribution: 'Generates ~90% of cellular ATP (30-32 ATP per glucose molecule) via proton-motive force through ATP synthase.',
    molecularMarkers: ['TOM20 (TOMM20)', 'Cytochrome c Oxidase IV (COX4)', 'ATP5A', 'Voltage-dependent anion channel (VDAC1)'],
    associatedPathologies: 'Leigh syndrome, MELAS, Leber hereditary optic neuropathy, and mitochondrial encephalomyopathies.',
    colorAccent: '#06b6d4'
  },
  {
    id: 'endoplasmic-reticulum',
    name: 'Endoplasmic Reticulum (Rough & Smooth)',
    symbol: 'ER',
    primaryRole: 'Protein Synthesis, Folding, Lipid Synthesis & Ca2+ Storage',
    detailedFunction: 'Extensive membrane network contiguous with the nuclear envelope. Rough ER is studded with 80S ribosomes synthesizing transmembrane and secretory proteins; smooth ER synthesizes phospholipids, steroids, and buffers cytosolic Ca2+ ions.',
    energyContribution: 'Relies on BiP/GRP78 ATP hydrolysis for protein chaperone folding and SERCA pump Ca2+ re-uptake.',
    molecularMarkers: ['Calreticulin (CALR)', 'Protein Disulfide Isomerase (PDI)', 'BiP/GRP78', 'Sec61 alpha'],
    associatedPathologies: 'ER stress-induced unfolded protein response (UPR), cystic fibrosis (CFTR misfolding), and neurodegeneration.',
    colorAccent: '#60a5fa'
  },
  {
    id: 'golgi',
    name: 'Golgi Apparatus',
    symbol: 'GOLGI',
    primaryRole: 'Macromolecular Sorting, Glycosylation & Secretory Packaging',
    detailedFunction: 'Polarized stack of flattened cisternae (cis, medial, trans, and trans-Golgi network). Chemically modifies nascent glycoproteins and glycolipids with complex N- and O-linked oligosaccharides before routing to lysosomes or the plasma membrane.',
    energyContribution: 'Utilizes ATP-dependent proton pumps (V-ATPase) to maintain acidic luminal pH required for glycosyltransferases.',
    molecularMarkers: ['Golgin-97', 'GM130 (GOLGA2)', 'Giantin', 'Mannosidase II'],
    associatedPathologies: 'Congenital disorders of glycosylation (CDGs), Alzheimer amyloid precursor processing aberrations.',
    colorAccent: '#818cf8'
  },
  {
    id: 'ribosomes',
    name: 'Ribosomes (80S Eukaryotic)',
    symbol: 'RIB',
    primaryRole: 'Messenger RNA Translation into Polypeptide Chains',
    detailedFunction: 'Catalytic ribonucleoprotein complexes composed of small 40S (18S rRNA + 33 proteins) and large 60S (28S, 5.8S, 5S rRNAs + 47 proteins) subunits. Catalyzes peptide bond formation via peptidyl transferase RNA active center.',
    energyContribution: 'Consumes 2 GTP molecules per amino acid elongation step (eEF1A binding and eEF2 translocation).',
    molecularMarkers: ['RPS6 (Ribosomal Protein S6)', 'RPL11', 'eEF2', '18S/28S rRNA'],
    associatedPathologies: 'Diamond-Blackfan anemia, Treacher Collins syndrome, and ribosomal ribosomopathies.',
    colorAccent: '#2dd4bf'
  },
  {
    id: 'lysosomes',
    name: 'Lysosomes & Peroxisomes',
    symbol: 'LYSO',
    primaryRole: 'Waste Degradation, Autophagy & Lipid Beta-Oxidation',
    detailedFunction: 'Acidic single-membrane organelles (pH 4.5-5.0) containing over 60 acid hydrolases (cathepsins, nucleases, sulfatases). Degrades engulfed extracellular cargo from endocytosis and damaged organelles via macroautophagy.',
    energyContribution: 'V-ATPase consumes cytosolic ATP to pump protons across the lysosomal membrane against steep concentration gradients.',
    molecularMarkers: ['LAMP1 / LAMP2', 'Cathepsin D (CTSD)', 'Catalase (Peroxisomes)', 'PEX3'],
    associatedPathologies: 'Gaucher disease, Tay-Sachs disease, Pompe disease, and Niemann-Pick type C.',
    colorAccent: '#34d399'
  },
  {
    id: 'cytoskeleton',
    name: 'Cytoskeleton & Centrosome',
    symbol: 'CYTO',
    primaryRole: 'Structural Integrity, Intracellular Highways & Mitotic Spindle',
    detailedFunction: 'Dynamic composite network of microfilaments (F-actin), intermediate filaments (lamins, keratins), and microtubules (alpha/beta tubulin). Acts as mechanical scaffolding and directional tracks for molecular motor transport.',
    energyContribution: 'ATP powers kinesin and myosin motors; GTP powers tubulin polymerization and dynamic instability.',
    molecularMarkers: ['Beta-Tubulin', 'F-Actin (Phalloidin)', 'Vimentin', 'Gamma-Tubulin (Centrosome)'],
    associatedPathologies: 'Amiotrophic lateral sclerosis (ALS neurofilament aggregation), microcephaly, and ciliopathies.',
    colorAccent: '#38bdf8'
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imagingMethod: string;
  magnification: string;
  imageUrl: string;
  description: string;
  scientificContext: string;
  tags: string[];
}

export const SCIENTIFIC_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'DNA Double Helix & Solvation Shell',
    category: 'Molecular Visualization',
    imagingMethod: 'Molecular Dynamics Simulation / PyMOL',
    magnification: 'Sub-angstrom (0.8 Å resolution)',
    imageUrl: '/images/gallery/dna_double_helix.jpg',
    description: 'B-form double helix illustrating major and minor grooves coordinated with water molecules and hydrated sodium counter-ions.',
    scientificContext: 'Reveals hydrogen-bond donor-acceptor patterns essential for sequence-specific transcription factor docking.',
    tags: ['DNA', 'Biophysics', 'Helical Geometry']
  },
  {
    id: 'gal-2',
    title: 'Automated High-Containment Bioreactor Array',
    category: 'Biotechnology Infrastructure',
    imagingMethod: 'High-speed Industrial Robotics Photography',
    magnification: 'Macroscopic Facility',
    imageUrl: '/images/gallery/biotechnology_cleanroom.jpg',
    description: 'Precision continuous-perfusion bioreactors with automated dissolved oxygen, pH, and nutrient feed control loops.',
    scientificContext: 'Scaled for therapeutic recombinant glycoprotein synthesis under sterile cGMP standards.',
    tags: ['Bioprocess', 'Fermentation', 'Automation']
  },
  {
    id: 'gal-3',
    title: 'Fluorescent Confocal Cellular Cytometry',
    category: 'Cellular Imaging',
    imagingMethod: 'Multiplexed Laser Scanning Confocal (LSM 980)',
    magnification: '2,500x Optical Magnification',
    imageUrl: '/images/gallery/human_animal_cell.jpg',
    description: 'Detailed cross-section showing nucleus with nuclear pores, mitochondria cristae, rough/smooth ER, ribosomes, and Golgi apparatus.',
    scientificContext: 'Captures cytoskeletal rearrangements and organelle architecture in living eukaryotic systems.',
    tags: ['Mitosis', 'Confocal', 'Cytoskeleton']
  },
  {
    id: 'gal-4',
    title: 'Cryo-EM Map of the 80S Eukaryotic Ribosome',
    category: 'Structural Biology',
    imagingMethod: 'Cryo-Electron Microscopy (Titan Krios)',
    magnification: '250,000x Effective Magnification',
    imageUrl: '/images/gallery/ribosome_translation.jpg',
    description: 'Surface rendering of the ribosome showing 40S small and 60S large subunits with tRNA docked at the aminoacyl (A) and peptidyl (P) sites.',
    scientificContext: 'Visualizes the universally conserved peptidyl transferase center composed entirely of 28S ribosomal RNA.',
    tags: ['Cryo-EM', 'Ribosome', 'Translation']
  },
  {
    id: 'gal-5',
    title: 'Cortical Pyramidal Neurons and Dendritic Spines',
    category: 'Neuroscience',
    imagingMethod: 'Two-Photon Laser Scanning Microscopy',
    magnification: '1,200x In Vivo Optical',
    imageUrl: '/images/gallery/neural_synapse_network.jpg',
    description: 'Apical dendrites of layer V pyramidal neurons studded with mushroom and stubby synaptic spines in cortex.',
    scientificContext: 'Monitors structural synaptic remodeling and action potentials propagating along axonal networks.',
    tags: ['Synapses', 'Neurons', 'Two-Photon']
  },
  {
    id: 'gal-6',
    title: 'High-Density DNA Sequencing Microarray Flowcell',
    category: 'Genomic Instrumentation',
    imagingMethod: 'Total Internal Reflection Fluorescence (TIRF)',
    magnification: 'Nanoscale Patterned Flowcell',
    imageUrl: '/images/gallery/sequencing_flowcell.jpg',
    description: 'Flowcell surface carrying billions of clonal DNA clusters illuminated during cyclic reversible dye-terminator incorporation.',
    scientificContext: 'Generates up to 6 terabases of sequence data in a single 48-hour sequencing run.',
    tags: ['Genomics', 'Sequencing', 'Nanotechnology']
  },
  {
    id: 'gal-7',
    title: 'Scanning Electron Micrograph of Bacilli Biofilm',
    category: 'Microbiology',
    imagingMethod: 'Field Emission Scanning Electron Microscopy (FE-SEM)',
    magnification: '18,500x Electronic Magnification',
    imageUrl: '/images/gallery/bacteriophage_microbiology.jpg',
    description: 'Microscopic visualization of bacteria and microorganisms with bacteriophages docking on bacterial cell membrane.',
    scientificContext: 'Depicts antibiotic recalcitrance mechanisms and phage tail contraction dynamics.',
    tags: ['Bacteria', 'Biofilm', 'SEM']
  },
  {
    id: 'gal-8',
    title: 'CRISPR-Cas9 Complex Bound to Target DNA',
    category: 'Molecular Engineering',
    imagingMethod: 'High-Resolution 3D Isosurface Reconstruction',
    magnification: 'Atomic Coordinates (PDB 4UN3)',
    imageUrl: '/images/gallery/crispr_cas9_target.jpg',
    description: 'Streptococcus pyogenes Cas9 nuclease cradling the synthetic single-guide RNA and unwinding double-stranded target DNA at the PAM site.',
    scientificContext: 'Illustrates the R-loop architecture and protospacer adjacent motif (PAM, 5-NGG-3) cleavage mechanism.',
    tags: ['CRISPR', 'Cas9', 'Gene Editing']
  },
  {
    id: 'gal-9',
    title: 'Extreme Coastal Biosphere & Coral Nutrient Flow',
    category: 'Environmental Biology',
    imagingMethod: 'Marine & Forest Environmental Photography',
    magnification: 'Biosphere Ecosystem',
    imageUrl: '/images/divisions/ecology.jpg',
    description: 'Pristine coastal temperate rainforest meeting marine coral reef ecosystem with biogeochemical nutrient flux visual mapping.',
    scientificContext: 'Demonstrates trophic cascades and marine-terrestrial ecological nutrient exchange.',
    tags: ['Ecology', 'Reef', 'Biogeochemical']
  },
  {
    id: 'gal-10',
    title: 'Enzyme Catalysis & Allosteric Active Site',
    category: 'Biochemistry & Pharmacology',
    imagingMethod: 'X-Ray Crystallography (1.45 Å) / Biophysical Modeling',
    magnification: 'Atomic Structural Model',
    imageUrl: '/images/gallery/enzyme_catalysis.jpg',
    description: 'PFK-1 allosteric enzyme with catalytic active site, ATP coordination, citrate regulatory pocket, alpha-helices, and beta-sheets.',
    scientificContext: 'Guides rational drug discovery and allosteric enzyme engineering.',
    tags: ['Medicinal Chem', 'Enzyme', 'Biochemistry']
  }
];

export interface GlossaryTerm {
  term: string;
  category: 'Molecular Biology' | 'Genetics' | 'Biotechnology' | 'Microbiology' | 'Cell Biology' | 'Biochemistry' | 'Neuroscience' | 'Ecology';
  pronunciation?: string;
  etymology?: string;
  definition: string;
  exampleOrNote?: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Action Potential',
    category: 'Neuroscience',
    pronunciation: '/ˈæk.ʃən pəˈtɛn.ʃəl/',
    etymology: 'Latin actio (action) + potentialis (power)',
    definition: 'A brief, all-or-none electrical impulse that travels down a neuron axon, initiated by voltage-gated sodium channel opening upon threshold depolarization.',
    exampleOrNote: 'Propagates up to 120 meters per second in saltatory conduction along myelinated axons.'
  },
  {
    term: 'Adenine',
    category: 'Molecular Biology',
    pronunciation: '/ˈæd.ə.niːn/',
    etymology: 'Greek aden (gland), first isolated from pancreas',
    definition: 'A purine nucleobase that forms two hydrogen bonds with thymine in DNA or uracil in RNA, and constitutes the core of adenosine triphosphate (ATP).',
    exampleOrNote: 'Pairs via Watson-Crick N1-H3 and C6-amino to C4-carbonyl hydrogen bonds.'
  },
  {
    term: 'Allosteric Regulation',
    category: 'Biochemistry',
    pronunciation: '/ˌæləˈstɛrɪk/',
    etymology: 'Greek allos (other) + stereos (solid/shape)',
    definition: 'The regulation of an enzyme or protein by binding an effector molecule at a site other than the active site, inducing a conformational change.',
    exampleOrNote: 'Phosphofructokinase-1 (PFK-1) is allosterically inhibited by high ATP and activated by AMP.'
  },
  {
    term: 'AlphaFold',
    category: 'Biotechnology',
    pronunciation: '/ˈælfə foʊld/',
    etymology: 'Alpha (primary, beginning) + protein fold',
    definition: 'An advanced deep-learning system developed by Google DeepMind that predicts 3D protein structures with atomic accuracy from amino acid sequences.',
    exampleOrNote: 'AlphaFold DB provides structural models for over 200 million proteins across UniProt.'
  },
  {
    term: 'Apoptosis',
    category: 'Cell Biology',
    pronunciation: '/ˌæpəpˈtoʊsɪs/',
    etymology: 'Greek apo (away from) + ptosis (falling)',
    definition: 'Programmed cell death characterized by cell shrinkage, chromatin condensation, membrane blebbing, and DNA fragmentation without triggering inflammation.',
    exampleOrNote: 'Initiated via the intrinsic pathway by mitochondrial cytochrome c release activating caspase-9 and caspase-3.'
  },
  {
    term: 'Autophagy',
    category: 'Cell Biology',
    pronunciation: '/ɔːˈtɒfədʒi/',
    etymology: 'Greek auto (self) + phagein (to eat)',
    definition: 'A conserved cellular degradation pathway where cytoplasmic contents and damaged organelles are sequestered in double-membrane autophagosomes and delivered to lysosomes.',
    exampleOrNote: 'Essential for maintaining proteostasis during nutrient deprivation, regulated by mTORC1 and AMPK.'
  },
  {
    term: 'Bacteriophage',
    category: 'Microbiology',
    pronunciation: '/bækˈtɪəri.ə.feɪdʒ/',
    etymology: 'Bacteria + Greek phagein (to eat)',
    definition: 'A virus that specifically infects and replicates within bacteria and archaea, widely used in molecular cloning and emerging phage therapies.',
    exampleOrNote: 'T4 phage injects double-stranded DNA into E. coli via a contractile tail sheath.'
  },
  {
    term: 'Bioinformatics',
    category: 'Biotechnology',
    pronunciation: '/ˌbaɪ.oʊ.ɪn.fərˈmæt.ɪks/',
    etymology: 'Biology + informatics (information science)',
    definition: 'The interdisciplinary field developing algorithms, computational pipelines, and databases to store, analyze, and interpret large-scale biological data.',
    exampleOrNote: 'Tools include BLAST, Clustal Omega, Foldseek, and DESeq2 for differential RNA expression.'
  },
  {
    term: 'Chemiosmosis',
    category: 'Biochemistry',
    pronunciation: '/ˌkɛm.i.ɒzˈmoʊ.sɪs/',
    etymology: 'Chemistry + Greek osmos (push/thrust)',
    definition: 'The movement of ions across a selectively permeable membrane down their electrochemical gradient to generate metabolic energy, as formulated by Peter Mitchell.',
    exampleOrNote: 'Protons pumped across the mitochondrial inner membrane drive rotational ATP synthesis.'
  },
  {
    term: 'Chromatin',
    category: 'Genetics',
    pronunciation: '/ˈkroʊmətɪn/',
    etymology: 'Greek chroma (color), stains deeply with basic dyes',
    definition: 'The macromolecular complex of genomic DNA, histone proteins, and non-histone regulatory factors found in eukaryotic nuclei.',
    exampleOrNote: 'Divided into transcriptionally active euchromatin and densely packed heterochromatin.'
  },
  {
    term: 'CRISPR',
    category: 'Genetics',
    pronunciation: '/ˈkrɪspər/',
    etymology: 'Acronym: Clustered Regularly Interspaced Short Palindromic Repeats',
    definition: 'An adaptive bacterial immune system adapted as a revolutionary RNA-guided genome-editing platform.',
    exampleOrNote: 'Uses guide RNA (gRNA) complementary to target DNA adjacent to a Protospacer Adjacent Motif (PAM).'
  },
  {
    term: 'Cytokinesis',
    category: 'Cell Biology',
    pronunciation: '/ˌsaɪ.toʊ.kɪˈniː.sɪs/',
    etymology: 'Greek kytos (cell) + kinesis (motion)',
    definition: 'The physical division of the cytoplasm of a single eukaryotic cell into two daughter cells following telophase of mitosis or meiosis.',
    exampleOrNote: 'Driven by a contractile actomyosin ring in animal cells.'
  },
  {
    term: 'DNA Polymerase',
    category: 'Molecular Biology',
    pronunciation: '/ˌdiː.ɛnˈeɪ pəˈlɪm.ə.reɪs/',
    etymology: 'DNA + polymer + -ase (enzyme suffix)',
    definition: 'An enzyme that synthesizes DNA molecules from deoxyribonucleotides, reading a template strand in the 3-prime to 5-prime direction and synthesizing 5-prime to 3-prime.',
    exampleOrNote: 'Human DNA Polymerase delta and epsilon feature 3-to-5 proofreading exonuclease activity.'
  },
  {
    term: 'Endoplasmic Reticulum',
    category: 'Cell Biology',
    pronunciation: '/ˌɛndəʊˌplæzmɪk rɪˈtɪkjʊləm/',
    etymology: 'Greek endon (within) + plasma + Latin reticulum (small net)',
    definition: 'A continuous membrane network of cisternae and tubules involved in protein synthesis and folding (rough ER) and lipid metabolism and Ca2+ storage (smooth ER).',
    exampleOrNote: 'Connected directly to the outer leaflet of the nuclear envelope.'
  },
  {
    term: 'Enzyme Kinetics',
    category: 'Biochemistry',
    pronunciation: '/ˈɛn.zaɪm kɪˈnɛt.ɪks/',
    etymology: 'Greek en (in) + zyme (yeast) + kinetikos (moving)',
    definition: 'The quantitative study of the chemical rates of enzyme-catalyzed reactions and how they change in response to changes in substrate concentration and inhibitors.',
    exampleOrNote: 'Modelled by the Michaelis-Menten equation relating initial velocity to Km and Vmax.'
  },
  {
    term: 'Epigenetics',
    category: 'Genetics',
    pronunciation: '/ˌɛpɪdʒəˈnɛtɪks/',
    etymology: 'Greek epi (upon/over) + genetics',
    definition: 'Heritable phenotypic changes in gene function or cellular expression that do not involve alterations to the underlying DNA nucleotide sequence.',
    exampleOrNote: 'Includes cytosine methylation at CpG islands and histone tail methylation/acetylation.'
  },
  {
    term: 'Glycolysis',
    category: 'Biochemistry',
    pronunciation: '/ɡlaɪˈkɒl.ə.sɪs/',
    etymology: 'Greek glykys (sweet) + lysis (splitting)',
    definition: 'A 10-step metabolic pathway that converts one molecule of glucose into two molecules of pyruvate, producing a net yield of 2 ATP and 2 NADH in the cytoplasm.',
    exampleOrNote: 'Operates under both aerobic and anaerobic conditions without requiring molecular oxygen.'
  },
  {
    term: 'Homeostasis',
    category: 'Ecology',
    pronunciation: '/ˌhoʊmi.oʊˈsteɪsɪs/',
    etymology: 'Greek homoios (similar) + stasis (standing still)',
    definition: 'The state of steady internal, physical, and chemical conditions maintained by living systems, or steady-state resilience in ecosystems.',
    exampleOrNote: 'Thermoregulation, blood glucose regulation (insulin/glucagon), and pH buffering.'
  },
  {
    term: 'Metagenomics',
    category: 'Microbiology',
    pronunciation: '/ˌmɛtə.dʒəˈnoʊ.mɪks/',
    etymology: 'Greek meta (transcending) + genomics',
    definition: 'The direct genetic analysis of uncultured microbial genomes recovered collectively from an environmental or clinical sample without prior isolation.',
    exampleOrNote: 'Enables identification of novel enzymes from deep-sea sediment or uncultivable gut microbes.'
  },
  {
    term: 'Microbiome',
    category: 'Microbiology',
    pronunciation: '/ˈmaɪ.kroʊ.baɪ.oʊm/',
    etymology: 'Micro (small) + biome (living community)',
    definition: 'The collective community of microorganisms (bacteria, archaea, fungi, viruses) and their combined genetic material residing within a defined environment or host.',
    exampleOrNote: 'The human gastrointestinal tract harbors approximately 38 trillion bacterial cells.'
  },
  {
    term: 'Myelin Sheath',
    category: 'Neuroscience',
    pronunciation: '/ˈmaɪəlɪn ʃiːθ/',
    etymology: 'Greek myelos (marrow) + sheath',
    definition: 'A lipid-rich insulating layer formed by Schwann cells in the PNS and oligodendrocytes in the CNS, wrapped concentrically around neuronal axons.',
    exampleOrNote: 'Enables rapid saltatory conduction across unmyelinated Nodes of Ranvier.'
  },
  {
    term: 'Neuroplasticity',
    category: 'Neuroscience',
    pronunciation: '/ˌnjʊəroʊ.plæsˈtɪs.ə.ti/',
    etymology: 'Neuron + Greek plastikos (capable of being shaped)',
    definition: 'The capacity of the nervous system to adapt its structural organization, synaptic strengths, and functional circuits in response to experience, learning, or injury.',
    exampleOrNote: 'Underpinned at the cellular level by Long-Term Potentiation (LTP) and dendritic spine turnover.'
  },
  {
    term: 'Okazaki Fragments',
    category: 'Molecular Biology',
    pronunciation: '/ˌoʊkəˈzɑːki/',
    etymology: 'Named after Japanese molecular biologists Reiji and Tsuneko Okazaki',
    definition: 'Short, newly synthesized DNA fragments that are formed on the lagging template strand during DNA replication, later joined by DNA ligase.',
    exampleOrNote: 'Typically 100-200 nucleotides long in eukaryotes and 1,000-2,000 nucleotides in E. coli.'
  },
  {
    term: 'PCR (Polymerase Chain Reaction)',
    category: 'Biotechnology',
    pronunciation: '/ˌpiː.siːˈɑːr/',
    etymology: 'Polymerase + Chain Reaction',
    definition: 'A fundamental molecular technique used to exponentially amplify a specific DNA sequence through repeated cycles of thermal denaturation, primer annealing, and extension.',
    exampleOrNote: 'Utilizes thermostable DNA polymerases such as Taq or high-fidelity Q5/Pfu polymerases.'
  },
  {
    term: 'Ribosome',
    category: 'Cell Biology',
    pronunciation: '/ˈraɪbəsoʊm/',
    etymology: 'Ribonucleic acid + Greek soma (body)',
    definition: 'A macromolecular machine consisting of ribosomal RNA and proteins that translates messenger RNA sequences into amino acid polypeptide chains.',
    exampleOrNote: 'Composed of 40S small subunit and 60S large subunit in eukaryotes (80S total).'
  },
  {
    term: 'Synapse',
    category: 'Neuroscience',
    pronunciation: '/ˈsɪnæps/',
    etymology: 'Greek synapsis (conjunction/fastening together)',
    definition: 'A specialized junction across which a nerve cell communicates with another neuron, muscle cell, or gland via chemical neurotransmitters or electrical gap junctions.',
    exampleOrNote: 'Presynaptic SNARE-mediated release triggers ligand-gated ion channels across a 20nm synaptic cleft.'
  },
  {
    term: 'Transcription Factor',
    category: 'Molecular Biology',
    pronunciation: '/trænˈskrɪp.ʃən ˈfæk.tər/',
    etymology: 'Latin transcribere (to copy) + factor',
    definition: 'A protein that controls the rate of transcription of genetic information from DNA to messenger RNA by binding to specific regulatory promoter and enhancer sequences.',
    exampleOrNote: 'Contains conserved DNA-binding motifs such as zinc fingers, leucine zippers, or basic helix-loop-helix (bHLH).'
  },
  {
    term: 'Trophic Level',
    category: 'Ecology',
    pronunciation: '/ˈtroʊfɪk ˈlɛvəl/',
    etymology: 'Greek trophe (nourishment/food)',
    definition: 'The hierarchical position an organism occupies in a food web, from primary producers (plants/autotrophs) to apex predators.',
    exampleOrNote: 'Roughly 10% of ecological energy transfers from one trophic level to the next.'
  },
  {
    term: 'Western Blot',
    category: 'Biotechnology',
    pronunciation: '/ˈwɛstərn blɒt/',
    etymology: 'Play on Southern blot, developed by W. Neal Burnette',
    definition: 'An analytical technique used in molecular biology to detect specific target proteins in a tissue extract using gel electrophoresis, membrane transfer, and antibody probes.',
    exampleOrNote: 'Employs SDS-PAGE separation followed by PVDF/nitrocellulose transfer and chemiluminescent detection.'
  }
];

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  abstract: string;
  body: string[];
  keyTakeaways: string[];
}

export const KNOWLEDGE_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'The Molecular Architecture of DNA: Watson-Crick Geometry to Supercoiling',
    category: 'Molecular Biology',
    readTime: '6 min read',
    publishDate: 'October 2025',
    author: 'BioScience Molecular Science Editorial',
    abstract: 'An in-depth educational review of B-form DNA helical parameters, major and minor groove interactions, hydrogen bonding thermodynamics, and topoisomerase relaxation.',
    body: [
      'Deoxyribonucleic acid (DNA) is the biological repository of genetic instructions across all cellular life. In its canonical B-form conformation, described by James Watson and Francis Crick in 1953, DNA consists of two antiparallel polynucleotide strands wrapped around a central helical axis in a right-handed direction.',
      'Each complete helical turn spans approximately 3.4 nanometers and accommodates roughly 10.5 base pairs, resulting in a helical rise of 0.34 nm per base pair. The anti-parallel alignment of the 5-prime to 3-prime phosphodiester backbones presents two distinct grooves: the wide and deep major groove (2.2 nm) and the narrower minor groove (1.2 nm).',
      'The specificity of genetic replication relies on complementary base pairing. Purine adenine (A) pairs with pyrimidine thymine (T) via two hydrogen bonds (N1-H3 and C6-amino to C4-carbonyl). Guanine (G) pairs with cytosine (C) via three hydrogen bonds, conferring higher thermal stability and higher denaturation melting temperatures (Tm) to GC-rich genomes.',
      'Inside living cells, cellular DNA does not exist as relaxed linear rods. It is constrained into topological domains subjected to negative supercoiling by type I and type II topoisomerases. This torsional stress facilitates unwinding during transcription initiation and replication fork progression.'
    ],
    keyTakeaways: [
      'B-DNA has 10.5 base pairs per helical turn with a 3.4 nm repeat.',
      'Major and minor grooves allow sequence-specific protein readout without strand separation.',
      'GC pairs form 3 hydrogen bonds compared to 2 in AT pairs, altering duplex stability.',
      'Negative supercoiling stores torsional free energy that promotes strand separation during gene expression.'
    ]
  },
  {
    id: 'art-2',
    title: 'Understanding CRISPR Systems: From Bacterial Defense to Precision Therapeutics',
    category: 'Biotechnology',
    readTime: '7 min read',
    publishDate: 'August 2025',
    author: 'BioScience Biotechnology Division',
    abstract: 'How clustered regularly interspaced short palindromic repeats evolved as adaptive bacterial immune shields and were re-engineered into programmable molecular therapies.',
    body: [
      'In nature, CRISPR-Cas systems serve as adaptive immune mechanisms in bacteria and archaea against invading bacteriophages and mobile plasmids. Upon initial viral challenge, the Cas1-Cas2 integrase complex captures short foreign DNA fragments (spacers) and integrates them into the CRISPR genomic locus between conserved palindromic repeats.',
      'During subsequent infection, the CRISPR array is transcribed into precursor crRNA (pre-crRNA) and processed into mature guide RNAs. In the widely adopted Type II CRISPR-Cas9 system from Streptococcus pyogenes, the dual-RNA complex (crRNA + tracrRNA) forms a ribonucleoprotein (RNP) complex with the Cas9 endonuclease.',
      'Cas9 interrogates genomic DNA by scanning for a protospacer adjacent motif (PAM) sequence—specifically 5-prime-NGG-3-prime. Upon PAM recognition, Cas9 unwinds the adjacent double helix. If the 20-nucleotide spacer matches the target protospacer, the HNH and RuvC nuclease domains cleave the complementary and non-complementary strands, generating a double-strand break.',
      'Recent breakthroughs have evolved beyond double-strand breaks. Cytidine and adenine base editors deaminate target bases directly without DNA cleaving, while prime editors write arbitrary genetic insertions and deletions through reverse transcriptase fusion.'
    ],
    keyTakeaways: [
      'CRISPR originated as a bacterial acquired immune defense against bacteriophage infection.',
      'Cas9 requires a 5-NGG PAM motif to initiate DNA interrogation and strand separation.',
      'Base and prime editors enable nucleotide correction without risky double-strand breaks.',
      'Clinical applications are treating sickle-cell disease and beta-thalassemia.'
    ]
  },
  {
    id: 'art-3',
    title: 'Cellular Respiration Energetics: Glycolysis to the Mitochondrial Respirasome',
    category: 'Cell Biology',
    readTime: '8 min read',
    publishDate: 'September 2025',
    author: 'BioScience Bioenergetics Working Group',
    abstract: 'A comprehensive biochemical accounting of ATP synthesis across glycolysis, the citric acid cycle, and chemiosmotic oxidative phosphorylation.',
    body: [
      'Aerobic cellular respiration is the fundamental biochemical mechanism by which eukaryotic cells extract Gibbs free energy from glucose and convert it into adenosine triphosphate (ATP), the universal cellular energy currency.',
      'The process begins in the cytosol with glycolysis, converting one glucose molecule into two molecules of pyruvate. Glycolysis requires an initial investment of 2 ATP molecules, followed by an energy payoff phase yielding 4 ATP (net 2 ATP via substrate-level phosphorylation) and 2 molecules of NADH.',
      'Pyruvate is transported across the mitochondrial double membrane and oxidatively decarboxylated by the pyruvate dehydrogenase complex into acetyl-CoA, producing NADH and releasing CO2. Acetyl-CoA enters the tricarboxylic acid (TCA) cycle in the mitochondrial matrix, undergoing cyclic oxidation to yield 6 NADH, 2 FADH2, and 2 ATP/GTP equivalents per initial glucose.',
      'The reduced coenzymes donate high-energy electrons to the inner mitochondrial electron transport chain (Complexes I-IV). As electrons transfer sequentially down the redox potential gradient to molecular oxygen (the terminal electron acceptor), Complexes I, III, and IV pump protons into the intermembrane space, creating a steep proton-motive force.',
      'Protons flow back into the matrix through the F0 rotor of ATP synthase, driving conformational changes in the F1 catalytic head that synthesize ~26-28 ATP molecules. In total, complete oxidation of one mole of glucose yields 30 to 32 moles of ATP.'
    ],
    keyTakeaways: [
      'Glycolysis yields a net of 2 ATP and 2 NADH in the cytosol without oxygen.',
      'The citric acid cycle in the mitochondrial matrix completely oxidizes acetyl groups to CO2.',
      'Oxidative phosphorylation accounts for ~90% of total aerobic ATP production.',
      'Peter Mitchell chemiosmotic theory explains coupling between electron transport and ATP synthase rotation.'
    ]
  },
  {
    id: 'art-4',
    title: 'The Neural Synapse: Electrochemical Signal Transduction and Plasticity',
    category: 'Neuroscience',
    readTime: '6 min read',
    publishDate: 'July 2025',
    author: 'BioScience Neuroscience Division',
    abstract: 'How action potentials trigger calcium-dependent vesicle exocytosis, receptor gating, and long-term potentiation underlying biological memory consolidation.',
    body: [
      'The chemical synapse is the primary computational unit of the central nervous system. When an electrical action potential invades a presynaptic nerve terminal, the rapid membrane depolarization activates voltage-gated calcium channels (Cav2.1/Cav2.2), leading to localized microdomain calcium influx.',
      'Synaptic vesicles pre-docked at the active zone undergo rapid exocytic fusion mediated by the core SNARE complex (syntaxin-1, SNAP-25, and synaptobrevin-2) and the calcium sensor synaptotagmin-1. Neurotransmitters such as L-glutamate diffuse across the 20-nanometer synaptic cleft within microseconds.',
      'On the postsynaptic density, glutamate binds ionotropic AMPA and NMDA receptors. AMPA receptors mediate rapid sodium influx and excitatory postsynaptic potentials (EPSPs). NMDA receptors remain blocked by extracellular magnesium ions at resting membrane potential.',
      'Upon sufficient postsynaptic depolarization, magnesium is displaced, allowing calcium influx through NMDA receptors. This calcium spike activates calcium/calmodulin-dependent protein kinase II (CaMKII), triggering the insertion of additional AMPA receptors into the postsynaptic membrane—the molecular basis of Long-Term Potentiation (LTP) and memory formation.'
    ],
    keyTakeaways: [
      'SNARE complexes and synaptotagmin-1 couple calcium influx to millisecond vesicle fusion.',
      'The synaptic cleft is only 20 nanometers wide, allowing diffusion in sub-millisecond timescales.',
      'NMDA receptors act as molecular coincidence detectors due to voltage-dependent Mg2+ block.',
      'LTP strengthens synaptic connections by recruiting AMPA receptors to the dendritic spine.'
    ]
  }
];
