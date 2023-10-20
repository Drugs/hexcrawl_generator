const terrainFeatures = [
    "A serene, crystal-clear pond surrounded by mossy rocks.",
    "A dense thicket of thorny vines, forming an impenetrable barrier.",
    "Ancient, towering trees with massive buttress roots.",
    "A narrow, sun-dappled trail leading deeper into the forest.",
    "A massive, hollow tree with an entrance at its base.",
    "A sunlit glade with colorful flowers and buzzing insects.",
    "A babbling brook flowing through the heart of the forest.",
    "Large mushrooms with bioluminescent caps, lighting the way.",
    "A hidden waterfall with a clear pool at its base.",
    "A tangle of wildflowers, releasing their sweet scent.",
    "Vibrant moss covering everything in a green carpet.",
    "A tree with bark that peels off to reveal intricate designs.",
    "A gigantic, ancient spider web among the trees.",
    "A natural arch formed by intertwined tree branches.",
    "A massive, moss-covered boulder with a hidden crevice.",
    "A grove of trees with intertwined, knotted branches.",
    "Giant pitcher plants filled with rainwater and insects.",
    "A cluster of enormous, brightly colored mushrooms.",
    "A field of tall, swaying grass, creating a maze.",
    "Vines hanging from the trees like delicate curtains.",
    "A fallen tree with a hollowed-out interior.",
    "A sunbeam breaking through the canopy onto a stone circle.",
    "A tranquil, winding river with clear, drinkable water.",
    "A patch of wild strawberries growing in abundance.",
    "A network of vines forming a natural rope bridge.",
    "A massive, ancient stone with strange, runic carvings.",
    "A towering, flowering fern reaching for the sky.",
    "A grove of trees shaped like enormous toadstools.",
    "A dense, thorny underbrush filled with hidden creatures.",
    "Giant, iridescent fireflies dancing in the daylight.",
    "A hidden grove of cherry trees, blossoms drifting in the wind.",
    "A massive ant hill, bustling with tiny, diligent workers.",
    "A stretch of ancient, gnarled trees with twisted branches.",
    "A bed of soft moss that feels like walking on clouds.",
    "A tangle of tall, fragrant herbs used in local potions.",
    "A hollow log with mushrooms growing on the interior.",
    "A sunlit glen, perfect for a midday picnic.",
    "A patch of quicksand hidden beneath a bed of leaves.",
    "Tall, ancient trees covered in vibrant, clinging vines.",
    "A massive, upturned tree with its roots exposed.",
    "A peaceful meadow filled with fluttering butterflies.",
    "A natural clearing where deer come to graze.",
    "A field of wild orchids in full, colorful bloom.",
    "A hidden nest of brilliantly colored exotic birds.",
    "A tree with a knothole that reveals a hidden message.",
    "A bubbling hot spring with rejuvenating properties.",
    "A thicket of thorny, carnivorous plants with snapping jaws.",
    "A patch of glowing lichen that lights up at night.",
    "An ancient, leaning tree with a hollow trunk.",
    "A secret grove of trees with hidden, sparkling gems.",
    "A circle of stones with intricate carvings and runes.",
    "A dense thicket of exotic, flowering plants.",
    "A sunlit glade with crystal-clear water pools.",
    "Mushrooms with reflective caps that catch the sunlight.",
    "A hidden pool filled with water lilies and frogs.",
    "A grove of aromatic trees releasing a pleasant fragrance.",
    "A tree with fruit that holds a unique, magical property.",
    "Vividly colored, carnivorous pitcher plants.",
    "A cluster of vines forming a swing in the trees.",
    "A mound of vibrant flowers, attracting swarms of bees.",
    "Giant, ancient tree roots stretching across the ground.",
    "A quiet, sun-dappled clearing used for meditation.",
    "A patch of sweet berries with remarkable healing properties.",
    "A network of interconnected, towering mushrooms.",
    "A massive, hollow log providing shelter for creatures.",
    "A grove of trees with wide, overlapping branches.",
    "Tall reeds along the bank of a slow-moving river.",
    "Vines adorned with bioluminescent flowers.",
    "A downed tree with a hidden cache of buried treasure.",
    "A sunbeam breaking through the canopy onto a stone circle.",
    "A tranquil, winding river with clear, drinkable water.",
    "A patch of wild strawberries growing in abundance.",
    "A network of vines forming a natural rope bridge.",
    "A massive, ancient stone with strange, runic carvings.",
    "A towering, flowering fern reaching for the sky.",
    "A grove of trees shaped like enormous toadstools.",
    "A dense, thorny underbrush filled with hidden creatures.",
    "Giant, iridescent fireflies dancing in the daylight.",
    "A hidden grove of cherry trees, blossoms drifting in the wind.",
    "A massive ant hill, bustling with tiny, diligent workers.",
    "A stretch of ancient, gnarled trees with twisted branches.",
    "A bed of soft moss that feels like walking on clouds.",
    "A tangle of tall, fragrant herbs used in local potions.",
    "A hollow log with mushrooms growing on the interior.",
    "A sunlit glen, perfect for a midday picnic.",
    "A patch of quicksand hidden beneath a bed of leaves.",
    "Tall, ancient trees covered in vibrant, clinging vines.",
    "A massive, upturned tree with its roots exposed.",
    "A peaceful meadow filled with fluttering butterflies.",
    "A natural clearing where deer come to graze.",
    "A field of wild orchids in full, colorful bloom.",
    "A hidden nest of brilliantly colored exotic birds.",
    "A tree with a knothole that reveals a hidden message.",
    "A bubbling hot spring with rejuvenating properties.",
    "A thicket of thorny, carnivorous plants with snapping jaws.",
    "A patch of glowing lichen that lights up at night."
  
];

