export interface ExpertiseItem {
  slug: string;
  category: 'former' | 'confiance' | 'cooperer' | 'retenir';
  categoryLabel: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  deliverables: string[];
  targetInstitutions: string[];
  publics?: string[];
  statsOrIndicators: { label: string; value: string }[];
  image: string;
  pathwaySteps?: { step: number; title: string; desc: string }[];
}

export const EXPERTISES: ExpertiseItem[] = [
  {
    slug: 'audit-offre-formation',
    category: 'former',
    categoryLabel: 'Former utilement',
    title: "Audit & alignement de l'offre de formation",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Cartographie prospective des filières universitaires au regard des priorités nationales d'industrialisation et de service public.",
    fullDescription:
      "CEIUE intervient auprès des ministères de l'Enseignement supérieur pour auditer les cursus existants, identifier les doublons, mesurer l'inadéquation formation-emploi et formuler un plan de restructuration souverain.",
    problem:
      "Prolifération de filières tertiaires saturées sans débouchés, déficit critique d'ingénieurs, de techniciens supérieurs et de spécialistes de santé publique.",
    solution:
      "Évaluation diagnostique indépendante, matrice d'alignement macro-économique et refonte modulaire des maquettes pédagogiques.",
    deliverables: [
      "Rapport national d'audit des filières",
      "Matrice des compétences critiques 2026-2035",
      "Guide méthodologique de restructuration académique",
      "Feuille de route ministérielle de transition"
    ],
    targetInstitutions: [
      "Ministères de l'Enseignement supérieur",
      "Conseils nationaux de l'éducation",
      "Conférences des recteurs et présidents d'université"
    ],
    publics: [
      "Ministères de l'Enseignement supérieur",
      "Conseils nationaux de l'éducation",
      "Conférences des recteurs et présidents d'université"
    ],
    statsOrIndicators: [
      { label: "Analyse des cursus", value: "360°" },
      { label: "Horizon d'impact", value: "5 à 10 ans" },
      { label: "Approche", value: "Souveraine & concertée" }
    ],
    pathwaySteps: [
      { step: 1, title: "Diagnostic documentaire", desc: "Recensement exhaustif des diplômes délivrés et effectifs inscrits." },
      { step: 2, title: "Enquête employabilité", desc: "Croisement avec les besoins des ministères techniques et filières industrielles." },
      { step: 3, title: "Matrice d'arbitrage", desc: "Recommandations de renforcement, fusion ou réorientation de cursus." }
    ]
  },
  {
    slug: 'authentification-diplomes',
    category: 'confiance',
    categoryLabel: 'Sécuriser la confiance',
    title: "Authentification des diplômes & Registre national",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Mise en place d'un service national de vérification rapide, infalsifiable et mondialement reconnu pour les titres universitaires.",
    fullDescription:
      "Face à la fraude documentaire et aux lenteurs d'équivalence, CEIUE conçoit et déploie pour les États des guichets uniques d'authentification des diplômes nationaux, reliant universités, ministères, ambassades et employeurs.",
    problem:
      "Délais administratifs de plusieurs mois pour vérifier un titre, préjudice d'image pour les diplômes nationaux et risques accrus de fraude documentaire.",
    solution:
      "Création d'un protocole d'authentification centralisé, base sécurisée des lauréats et délivrance d'attestations certifiées infalsifiables.",
    deliverables: [
      "Architecture du registre national des diplômés",
      "Protocole de vérification pour ambassades et universités étrangères",
      "Plateforme numérique d'authentification interministérielle",
      "Cadre juridique et réglementaire de certification"
    ],
    targetInstitutions: [
      "Agences nationales d'assurance qualité",
      "Ministères des Affaires étrangères et consulats",
      "Directions des examens et concours universitaires",
      "Employeurs publics et privés"
    ],
    publics: [
      "Agences nationales d'assurance qualité",
      "Ministères des Affaires étrangères et consulats",
      "Directions des examens et concours universitaires",
      "Employeurs publics et privés"
    ],
    statsOrIndicators: [
      { label: "Temps de vérification cible", value: "< 72h" },
      { label: "Fiabilité documentaire", value: "100%" },
      { label: "Rayonnement", value: "International" }
    ],
    pathwaySteps: [
      { step: 1, title: "Dépôt de la demande", desc: "Numérisation du titre et horodatage de la requête institutionnelle." },
      { step: 2, title: "Vérification au registre", desc: "Contrôle automatique et validation humaine auprès de l'établissement émetteur." },
      { step: 3, title: "Attestation souveraine", desc: "Génération d'un certificat d'authenticité infalsifiable avec clé de vérification." }
    ]
  },
  {
    slug: 'bourses-ciblees',
    category: 'retenir',
    categoryLabel: 'Retenir et valoriser les talents',
    title: "Bourses ciblées & Filières stratégiques",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Transformation des budgets de bourses internationales en investissements orientés sur les spécialités indispensables à la nation.",
    fullDescription:
      "Plutôt que de financer des mobilités généralistes sans retour garanti, CEIUE structure des programmes de bourses fléchées sur les pénuries nationales (soins intensifs, cybersécurité, énergie, hydraulique) avec engagement de service civique.",
    problem:
      "Dispersion des deniers publics d'aide aux études sans correspondance avec les déficits critiques du pays et taux élevé de fuite des compétences.",
    solution:
      "Ciblage des filières prioritaires, sélection rigoureuse, conventionnement tripartite (État - Boursier - Institution d'accueil) et préparation au retour.",
    deliverables: [
      "Cartographie des spécialités prioritaires non couvertes localement",
      "Cahier des charges des bourses d'excellence ciblées",
      "Contrat d'engagement réciproque et suivi académique des boursiers",
      "Dispositif de suivi personnalisé à l'international"
    ],
    targetInstitutions: [
      "Agences nationales de bourses d'études",
      "Ministères des Finances et du Plan",
      "Grandes écoles et facultés partenaires"
    ],
    publics: [
      "Agences nationales de bourses d'études",
      "Ministères des Finances et du Plan",
      "Grandes écoles et facultés partenaires"
    ],
    statsOrIndicators: [
      { label: "Focalisation", value: "Filières prioritaires" },
      { label: "Cadre", value: "Engagement de retour" },
      { label: "Supervision", value: "Tripartite" }
    ]
  },
  {
    slug: 'retour-talents',
    category: 'retenir',
    categoryLabel: 'Retenir et valoriser les talents',
    title: "Dispositif national de retour des talents",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Passerelle institutionnelle pour organiser l'accueil, la reconnaissance des équivalences et l'affectation stratégique des diplômés de la diaspora.",
    fullDescription:
      "Le retour des talents ne se décrète pas : il s'organise. CEIUE bâtit avec les administrations et les filières économiques des mécanismes concrets d'insertion : pré-affectation, passerelles vers la fonction publique, plateformes d'opportunités et statut de chercheur invité.",
    problem:
      "Obstacles administratifs au retour, méconnaissance des besoins nationaux par la diaspora, perte sèche de cerveaux hautement qualifiés.",
    solution:
      "Guichet unique d'accueil, anticipation des postes dès la dernière année d'études et valorisation contractuelle des compétences de pointe.",
    deliverables: [
      "Plateforme souveraine de cartographie de la diaspora qualifiée",
      "Programme d'amorçage de carrière dans les administrations clés",
      "Mécanismes d'incitation à l'installation des enseignants-chercheurs",
      "Baromètre national du retour et de l'impact économique"
    ],
    targetInstitutions: [
      "Ministères de la Fonction publique et du Travail",
      "Hauts conseils de la diaspora",
      "Pôles de recherche et universités d'accueil",
      "Fédérations patronales et industrielles"
    ],
    publics: [
      "Ministères de la Fonction publique et du Travail",
      "Hauts conseils de la diaspora",
      "Pôles de recherche et universités d'accueil",
      "Fédérations patronales et industrielles"
    ],
    statsOrIndicators: [
      { label: "Objectif", value: "Inversion de la fuite des cerveaux" },
      { label: "Insertion", value: "Postes à fort impact" },
      { label: "Suivi", value: "Accompagnement à 24 mois" }
    ]
  },
  {
    slug: 'partenariats-universitaires',
    category: 'cooperer',
    categoryLabel: 'Coopérer avec le monde',
    title: "Partenariats universitaires internationaux",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Négociation d'accords interuniversitaires équilibrés, favorisant les échanges d'enseignants, la recherche conjointe et le transfert méthodologique.",
    fullDescription:
      "CEIUE assiste les universités africaines dans la négociation d'alliances académiques stratégiques avec les pôles d'excellence européens, asiatiques et américains, fondées sur une réelle réciprocité.",
    problem:
      "Accords souvent asymétriques, limités à l'accueil d'étudiants payants à l'étranger sans transfert de savoir ni montée en compétence des corps professoraux locaux.",
    solution:
      "Ingénierie contractuelle équitable, co-direction de thèses, mobilité croisée d'enseignants-chercheurs et laboratoires conjoints.",
    deliverables: [
      "Convention-cadre de coopération équilibrée",
      "Programme de mobilité croisée des enseignants",
      "Protocole de recherche partagée et co-financements",
      "Évaluation annuelle de l'équilibre des flux"
    ],
    targetInstitutions: [
      "Directions des relations internationales universitaires",
      "Ambassades et services de coopération culturelle",
      "Instituts de recherche et laboratoires panafricains"
    ],
    publics: [
      "Directions des relations internationales universitaires",
      "Ambassades et services de coopération culturelle",
      "Instituts de recherche et laboratoires panafricains"
    ],
    statsOrIndicators: [
      { label: "Principe", value: "Stricte réciprocité" },
      { label: "Transfert", value: "Savoirs & gouvernance" },
      { label: "Échelle", value: "Afrique & Monde" }
    ]
  },
  {
    slug: 'co-diplomations',
    category: 'cooperer',
    categoryLabel: 'Coopérer avec le monde',
    title: "Co-diplomations & Doubles diplômes souverains",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Création de cursus hybrides permettant aux étudiants d'obtenir un diplôme national et un diplôme étranger réputé sans déracinement prolongé.",
    fullDescription:
      "Permettre l'excellence académique sur place en concevant des maquettes partagées. L'étudiant effectue l'essentiel de sa formation dans son pays et bénéficie de séjours courts ciblés ou de modules délivrés par les partenaires extérieurs.",
    problem:
      "Coût prohibitif des études intégrales à l'étranger et perte quasi-systématique des étudiants les plus brillants au profit des pays hôtes.",
    solution:
      "Architecture curriculaire conjointe, validation des crédits ECTS/LMD partagés et délivrance simultanée de deux titres homologués.",
    deliverables: [
      "Maquettes pédagogiques binationales harmonisées",
      "Règlement des examens et jurys mixtes",
      "Modèle économique pérenne de financement par étudiant",
      "Dossier d'homologation auprès des autorités de tutelle"
    ],
    targetInstitutions: [
      "Facultés de médecine, écoles d'ingénieurs et instituts de gestion",
      "Universités partenaires internationales",
      "Ministères de tutelle"
    ],
    publics: [
      "Facultés de médecine, écoles d'ingénieurs et instituts de gestion",
      "Universités partenaires internationales",
      "Ministères de tutelle"
    ],
    statsOrIndicators: [
      { label: "Coût étudiant", value: "Divisé par 3 à 5" },
      { label: "Diplomation", value: "Double reconnaissance" },
      { label: "Ancrage local", value: "Garanti" }
    ]
  },
  {
    slug: 'cours-diplomants',
    category: 'former',
    categoryLabel: 'Former utilement',
    title: "Cours & Certifications diplômantes d'excellence",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Conception de parcours intensifs certifiants et diplômants adaptés aux transitions numériques, climatiques et managériales des États.",
    fullDescription:
      "Pour combler rapidement un déficit de compétences dans un secteur d'urgence (gestion de crise sanitaire, commande publique, cyberdéfense, IA appliquée), CEIUE conçoit des modules diplômants courts à haute intensité.",
    problem:
      "Lenteur de création des filières universitaires classiques (3 à 5 ans) face aux chocs technologiques et aux besoins immédiats des grands projets d'État.",
    solution:
      "Cycles exécutifs modulaires de 6 à 18 mois, validés par des comités scientifiques de haut vol et immédiatement applicables en milieu professionnel.",
    deliverables: [
      "Référentiel de compétences opérationnelles",
      "Plateforme de ressources pédagogiques mixtes",
      "Évaluation par mises en situation réelles",
      "Certifications visées par les autorités académiques"
    ],
    targetInstitutions: [
      "Instituts de formation professionnelle d'excellence",
      "Grandes entreprises publiques et privées",
      "Administrations sectorielles"
    ],
    publics: [
      "Instituts de formation professionnelle d'excellence",
      "Grandes entreprises publiques et privées",
      "Administrations sectorielles"
    ],
    statsOrIndicators: [
      { label: "Délai de déploiement", value: "< 6 mois" },
      { label: "Format", value: "Hybride & immersif" },
      { label: "Impact emploi", value: "Immédiat" }
    ]
  },
  {
    slug: 'formation-cadres-publics',
    category: 'cooperer',
    categoryLabel: 'Coopérer avec le monde',
    title: "Renforcement des capacités & Formation des cadres de l'État",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Programmes de perfectionnement pour les directeurs de ministères, recteurs et gestionnaires de l'enseignement supérieur.",
    fullDescription:
      "La réussite d'une réforme universitaire repose sur la solidité de ses pilotes. CEIUE forme les cadres des ministères et universités à la prospective budgétaire, à la gouvernance académique moderne et au pilotage de la recherche.",
    problem:
      "Manque d'outils de prospective académique, systèmes d'information universitaires morcelés et difficultés de pilotage des budgets par objectifs.",
    solution:
      "Séminaires exécutifs, résidences d'immersion stratégique, outillage de gestion et mise en réseau des hauts fonctionnaires africains de l'éducation.",
    deliverables: [
      "Programme d'entraînement à la décision universitaire",
      "Tableaux de bord de pilotage des effectifs et des budgets",
      "Guide de gestion des crises et du dialogue social académique",
      "Réseau d'entraide des gestionnaires universitaires"
    ],
    targetInstitutions: [
      "Secrétaires généraux de ministères",
      "Doyens, directeurs d'UFR et secrétaires généraux d'université",
      "Responsables des systèmes d'information académiques"
    ],
    publics: [
      "Secrétaires généraux de ministères",
      "Doyens, directeurs d'UFR et secrétaires généraux d'université",
      "Responsables des systèmes d'information académiques"
    ],
    statsOrIndicators: [
      { label: "Format", value: "Résidences & immersion" },
      { label: "Gouvernance", value: "Par les résultats" },
      { label: "Réseau", value: "Panafricain" }
    ]
  }
];

