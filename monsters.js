const engagementDistance = [
  "Near (5sq)",
  "Knife's throw (10sq)",
  "Medium Range (15sq)",
  "Far (20sq)",
  "Very far(40sq)",
];

const monsterEncounterTypes = [
  "The Monster Lair",
  "Old Tracks",
  "Fresh Tracks",
  "Hunted Carcass",
  "Droppings",
  "Prints",
  "Scent"
];

const humanTracks = [
    "Campfire Remnants",
    "Carved Symbols",
    "Footwear Discards",
    "Litter and Trash",
    "Trap Remnants"
];

const choose = [
    "forestHumanoids",
    "forestMonsters",
    "forestMonsters"
];

const monsterAttitudeTable = [
  "Neutral",
  "Aggressive",
  "Curious",
  "Defensive",
  "Sleeping",
  "Eating",
  "Hunting",
  "Indifferent",
  "Territorial",
  "Playful"
];

const forestHumanoids = [
  "Bandit",
  "Brigands"
];

const forestMonsters = [
  "Ape",
  "Bear",
  "Fire Beetle",
  "Blink Dog",
  "Boar",
  "Cat, Great",
  "Centaur",
  "Chimera",
  "Cockatrice",
  "Crab, Giant",
  "Elemental",
  "Ferret, Giant",
  "Gnoll",
  "Griffon",
  "Harpy",
  "Hawk",
  "Hippogriff",
  "Lizard, Giant",
  "Manticore",
  "Owl Bear",
  "Treant",
  "Unicorn",
  "Wolf",
  "Wyvern"
];

const mercenaryEncounters = [
  "Ambushing a group of wealthy Halfling merchants",
  "Assassinating the Camp leader of a rival company",
  "Attacking settlers on their way to the frontier",
  "Beheading a captured Berserker chieftain",
  "Bivouacking with ruthless efficiency",
  "Brawling over the only available bachelor",
  "Building a bridge to cross a precarious chasm",
  "Burning down a grain-filled barn as Farmers watch",
  "Camping for the day to rest before an engagement",
  "Carousing raucously with stolen Dwarf spirits",
  "Celebrating a successful raid, divvying up the spoils",
  "Conscripting local youths from a nearby village",
  "Conspiring with an unscrupulous Earl to start a coup",
  "Defending a trade route from those who don't pay tolls",
  "Delivering a cache of weapons to their fortified camp",
  "Despoiling a Caravan from far off lands",
  "Digging a defensive perimeter under protest",
  "Disguising themselves in the uniforms of a Holy Order",
  "Dispatching a rider to retrieve reinforcements",
  "Displaying the symptoms of a virulent plague",
  "Dissuading their leader from continued Forced March",
  "Doling out weekly pay from a large, locked strongbox",
  "Drilling pike formations in an open area",
  "Escorting Traders through the Wilderness, for a price",
  "Ferreting out a confederate in their ranks",
  "Foraging for food to supplement stale rations",
  "Fortifying a ruined Manor house as a home base",
  "Goading two rival factions into all-out war",
  "Granting quarter to a Cleric who fought bravely",
  "Guarding the only traversable route to their Camp",
  "Hanging a group of deserters for all to see",
  "Heckling a new conscript who fell from a horse",
  "Helping with a harvest in exchange for a share of crops",
  "Hijacking a richly appointed Abbess and her Acolytes",
  "Hunkering down for a potentially long siege",
  "Inciting riots to take advantage of the political chaos",
  "Initiating new members with a solemn ceremony",
  "Looting a wealthy village on Trade Day",
  "Marauding through the countryside, pillaging Villages",
  "Moonlighting as Bounty Hunters to apprehend Bandits",
  "Nursing their wounds after a sound defeat by an Army",
  "Occupying a very superstitious Hamlet",
  "Outriding and pathfinding to head off enemy forces",
  "Overseeing a treaty between rival Mercenary companies",
  "Patrolling a disputed border, itching for action",
  "Pilfering a barrow, unleashing Undead",
  "Plotting to overthrow an inexperienced prince",
  "Plundering an Elf haven, no defenders in sight",
  "On a Peace-keeping visit, brokering good will",
  "Ransacking a Temple, dying Priests pleading for aid",
  "Ravaging a fishing community that failed to pay tribute",
  "Reconnoitering the site of a new stronghold",
  "Recounting stories of a headless soldier, thirsty for blood",
  "Recruiting new members with attractive pay and benefits",
  "Redistributing supplies after a pack Horse went lame",
  "Robbing a Wizard's tower, leader Polymorphed into a Frog",
  "Roughhousing and wrestling as a Dignitary watches",
  "Rustling Sheep from a Shepherd to feed their Camp",
  "Sabotaging an ancient dam, which could flood the area",
  "Saddling their temperamental Hippogriff mounts",
  "Salting the fields after razing a farmstead",
  "Spying on a tribe of Centaurs, unsure of their alliances",
  "Standing watch: a lieutenant’s funeral, died suspiciously",
  "Starving due to broken supply lines, desperate for food",
  "Strategizing: how to defeat a Cyclops that defends their foe",
  "Stripping fallen of arms and armor after a pyrrhic victory",
  "Struggling with blood loss due to Vampiric Vines",
  "Suppressing a local Gnome revolt by force",
  "Surrendering to a band of Dervishes, outmatched",
  "Surrounding an enemy encampment, waiting to strike",
  "Swindling townsfolk by pretending to be tax collectors",
  "Sowing seeds of rebellion with vociferous speeches",
  "Switching loyalties to the highest bidder",
  "Temporarily allied with a Hill Giant, eating all their food",
  "Tending to numerous wounded after a staggering defeat",
  "Torching the huts of peaceful Lizard Men",
  "Undermining a sturdy stone battlement",
  "Waiting for orders from their leader, it's been days",
  "Warmongering by pitting Nomads against each other",
  "Warring with a rival Mercenary Company that hires Orcs",
  "Watering their horses and relaxing with Song",
  "Waylaying a group of Knights to steal steeds and armor"
];

