import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { categories, dishes, type Category, type Dish } from '@/lib/menu';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Menu — Pizza & Street Food' },
    { name: 'description', content: 'Poznaj nasze menu: pizza, loaded fries i chrupiące stripsy. Zobacz zdjęcia dań i ich składniki.' },
    { property: 'og:title', content: 'Menu — Pizza & Street Food' },
    { property: 'og:description', content: 'Pizza, loaded fries i stripsy. Wybierz swój smak i poznaj składniki.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  const [category, setCategory] = useState<Category>('Wszystko');
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [selected, setSelected] = useState<Dish | null>(null);
  const visible = dishes.filter(dish => (category === 'Wszystko' || dish.category === category) && `${dish.name} ${dish.ingredients.join(' ')}`.toLocaleLowerCase('pl').includes(search.toLocaleLowerCase('pl')));
  const selectCategory = (next: Category) => {
    setCategory(next);
    setSearch('');
    document.getElementById('menu-list')?.scrollIntoView({ block: 'start' });
  };
  return (
    <>
      <header className="site-header">
        <div className="menu-shell header-inner">
          <a href="/" className="wordmark" aria-label="Pizza and Street Food — strona główna">PIZZA &<span>STREET FOOD</span></a>
          <nav className="header-nav" aria-label="Nawigacja główna">
            <Button variant="ghost" className="nav-current" onClick={() => selectCategory('Wszystko')}>Menu</Button>
            <Button variant="ghost" onClick={() => selectCategory('Pizza')}>Pizza</Button>
            <Button variant="ghost" className="street-nav" onClick={() => selectCategory('Loaded fries')}>Street food</Button>
          </nav>
          <span className="header-label">Pizza. Frytki. Dobry wybór.</span>
        </div>
      </header>
      <main>
        <div className="menu-shell menu-intro">
          <div><p className="eyebrow">Pizza & street food</p><h1 className="menu-title">MENU<span>.</span></h1></div>
          <p className="intro-copy"><strong>Na co masz dziś ochotę?</strong><br />Wybierz swój smak. Resztę zostaw nam.</p>
        </div>
        <div className="category-bar" id="menu-list">
          <div className="menu-shell category-inner">
            <nav className="category-list" aria-label="Kategorie menu">
              {categories.map(item => <Button key={item} variant={category === item ? 'default' : 'ghost'} className="category-tab" aria-pressed={category === item} onClick={() => { setCategory(item); }}>{item}<span>{item === 'Wszystko' ? dishes.length : dishes.filter(d => d.category === item).length}</span></Button>)}
            </nav>
            <div className={`search-area ${searchOpen ? 'is-open' : ''}`}>
              {searchOpen && <input className="search-input" aria-label="Szukaj dania lub składnika" placeholder="Szukaj w menu…" value={search} onChange={e => setSearch(e.target.value)} autoFocus />}
              <Button variant="ghost" size="icon" aria-label={searchOpen ? 'Zamknij wyszukiwanie' : 'Szukaj w menu'} title={searchOpen ? 'Zamknij wyszukiwanie' : 'Szukaj w menu'} onClick={() => { setSearchOpen(!searchOpen); setSearch(''); }}>{searchOpen ? <X /> : <Search />}</Button>
            </div>
          </div>
        </div>
        <section className="menu-shell menu-content" aria-label="Dania">
          <div className="section-heading"><h2>{category === 'Wszystko' ? 'Wszystkie smaki' : category}</h2><p>{visible.length} {visible.length === 1 ? 'pozycja' : visible.length >= 2 && visible.length <= 4 ? 'pozycje' : 'pozycji'} w menu</p></div>
          <div className="product-grid">
            {visible.map(dish => <article className="product-card" key={dish.name}>
              <img src={dish.image} alt={dish.name} className="product-image" loading={dishes.indexOf(dish) < 3 ? 'eager' : 'lazy'} width="768" height="768" />
              <div className="product-info">
                <p className="product-meta">{dish.category}</p>
                <h3 className="product-title">{dish.name}</h3>
                <p className="product-desc">{dish.ingredients.join(' · ')}</p>
                <div className="product-bottom"><Button variant="ghost" className="product-detail-button" onClick={() => setSelected(dish)} aria-label={`Zobacz więcej: ${dish.name}`}>Zobacz więcej <ArrowUpRight /></Button></div>
              </div>
            </article>)}
          </div>
          {visible.length === 0 && <div className="empty-results"><p>Nie znaleziono dań.</p><Button variant="link" onClick={() => { setSearch(''); setCategory('Wszystko'); }}>Pokaż całe menu</Button></div>}
        </section>
      </main>
      <footer className="menu-footer"><div className="menu-shell footer-inner"><p className="footer-brand">PIZZA & STREET FOOD<span className="text-primary">.</span></p><p className="footer-label">Dobry smak. Prosty wybór.</p></div></footer>
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent className="dish-dialog">
          {selected && <div className="dish-dialog-grid">
            <img src={selected.image} alt={selected.name} className="product-image" />
            <div className="dish-dialog-copy"><p className="product-meta">{selected.category}</p><DialogTitle className="dish-dialog-title">{selected.name}</DialogTitle><p className="ingredients-title">SKŁADNIKI</p><DialogDescription className="ingredients-list">{selected.ingredients.join(' · ')}</DialogDescription></div>
          </div>}
        </DialogContent>
      </Dialog>
    </>
  );
}