export const PILLARS = [
  {
    number: "01",
    title: "Stratégie nationale des compétences",
    summary: "Aligner l'offre de formation sur les besoins économiques et les filières industrielles souveraines du pays.",
    link: "/expertises/audit-offre-formation",
    metric: "Vision 10 ans",
    highlight: "Fin de l'inadéquation formation-emploi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    badge: "Gouvernance"
  },
  {
    number: "02",
    title: "Authentification des diplômes",
    summary: "Créer un service national infalsifiable, rapide et universellement reconnu pour restaurer la confiance.",
    link: "/expertises/authentification-diplomes",
    metric: "< 72h vérification",
    highlight: "Registre national unifié",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    badge: "Confiance & Sécurité"
  },
  {
    number: "03",
    title: "Bourses ciblées & filières manquantes",
    summary: "Orienter les budgets publics de mobilité vers les spécialités critiques absentes du paysage national.",
    link: "/expertises/bourses-ciblees",
    metric: "100% fléchées",
    highlight: "Investissement structurant",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    badge: "Capital Humain"
  },
  {
    number: "04",
    title: "Retour sécurisé des talents",
    summary: "Organiser les passerelles concrètes pour réintégrer les compétences de la diaspora dans l'économie nationale.",
    link: "/expertises/retour-talents",
    metric: "Suivi 24 mois",
    highlight: "Inversion de la fuite des cerveaux",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    badge: "Rétention Nationale"
  }
];