const mishaps = [
    "naturalMishaps",
    "supernaturalMishaps"
    ];
    
const naturalMishaps = [
  "Falling Tree: A massive tree has fallen across your path, and you must use your strength to lift it or find a way around.",
  "Rockslide: Loose rocks tumble down a hillside, blocking your way. You need to clear the path or find a safe route.",
  "Precarious Cliff: The path ahead narrows to a narrow cliff ledge with a steep drop. You must carefully navigate it without falling.",
  "Swinging Vines: To continue, you must swing across a large gap using hanging vines. Your agility is crucial to avoid a fall.",
  "Poisonous Plants: You stumble upon a patch of toxic plants that could harm you. Use your knowledge of herbs and your hardiness to handle them safely.",
  "Foul Water Source: Your water supply has been contaminated by a foul odor. You need to determine the cause and find a clean source to avoid illness.",
  "River Crossing: You come to a fast-flowing river. Your knowledge of water currents and nature helps you decide on the best method to cross it safely.",
  "Poisonous Berries: You encounter unfamiliar berries, and you must use your botanical knowledge to determine if they are safe to eat.",
  "Hidden Predator: An unseen predator stalks you. Your keen senses must help you spot the lurking threat before it attacks.",
  "Rock Trap: You notice signs of an a trap, rigged to cause a cascade of large rocks to roll down the hill toward you. Your senses and quick reflexes are essential to avoid being crushed.",
  "Aggressive Wildlife: You encounter a group of agitated animals. Use your animal handling skills to calm them or make them back off.",
  "Intimidating Beast: A massive, territorial creature stands in your way. Your charisma and animal handling may help you pass safely or befriend it."
];