const bearTable = [
  "Cautiously sniffing a baited deadfall",
  "Making short work of a group of Goblins",
  "Chasing after a blonde child",
  "Recently wakeful after hibernation and hungry",
  "Companion of a local Were-bear, patrolling",
  "Eating a dead Elk/Reindeer while Wolves circle",
  "Intrigued by a scent, nose to the ground",
  "Searching sullenly for a Ranger companion",
  "Soft-spoken, gifted speech by a local Druid",
  "Trying to dislodge an arrow from their shoulder"
];
const rollTraps = [
	"jungleTraps",
	"animalTraps",
	"magicalTraps"
]
const allTraps = {
		jungleTraps: [
		  {
			description: "Sleeping Pitfall",
			consequence: "Characters that fall in the trap take damage and have to make Constitution save vs sleep.",
			type: "Jungle Traps"
		  },
		  {
			description: "Venomous Leech Pitfall",
			consequence: "Characters falling into the pit are swarmed by venomous leeches, which can cause ongoing damage.",
			type: "Jungle Traps"
		  },
		  {
			description: "Thorny Underbrush Pitfall",
			consequence: "Characters falling into the pit are pierced by thorns, taking piercing damage and possibly becoming restrained.",
			type: "Jungle Traps"
		  },
		  {
			description: "Ghostly Summons",
			consequence: "Characters falling Wisdom saves become frightened and disoriented.",
			type: "Jungle Traps"
		  },
		  {
			description: "Venomous Plant Sling Trap",
			consequence: "Characters hit by venomous plant projectiles take poison damage and may be poisoned.",
			type: "Jungle Traps"
		  },
		  {
			description: "Piranha-Infested Waters",
			consequence: "Characters swimming in the water are attacked by piranhas, taking damage and risking infection.",
			type: "Jungle Traps"
		  },
		  {
			description: "Blinding Flash Trap",
			consequence: "Characters triggering the trap are temporarily blinded and have disadvantage on attacks and checks.",
			type: "Jungle Traps"
		  },
		  {
			description: "Venomous Dart Spray",
			consequence: "Characters triggering the trap are hit by a spray of venomous darts, taking poison damage and possibly becoming poisoned.",
			type: "Jungle Traps"
		  },
		  {
			description: "Falling Giant Spider Web",
			consequence: "Characters caught in the web become restrained and may be attacked by lurking giant spiders.",
			type: "Jungle Traps"
		  },
		  {
			description: "Aerial Vine Snare",
			consequence: "Characters triggered by the tripwire are lifted off the ground and left vulnerable to ranged attacks.",
			type: "Jungle Traps"
		  },
		  {
			description: "Spike-Studded Boulder Swing Trap",
			consequence: "Characters failing to avoid the trap are struck by a log with spikes, taking damage and potentially becoming impaled.",
			type: "Jungle Traps"
		  },
		  {
			description: "Mystical Rune Trap",
			consequence: "Characters triggering the runes are affected by a magical curse or enchantment, causing various effects.",
			type: "Jungle Traps"
		  },
		  {
			description: "Tangling Roots Snare",
			consequence: "Characters ensnared by the roots must make Strength or Dexterity checks to break free or be restrained.",
			type: "Jungle Traps"
		  },
		  {
			description: "Venomous Plant with Quicksand",
			consequence: "Characters must make Strength checks to escape quicksand while fighting an Ensnaring Venomous Plant",
			type: "Jungle Traps"
		  },
		  {
			description: "Falling Mudslide Trap",
			consequence: "Characters failing to avoid the trap are swept away by a rush of mud and debris, getting slowed and stuck in difficult terrain.",
			type: "Jungle Traps"
		  },
		  {
			description: "Thorny Vines Snare with Bees",
			consequence: "Characters triggering the trap are ensnared in thorny vines and attacked by a swarm of bees, taking damage and risking poison.",
			type: "Jungle Traps"
		  },
		  {
			description: "Camouflaged Pitfall with Poisoned Darts",
			consequence: "Characters falling into the pit are struck by poisoned darts, taking poison damage and potentially becoming paralyzed.",
			type: "Jungle Traps"
		  },
		  {
			description: "Venomous Fungus Release",
			consequence: "Characters triggering the trap release venomous spores, taking poison damage and risking poison effects.",
			type: "Jungle Traps"
		  },
		  {
			description: "Sinking Bog Trap",
			consequence: "Characters stepping into the bog sink into muck, needing to make Strength checks to escape or risk becoming stuck.",
			type: "Jungle Traps"
		  },
		  {
			description: "Cave-In Trap with Quicksand",
			consequence: "Characters triggering the cave-in are buried in quicksand, making Strength checks to escape or becoming submerged.",
			type: "Jungle Traps"
		  }
		],
		animalTraps: [
		  {
			name: "Pitfall Trap",
			description: "A concealed pitfall trap designed to capture small animals.",
			type: "Animal Trap"
		  },
		  {
			name: "Box Trap",
			description: "A baited box trap with a triggering mechanism.",
			type: "Animal Trap"
		  },
		  {
			name: "Deadfall Snare",
			description: "A snare designed to catch animals by trapping them under a heavy weight.",
			type: "Animal Trap"
		  },
		  {
			name: "Net Trap",
			description: "A net is hidden on a path to entangle the prey.",
			type: "Animal Trap"
		  },
		  {
			name: "Cage Trap",
			description: "A baited cage trap designed to catch small animals alive.",
			type: "Animal Trap"
		  },
		  {
			name: "Tripwire Snare",
			description: "A snare with a tripwire that captures by the leg.",
			type: "Animal Trap"
		  },
		  {
			name: "Gill Net",
			description: "A submerged spiked net in a stream or pond.",
			type: "Animal Trap"
		  },
		  {
			name: "Scare Trap",
			description: "This trap releases a sudden loud sound to scare off intruders.",
			type: "Animal Trap"
		  },
		  {
			name: "Alarm Trap",
			description: "A trap that triggers a loud alarm or ligth signal.",
			type: "Animal Trap"
		  },
		  {
			name: "Scent Lure",
			description: "A scent trap with sleeping herbs.",
			type: "Animal Trap"
		  }
		],
		magicalTraps: [
		  {
			description: "An illusory treasure conceals a pitfall trap.",
			consequence: "Characters must make Intelligence saving throws to avoid falling into the pit and take damage",
			type: "Magical Trap"
		  },
		  {
			description: "A magical trap triggers a teleportation portal.",
			consequence: "Characters who activate the trap are teleported to random locations in the jungle.",
			type: "Magical Trap"
		  },
		  {
			description: "A hidden trap releases a blast of elemental energy.",
			consequence: "Characters caught in the blast take elemental damage.",
			type: "Magical Trap"
		  },
		  {
			description: "A magical field causes time to pass at different rates.",
			consequence: "Characters may experience accelerated or slowed time, affecting their actions.",
			type: "Magical Trap"
		  },
		  {
			description: "A magical trap creates a localized area with altered gravity.",
			consequence: "Characters affected are levitated 20sq",
			type: "Magical Trap"
		  },
		  {
			description: "An illusion conceals a tempting treasure hoard.",
			consequence: "Characters attempting to take the illusory treasures become ensnared in a magical net.",
			type: "Magical Trap"
		  },
		  {
			description: "Spectral hands ensnare victims in a magical grasp.",
			consequence: "Characters caught in the hands are restrained and may take necrotic damage.",
			type: "Magical Trap"
		  },
		  {
			description: "A magical trap opens a rift to another plane.",
			consequence: "Characters caught in the rift may be transported to an unfamiliar and dangerous plane of existence.",
			type: "Magical Trap"
		  },
		  {
			description: "A magical tune lures characters into a trap.",
			consequence: "Characters who succumb to the song may become charmed or disoriented.",
			type: "Magical Trap"
		  }
		]
	};