export const CASE_STUDIES = [
  {
    id: "dakar-sante",
    title: "Pôle d'Excellence Biomédical & Santé Publique",
    country: "Sénégal & Afrique de l'Ouest",
    tag: "Filières prioritaires",
    metric: "450 bourses ciblées",
    summary: "Création d'un cursus de spécialisation conjointe en virologie et bioproduction avec contrat d'insertion obligatoire au sein des laboratoires nationaux.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    impact: "94% de taux de retour effectif après le cursus international."
  },
  {
    id: "kigali-cyber",
    title: "Campus Panafricain de Souveraineté Numérique",
    country: "Rwanda & Région des Grands Lacs",
    tag: "Co-diplomation",
    metric: "Double diplôme d'État",
    summary: "Négociation d'une convention de co-diplomation de Master en cybersécurité et gouvernance de l'IA avec reconnaissance bilatérale sans déclassement.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    impact: "100% des diplômés recrutés dans les infrastructures régaliennes."
  },
  {
    id: "abidjan-agritech",
    title: "Institut National d'Ingénierie Rurale & Énergie",
    country: "Côte d'Ivoire & UEMOA",
    tag: "Registre & Certification",
    metric: "< 48h homologation",
    summary: "Déploiement du registre unifié infalsifiable pour 12 établissements publics, éliminant totalement les délais d'authentification des diplômes agricoles.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    impact: "Zéro litige d'équivalence recensé lors des recrutements d'État."
  }
];

