import * as buildings from '@config';
import { TieredUpgrades, HeavenlyUpgrades } from 'customFuncs';
import { misfortunePrice } from '../customMods';

const aura = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'aura';

 const upgrades: ICreateTieredUpgradeDTO[] = [
  {
   name: 'Aura oven',
   quote:
    'Your grandmas have successfully mastered the art of baking, and are now able to use their aura to aid them in the process.',
   building: buildings.grandma,
   tier,
  },
  {
   name: 'Aura seeds',
   quote:
    'Your farmers have successfully mastered the art of farming, and are now able to infuse their seeds with aura to make them grow faster.',
   building: buildings.farm,
   tier,
  },
  {
   name: 'Aura pickaxe',
   quote: 'Your miners are now able to infuse their pickaxes with aura, making them harder than ever!',
   building: buildings.mine,
   tier,
  },
  {
   name: 'Aura cogs',
   quote:
    'These are the epitome of all cogs, created by bending a power called aura to your will and manipulating it to create cogs. They have the perfect amount of friction.',
   building: buildings.factory,
   tier,
  },
  {
   name: 'Aura cash',
   quote:
    'Your bankers have developed a new technique of infusing a certain type of aura into cookies, making their currency even more reliable!',
   building: buildings.bank,
   tier,
  },
  {
   name: 'Aura-filled temples',
   quote:
    'After many years of devoting themselves, the followers have started to awaken a power called aura. Praying while cultivating it pleases the gods even more.',
   building: buildings.temple,
   tier,
  },
  {
   name: 'Aura spells',
   quote: 'Using aura as an extra source source of mana, wizards can now summon twice as much cookies.',
   building: buildings.wizardTower,
   tier,
  },
  {
   name: 'Aura fuel',
   quote: 'Having no need for aura themselves, astronauts distilled it into their fuel, making it even more efficient.',
   building: buildings.shipment,
   tier,
  },
  {
   name: 'Aura transmutation',
   quote:
    'Through your vast comprehension of the alchemical laws, you are now able to create cookies from your own qi.',
   building: buildings.alchemyLab,
   tier,
  },
  {
   name: 'Aura portal',
   quote: 'Through your comprehension of the Space Dao, you can now create portals using your qi.',
   building: buildings.portal,
   tier,
  },
  {
   name: 'Aura travel',
   quote: 'Through your comprehension of the Time Dao, you can now travel through time using your qi.',
   building: buildings.timeMachine,
   tier,
  },
  // Seriously?
  {
   name: 'Aura condensers',
   building: buildings.antimatterCondenser,
   tier,
  },
  {
   name: 'Aura prism',
   quote: "Light is energy, isn't it? Now you're making cookies out of aura.",
   building: buildings.prism,
   tier,
  },
  {
   name: 'Aura dice',
   quote: "Yes, you've found a way to use your understanding of the world to affect your luck and get more cookies.",
   building: buildings.chancemaker,
   tier,
  },
  // Seriously?
  {
   name: 'Aura fractals',
   building: buildings.fractalEngine,
   tier,
  },
  {
   name: 'Aura hardware',
   quote: "It's an algorithm, I swear! It really doubles your cookie production. Don't ask how it works.",
   building: buildings.javascriptConsole,
   tier,
  },
  {
   name: 'Aura universe',
   quote:
    "It is said that when one's understanding of the Martial Dao gets too profound, an ocean starts forming inside of his own body, eventually becoming a full-fledged world.",
   building: buildings.idleverse,
   tier,
  },
 ];

 return upgrades;
};