const supernaturalMishaps = [
  "Sealed Portal: A magical portal blocks your way, sealed by ancient forest enchantments. You must find a way to force it open.",
  "Overgrown Enchantment: Thick vegetation conceals an enchanted barrier. Discover its weak points to pass through safely.",
  "Arcane Glyphs: Invisible arcane symbols cover the path ahead. You must navigate the corridor without triggering their magical effects.",
  "Mystic Illusions: Illusory obstacles obscure your path. Use your wits to see through the illusions and find the true way forward.",
  "Mind-Controlling Aura: A mysterious aura influences your thoughts. Resist its mind-controlling effects to stay true to your purpose.",
  "Bewildering Whispers: Strange voices echo through the trees, sowing confusion among the party members. Overcome the confusion to make sound decisions.",
  "Cryptic Riddles: Mysterious inscriptions pose riddles that guard a hidden passage. Solve the riddles to proceed on your journey.",
  "Hidden Totems: Tribal totems with protective spells guard a sacred site. Find and deactivate them to avoid invoking the spirits' wrath.",
  "Haunted Apparitions: Ghostly figures haunt the forest, triggering fear in your hearts. Use your wisdom to resist the fear and press forward.",
  "Eerie Silence: Unnatural silence descends upon the forest, unsettling the party. Your perception is crucial to detecting lurking dangers.",
  "Enchanted Charms: Charms left by forest spirits challenge your intentions. Convince the magical entities of your respect for the forest to pass unharmed.",
  "Cursed Grounds: The ground beneath your feet is cursed, weakening your resolve. Fortify your willpower to resist the curse's effects and move forward.",
  "Arcane Heat Waves: Sudden bursts of arcane heat waves scorch the forest. Withstand the extreme temperatures to continue your journey.",
  "Energy Drain: Malignant spirits drain your party's energy, leaving you weakened. Rally your constitution to resist their draining effects and carry on."
];