export const METHOD_STEPS = [
  {
    number: "01",
    name: "Diagnostic",
    duration: "Semaines 1-4",
    desc: "État des lieux exhaustif de l'offre de formation, flux d'étudiants, dépenses de bourses et besoins des secteurs employeurs.",
    keyDeliverable: "Rapport de diagnostic & cartographie des déficits de compétences"
  },
  {
    number: "02",
    name: "Priorisation",
    duration: "Semaines 5-8",
    desc: "Définition avec les autorités de tutelle des filières vitales (santé, technologies, agronomie, énergie, droit public) à préserver ou développer.",
    keyDeliverable: "Matrice souveraine d'arbitrage et de priorisation"
  },
  {
    number: "03",
    name: "Architecture",
    duration: "Semaines 9-16",
    desc: "Conception détaillée des maquettes de formation, des protocoles de diplômes ou des dispositifs de retour des boursiers.",
    keyDeliverable: "Schéma directeur pédagogique & juridique"
  },
  {
    number: "04",
    name: "Négociation",
    duration: "Semaines 17-24",
    desc: "Structuration et négociation des accords bilatéraux avec les universités étrangères de rang mondial et les agences multilatérales.",
    keyDeliverable: "Conventions internationales équilibrées & protocoles de confiance"
  },
  {
    number: "05",
    name: "Déploiement",
    duration: "Mois 7-12",
    desc: "Mise en service opérationnelle des plateformes de vérification, lancement des cohortes de boursiers et formation des cadres de tutelle.",
    keyDeliverable: "Guichet opérationnel & premières promotions engagées"
  },
  {
    number: "06",
    name: "Impact",
    duration: "En continu",
    desc: "Évaluation du taux de retour effectif, audit de conformité des diplômes délivrés et pérennisation des capacités administratives locales.",
    keyDeliverable: "Tableau de bord d'impact & baromètre de souveraineté académique"
  }
];