const luminous = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'luminous';

 const upgrades: ICreateTieredUpgradeDTO[] = [
  {
   name: 'Luminous grandmas',
   quote: 'Your grandmas have called their long-lost relatives to help them bake more cookies.',
   building: buildings.grandma,
   tier,
  },
  {
   name: 'Luminous seeds',
   quote:
    "Through your advancements in the field of agriculture, you've discovered some sort of luminescent seed. It's still unclear whether it's safe or not, but it yields more crops than normal ones.",
   building: buildings.farm,
   tier,
  },
  {
   name: 'Luminous refining',
   quote:
    'By mixing the cookie dough you mine with a mysterious luminescent powder, you are able to make them yield more and become tastier.',
   building: buildings.mine,
   tier,
  },
  {
   name: 'Luminous labor',
   quote:
    "By doing some shenanigans to a strange luminous powder that was recently discovered, you managed to create an entirely new workforce. They're fast, efficient and don't need to rest!",
   building: buildings.factory,
   tier,
  },
  {
   name: 'Luminous cash',
   quote:
    "You've created a new currency coated in a strange luminous powder. You don't really know what it is or where it came from, but gold is shiny, so it's obviously more valuable, right?",
   building: buildings.bank,
   tier,
  },
  {
   name: 'Luminous temples',
   quote: 'This strange powder shines. You put it all around your temples. Gods like shiny things.',
   building: buildings.temple,
   tier,
  },
  {
   name: 'Luminous catalyst',
   quote:
    'Wizards have discovered that by condensing mana, they are able to make a mysterious luminescent powder. This, in turn, is highly effective as a catalyst when using spells.',
   building: buildings.wizardTower,
   tier,
  },
  {
   name: 'Luminous fuel',
   quote:
    'By mixing normal fuel and a solution of a mysterious luminous powder and alchohol, it becomes highly more potent.',
   building: buildings.shipment,
   tier,
  },
  {
   name: 'Luminous transmutation',
   quote: "This mysterious luminous powder is very dense, so you're able transmute it into a lot more cookies.",
   building: buildings.alchemyLab,
   tier,
  },
  {
   name: 'Luminous portal',
   quote: "The portal to heaven will surely have a godly light, right? And it'll obviously be packed with cookies.",
   building: buildings.portal,
   tier,
  },
  {
   name: 'Luminous travel',
   quote:
    "By using a strange luminous powder in your time machines, you can know where exactly you're going in spacetime more precisely. Yes, it works. Don't ask how.",
   building: buildings.timeMachine,
   tier,
  },
  // Seriously?
  {
   name: 'Luminous condensers',
   building: buildings.antimatterCondenser,
   tier,
  },
  {
   name: 'Luminous prism',
   quote:
    "Well, you convert light into cookies. So if the prism is coated in luminous powder it'll obviously create more cookies.",
   building: buildings.prism,
   tier,
  },
  {
   name: 'Luminous dice',
   quote: "Now there are sparks whenever you spawn cookies. It's entertaining, so people do it more often.",
   building: buildings.chancemaker,
   tier,
  },
  // Seriously?
  {
   name: 'Luminous fractals',
   building: buildings.fractalEngine,
   tier,
  },
  {
   name: 'Luminous hardware',
   quote: 'Hey, it works okay? RGB mice and keyboard boost computer performance.',
   building: buildings.javascriptConsole,
   tier,
  },
  {
   name: 'Luminous universe',
   quote:
    'Brand new galaxies to explore, full with a strange luminous material everywhere... Regardless, that means tons of extra cookies to get!',
   building: buildings.idleverse,
   tier,
  },
 ];

 return upgrades;
};

