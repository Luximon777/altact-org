Voici le code complet à copier-coller dans `MembresPage.jsx` :
Action: $ cat /tmp/altact-org/altact-org-main/frontend/src/components/MembresPage.jsx
Observation: import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Crown,
  Compass,
  Lightbulb,
  Heart,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Award,
  Lock,
  Globe,
  GraduationCap
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

// ============== DONNÉES DES MEMBRES ==============
const COMITES = [
  {
    id: "bureau",
    nom: "Bureau",
    description: "Instance décisionnaire - Représentation légale",
    icon: Crown,
    color: "amber",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "Président – Représentant légal",
        role: "Décisionnaire",
        soustitre: "Fondateur | Architecte de projets à impact sociétal",
        photo: null,
        bio: `Chitrasen Luximon est un dirigeant engagé dans la transformation des modèles d'insertion professionnelle et dans l'émergence de solutions structurantes face aux mutations profondes du marché du travail. Président et représentant légal de l'association ALT&ACT, il conduit une stratégie orientée vers l'intérêt général, articulant innovation sociale, sécurisation des parcours et développement du capital humain.

Son positionnement dépasse le cadre d'une gouvernance associative classique : il s'inscrit dans une logique d'ingénierie systémique visant à rapprocher les besoins des territoires, les dynamiques économiques et les trajectoires professionnelles des citoyens.`,
        vision: `Il défend une conception moderne de l'employabilité, considérée comme un levier de cohésion sociale, de compétitivité et de stabilité démocratique. Son action contribue à structurer des réponses capables d'anticiper les transformations des compétences, tout en renforçant la capacité d'adaptation des organisations et des individus.`,
        realisations: `Au cours de son parcours, Chitrasen Luximon a accompagné plus de 2 000 personnes dans leurs transitions professionnelles, contribuant à renforcer leur capacité d'action, leur estime de soi et leur inscription durable dans l'emploi. Fondateur d'une structure de conseil spécialisée dans la gestion de carrière et la formation pour adultes, il a conçu et piloté des dispositifs d'accompagnement destinés à des publics hétérogènes.`,
        signature: `Sa démarche repose sur une conviction structurante : la stabilité des sociétés repose en partie sur la capacité des individus à trouver une place reconnue et utile dans le monde professionnel. Son approche conjugue exigence méthodologique, responsabilité éthique et vision de long terme.`,
        formation: ["Master II en ingénierie de la formation et des compétences", "Accréditations en analyse des types psychologiques", "Identification des talents et dynamiques collectives"],
        expertise: ["Gouvernance et direction de projets à impact", "Stratégies d'employabilité et politiques de compétences", "Ingénierie de formation", "Lecture systémique des parcours", "Innovation sociale appliquée au travail", "Pilotage d'écosystèmes partenariaux"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Secrétaire",
        role: "Décisionnaire",
        soustitre: "Experte en leadership, transformation organisationnelle et management stratégique",
        photo: null,
        bio: `Anne-Marie Schwemmer est une dirigeante et stratège reconnue pour sa capacité à structurer, organiser et piloter des projets complexes au sein d'écosystèmes professionnels variés. En tant que Secrétaire au sein de l'Association ALT&ACT, elle assume des responsabilités institutionnelles fortes en matière de conformité, de structuration administrative et de coordination des instances décisionnelles.

Sa posture conjugue rigueur opérationnelle, vision systémique et leadership collaboratif, ce qui en fait un atout majeur pour le développement de dispositifs d'impact sociétal et de partenariats stratégiques.`,
        vision: `Anne-Marie est animée par une vision intégrée du management, où la performance organisationnelle se nourrit de la qualité des processus internes, de la cohérence des pratiques et de la mobilisation du capital humain.

Dans une perspective européenne et territoriale, elle est en mesure de structurer les mécanismes de gouvernance et les cadres de décision, assurer l'articulation des acteurs, des partenaires et des parties prenantes, ancrer les projets dans des approches durables et intégrées, et piloter des démarches de changement alignées avec les politiques publiques.`,
        realisations: `Anne-Marie s'est construite une expertise solide au croisement du management, du leadership et du développement organisationnel, à travers l'animation de communautés professionnelles et de réseaux, la facilitation de transformations internes, la coordination de projets transversaux impliquant des acteurs multiples, et l'accompagnement de dirigeants dans leurs dynamiques de leadership.

Elle combine une compréhension fine des enjeux humains avec une pratique affirmée des processus décisionnels structurés.`,
        signature: `Anne-Marie place la qualité de l'organisation interne au cœur de la performance et de l'impact durable des projets. Son approche s'appuie sur une lecture systémique des dynamiques collaboratives et institutionnelles, visant à sécuriser les processus tout en favorisant l'innovation et la réactivité. Elle sait articuler la rigueur des cadres de gouvernance avec la créativité requise pour impulser des transformations profondes.`,
        expertise: ["Gouvernance institutionnelle", "Coordination de projets", "Leadership collaboratif", "Transformation organisationnelle", "Animation de réseaux", "Pilotage stratégique", "Conformité administrative", "Pratiques managériales"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Trésorière",
        role: "Décisionnaire",
        soustitre: "Experte en pilotage financier, contrôle de gestion et optimisation des organisations",
        photo: null,
        bio: `Chitra Dorffer est une dirigeante spécialisée dans les fonctions financières stratégiques et le contrôle de gestion au sein d'organisations structurées. En tant que Trésorière de l'Association ALT&ACT, elle est responsable de la structuration des processus financiers, de la conformité budgétaire, de la transparence des comptes et de la sécurisation des pratiques de gestion.

Son expertise repose sur une expérience robuste en pilotage financier, reporting, optimisation des performances et gestion des risques économiques, compétences essentielles pour accompagner des projets à fort impact et des programmes multi-partenaires.`,
        realisations: `Chitra a développé son expertise principalement dans des environnements exigeants au plan financier et organisationnel. Elle occupe actuellement un poste de contrôle de gestion et de responsabilité financière au sein d'une grande entreprise industrielle, où elle est en charge de l'élaboration et du suivi des budgets, la production de tableaux de bord de performance, l'analyse des écarts et la proposition de mesures correctives, et l'intégration d'indicateurs clés pour améliorer la performance opérationnelle et financière.

Cette expérience lui confère une vision à la fois analytique et stratégique des enjeux financiers, ce qui est déterminant pour assurer la pérennité et la crédibilité d'organisations structurées.`,
        vision: `Chitra Dorffer apporte à la gouvernance d'ALT&ACT une maîtrise des enjeux de transparence financière essentielle pour les financeurs publics et institutionnels, une capacité à structurer les processus budgétaires et de reporting pour les projets multi-sources, une lecture stratégique des risques économiques et de conformité, et une expertise en pilotage des performances financières au service de l'impact social.

Par sa fonction de trésorière, elle sécurise les choix financiers, garantit l'intégrité des pratiques de gestion et favorise une allocation optimale des ressources dans le cadre des projets structurants de l'association.`,
        signature: `Son approche se caractérise par une forte orientation vers la fiabilité des données financières et des processus de contrôle interne, une capacité à connecter la performance économique avec les ambitions sociales et les objectifs de transformation, et un leadership pragmatique orienté vers la performance durable des projets et des organisations. Dans un contexte européen ou institutionnel, cette expertise renforce la crédibilité de l'association auprès des partenaires financiers, des bailleurs de fonds publics ou privés, et des réseaux de coopération.`,
        expertise: ["Contrôle de gestion stratégique", "Pilotage budgétaire", "Responsabilité financière", "Supervision comptable", "Optimisation des processus", "Tableaux de bord de performance", "Gestion des risques économiques", "Conformité financière"]
      }
    ]
  },
  {
    id: "direction",
    nom: "Comité de direction",
    description: "Membres fondateurs - Orientations stratégiques",
    icon: Compass,
    color: "teal",
    membres: [
      {
        nom: "Chitrasen Luximon",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        soustitre: "Architecte de projets à impact sociétal",
        photo: null,
        bio: `Initiateur du projet RE'ACTIF PRO et de la méthode VSI. Son expérience opérationnelle nourrit une lecture stratégique des enjeux liés aux tensions sur les compétences, aux transitions professionnelles accélérées, et à la nécessité de modèles d'accompagnement plus prédictifs et personnalisés.`,
        expertise: ["Innovation", "Insertion professionnelle", "Développement territorial", "Ingénierie de formation"]
      },
      {
        nom: "Chitra Dorffer",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice engagée dans l'inclusion et l'accessibilité.",
        expertise: ["Inclusion", "Accessibilité", "Gestion"]
      },
      {
        nom: "Anne-Marie Schwemmer",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        photo: null,
        bio: "Co-fondatrice impliquée dans la structuration du dispositif.",
        expertise: ["Organisation", "Développement", "Partenariats"]
      },
      {
        nom: "Sandrine Ratolojanahary",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        soustitre: "Professionnelle de l'éducation | Actrice de l'engagement sociétal",
        photo: null,
        bio: `Sandrine Ratolojanahary est une professionnelle de l'éducation dont le parcours s'inscrit à la convergence des enjeux pédagogiques, environnementaux et sociétaux. Professeure des écoles, elle contribue quotidiennement au développement des compétences fondamentales, à la structuration des apprentissages et à la formation du citoyen.

Son engagement dépasse le cadre strict de l'enseignement : ses premières expériences en tant qu'éco-conseillère ainsi que son implication dans des initiatives humanitaires et éducatives à Madagascar témoignent d'une sensibilité affirmée aux questions de développement durable, de transmission et d'égalité des chances.`,
        realisations: `En tant que professeure des écoles, Sandrine mobilise une expertise pédagogique centrée sur l'acquisition des savoirs fondamentaux, l'accompagnement des trajectoires d'apprentissage, l'adaptation aux besoins diversifiés des publics, et le développement de l'autonomie et de la confiance chez les apprenants.

Son entrée dans la vie professionnelle par l'éco-conseil lui a permis d'intégrer très tôt une lecture systémique des enjeux environnementaux et la pédagogie du changement de comportement.

Son implication dans des actions humanitaires et éducatives à Madagascar traduit une capacité à intervenir dans des contextes interculturels et à forte utilité sociale, développant des initiatives éducatives et des actions de soutien aux publics vulnérables.`,
        vision: `La présence de Sandrine au sein des membres fondateurs participe à l'équilibre de la gouvernance en y intégrant une expertise essentielle : celle des dynamiques d'apprentissage et de construction des compétences dès les premières étapes de la vie.

Elle apporte notamment une lecture pédagogique des parcours, une sensibilité aux enjeux d'égalité des opportunités, une culture de la transmission, une approche préventive des fragilités sociales, et une capacité à relier éducation et insertion professionnelle.`,
        signature: `Son parcours reflète une conviction forte : le développement des individus repose sur un accès équitable à l'éducation, à l'accompagnement et aux opportunités. Elle inscrit son action dans une logique de contribution durable à la société, fondée sur la transmission des savoirs et la responsabilisation. Sa posture conjugue exigence éducative, engagement humain et vision de long terme.`,
        expertise: ["Pédagogie et transmission", "Développement des compétences", "Éco-conseil", "Développement durable", "Engagement humanitaire", "Interculturalité", "Égalité des chances", "Accompagnement éducatif"]
      },
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        soustitre: "RSSI (CISO) MES-DMP | Caisse nationale de l'Assurance Maladie",
        photo: null,
        bio: `Anthony Ratolojanahary est un professionnel confirmé dans le domaine de la cybersécurité, de la protection des données et du management des risques liés aux systèmes d'information. Il occupe actuellement le poste de RSSI (CISO) du domaine MES (Mon Espace Santé) - DMP (Dossier Médical Partagé) au sein de la Caisse nationale de l'Assurance Maladie, où il exerce dans un environnement à haute exigence de sécurité, de conformité réglementaire et de fiabilité des systèmes critiques.

Cette expertise technique et stratégique confère une dimension essentielle à la gouvernance d'ALT&ACT, notamment lorsque l'organisation s'inscrit dans des projets numériques, des démarches d'innovation ou des configurations multi-partenaires où la sécurité des données, la confidentialité et la conformité juridique sont des prérequis indispensables.`,
        realisations: `Anthony a construit son expérience professionnelle au cœur d'enjeux opérationnels où la cybersécurité ne se limite pas à la technique, mais devient un vecteur de confiance organisationnelle et de pérennité pour les opérations critiques.

Il assure le pilotage des risques de cybersécurité au sein d'organisations publiques, la sécurisation des infrastructures informatiques avec une attention particulière aux processus de protection des données personnelles, et la conformité réglementaire essentielle pour répondre aux exigences des financeurs européens ou institutionnels.`,
        vision: `La présence d'Anthony dans l'équipe fondatrice renforce l'association sur plusieurs plans : sécurité des processus numériques avec capacité à anticiper et maîtriser les vulnérabilités, conformité réglementaire notamment en matière de traitement des données personnelles (RGPD), et crédibilité technique auprès des partenaires institutionnels exigeants.`,
        signature: `Anthony conjugue rigueur technique et compréhension des enjeux de gouvernance : il sait faire le lien entre les exigences opérationnelles de la sécurité informatique et les impératifs stratégiques des projets à impact sociétal. Cette capacité à naviguer entre le complexe technologique et le besoin de fiabilité organisationnelle est un atout stratégique majeur pour ALT&ACT dans un contexte où les données, la confiance et la sécurité numérique deviennent des enjeux centraux.`,
        expertise: ["Cybersécurité", "Protection des données", "Gestion des risques IT", "Conformité RGPD", "Sécurité des systèmes d'information", "Résilience organisationnelle", "Gouvernance informatique"]
      },
      {
        nom: "Rajwantee Lepain",
        fonction: "Membre fondatrice",
        role: "Décisionnaire",
        soustitre: "Psychologue clinicienne | Actrice de l'accompagnement humain et de la transformation sociale",
        photo: null,
        bio: `Rajwantee Lepain est une psychologue clinicienne établie à Strasbourg, dont l'activité professionnelle repose sur l'accompagnement psychologique des individus, l'analyse des dynamiques humaines et la facilitation de processus de changement profond. Son expertise clinique, orientée vers l'écoute, la compréhension des trajectoires de vie et l'accompagnement des transitions personnelles, fait d'elle une contributrice essentielle aux approches humaines, sociales et systématiques portées par ALT&ACT.

Son rôle transcende une simple fonction clinique : par sa compréhension fine des facteurs humains au cœur des transitions, elle constitue une ressource stratégique pour des projets d'envergure visant à articuler performance sociale, cohésion et développement des capacités humaines.`,
        realisations: `En tant que psychologue clinicienne, Rajwantee intervient auprès de populations très diverses pour évaluer et soutenir les processus psychiques en contexte de changement ou de stress, accompagner les transitions de vie (personnelles, professionnelles, identitaires), faciliter la construction d'un sens cohérent des expériences vécues, et aider à la mobilisation des ressources internes et relationnelles.

Son expertise repose sur une posture clinique fondée sur l'écoute active et empathique, l'analyse des facteurs psychologiques structurels, l'évaluation des blocages et leviers de transformation, et la construction d'espaces de dialogue et de reconstruction identitaire.`,
        vision: `La contribution de Rajwantee à la gouvernance enrichit la stratégie de l'association en apportant une compréhension fine des facteurs humains au cœur de l'employabilité, une capacité à intégrer des dimensions psychologiques et systémiques dans les parcours d'accompagnement, une expertise essentielle dans la construction de dispositifs adaptés à la personne, et une ressource stratégique pour penser l'impact social en termes d'effets durables sur le bien-être, la confiance et les trajectoires de vie.

Cette dimension est particulièrement recherchée dans les projets européens ou institutionnels portant sur l'inclusion, le développement des compétences ou le renforcement des capacités des publics.`,
        signature: `Rajwantee incarne une approche centrée sur l'humain dans sa globalité, plaçant l'expérience subjective et les ressources internes comme des vecteurs indispensables de construction de trajectoires stables et durables. Cette posture s'articule avec les valeurs portées par ALT&ACT : humanisme, responsabilité, équité et transformation positive. Elle constitue une voix qualifiée pour connecter les dimensions psychologiques aux enjeux sociétaux.`,
        expertise: ["Psychologie clinique", "Accompagnement des transitions", "Dynamiques humaines", "Développement personnel", "Analyse systémique", "Écoute empathique", "Reconstruction identitaire", "Facteurs d'employabilité"]
      },
      {
        nom: "Sébastien Ehlenberger",
        fonction: "Membre fondateur",
        role: "Décisionnaire",
        soustitre: "Manager de projets | Expert en coordination intersectorielle",
        photo: null,
        bio: `Sébastien E. est un professionnel confirmé dans le pilotage de projets, la coordination d'équipes et la mise en œuvre d'initiatives collaboratives. Son parcours repose sur l'acquisition d'une expertise opérationnelle riche, orientée vers l'efficacité organisationnelle, la structuration de processus et l'animation de partenariats.

Présent au sein de la gouvernance d'ALT&ACT en tant que membre fondateur, il contribue à renforcer la capacité de l'association à concevoir, déployer et piloter des projets structurants à impact social, avec une lecture pragmatique des exigences organisationnelles et des dynamiques collectives.`,
        realisations: `Le parcours de Sébastien se développe dans des environnements où le pilotage de projet, la coordination multi-acteurs et l'élaboration de stratégies d'action concrètes sont centraux.

Il assure la gestion de projets complexes impliquant de multiples parties prenantes, la coordination intersectorielle garantissant l'alignement des objectifs et des livrables, l'animation de projets structurants intégrant des stratégies de communication et de mobilisation des ressources, et l'accompagnement de transformations organisationnelles avec une attention particulière à l'efficacité collective.`,
        vision: `La présence de Sébastien au sein du conseil fondateur constitue un atout stratégique pour assurer la cohérence opérationnelle entre les orientations stratégiques et leur mise en œuvre effective, renforcer la gouvernance interne par une approche structurée du pilotage de projets, faciliter les coopérations avec des acteurs institutionnels, économiques et associatifs, et soutenir la professionnalisation des processus de coordination pour des programmes ambitieux.

Cette position lui permet de contribuer à l'émergence d'un cadre d'action robuste, capable de soutenir des projets complexes et à fort impact social.`,
        signature: `Sébastien fonctionne à l'interface entre direction stratégique et opérationnalité. Il sait traduire les ambitions institutionnelles — conceptuelles ou politiques — en plans d'action clairs, mesurables et alignés sur les objectifs collectifs. Il favorise une approche inclusive, structurée et axée résultats, tout en gardant une lecture fine des dynamiques organisationnelles qui influencent la qualité de la mise en œuvre.`,
        expertise: ["Pilotage de projet", "Coordination opérationnelle", "Gestion multi-acteurs", "Dispositifs collaboratifs", "Leadership transversal", "Communication structurée", "Transformation organisationnelle"]
      }
    ]
  },
  {
    id: "pilotage",
    nom: "Comité de pilotage",
    description: "Instance consultative - Expertise et conseil",
    icon: Lightbulb,
    color: "purple",
    membres: [
      {
        nom: "Anthony Ratolojanahary",
        fonction: "Cybersécurité & données sensibles",
        role: "Consultatif",
        soustitre: "RSSI (CISO) MES-DMP | Caisse nationale de l'Assurance Maladie",
        photo: null,
        bio: `Anthony Ratolojanahary est un professionnel confirmé dans le domaine de la cybersécurité, de la protection des données et du management des risques liés aux systèmes d'information. Il occupe actuellement le poste de RSSI (CISO) du domaine MES (Mon Espace Santé) - DMP (Dossier Médical Partagé) au sein de la Caisse nationale de l'Assurance Maladie, où il exerce dans un environnement à haute exigence de sécurité, de conformité réglementaire et de fiabilité des systèmes critiques.`,
        vision: `Au sein du Comité de pilotage, il apporte son expertise pour sécuriser les processus numériques, garantir la conformité réglementaire (RGPD, normes internationales), et renforcer la crédibilité technique auprès des partenaires institutionnels.`,
        signature: `Anthony conjugue rigueur technique et compréhension des enjeux de gouvernance, faisant le lien entre les exigences opérationnelles de la sécurité informatique et les impératifs stratégiques des projets à impact sociétal.`,
        expertise: ["Cybersécurité", "RGPD", "Protection des données", "Architecture technique", "Gestion des risques IT", "Conformité réglementaire"]
      },
      {
        nom: "Dr. Stéphano Vacher",
        fonction: "Stratégie, RSE, innovation responsable",
        role: "Consultatif",
        soustitre: "Expert en stratégie, RSE & innovation responsable",
        photo: null,
        bio: `Dr. Stéphano Vacher est un expert reconnu dans les domaines de la stratégie, de la responsabilité sociétale des organisations (RSE) et de l'innovation responsable. Il allie une expertise académique solide à une expérience pratique dans l'accompagnement des transformations organisationnelles et des projets complexes.

Au sein du Comité de pilotage consultatif d'ALT&ACT, il apporte une lecture stratégique des enjeux à l'interface entre innovation sociétale, gouvernance responsable et impacts durables, ce qui constitue un atout majeur pour structurer une démarche porteuse de sens et de résultats à l'échelle européenne.`,
        realisations: `Stéphano a construit une trajectoire riche qui croise réflexion stratégique, accompagnement des transformations et leadership éclairé sur les sujets d'innovation et de durabilité.

En stratégie et pilotage, il assure la conception et l'accompagnement de démarches stratégiques pour des organisations publiques, privées ou associatives, l'intégration des dimensions RSE et ESG dans les modèles de développement, et la structuration de feuilles de route pour des projets à impact.

En innovation responsable, il travaille à l'analyse critique des innovations technologiques au regard de leurs impacts sociétaux, éthiques et environnementaux, et à l'appui à la conception de dispositifs innovants dans une logique de gouvernance responsable.

En formation et conseil, il conçoit et anime des programmes de formation en management stratégique, innovation et responsabilité sociétale, et accompagne des dirigeants, conseils d'administration et équipes projets dans leur montée en compétences.`,
        vision: `Sa présence au sein du Comité de pilotage renforce la capacité de l'association à s'inscrire dans les cadres européens en matière de durabilité et de responsabilité sociétale, intégrer des exigences croissantes de transparence, de gouvernance éthique et de mesure d'impact, et construire une stratégie cohérente avec les attentes des institutions et des partenaires.

Il constitue une ressource stratégique pour articuler les ambitions de l'association avec les politiques publiques européennes en matière de transition écologique, d'emploi et de compétences.`,
        signature: `Stéphano incarne une approche exigeante et éclairée de la stratégie, où l'innovation ne se conçoit qu'à travers le prisme de la responsabilité, de l'éthique et de l'impact réel. Il apporte une capacité à conceptualiser des trajectoires complexes, à en mesurer les effets, et à les ajuster dans une logique d'amélioration continue.`,
        formation: ["Doctorat en stratégie et management de l'innovation", "Expertise en RSE et gouvernance responsable"],
        expertise: ["Stratégie organisationnelle", "RSE et ESG", "Innovation responsable", "Gouvernance éthique", "Transformation durable", "Formation en management", "Politiques publiques européennes", "Mesure d'impact"]
      }
    ]
  },
  {
    id: "ethique",
    nom: "Comité de mission éthique",
    description: "Garants de l'intégrité et de la conformité",
    icon: Heart,
    color: "green",
    membres: [
      {
        nom: "Jean-Marc Lepain",
        fonction: "Expert en finances publiques",
        role: "Consultatif indépendant",
        soustitre: "Expert international en finances publiques (PFM) | Ancien Conseiller FMI",
        photo: null,
        bio: `Jean-Marc Lepain est un expert international reconnu dans le domaine des finances publiques (Public Financial Management – PFM), avec une trajectoire de plus de 25 ans au service de la réforme des administrations publiques et du renforcement des capacités institutionnelles à grande échelle. Il évolue depuis plus d'une décennie au cœur des transformations institutionnelles, accompagnant des gouvernements, des organisations internationales et des bailleurs dans la modernisation de leurs systèmes financiers.

Il occupe récemment la fonction de Chief of Party pour un programme de soutien à la gestion des finances publiques au Sénégal, mené dans le cadre d'un partenariat entre USAID et Deloitte. À ce titre, il dirige un dispositif complexe mobilisant une équipe permanente et des consultants, avec un périmètre couvrant plusieurs ministères, la Cour des comptes, l'Assemblée nationale ainsi que des agences gouvernementales.`,
        realisations: `Son parcours se distingue par une forte dimension géographique et stratégique, avec des responsabilités exercées en Afrique, au Moyen-Orient et en Asie.

Au Sénégal (Direction de programme) : pilotage de réformes PFM à l'échelle de l'État, renforcement de la transparence budgétaire, modernisation des systèmes de gestion de la dette, introduction de budgets verts.

Au Brunei (Ministère des Finances) : création d'outils de prévision budgétaire, conception et déploiement d'un programme de consolidation budgétaire, mise en œuvre de réformes structurantes.

Au FMI (Conseiller régional) : diagnostics des systèmes de finances publiques, appui à la planification macro-budgétaire, renforcement des capacités auprès des ministères des finances.`,
        vision: `Jean-Marc Lepain présente un profil typique des architectes de réformes publiques, intervenant sur des programmes à fort impact systémique. Sa capacité à opérer dans des environnements gouvernementaux complexes et à piloter des transformations structurelles constitue un marqueur élevé de crédibilité institutionnelle.

Sa présence au sein du Comité de mission éthique envoie un signal particulièrement fort : culture avancée de la redevabilité et de la transparence, maîtrise des cadres de gouvernance exigés par les financeurs publics, compréhension des logiques d'impact et d'évaluation, et capacité à structurer des dispositifs robustes et conformes aux standards internationaux.`,
        signature: `Au-delà de la dimension éthique, il contribue implicitement à installer une discipline de gouvernance souvent observée dans les organisations à forte maturité institutionnelle. Son expérience auprès d'organisations internationales et de ministères positionne son expertise au niveau des standards attendus dans les programmes financés par les grands bailleurs.`,
        formation: ["Institut d'Études Politiques de Paris (Sciences Po)"],
        expertise: ["Finances publiques (PFM)", "Réformes budgétaires", "Direction de programmes internationaux", "Macro-fiscalité", "Transparence et redevabilité", "Renforcement institutionnel", "Coordination bailleurs", "Conduite du changement"]
      },
      {
        nom: "Alexandra Horst",
        fonction: "Psychologue clinicienne",
        role: "Consultatif indépendant",
        soustitre: "Psychologue clinicienne & praticienne en ressources humaines",
        photo: null,
        bio: `Alexandra Horst est une psychologue clinicienne libérale installée à Strasbourg, dotée d'une double formation en psychologie clinique et en gestion des ressources humaines, ce qui lui confère une expertise tant dans l'accompagnement psychologique que dans la compréhension des dynamiques humaines au sein des organisations.

Sa présence au sein du Comité de mission éthique d'ALT&ACT apporte une dimension réflexive, centrée sur l'humain, enrichissant les approches institutionnelles par une lecture des facteurs psychologiques, comportementaux et relationnels qui influencent les trajectoires individuelles et collectives.`,
        realisations: `Alexandra exerce en tant que psychologue clinicienne à Strasbourg, où elle accompagne des adultes et des adolescents dans leurs questionnements personnels, familiaux ou professionnels, à travers des consultations individuelles et des approches psychothérapeutiques adaptées.

Sa pratique repose sur un référentiel clinique intégratif, combinant des éléments analytiques, cognitifs, comportementaux et systémiques pour offrir un accompagnement souple et adapté. Elle adapte sa posture professionnelle à chaque personne, plutôt que de faire correspondre systématiquement le patient à un modèle unique de thérapie.

Elle s'est également positionnée dans des actions publiques, notamment via des prises de parole sur les enjeux de reconnaissance et de régulation de la profession de psychologue en France.`,
        vision: `Au sein du Comité de mission éthique, Alexandra apporte une expertise précieuse sur les dimensions humaines invisibles mais déterminantes des parcours d'accompagnement professionnel et social. Son intervention renforce notamment l'intégration systémique des facteurs psychologiques dans les dispositifs de soutien, l'élaboration de cadres d'accompagnement centrés sur la personne, la capacité à anticiper les blocages comportementaux ou émotionnels dans les trajectoires, et la qualité de l'écoute institutionnelle pour outiller les publics dans leurs transitions.

Ces contributions sont particulièrement pertinentes dans un contexte européen ou institutionnel où les projets axés sur l'impact social exigent une intégration solide des dimensions psychologiques et humaines.`,
        signature: `Alexandra combine rigueur clinique, bienveillance structurée et lecture stratégique des processus humains. Elle travaille à la fois sur la compréhension des dynamiques internes des individus, l'ajustement des comportements à des contextes de changement, et la transformation des relations interpersonnelles vers des conditions de réussite. Sa pratique clinique se complète d'une sensibilité organisationnelle acquise via sa double formation, ce qui la rend particulièrement adaptée à une mission éthique stratégique dans une organisation qui souhaite articuler impact social et compréhension profonde des personnes.`,
        formation: ["Master en Psychologie clinique interculturelle et transculturelle – Université de Strasbourg", "Master en Gestion des Ressources Humaines – IAE Strasbourg"],
        expertise: ["Psychologie clinique", "Accompagnement des transitions", "Approches intégratives", "Dynamiques interculturelles", "Gestion des ressources humaines", "Facteurs socio-émotionnels", "Lecture systémique", "Éthique clinique"]
      },
      {
        nom: "Martine Caillard-Dahl",
        fonction: "Productrice culturelle",
        role: "Consultatif indépendant",
        soustitre: "Productrice culturelle | Actrice de la création audiovisuelle",
        photo: null,
        bio: `Martine Caillard-Dahl est une professionnelle de la production audiovisuelle, reconnue pour son engagement dans la valorisation de projets culturels à dimension patrimoniale et sociétale. Fondatrice de la société Token Productions en 1995, elle a contribué au développement de contenus cinématographiques, documentaires et publicitaires, inscrivant son action dans une logique de transmission culturelle et de mise en récit des réalités humaines.

Son parcours témoigne d'une capacité à concevoir et piloter des projets créatifs impliquant des enjeux historiques, identitaires et territoriaux — une compétence particulièrement pertinente pour une organisation attentive à l'impact social et à la compréhension des sociétés.`,
        realisations: `Fondatrice de Token Productions à Strasbourg, elle a assuré la direction et gestion de projets audiovisuels avec des activités centrées sur la production de films documentaires, cinématographiques et publicitaires.

Productions notables : "Jean-Marie Tjibaou ou le rêve d'indépendance" (2000), œuvre s'inscrivant dans une réflexion historique et politique autour des dynamiques d'émancipation. "AD!, monnaie kanak" (1992) pour l'Agence de Développement de la Culture Kanak et le Musée territorial de Nouvelle-Calédonie.

Elle a également participé au Festival des arts du Pacifique (1984–1985), témoignant d'une sensibilité aux enjeux culturels internationaux ainsi qu'aux questions d'identité, de mémoire collective et de reconnaissance des peuples.`,
        vision: `Martine Caillard-Dahl incarne un profil de productrice engagée, capable de relier création artistique et compréhension des dynamiques sociales. Son expérience dans des projets à portée culturelle internationale contribue à enrichir la gouvernance par une perspective sensible aux représentations, aux identités et aux transformations sociétales.

Dans une structure à impact, ce type de parcours renforce l'ouverture aux dimensions culturelles des trajectoires humaines, la capacité à penser les projets dans leur profondeur sociétale, et l'intégration de la diversité des récits et des contextes.`,
        signature: `Au sein du Comité de mission éthique, elle apporte une lecture culturelle des transformations sociales, utile pour inscrire les actions dans une compréhension élargie des contextes humains, favoriser des approches respectueuses des identités et des parcours, et enrichir la réflexion éthique par une sensibilité aux représentations collectives. Sa présence participe ainsi à installer une gouvernance attentive non seulement aux résultats, mais aussi au sens et à la portée sociétale des initiatives.`,
        expertise: ["Production audiovisuelle", "Projets culturels", "Patrimoine et récits sociétaux", "Coordination artistique", "Interculturalité", "Médiation culturelle", "Mémoire collective", "Identités et territoires"]
      },
      {
        nom: "Laxsounee Bhoodun",
        fonction: "Juriste",
        role: "Consultatif indépendant",
        soustitre: "Juriste | Experte en sécurisation juridique et conformité",
        photo: null,
        bio: `Laxsounee Bhoodun est juriste au sein d'un organisme de protection sociale, où elle intervient sur des problématiques juridiques exigeant rigueur, maîtrise réglementaire et sens de la responsabilité institutionnelle. Son expertise contribue à sécuriser les cadres d'action, à garantir la conformité des pratiques et à accompagner les organisations dans la compréhension de leurs obligations légales.

Au sein du Comité de mission éthique d'ALT&ACT, elle apporte une lecture structurante des enjeux juridiques, essentielle pour toute organisation engagée dans des projets à impact social et amenée à interagir avec des partenaires publics ou institutionnels.`,
        realisations: `En tant que juriste au sein d'un organisme de protection sociale (CARSAT), son activité s'inscrit dans un environnement fortement normé, caract
... [stdout truncated]
Exit code: 0
