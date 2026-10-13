// Dane całej witryny. Pola oznaczone „Do uzupełnienia” czekają na prawdziwe dane
// od właściciela — nie wymyślamy telefonów, stref dostawy, cen ani linków.
export type OpeningHour = { day: string; hours: string };

export const openingHours: OpeningHour[] = [
  { day: 'Poniedziałek', hours: 'Zamknięte' },
  { day: 'Wtorek', hours: 'Zamknięte' },
  { day: 'Środa', hours: '15:00–21:00' },
  { day: 'Czwartek', hours: '15:00–21:00' },
  { day: 'Piątek', hours: '15:00–22:00' },
  { day: 'Sobota', hours: '12:00–22:00' },
  { day: 'Niedziela', hours: '12:00–20:00' },
];

export type Platform = { name: string; url: string | null };

export const site = {
  name: 'Wake Up House',
  addressLine1: 'Parkowa 10',
  addressLine2: '36-060 Głogów Małopolski',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parkowa+10+36-060+G%C5%82og%C3%B3w+Ma%C5%82opolski',
  phone: 'Do uzupełnienia — podamy numer telefonu.',
  facebook: null as string | null,
  instagram: null as string | null,
  nip: 'Do uzupełnienia — NIP i dane firmy.',
  platforms: [
    { name: 'Pyszne.pl', url: null },
    { name: 'Uber Eats', url: null },
    { name: 'Glovo', url: null },
  ] as Platform[],
  deliveryShort: 'Dowozimy i przyjmujemy odbiór osobisty w Głogowie Małopolskim. Strefy dowozu, minimalna wartość zamówienia i godziny dostaw — doprecyzujemy wkrótce.',
  delivery: {
    area: 'Do uzupełnienia — podamy listę miejscowości i ulic objętych dowozem.',
    zones: 'Do uzupełnienia — koszt dostawy według stref podamy, gdy potwierdzimy stawki.',
    minOrder: 'Do uzupełnienia — minimalna wartość zamówienia z dowozem.',
    hours: 'Do uzupełnienia — godziny, w których dowozimy.',
    pickup: 'Odbiór na miejscu: Parkowa 10, 36-060 Głogów Małopolski. Szczegóły do uzupełnienia.',
    time: 'Do uzupełnienia — orientacyjny czas realizacji zamówienia.',
    payments: 'Do uzupełnienia — dostępne formy płatności.',
  },
  about: [
    'Wake Up House to lokal przy Parkowej 10 w Głogowie Małopolski, gdzie zamawiasz burgery z wołowiny i chrupiącego fileta, pizzę na cieście z mozzarellą fior di latte, loaded fries i stripsy — wszystko przygotowywane na miejscu.',
    'Latem działa sezonowy ogródek, w którym można usiąść i zjeść na miejscu.',
    'Ten opis jest wstępny — dopracujemy go razem z Wami.',
  ],
};
