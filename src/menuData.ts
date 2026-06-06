import { MenuCategory } from './types';

const MENU_IMAGES: Record<string, string> = {
  "B2": "https://i.imgur.com/u81vzvm.png",
  "B7": "https://i.imgur.com/MbN4EX7.png",
  "B9": "https://i.imgur.com/MQEIjqt.png",
  "C1": "https://i.imgur.com/RKA1YfP.png",
  "C2": "https://i.imgur.com/O2kSUyY.png",
  "C3": "https://i.imgur.com/1Gsx40x.png",
  "D2": "https://i.imgur.com/Se2YBgH.png",
  "D3": "https://i.imgur.com/29s91oL.png",
  "D4": "https://i.imgur.com/LuJhncb.png",
  "E1": "https://i.imgur.com/8Vv5KHX.png",
  "E2": "https://i.imgur.com/WI7zJJe.png",
  "E3": "https://i.imgur.com/y0Ga58B.png",
  "F2": "https://i.imgur.com/K2OXoy8.png",
  "F7": "https://i.imgur.com/XTCnf33.png",
  "F8": "https://i.imgur.com/eB4Rivx.png",
  "G2": "https://i.imgur.com/qZXemeQ.png",
  "G3": "https://i.imgur.com/bMMe25l.png",
  "G5": "https://i.imgur.com/zxLV2pj.png",
  "H9": "https://i.imgur.com/BRuuzUw.png",
  "H16": "https://i.imgur.com/BiXR10g.png",
  "H23": "https://i.imgur.com/dgLKpiG.png",
  "H29": "https://i.imgur.com/z02dxva.png",
  "J2": "https://i.imgur.com/FqnkFdG.png",
  "J4": "https://i.imgur.com/RUAhyTD.png",
  "K1": "https://i.imgur.com/tyhaP1N.png",
  "K3": "https://i.imgur.com/1FYFXb2.png",
  "K4": "https://i.imgur.com/qRmHZgM.png"
};

