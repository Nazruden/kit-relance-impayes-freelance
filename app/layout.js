import "./globals.css";

export const metadata = {
  title: "Kit Relance Impayés Freelance — 19€",
  description:
    "15 emails de relance + checklist + scripts WhatsApp pour freelances FR. Se faire payer sans se battre. Pack digital immédiat.",
  openGraph: {
    title: "Kit Relance Impayés Freelance",
    description: "Pack digital 19€ — emails, checklist, tracker. Pour freelances qui veulent encaisser.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
