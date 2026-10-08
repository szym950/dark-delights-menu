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
import margherita from '@/assets/Margherita.webp.asset.json';
import diavola from '@/assets/Diavola.webp.asset.json';
import capriciosa from '@/assets/Capriciosa.webp.asset.json';
import wakeCrash from '@/assets/Wake_Crash.webp.asset.json';
import spiceJump from '@/assets/Spice_Jump.webp.asset.json';
import cheeseAir from '@/assets/Cheese_Air.webp.asset.json';
import bigAir from '@/assets/Big_Air.png.asset.json';
import startJump from '@/assets/start_jump.png.asset.json';

export type Category = 'Wszystko' | 'Pizza' | 'Burgery' | 'Loaded fries' | 'Strips';
export type Dish = { name: string; category: Category; image: string; ingredients: string[] };
const pizzaBase = ['Sos pomidorowy', 'Mozzarella fior di latte'];
export const dishes: Dish[] = [
  { name: 'Start Jump', category: 'Burgery', image: startJump.url, ingredients: ['Bułka maślana', 'Wołowina 100 g', 'Grillowana cebula', '2 × cheddar', 'Boczek', 'Ogórek piklowany', 'Sałata lollo rossa', 'Sos Wake'] },
  { name: 'Cheese Air', category: 'Burgery', image: cheeseAir.url, ingredients: ['Bułka maślana', 'Wołowina 100 g', 'Grillowana cebula', '2 × cheddar', 'Boczek', 'Pomidor', 'Rukola', 'Ogórek piklowany', 'Sos BBQ'] },
  { name: 'Big Air', category: 'Burgery', image: bigAir.url, ingredients: ['Bułka maślana', 'Panierowany filet z kurczaka 160 g', '2 × cheddar', 'Sałata lollo rossa', 'Pomidor', 'Boczek', 'Sos aioli'] },
  { name: 'Wake Crash', category: 'Burgery', image: wakeCrash.url, ingredients: ['Bułka maślana', '3 × wołowina 100 g', 'Grillowana cebula', '6 × cheddar', '2 × boczek', 'Sałata lollo rossa', 'Ogórek piklowany', 'Sos BBQ'] },
  { name: 'Spice Jump', category: 'Burgery', image: spiceJump.url, ingredients: ['Bułka maślana', 'Wołowina 100 g', 'Chutney z czerwonej cebuli', '2 × cheddar', 'Jalapeño', 'Sałata lollo rossa', 'Ogórek piklowany', 'Sos chipotle'] },
  { name: 'Margherita', category: 'Pizza', image: margherita.url, ingredients: [...pizzaBase, 'Bazylia'] },
  { name: 'Diavola', category: 'Pizza', image: diavola.url, ingredients: [...pizzaBase, 'Spinata picante', 'Oliwki', 'Jalapeño'] },
  { name: 'Capriciosa', category: 'Pizza', image: capriciosa.url, ingredients: [...pizzaBase, 'Prosciutto cotto', 'Oliwki'] },
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
export const categories: Category[] = ['Wszystko', 'Burgery', 'Pizza', 'Loaded fries', 'Strips'];