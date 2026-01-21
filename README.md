# Site Institutionnel Alt&Act

![Alt&Act Logo](https://customer-assets.emergentagent.com/job_institut-fusion/artifacts/n4nzcgj5_LOGOS%202.png)

## 🎯 À propos

Site web institutionnel de **Alt&Act**, association d'intérêt général œuvrant pour l'insertion professionnelle sans barrières, fondée sur des valeurs humanistes et une gouvernance démocratique.

**Adresse** : 23 rue de la Croix, 67201 Eckbolsheim, France

## ✨ Fonctionnalités

- 🏠 **Hero Section** - Présentation avec statistiques animées
- 🎯 **Mission & Vision** - 3 piliers d'action (Innovation Sociale, Accompagnement, Impact Systémique)
- 💼 **Nos Actions** - 6 services (Insertion, Transitions, Innovation, Éthique, Handicap, Structures Coopératives)
- ⚖️ **Gouvernance** - Principes sociocratiques et 4 organes de gouvernance
- 🔬 **Méthodologie** - Approche recherche-action en 6 phases
- 📊 **Impact** - Métriques et témoignages
- 👥 **Devenir Membre** - 4 types de membres (Actif, Bienfaiteur, Honoraire, Correspondant)
- 📧 **Contact** - Formulaire de contact avec coordonnées complètes

## 🛠️ Technologies

- **React** 19.0.0
- **Tailwind CSS** 3.4.17
- **Shadcn/UI** - Composants UI modernes
- **Lucide React** - Icônes
- **React Router** - Navigation
- **Sonner** - Notifications toast

## 🚀 Installation

### Prérequis

- Node.js v16+
- Yarn ou NPM

### Étapes

```bash
# Cloner le repository
git clone https://github.com/LuximonIT/alt-act-site.git
cd alt-act-site

# Installer les dépendances
cd frontend
yarn install
# ou
npm install

# Lancer le serveur de développement
yarn start
# ou
npm start

# Ouvrir votre navigateur
# http://localhost:3000
```

## 📁 Structure du Projet

```
frontend/
├── public/
│   └── index.html                  # Template HTML
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Barre de navigation
│   │   ├── HeroSection.jsx         # Section hero
│   │   ├── MissionSection.jsx      # Mission & vision
│   │   ├── ActionsSection.jsx      # Actions & services
│   │   ├── GovernanceSection.jsx   # Gouvernance
│   │   ├── MethodologySection.jsx  # Méthodologie
│   │   ├── ImpactSection.jsx       # Impact & métriques
│   │   ├── MembershipSection.jsx   # Types de membres
│   │   ├── ContactSection.jsx      # Formulaire contact
│   │   └── Footer.jsx              # Footer
│   ├── mock/
│   │   └── altactData.js          # Données mockées
│   ├── App.js                      # Point d'entrée
│   ├── App.css                     # Styles globaux
│   └── index.css                   # Configuration Tailwind
├── package.json
└── tailwind.config.js
```

## 🎨 Personnalisation

### Modifier les données

Éditez `src/mock/altactData.js` pour personnaliser :
- Textes et descriptions
- Statistiques (250+, 85%, 45+, 12)
- Images
- Coordonnées de contact
- Types de membres

### Changer les couleurs

Couleur principale : `#0b2a55` (bleu foncé Alt&Act)
Couleur secondaire : `#1a4280` (au hover)

Remplacez ces valeurs dans les fichiers `.jsx` ou modifiez `tailwind.config.js`.

### Logo

Le logo actuel est hébergé sur :
```
https://customer-assets.emergentagent.com/job_institut-fusion/artifacts/n4nzcgj5_LOGOS%202.png
```

Pour utiliser votre propre logo :
1. Ajoutez votre logo dans `public/images/`
2. Mettez à jour l'URL dans `Navigation.jsx` et `Footer.jsx`

## 📦 Build de Production

```bash
# Créer un build optimisé
cd frontend
yarn build
# ou
npm run build

# Les fichiers seront dans frontend/build/
```

## 🌐 Déploiement

### GitHub Pages

1. Ajoutez dans `package.json` :
```json
"homepage": "https://luximonit.github.io/alt-act-site"
```

2. Installez gh-pages :
```bash
yarn add -D gh-pages
```

3. Ajoutez les scripts :
```json
"predeploy": "yarn build",
"deploy": "gh-pages -d build"
```

4. Déployez :
```bash
yarn deploy
```

### Autres options

- **Vercel** : `vercel deploy`
- **Netlify** : Glissez-déposez le dossier `build/`
- **Firebase Hosting** : `firebase deploy`

## ⚠️ État Actuel

### Frontend ✅
- Site 100% fonctionnel
- Design responsive
- Animations fluides
- Navigation smooth scroll

### Backend ❌
- **Non développé**
- Formulaire de contact en MOCK
- Pas de sauvegarde en base de données
- Pas d'envoi d'emails

### Pour ajouter le backend :
1. Créer les APIs FastAPI
2. Connecter à MongoDB
3. Configurer l'envoi d'emails (SMTP)
4. Déployer le backend séparément

## 📝 Licence

Ce projet a été créé pour Alt&Act - Association d'intérêt général.

## 📞 Contact

- **Email** : contact@altact.org
- **Téléphone** : +33 3 88 00 00 00
- **Adresse** : 23 rue de la Croix, 67201 Eckbolsheim, France
- **LinkedIn** : [Alt&Act](https://linkedin.com/company/altact)

---

**Créé avec** [Emergent AI](https://emergent.sh) 🚀

Janvier 2025