export const AUDIENCES = [
  {
    id: "gouvernements",
    title: "Gouvernements & Ministères",
    role: "Tutelle, souveraineté et politique publique",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80",
    needs: [
      "Aligner les budgets universitaires sur la croissance nationale",
      "Éradiquer la fraude aux diplômes dans les recrutements d'État",
      "Développer des filières scientifiques et médicales prioritaires",
      "Former les cadres dirigeants de l'administration"
    ]
  },
  {
    id: "agences-bourses",
    title: "Agences nationales de bourses",
    role: "Financement des talents et équité",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    needs: [
      "Flécher les allocations vers des spécialités stratégiques",
      "Garantir le suivi académique des étudiants à l'étranger",
      "Mettre en place des mécanismes contractuels de retour au pays",
      "Optimiser les coûts de formation à l'international"
    ]
  },
  {
    id: "universites",
    title: "Universités & Grandes Écoles",
    role: "Excellence pédagogique et recherche",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    needs: [
      "Moderniser l'offre de formation vers les standards internationaux",
      "Signer des partenariats équilibrés avec des universités mondiales",
      "Créer des co-diplomations prestigieuses sur le sol national",
      "Délivrer des diplômes sécurisés et vérifiables instantanément"
    ]
  },
  {
    id: "ambassades",
    title: "Ambassades & Partenaires internationaux",
    role: "Coopération bilatérale et visas",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
    needs: [
      "Vérifier en moins de 72h la véracité des diplômes présentés",
      "Faciliter la mobilité académique équitable et transparente",
      "Soutenir des projets de coopération de long terme",
      "Éviter les ruptures de cursus et l'irrégularité documentaire"
    ]
  },
  {
    id: "organisations",
    title: "Organisations internationales & Bailleurs",
    role: "Développement des capacités",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    needs: [
      "Financer des réformes de fond plutôt que des projets éphémères",
      "Mesurer l'impact réel sur l'insertion professionnelle",
      "Favoriser l'intégration régionale des systèmes d'enseignement",
      "Pérenniser les compétences locales"
    ]
  },
  {
    id: "entreprises",
    title: "Acteurs économiques & Industriels",
    role: "Recrutement et compétitivité",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    needs: [
      "Trouver sur place des ingénieurs, techniciens et juristes qualifiés",
      "Certifier sans délai les CV et diplômes des candidats",
      "Participer à la définition des compétences de demain",
      "Créer des chaires industrielles d'excellence"
    ]
  }
];