const misfortune = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'misfortune';
 const priceFunc: PriceFunc = upgrade => {
  return Math.min(upgrade.basePrice, Game.unbuffedCps * 60 * 60 * 24);
 };
 const order = 19101;

 const upgrades: ICreateTieredUpgradeDTO[] = [
  {
   name: 'Misfortune #501',
   quote: 'The decay of a finger will leave 4 others still pointing.',
   building: buildings.cursor,
   tier,
   order,
  },
  {
   name: 'Misfortune #502',
   quote: 'A wrinkle is a crack on the only home you have.',
   building: buildings.grandma,
   tier,
   order,
  },
  {
   name: 'Misfortune #503',
   // Kiz3r's
   quote: 'Famine is inevitable.',
   building: buildings.farm,
   tier,
   order,
  },
  {
   name: 'Misfortune #504',
   // Kiz3r's
   quote: "The collapse under your life's work.",
   building: buildings.mine,
   tier,
   order,
  },
  {
   name: 'Misfortune #505',
   quote: 'True worth is not in what you make yourself, but in what you make others do for you.',
   building: buildings.factory,
   tier,
   order,
  },
  {
   name: 'Misfortune #506',
   quote: 'The value of money means everything to a banker.',
   building: buildings.bank,
   tier,
   order,
  },
  {
   name: 'Misfortune #507',
   quote: 'No idol deserves worship.',
   building: buildings.temple,
   tier,
   order,
  },
  {
   name: 'Misfortune #508',
   quote: 'Magic is about two things — deceiving and pleasing.',
   building: buildings.wizardTower,
   tier,
   order,
  },
  {
   name: 'Misfortune #509',
   quote: 'Every mile travelled maddens you just as much.',
   building: buildings.shipment,
   tier,
   order,
  },
  {
   name: 'Misfortune #510',
   // Kiz3r's
   quote: "You're turning diamonds into coal.",
   building: buildings.alchemyLab,
   tier,
   order,
  },
  {
   name: 'Misfortune #511',
   // Kiz3r's
   quote: 'Welcoming unwanted visitors.',
   building: buildings.portal,
   tier,
   order,
  },
  {
   name: 'Misfortune #512',
   // Kiz3r's
   quote: 'You cannot run from time.',
   building: buildings.timeMachine,
   tier,
   order,
  },
  {
   name: 'Misfortune #513',
   quote: 'The world is made of what we take from it.',
   building: buildings.antimatterCondenser,
   tier,
   order,
  },
  {
   name: 'Misfortune #514',
   quote: 'Staring at endless darkness can blind you forever from the light.',
   building: buildings.prism,
   tier,
   order,
  },
  {
   name: 'Misfortune #515',
   // Kiz3r's
   quote: "Life's the gamble you will never win.",
   building: buildings.chancemaker,
   tier,
   order,
  },
  {
   name: 'Misfortune #516',
   // Kiz3r's
   quote: 'Losing yourself by finding others.',
   building: buildings.fractalEngine,
   tier,
   order,
  },
  {
   name: 'Misfortune #517',
   quote: "If things are working in your computer, they won't in others'.",
   building: buildings.javascriptConsole,
   tier,
   order,
  },
  {
   name: 'Misfortune #518',
   quote: 'There are too many of everyone, including you.',
   building: buildings.idleverse,
   tier,
   order,
  },
  {
   name: 'Misfortune #600',
   description: 'Upgrades and buildings cost <b>-1%</b>; you gain <b>+1%</b> CpS.',
   quote: 'True poverty is counted in betrayals.',
   price: misfortunePrice * 1e5,
   priceFunc,
   icon: [0, 0],
   tier,
   order,
  },
  {
   name: 'Misfortune #601',
   description: 'You gain <b>+6%</b> CpS.',
   quote: 'Some people dream of escaping misery; others dream of cookies.',
   price: misfortunePrice * 1e8,
   priceFunc,
   icon: [0, 0],
   tier,
   order,
  },
  {
   name: 'Misfortune #602',
   description:
    'You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.',
   // Kiz3r's
   quote: "Help, I'm trapped in a CC mod!",
   price: misfortunePrice * 1e11,
   priceFunc,
   icon: [0, 0],
   tier,
   order,
  },
  {
   name: 'Misfortune #603',
   description: 'You gain <b>more CpS</b> the more milk you have.',
   quote: 'Believe the superstitions; black cats are bad luck.',
   price: misfortunePrice * 1e14,
   priceFunc,
   icon: [1, 0],
   tier,
   kitten: true,
   order,
  },
  {
   name: 'Misfortune #604',
   description: 'Clicking gains <b>+1% of your CpS</b>.',
   // Think of something better
   quote: 'Remember to not stay in touch.',
   price: misfortunePrice * 1e11,
   priceFunc,
   icon: [2, 0],
   tier,
   order,
  },
  // {
  //  name: 'Misfortune #666',
  //  description: 'Grandmas are <b>twice</b> as efficient.',
  //  // Kiz3r's
  //  quote: 'Old but not wise.',
  //  price: 6.666e51,
  //  icon: [19, 2],
  //  tier,
  //  order,
  // },
 ];

 return upgrades;
};

const createHook = (): void => {
 TieredUpgrades([...aura(), ...luminous(), ...misfortune()]);
 HeavenlyUpgrades([
  {
   name: 'Misfortune cookies',
   description: 'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',
   quote: "These taste quite bad — but then again, what's even the point?",
   price: 66666666666,
   icon: [0, 1],
   parents: ['Distilled essence of redoubled luck'],
   position: [75, 495],
   order: 644,
  },
 ]);
};

export default createHook;
