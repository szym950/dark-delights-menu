import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { openingHours, site } from '@/lib/site';

export const Route = createFileRoute('/kontakt')({
  head: () => ({ meta: [
    { title: 'Kontakt — Wake Up House | Głogów Małopolski' },
    { name: 'description', content: 'Kontakt z Wake Up House: Parkowa 10, 36-060 Głogów Małopolski. Godziny otwarcia, telefon i social media.' },
    { property: 'og:title', content: 'Kontakt — Wake Up House' },
    { property: 'og:description', content: 'Adres, telefon, godziny otwarcia i social media Wake Up House w Głogowie Małopolskim.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <PageShell active="/kontakt" eyebrow="Wake Up House · Jesteśmy dostępni" title="Kontakt">
      <div className="contact-list">
        <div className="info-card">
          <p className="info-label">Adres</p>
          <p className="info-text">Parkowa 10<br />36-060 Głogów Małopolski</p>
          <a className="delivery-more" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Zobacz na mapie <ArrowUpRight /></a>
        </div>
        <div className="info-card">
          <p className="info-label">Telefon</p>
          <p className="info-text">{site.phone}</p>
        </div>
        <div className="info-card">
          <p className="info-label">Godziny otwarcia</p>
          <dl className="hours-list">{openingHours.map(({ day, hours }) => <div key={day}><dt>{day}</dt><dd className={hours === 'Zamknięte' ? 'hours-closed' : ''}>{hours}</dd></div>)}</dl>
        </div>
        <div className="info-card">
          <p className="info-label">Facebook</p>
          <p className="info-text">Link do uzupełnienia.</p>
        </div>
        <div className="info-card">
          <p className="info-label">Instagram</p>
          <p className="info-text">Link do uzupełnienia.</p>
        </div>
        <div className="info-card">
          <p className="info-label">Dane firmy / NIP</p>
          <p className="info-text">{site.nip}</p>
        </div>
      </div>
    </PageShell>
  );
}