export const RESOURCES = [
  {
    slug: 'note-strategique-souverainete-competences',
    title: "Note d'orientation : De la fuite des cerveaux à la circulation des compétences",
    theme: "Politique publique",
    date: "Septembre 2026",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Analyse des mécanismes permettant de transformer la mobilité étudiante internationale en levier d'industrialisation nationale.",
    readTime: "8 min de lecture",
    topics: ["Bourses d'État", "Diaspora", "Insertion locale"]
  },
  {
    slug: 'guide-audit-offre-formation',
    title: "Cadre méthodologique : L'audit national de l'offre de formation",
    theme: "Méthode CEIUE",
    date: "Août 2026",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Guide pratique destiné aux ministères pour évaluer l'adéquation entre maquettes universitaires et besoins sectoriels à 10 ans.",
    readTime: "12 min de lecture",
    topics: ["Cartographie", "Réforme LMD", "Filières critiques"]
  },
  {
    slug: 'livre-blanc-confiance-academique',
    title: "Livre blanc : Sécuriser la confiance académique en Afrique",
    theme: "Confiance & Diplômes",
    date: "Juillet 2026",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Comment un registre national unifié et interopérable neutralise la fraude documentaire et accélère les équivalences internationales.",
    readTime: "10 min de lecture",
    topics: ["Registre souverain", "Vérification consulaire", "Normes"]
  },
  {
    slug: 'schema-co-diplomation-internationale',
    title: "Protocole type : La co-diplomation équilibrée",
    theme: "Coopération internationale",
    date: "Juin 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Modèle contractuel de partage des crédits et des frais de scolarité entre universités africaines et partenaires mondiaux.",
    readTime: "7 min de lecture",
    topics: ["Double diplôme", "Réciprocité", "Transfert pédagogique"]
  }
];
