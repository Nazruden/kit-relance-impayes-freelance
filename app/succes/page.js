import Link from "next/link";

export const metadata = {
  title: "Merci — Kit Relance Impayés",
  description: "Télécharge ton pack digital.",
};

export default function SuccesPage() {
  return (
    <main className="wrap">
      <span className="badge">Paiement reçu · Accès pack</span>
      <h1>Merci — ton kit est prêt.</h1>
      <p className="lead">
        Télécharge les fichiers ci-dessous. Ouvre le guide, copie le mail J+7 pour ta plus vieille facture, envoie.
      </p>

      <div className="grid" style={{ marginTop: 24 }}>
        <section className="card">
          <h2>Fichiers inclus</h2>
          <ul className="list">
            <li>
              <a href="/pack/kit-relance-impayes.md" download>
                <strong>kit-relance-impayes.md</strong>
              </a>{" "}
              — emails, scripts, checklist
            </li>
            <li>
              <a href="/pack/tracker-impayes.csv" download>
                <strong>tracker-impayes.csv</strong>
              </a>{" "}
              — suivi des créances
            </li>
          </ul>
          <p className="note">
            Astuce : importe le CSV dans Notion, Google Sheets ou Excel. Trie par « âge (jours) » décroissant.
          </p>
          <Link className="cta" href="/" style={{ marginTop: 20, display: "inline-block", width: "auto", padding: "12px 18px" }}>
            ← Retour à la landing
          </Link>
        </section>
      </div>
    </main>
  );
}
