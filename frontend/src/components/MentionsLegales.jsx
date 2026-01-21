<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mentions légales – ALT&ACT</title>
  <meta name="description" content="Mentions légales du site ALT&ACT – Altérité & Action." />
  <link rel="stylesheet" href="assets/css/legal.css" />
</head>
<body>
  <main class="legal">
    <header class="legal__header">
      <h1>Mentions légales</h1>
      <p class="legal__subtitle">Association ALT&ACT – Altérité & Action</p>
    </header>

    <section class="legal__section">
      <h2>1. Éditeur du site</h2>
      <ul>
        <li><strong>Dénomination :</strong> Association ALT&ACT – Altérité & Action</li>
        <li><strong>Forme juridique :</strong> Association de droit local Alsace-Moselle (loi du 19 avril 1908)</li>
        <li><strong>Siège social :</strong> 23 rue de la Croix, 67201 Eckbolsheim, France</li>
        <li><strong>Numéro au registre des associations :</strong> <em>à compléter (RNA / registre)</em></li>
        <li><strong>Email :</strong> <a href="mailto:contact@alt-act.org">contact@alt-act.org</a> <em>(à adapter)</em></li>
      </ul>
    </section>

    <section class="legal__section">
      <h2>2. Directeur de la publication</h2>
      <p>
        <strong>Chitrasen Luximon</strong>, Président et représentant légal de l’association ALT&ACT.
      </p>
    </section>

    <section class="legal__section">
      <h2>3. Hébergement</h2>
      <p>
        Le site est hébergé par <strong>GitHub, Inc.</strong> (GitHub Pages).<br/>
        Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.<br/>
        <em>Remarque :</em> si tu utilises aussi un nom de domaine, un outil d’analytics ou un formulaire tiers, ajoute-les ici.
      </p>
    </section>

    <section class="legal__section">
      <h2>4. Propriété intellectuelle</h2>
      <p>
        L’ensemble du contenu présent sur ce site (textes, visuels, logos, éléments graphiques, documents)
        est protégé par le droit d’auteur et demeure la propriété de l’association ALT&ACT ou de ses partenaires,
        sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle,
        sans autorisation préalable, est interdite.
      </p>
    </section>

    <section class="legal__section">
      <h2>5. Liens hypertextes</h2>
      <p>
        Ce site peut contenir des liens vers des sites tiers. ALT&ACT n’exerce aucun contrôle sur ces sites
        et ne peut être tenue responsable de leur contenu ou de leurs pratiques.
      </p>
    </section>

    <section class="legal__section">
      <h2>6. Contact</h2>
      <p>
        Pour toute question, tu peux contacter ALT&ACT à l’adresse :
        <a href="mailto:contact@alt-act.org">contact@alt-act.org</a> <em>(à adapter)</em>.
      </p>
    </section>

    <footer class="legal__footer">
      <a class="legal__back" href="./index.html">← Retour à l’accueil</a>
      <span class="legal__muted">Dernière mise à jour : <span id="lastUpdated"></span></span>
    </footer>
  </main>

  <script>
    document.getElementById("lastUpdated").textContent =
      new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
  </script>
</body>
</html>
