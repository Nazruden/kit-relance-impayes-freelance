const PAYMENT_LINK = "https://buy.stripe.com/test_dRm9ATeixbYLdQZeZi0oM00";

export default function HomePage() {
  return (
    <main className="wrap">
      <span className="badge">Pack digital · Freelances FR · Accès immédiat</span>
      <h1>Tes clients te paient en retard.<br />Voici le kit pour relancer sans te cramer.</h1>
      <p className="lead">
        <span className="pain">Factures à +30 jours, relances gênantes, cashflow en dents de scie.</span>{" "}
        Le <strong>Kit Relance Impayés Freelance</strong> te donne les emails, scripts et checklist
        prêts à envoyer — pour encaisser plus vite, sans improvisation.
      </p>

      <div className="grid grid-2">
        <section className="card">
          <h2>Ce que tu reçois (immédiatement)</h2>
          <ul className="list">
            <li><strong>15 emails de relance</strong> (J+7 → mise en demeure soft), ton pro &amp; ferme</li>
            <li><strong>Checklist avant envoi</strong> : preuves, échéances, mentions légales FR</li>
            <li><strong>Scripts WhatsApp / SMS</strong> courts (3 niveaux d'intensité)</li>
            <li><strong>Tracker CSV</strong> des impayés (montant, âge, prochaine action)</li>
            <li>Guide d'usage en 1 page — tu l'ouvres, tu copies, tu envoies</li>
          </ul>

          <div className="steps">
            <div className="step"><strong>1. Paie</strong>Stripe TEST · 19 €</div>
            <div className="step"><strong>2. Télécharge</strong>Pack MD + CSV sur /succes</div>
            <div className="step"><strong>3. Relance</strong>Copie → envoi → encaissement</div>
          </div>
        </section>

        <aside className="card">
          <h2>Offre lancement</h2>
          <div className="price">19 € <span>TTC · paiement unique</span></div>
          <p className="note">Audience claire : freelances solo &amp; micro-entreprises FR qui facturent en B2B.</p>
          <a className="cta" href={PAYMENT_LINK} rel="noopener noreferrer">
            Acheter le kit — 19 €
          </a>
          <p className="note">
            Mode <strong>Stripe TEST</strong> uniquement (zéro dépense réelle).
            Carte test : <span className="mono">4242 4242 4242 4242</span>
          </p>
          <p className="note">Livraison digitale sur la page succès après paiement.</p>
        </aside>
      </div>

      <section className="card" style={{ marginTop: 18 }}>
        <h2>Pourquoi maintenant (sept. 2026)</h2>
        <p className="lead" style={{ fontSize: "1rem", margin: 0 }}>
          Les micro-produits digitaux ultra-nichés (templates, checklists, packs de scripts)
          convertissent mieux que les formations à 2000 €. Les freelances veulent un résultat
          en 10 minutes — pas un cours. Ce kit résout une douleur cash immédiate.
        </p>
      </section>

      <footer>
        Money Maker · run diurne · Nazruden · MVP public · Stripe TEST only · pas de domaine custom
      </footer>
    </main>
  );
}