const specialFeatures = [
  {
    description: "Ancient Magic Circle",
    consequence: "Performing a ritual in the circle may reveal it's secrets, or release an ancient prisoner."
  },
  {
    description: "Eerie Standing Stones of Ancient Ceremony",
    consequence: "Participating in a respectful ritual at the stones can provide insight into local legends or an aura of protection."
  },
  {
    description: "Glowing Fungi Under a Canopy of Trees",
    consequence: "Harvesting the fungi provides a source of dim, natural light and an ingredient for potions."
  },
  {
    description: "Iridescent Rainbow Mist",
    consequence: "Walking through the mist grants a temporary, ethereal appearance, making characters difficult to detect."
  },
  {
    description: "Ominous Stone Altar with Sinister Carvings",
    consequence: "Using the altar for dark rituals may grant power at the cost of sanity or attracting malevolent spirits."
  },
  {
    description: "Giant Carnivorous Plants",
    consequence: "Harvesting the plants' acidic secretions provides a potent poison for weapons."
  },
  {
    description: "Moonlit Clearing with Luminous Butterflies",
    consequence: "Collecting the butterflies' ethereal scales allows the creation of items that emit soft, calming light."
  },
  {
    description: "Mystical Rock Formation with Invisible Path",
    consequence: "Discovering and following the path provides a shortcut through treacherous terrain."
  },
  {
    description: "Crystal-Encrusted Grotto with Healing Pools",
    consequence: "Immersing in the pools offers powerful, long-lasting healing effects."
  },
  {
    description: "Gargantuan Moss-Covered Skeleton",
    consequence: "Exploring the remains may yield valuable fossils or artifacts."
  },
  {
    description: "Giant Venus Flytrap",
    consequence: "Salvaging the trap's digestive fluids creates a corrosive weapon or poison."
  },
  {
    description: "Fey Portal Surrounded by Fireflies",
    consequence: "Activating the portal leads to a temporary connection with the fey realm or guidance from forest spirits."
  },
  {
    description: "Mystical Enchanted Vines",
    consequence: "Harvesting and weaving the vines into items grants minor enchantments."
  },
  {
    description: "Ancient Stone Monoliths Aligned with Stars",
    consequence: "Observing the monoliths provides insight into the movement of celestial bodies or upcoming celestial events."
  },
  {
    description: "Ethereal Waterfall Flowing Upward",
    consequence: "Gazing into the waterfall temporarily inverts gravity's effects, allowing unique exploration possibilities."
  },
  {
    description: "Reflective Pool of Mirror Images",
    consequence: "Studying the pool provides glimpses of past and future reflections, potentially revealing crucial information."
  },
  {
    description: "Hidden Bamboo Labyrinth with Tricky Fae",
    consequence: "Successfully navigating the labyrinth may lead to valuable fae tokens or amusing pranks."
  },
  {
    description: "Glowing Amber-Sap Waterfall",
    consequence: "Collecting the amber sap grants a powerful curative potion."
  },
  {
    description: "Giant Blossoming Flower Canopy",
    consequence: "Resting under the canopy provides a night's rest in minutes."
  },
  {
    description: "Whispering Wind-Through-Stone Passage",
    consequence: "Listening to the whispers offers guidance or cryptic knowledge."
  },
  {
    description: "Rusted Stargazing Brass Artefact",
    consequence: "Operating the observatory can reveal celestial secrets, upcoming celestial events, or locations of hidden treasures."
  },{
    description: "Eerie Standing Stones of Ancient Ceremony",
    consequence: "Participating in a respectful ritual at the stones can provide insight into local legends or an aura of protection."
  },
  {
    description: "Glowing Fungi Under a Canopy of Trees",
    consequence: "Harvesting the fungi provides a source of dim, natural light and an ingredient for potions."
  },
  {
    description: "Iridescent Rainbow Mist",
    consequence: "Walking through the mist grants a temporary, ethereal appearance, making characters difficult to detect."
  },
  {
    description: "Ominous Stone Altar with Sinister Carvings",
    consequence: "Using the altar for dark rituals may grant power at the cost of sanity or attracting malevolent spirits."
  },
  {
    description: "Giant Carnivorous Plants",
    consequence: "Harvesting the plants' acidic secretions provides a potent poison for weapons."
  },
  {
    description: "Moonlit Clearing with Luminous Butterflies",
    consequence: "Collecting the butterflies' ethereal scales allows the creation of items that emit soft, calming light."
  },
  {
    description: "Mystical Rock Formation with Invisible Path",
    consequence: "Discovering and following the path provides a shortcut through treacherous terrain."
  },
  {
    description: "Crystal-Encrusted Grotto with Healing Pools",
    consequence: "Immersing in the pools offers powerful, long-lasting healing effects."
  },
  {
    description: "Gargantuan Moss-Covered Skeleton",
    consequence: "Exploring the remains may yield valuable fossils or artifacts."
  },
  {
    description: "Giant Venus Flytrap Trapped by Its Prey",
    consequence: "Salvaging the trap's digestive fluids creates a corrosive weapon or poison."
  },
  {
    description: "Fey Portal Surrounded by Fireflies",
    consequence: "Activating the portal leads to a temporary connection with the fey realm or guidance from forest spirits."
  },
  {
    description: "Mystical Enchanted Vines",
    consequence: "Harvesting and weaving the vines into items grants minor enchantments."
  },
  {
    description: "Ancient Stone Monoliths Aligned with Stars",
    consequence: "Observing the monoliths provides insight into the movement of celestial bodies or upcoming celestial events."
  },
  {
    description: "Ethereal Waterfall Flowing Upward",
    consequence: "Gazing into the waterfall temporarily inverts gravity's effects, allowing unique exploration possibilities."
  },
  {
    description: "Reflective Pool of Mirror Images",
    consequence: "Studying the pool provides glimpses of past and future reflections, potentially revealing crucial information."
  },
  {
    description: "Hidden Bamboo Labyrinth with Tricky Fae",
    consequence: "Successfully navigating the labyrinth may lead to valuable fae tokens or amusing pranks."
  },
  {
    description: "Glowing Amber-Sap Waterfall",
    consequence: "A magnificent waterfall made of glowing amber sap, trickling with healing properties."
  },
  {
    description: "Giant Blossoming Flower Canopy",
    consequence: "A vast, blossoming flower canopy hanging above a serene grove."
  },
  {
    description: "Whispering Wind-Through-Stone Passage",
    consequence: "A narrow passage between two colossal stones where the wind produces melodious whispers."
  }
];