const RAW_MENU_DATA: MenuCategory[] = [
  {
    category: "Sides & Snacks",
    items: [
      { code: "B1", name: "Fried Chicken Spring Roll (3)", price: "$7.90", description: "Crispy golden rolls filled with seasoned minced chicken and fresh glass noodles." },
      { code: "B2", name: "Fried Wonton (5)", price: "$7.90", description: "Crispy and light fried chicken dumplings, served with homemade sweet chili dip." },
      { code: "B3", name: "Fried Vegetarian Spring Roll (6)", price: "$7.90", description: "Crispy spring rolls packed with seasoned garden vegetables." },
      { code: "B4", name: "Steamed Wonton (5)", price: "$7.90", description: "Soft, steamed chicken dumplings served with a light soy vinaigrette." },
      { code: "B5", name: "Chicken Satay (3)", price: "$9.90", description: "Marinated grilled chicken skewers, glazed with our signature peanut sauce." },
      { code: "B6", name: "Potato Croquette (2)", price: "$7.90", description: "Indonesian-style breaded potato mash stuffed with flavored minced chicken." },
      { code: "B7", name: "Five Spice Roll (Loh Bak)", price: "$7.90", description: "Savory meat and aromatic five-spice wrapped in light, crispy bean curd sheets." },
      { code: "B8", name: "Fried Fish Dumpling with Tofu", price: "$13.90", description: "Batagor - Crispy fried fish dumplings and fresh tofu served with sweet peanut dressing." },
      { code: "B9", name: "Indonesian Dim Sum", price: "$13.90", description: "Siomay - Steamed fish dumplings and loaded tofu under savory peanut sauce." },
      { code: "B10", name: "Traditional Fried Fish Cake", price: "$13.90", description: "Pempek - Savory fried fish cake served with a spicy, sweet-and-sour vinegar soup." },
      { code: "B11", name: "Spicy Fried Tofu", price: "$7.90", description: "Crispy golden tofu cubes tossed with freshly chopped garlic, chili, and sea salt." },
      { code: "B12", name: "Fried Cassava", price: "$7.90", description: "Singkong Goreng - Crispy, fluffy cassava roots seasoned with garlic and coriander." },
      { code: "B13", name: "Fried Tempeh and Tofu", price: "$7.90", description: "Traditional marinated soy tempeh and fresh firm tofu, fried to a golden crisp." },
      { code: "B14", name: "Chicken Risoles (2)", price: "$7.90", description: "Delicate breaded pan-crepes filled with slow-cooked chicken ragout cream." }
    ]
  },
  {
    category: "Traditional Soup",
    items: [
      { code: "C1", name: "Beef Ribs Soup*", price: "$18.90", description: "Sup Iga - Fall-off-the-bone beef ribs simmered beautifully in a clear, nutrient-rich broth." },
      { code: "C2", name: "Traditional Chicken Soup*", price: "$17.90", description: "Soto Ayam - Classic Indonesian fragrant turmeric chicken soup with vermicelli and hardboiled egg." },
      { code: "C3", name: "Wonton Noodle Soup", price: "$17.90", description: "Handmade egg noodles in hot aromatic broth, topped with delicious wontons and seasonal greens." },
      { code: "C4", name: "Beef Balls Noodle Soup", price: "$17.90", description: "Bakso - Satisfying house-made beef balls with vermicelli or yellow noodles in hot broth." },
      { code: "C5", name: "Chicken Dry Noodle", price: "$17.90", description: "Mie Ayam - Dry tossed egg noodles sweet-glazed with chicken, mushroom topping, and broth on the side." },
      { code: "C6", name: "Jakarta Beef Soup*", price: "$18.90", description: "Soto Betawi - Creamy premium beef soup with soft milk base, herbs, potatoes, and spices." }
    ]
  },
  {
    category: "Indonesian Curry",
    items: [
      { code: "D1", name: "Chicken Curry", price: "$17.90", description: "Ayam Gulai - Chicken slow-cooked in a spicy and highly aromatic coconut milk curry." },
      { code: "D2", name: "Lamb Curry", price: "$19.90", description: "Kari Kambing - Extremely tender lamb chunks simmered in complex herbs and coconut gravy." },
      { code: "D3", name: "Beef Rendang", price: "$19.90", description: "Legendary slow-cooked caramelized beef, richly spiced with a thick coconut glaze." },
      { code: "D4", name: "Slow-cooked Chicken in Coconut Milk", price: "$17.90", description: "Opor Ayam - Chicken gently braised in a mild, comforting lemongrass and coconut broth." }
    ]
  },
  {
    category: "Traditional Grilled & Satay",
    items: [
      { code: "E1", name: "Grilled Beef Ribs*", price: "$20.90", description: "Iga Bakar - Perfectly glazed grilled beef ribs dressed with sweet soy sauce and sambal." },
      { code: "E2", name: "Grilled Chicken*", price: "$18.90", description: "Ayam Bakar - Traditional savory charcoal grilled chicken marinated in lemongrass and lime leaf." },
      { code: "E3", name: "Chicken Satay (6) served w/ rice cake", price: "$18.90", description: "Six tender grilled skewers, served alongside compressed rice cakes (Lontong) and rich peanut sauce." }
    ]
  },
  {
    category: "Traditional Fried",
    items: [
      { code: "F1", name: "Fried Chicken w/ Belacan Sauce", price: "$17.90", description: "Crispy fried chicken paired with our rich and spicy shrimp paste sambal." },
      { code: "F2", name: "Fried Chicken in Balado Sauce", price: "$18.90", description: "Crunchy fried chicken smothered in a thick sweet-and-spicy red chili sauce." },
      { code: "F3", name: "Smashed Chicken in Penyet Sauce", price: "$18.90", description: "Ayam Penyet - Smashed fried chicken served with fiery red sambal, fresh cabbage, and herbs." },
      { code: "F4", name: "Fried Chicken w/ Crispy Fried Flakes", price: "$18.90", description: "Ayam Kremes - Crispy fried golden chicken topped with savory aromatic crunch flakes." },
      { code: "F5", name: "Fried Chicken w/ Green Sambal", price: "$18.90", description: "Ayam Cabe Ijo - Golden fried chicken accompanied by house green chili wok sauce." },
      { code: "F6", name: "Crispy Duck", price: "$19.90", description: "Bebek Goreng - Extra crispy Balinese fried duck bursting with coriander flavors." },
      { code: "F7", name: "Fried Whole Catfish w/ Belacan Sauce", price: "$17.90", description: "Pecel Lele - Highly traditional deep-fried whole catfish with our sharp shrimp-paste sambal." },
      { code: "F8", name: "Fried Whole Tilapia Fish in Balado Sauce", price: "$21.90", description: "Ikan Nila Goreng Balado - Crispy-skin whole tilapia topped with sweet and medium-spicy red chili sauce." }
    ]
  },
  {
    category: "Coconut Rice",
    items: [
      { code: "G1", name: "Fried Chicken w/ coconut rice", price: "$18.90", description: "Fragrant coconut-infused rice served with dynamic fried chicken, egg, and sides." },
      { code: "G2", name: "Slow Cooked Sweet Beef w/ coconut rice", price: "$19.90", description: "Savory marinated sweet beef strips served alongside house coconut rice." },
      { code: "G3", name: "Fried Whole Tilapia Fish w/ coconut rice", price: "$22.90", description: "Crispy, moist whole tilapia paired with richly aromatic coconut rice." },
      { code: "G4", name: "Salted Fish w/ coconut rice", price: "$16.90", description: "Tasty crisp-fried salted fish accompanied with coconut rice and hardboiled egg." },
      { code: "G5", name: "Hainanese Chicken Rice", price: "$17.90", description: "Tender steamed chicken slices served with traditional garlic ginger infused rice." }
    ]
  },
  {
    category: "Fried Rice",
    items: [
      { code: "H1", name: "Chicken Fried Rice", price: "$17.90", description: "Aromatic Indonesian Nasi Goreng with premium stir-fried chicken." },
      { code: "H2", name: "Seafood Fried Rice", price: "$19.90", description: "Fluffy fried rice stir-fried with fresh squid, prawns, and savory fish balls." },
      { code: "H3", name: "Beef Fried Rice", price: "$19.90", description: "Stir-fried rice rich in garlic, onion, and tender sliced beef." },
      { code: "H4", name: "Lamb Fried Rice", price: "$19.90", description: "Full-bodied seasoned wok rice sautéed with flavorful spiced lamb slices." },
      { code: "H5", name: "Terasi Fried Rice (Belacan Sauce)", price: "$17.90", description: "Authentic wok-fried rice seasoned heavily with shrimp paste and red chilies." },
      { code: "H6", name: "Anchovy Fried Rice", price: "$17.90", description: "Crisp and salty fried rice packed with small silver dried anchovies." },
      { code: "H7", name: "Sator Bean \"Petai\" Fried Rice", price: "$19.90", description: "Delightfully earthy, distinct fried rice sautéed with bitter sator beans." },
      { code: "H8", name: "Vegetarian Fried Rice", price: "$17.90", description: "Sautéed with market cabbage, broccoli, carrots, and scrambled tofu." }
    ]
  },
  {
    category: "Fried Hokian Noodle",
    items: [
      { code: "H9", name: "Chicken Fried Hokian", price: "$17.90", description: "Thick yellow egg noodles wok-tossed with savory sliced chicken and fresh greens." },
      { code: "H10", name: "Seafood Fried Hokian", price: "$19.90", description: "Yellow egg noodles combined with a rich array of prawns, calamari, and fish cake." },
      { code: "H11", name: "Beef Fried Hokian", price: "$19.90", description: "Stir-fried dense yellow noodles with sweet and savory marinated beef strips." },
      { code: "H12", name: "Lamb Fried Hokian", price: "$19.90", description: "Yellow noodles wok-sautéed with spiced premium sliced lamb." },
      { code: "H13", name: "Terasi Fried Hokian (Belacan)", price: "$17.90", description: "Noodles featuring are aromatic flavor from seasoned shrimp paste wok roasting." },
      { code: "H14", name: "Vegetarian Fried Hokian", price: "$17.90", description: "Broad yellow noodles loaded with tofu wedges, carrots, pak choi, and sprouts." }
    ]
  },
  {
    category: "Fried Vermicelli",
    items: [
      { code: "H15", name: "Chicken Fried Vermicelli", price: "$17.90", description: "Thin, delicate rice noodles wok-stirred with fresh chicken bits and sweet soy sauce." },
      { code: "H16", name: "Seafood Fried Vermicelli", price: "$19.90", description: "Wok-fried light rice noodles with ocean squid, prawns, and crisp vegetables." },
      { code: "H17", name: "Beef Fried Vermicelli", price: "$19.90", description: "Rice vermicelli tossed with sweet red onions and tender sliced thin beef." },
      { code: "H18", name: "Lamb Fried Vermicelli", price: "$19.90", description: "Aromatic thin rice noodles tossed with roasted lamb slices and coriander." },
      { code: "H19", name: "Terasi Fried Vermicelli", price: "$17.90", description: "Thin vermicelli wok-toasted in savory, pungent traditional shrimp paste." },
      { code: "H20", name: "Vegetarian Fried Vermicelli", price: "$17.90", description: "Stir-fried light rice noodles featuring sweet soy sauce, bean curd, and shredded cabbage." }
    ]
  },
  {
    category: "Char Kway Teow",
    items: [
      { code: "H21", name: "Chicken Char Kway Teow", price: "$17.90", description: "Flat rice noodles stir-fried in high-heat wok with savory chicken, garlic, and greens." },
      { code: "H22", name: "Seafood Char Kway Teow", price: "$19.90", description: "Smoky flat noodles stir-fried with squid, prawns, bean sprouts, and chives." },
      { code: "H23", name: "Beef Char Kway Teow", price: "$19.90", description: "Stir-fried smoky wide rice noodles packed with marinated tender beef slices." },
      { code: "H24", name: "Lamb Char Kway Teow", price: "$19.90", description: "Premium flat rice noodles enhanced with slow-sautéed lamb spices." },
      { code: "H25", name: "Terasi Char Kway Teow", price: "$17.90", description: "Smoky flat noodles cooked with shrimp paste aroma and fiery white pepper." },
      { code: "H26", name: "Vegetarian Char Kway Teow", price: "$17.90", description: "Smoky wide rice noodles loaded with colorful crispy vegetables and tofu blocks." }
    ]
  },
  {
    category: "Char Hor Fun",
    items: [
      { code: "H27", name: "Chicken Char Hor Fun", price: "$18.90", description: "Smoky flat rice noodles smothered under a rich, thick egg gravy with succulent chicken." },
      { code: "H28", name: "Beef Char Hor Fun", price: "$20.90", description: "Silky flat rice noodles under an aromatic egg-laden broth with tender beef pieces." },
      { code: "H29", name: "Seafood Char Hor Fun", price: "$20.90", description: "Wide noodles in creamy, velvety white egg gravy filled with ocean fresh seafood." }
    ]
  },
  {
    category: "Vegetable",
    items: [
      { code: "J1", name: "Steamed Mix Vegetable w/ Peanut Sauce", price: "$17.90", description: "Gado-Gado - Steamed seasonal greens, potatoes, egg, bean sprouts, and rice cakes bathed in savory hot peanut dressing." },
      { code: "J2", name: "Stir Fried Water Spinach w/ Terasi/Garlic*", price: "$17.90", description: "Kang Kung Belacan - Dynamic aquatic spinach tossed with garlic or traditional shrimp paste." },
      { code: "J3", name: "Stir Fried Chinese Broccoli*", price: "$17.90", description: "Kailan - Fresh Chinese broccoli leaves stir-fried in aromatic oyster garlic sauce." },
      { code: "J4", name: "Stir Fried Mix Vegetable*", price: "$17.90", description: "Cap Cay - Deluxe wok-tossed carrots, baby corn, mushrooms, and greens." },
      { code: "J5", name: "Stir Fried Mix Vegetable w/ Chicken*", price: "$17.90", description: "Hearty seasonal stir-fried greens mixed with seasoned chicken slices." },
      { code: "J6", name: "Stir Fried Mix Vegetable w/ Seafood*", price: "$19.90", description: "Fresh garden vegetables stir-fried with rich seafood stock, plump prawns, and hot squid." }
    ]
  },
  {
    category: "Dessert",
    items: [
      { code: "K1", name: "Combination Ice", price: "$8.90", description: "Es Campur - Mountain of shaved ice topped with diverse tropical jellies, jackfruit, grass jelly, coconut, and condensed milk." },
      { code: "K2", name: "Drunken Ice", price: "$8.90", description: "Es Teller - Rich avocado, jackfruit strips, tender young coconut meat, in sweet syrup and creamy milk." },
      { code: "K3", name: "Jackfruit Ice", price: "$8.90", description: "Shaved ice loaded exclusively with fragrant sweet shredded young jackfruit." },
      { code: "K4", name: "Durian Ice", price: "$9.90", description: "Legendary dessert featuring premium durian pulp atop sweet shaved ice and cold syrup milk." }
    ]
  },
  {
    category: "Beverage",
    items: [
      { code: "L1", name: "[Homemade] Young Coconut Ice", price: "$6.90", description: "Es Kelapa Muda - Pure refreshing tall juice with shreds of sweet young coconut meat." },
      { code: "L2", name: "[Homemade] Hot Ginger Drink", price: "$5.00", description: "Wedang Jahe - Hand-boiled natural spicy hot ginger roots to warm you up." },
      { code: "L3", name: "[Homemade] Happy Soda", price: "$6.90", description: "Soda Gembira - Sweet classic fizz featuring special rose syrup, condensed milk, and soda water." },
      { code: "L4", name: "[Homemade] Tamarind Drink", price: "$5.90", description: "Freshly brewed tang and sweet cold herbal tamarind juice." },
      { code: "L5", name: "[Homemade] Milo Dinosaur", price: "$7.90", description: "Iced sweet milk cocoa topped with a massive mountain of pure Milo powder." },
      { code: "L6", name: "[Homemade] Milo Godzilla", price: "$8.90", description: "Iced Milo Dinosaur upgraded with a scoop of creamy vanilla ice cream on top." },
      { code: "L7", name: "[Homemade] Milo (Hot/Cold)", price: "$6.90", description: "Rich, classic chocolate malt beverage." },
      { code: "M1", name: "[Tea] Jasmine Tea (Hot)", price: "$4.90", description: "Fragrant Jasmine tea pot." },
      { code: "M2", name: "[Tea] Green Tea (Hot)", price: "$4.90", description: "Healthy antioxidant-rich warm green tea." },
      { code: "M3", name: "[Tea] Sweet Iced Tea", price: "$4.90", description: "Sweet cold refreshing jasmine black tea." },
      { code: "M4", name: "[Tea] Lemon Iced Tea", price: "$4.90", description: "Zesty black tea brewed with fresh lemon juice." },
      { code: "M5", name: "[Tea] Hot Teh Tarik", price: "$6.90", description: "Rich, frothy hand-pulled black tea blend sweetened with milk." },
      { code: "M6", name: "[Tea] Iced Teh Tarik", price: "$6.90", description: "Cold pulled sweet creamy tea beverage." },
      { code: "N1", name: "[Coffee] Traditional White Coffee (Hot)", price: "$4.90", description: "Indonesian artisan white coffee blend with sweet condensed milk." },
      { code: "N2", name: "[Coffee] Iced White Coffee", price: "$4.90", description: "Chilled sweet white coffee." },
      { code: "P1", name: "[Juice] Avocado Smoothie", price: "$8.90", description: "Silky avocado blend decorated with warm chocolate drizzle." },
      { code: "P2", name: "[Juice] Soursop Smoothie", price: "$7.90", description: "Creamy, naturally sweet and pleasantly tart tropical soursop blend." },
      { code: "P3", name: "[Juice] Durian Smoothie", price: "$9.90", description: "Exotic rich durian smoothie blend, perfect for true durian lovers." },
      { code: "P4", name: "[Juice] Passion Fruit Juice", price: "$5.90", description: "Refreshing, bright, crisp passion fruit juice." },
      { code: "P5", name: "[Juice] Fresh Orange Juice", price: "$5.90", description: "Warming morning vitamin-rich freshly squeezed orange juice." }
    ]
  }
];

export const MENU_DATA: MenuCategory[] = RAW_MENU_DATA.map(cat => ({
  ...cat,
  items: cat.items.map(item => ({
    ...item,
    image: MENU_IMAGES[item.code] || undefined
  }))
}));
