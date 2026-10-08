import parma from '@/assets/Parma.webp.asset.json';
import loadedMix from '@/assets/Loaded_Fries1.webp.asset.json';
import loaded from '@/assets/Loaded_Fries.webp.asset.json';
import strips from '@/assets/Strips.webp.asset.json';
import salameDue from '@/assets/Salame_Due.webp.asset.json';
import salame from '@/assets/Salame.webp.asset.json';
import rucola from '@/assets/Rucola.webp.asset.json';
import prugna from '@/assets/Prugna.webp.asset.json';
import funghi from '@/assets/Prosciutto_e_funghi.webp.asset.json';
import pollo from '@/assets/Pollo.webp.asset.json';

export type Category = 'Wszystko' | 'Pizza' | 'Loaded fries' | 'Strips';
export type Dish = { name: string; category: Category; image: string; ingredients: string[] };
const pizzaBase = ['Sos pomidorowy', 'Mozzarella fior di latte'];
export const dishes: Dish[] = [
  { name: 'Parma', category: 'Pizza', image: parma.url, ingredients: [...pizzaBase, 'Prosciutto crudo', 'Rukola', 'Pomidorki koktajlowe', 'Grana Padano'] },
  { name: 'Salame Due', category: 'Pizza', image: salameDue.url, ingredients: [...pizzaBase, 'Salami Napoli', 'Spianata piccante', 'Czosnek'] },
  { name: 'Rucola', category: 'Pizza', image: rucola.url, ingredients: [...pizzaBase, 'Pomidorki koktajlowe', 'Rukola', 'Grana Padano'] },
  { name: 'Salame', category: 'Pizza', image: salame.url, ingredients: [...pizzaBase, 'Salami Napoli', 'Cebula', 'Czosnek'] },
  { name: 'Prugna', category: 'Pizza', image: prugna.url, ingredients: [...pizzaBase, 'Boczek', 'Pomidorki koktajlowe', 'Jalapeño'] },
  { name: 'Prosciutto e funghi', category: 'Pizza', image: funghi.url, ingredients: [...pizzaBase, 'Prosciutto cotto', 'Pieczarki'] },
  { name: 'Pollo', category: 'Pizza', image: pollo.url, ingredients: [...pizzaBase, 'Kurczak', 'Pieczarki', 'Kukurydza', 'Cebula'] },
  { name: 'Loaded Fries — kurczak', category: 'Loaded fries', image: loaded.url, ingredients: ['Frytki', 'Grillowany kurczak 150 g', 'Sos cheddar', 'Kukurydza', 'Szczypiorek'] },
  { name: 'Loaded Fries — kurczak i wołowina', category: 'Loaded fries', image: loadedMix.url, ingredients: ['Frytki', 'Grillowany kurczak 150 g', 'Wołowina 100 g', 'Sos cheddar', 'Kukurydza', 'Szczypiorek'] },
  { name: 'Strips', category: 'Strips', image: strips.url, ingredients: ['Frytki', 'Panierowane stripsy z fileta 150 g', 'Sos czosnkowy'] },
];
export const categories: Category[] = ['Wszystko', 'Pizza', 'Loaded fries', 'Strips'];