const daytimeFlora = [
  "Sun-kissed wildflowers in various colors",
  "Tall and vibrant ferns, perfect for cover",
  "A species of flowering tree shedding petals",
  "Blossoming vines that drape from the trees",
  "Large, colorful carnivorous plants",
  "Mushrooms that release clouds of spores",
  "Spiky bushes with sweet and edible berries",
  "Giant, delicate-looking irises",
  "Thick and broad leaves perfect for crafting",
  "Sap-producing trees used for makeshift glue",
  "Clusters of fragrant herbs",
  "A species of tree with wood perfect for crafting",
  "Aquatic plants that conceal aquatic life",
  "Dangling vines filled with colorful fruits",
  "Thorny bushes that deter wildlife",
  "Voracious Venus flytraps",
  "Glowing, bioluminescent flowers",
  "Orchids with peculiar, alluring scents",
  "Prickly cacti-like plants",
  "Trees with aromatic resin."
];
const nighttimeFlora = [
  "Night-blooming, phosphorescent mushrooms",
  "Giant moonflowers that emit ghostly light",
  "Bioluminescent algae in the water sources",
  "Trees with bark that glows in the dark",
  "Luminous moss covering rocks and tree trunks",
  "Delicate flowers that emit soothing scents",
  "Lichen that glows with a soft blue hue",
  "Firefly-attracting plants",
  "Nightshades with medicinal properties",
  "A species of tree with leaves that shimmer",
  "Fungi that create an eerie, greenish glow",
  "Thorny vines that seem to come alive at night",
  "Glow-in-the-dark berries on low bushes",
  "Ferns with shimmering, ethereal fronds",
  "Pungent herbs used in nighttime rituals",
  "Vibrant, luminescent orchids",
  "Bushes with glowing, translucent flowers",
  "Ghostly willow trees with hanging wisps",
  "Pulsating, eerie-looking fungi",
  "Soft, velvet-like ground cover that glows."
];
const daytimeFauna = [
  "Singing birds with colorful plumage",
  "Grazing herds of deer and antelope",
  "Playful monkeys swinging from branches",
  "Darting and vibrant butterflies",
  "Hummingbirds flitting around flowers",
  "Squirrels and chipmunks gathering food",
  "Chameleons blending with the foliage",
  "Busy bees and wasps pollinating plants",
  "Lizards basking in the sun",
  "Small and harmless ground-dwelling reptiles",
  "Giant beetles crawling through the underbrush",
  "Frogs and toads croaking by the water",
  "Grasshoppers and crickets creating a chorus",
  "Friendly and inquisitive raccoons",
  "Insect-eating birds hunting prey",
  "Colorful and harmless snakes",
  "Fish jumping in streams and ponds",
  "Gentle herbivorous rodents",
  "Swarming fireflies at dusk",
  "Friendly, curious foxes."
];
const nighttimeFauna = [
  "Owls hooting in the dark",
  "Night-feeding bats soaring overhead",
  "Elusive panthers",
  "Glowing, carnivorous fireflies",
  "Giant moths attracted to light sources",
  "Playful raccoons scavenging at night",
  "Serpents slithering through the shadows",
  "Ghostly white deer with spectral antlers",
  "Giant tarantulas emerging from their burrows",
  "Nocturnal, tree-dwelling lemurs",
  "Howling and unseen nocturnal primates",
  "Nightshade-addicted monkeys",
  "Dark, sinister serpents",
  "Voracious and hungry owlbears",
  "Giant spiders spinning webs in moonlight",
  "Shimmering, ethereal specters",
  "Singing frogs filling the night with noise",
  "Sinister and creeping shadow creatures",
  "Skeletal, ghostly animals",
  "Eerie, moonlit-wandering wolves."
];