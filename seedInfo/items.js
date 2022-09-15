const items = [
	{
		id: 186,
		item_id: 12668,
		active_item: 'y',
		item_name: '8-Pointed Shuriken',
		child_item_id: 12667,
		icon_id: 4322,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Attack Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Critical Strike and Attack Speed',
		item_tier: 2,
		item_price: 750,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/8-pointed-shuriken.jpg',
	},
	{
		id: 73,
		item_id: 8239,
		active_item: 'y',
		item_name: "Adventurer's Blade",
		child_item_id: 9828,
		icon_id: 4104,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Attack Speed and Movement Speed.',
		item_tier: 2,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/adventurers-blade.jpg',
	},
	{
		id: 2653,
		item_id: 21545,
		active_item: 'y',
		item_name: 'Aegis Amulet',
		child_item_id: 18307,
		icon_id: 10309,
		item_desc:
			'Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. Cooldown - 170s.',
		menuitems: [],
		item_short_desc: 'Invulnerability for a duration',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/aegis-amulet.jpg',
	},
	{
		id: 253,
		item_id: 7672,
		active_item: 'y',
		item_name: 'Aegis Amulet',
		child_item_id: 18307,
		icon_id: 4306,
		item_desc:
			'Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. Cooldown - 180s.',
		menuitems: [],
		item_short_desc: 'Invulnerability for a duration.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/aegis-amulet.jpg',
	},
	{
		id: 274,
		item_id: 14154,
		active_item: 'y',
		item_name: 'Aegis Amulet Upgrade',
		child_item_id: 7672,
		icon_id: 5103,
		item_desc:
			'Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. Cooldown - 150s.',
		menuitems: [],
		item_short_desc: 'Invulnerability for a duration.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/aegis-amulet-upgrade.jpg',
	},
	{
		id: 2742,
		item_id: 21487,
		active_item: 'y',
		item_name: 'Aegis of Acceleration',
		child_item_id: 21546,
		icon_id: 10345,
		item_desc:
			'Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. Each instance of damage prevented in this time provides you 7% Movement Speed for 4s, stacking up to 3 times. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Preventing damage grants movement speed',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/aegis-of-acceleration.jpg',
	},
	{
		id: 2741,
		item_id: 21475,
		active_item: 'y',
		item_name: 'Aegis of Judgement',
		child_item_id: 21546,
		icon_id: 10346,
		item_desc:
			"Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. At the end of the invulnerability, you explode dealing 100 + 50% of the Prevented Damage as Magical Damage in a 30 unit radius. The damage dealt by this effect is capped at 20% of the enemies' Maximum Health. Cooldown - 140s.",
		menuitems: [],
		item_short_desc: 'Deal damage based on prevented damage',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/aegis-of-judgement.jpg',
	},
	{
		id: 2508,
		item_id: 21504,
		active_item: 'y',
		item_name: 'Amulet of Silence',
		child_item_id: 11116,
		icon_id: 10336,
		item_desc:
			'AURA - Allied gods within 70 units have their Magical Protections increased by 15 and their MP5 increased by 30. <n>GLYPH - Gain a stack each time an enemy within 40 units casts an ability. At 5 stacks, your next basic attack against an enemy god will silence them for 1.5s. This effect can only occur every 30s.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+55',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
		],
		item_short_desc:
			'Gain stacks when enemy gods cast abilities, then silence them with a basic attack',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/amulet-of-silence.jpg',
	},
	{
		id: 2509,
		item_id: 21505,
		active_item: 'y',
		item_name: 'Amulet of the Stronghold',
		child_item_id: 11116,
		icon_id: 10337,
		item_desc:
			'AURA - Allied gods within 70 units have their Magical Protections increased by 15 and their MP5 increased by 30. <n>GLYPH - 15% of your Physical Protections are converted to Magical Protections.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+55',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
		],
		item_short_desc: 'Convert Physical Protections to Magical Protections',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/amulet-of-the-stronghold.jpg',
	},
	{
		id: 72,
		item_id: 9828,
		active_item: 'y',
		item_name: 'Ancient Blade',
		child_item_id: 0,
		icon_id: 2895,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+50',
			},
			{
				Description: 'Movement Speed',
				Value: '+5%',
			},
		],
		item_short_desc: 'Attack Speed and Movement Speed',
		item_tier: 1,
		item_price: 550,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/ancient-blade.jpg',
	},
	{
		id: 156,
		item_id: 13277,
		active_item: 'y',
		item_name: 'Ancile',
		child_item_id: 9835,
		icon_id: 3145,
		item_desc:
			'PASSIVE - Whenever you take Magical Damage from an enemy ability you unleash a shockwave that Silences all enemies within a range of 30 units for 1s. This effect cannot trigger more than once every 30s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc:
			'Silences nearby enemies when hit by a magical ability',
		item_tier: 3,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/ancile.jpg',
	},
	{
		id: 321,
		item_id: 19636,
		active_item: 'y',
		item_name: 'Animosity',
		child_item_id: 19634,
		icon_id: 9210,
		item_desc:
			'PASSIVE - Your Basic Attacks deal bonus damage equal to 3% of your Maximum Health as Magical Damage to enemies and structures.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+400',
			},
			{
				Description: 'HP5',
				Value: '+20',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Turn your defense into offense.',
		item_tier: 2,
		item_price: 1250,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/animosity.jpg',
	},
	{
		id: 242,
		item_id: 17353,
		active_item: 'y',
		item_name: 'Apprentice Staff',
		child_item_id: 17349,
		icon_id: 7721,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+50',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Cooldown Reduction and Magical Power',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/apprentice-staff.jpg',
	},
	{
		id: 329,
		item_id: 19678,
		active_item: 'y',
		item_name: "Archmage's Gem",
		child_item_id: 19677,
		icon_id: 9212,
		item_desc:
			'PASSIVE - Every 1s you gain a stack of Demise, causing your next damaging ability that hits an enemy god deals an additional 1% of your Magical Power in damage and remove all stacks. This effect stacks up to 20 times.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+120',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'MP5',
				Value: '+25',
			},
		],
		item_short_desc: 'Charge up power to release a devastating attack.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/archmages-gem.jpg',
	},
	{
		id: 103,
		item_id: 9843,
		active_item: 'y',
		item_name: 'Armored Cloak',
		child_item_id: 9840,
		icon_id: 2880,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+25',
			},
			{
				Description: 'Magical Protection',
				Value: '+25',
			},
			{
				Description: 'Health',
				Value: '+125',
			},
			{
				Description: 'Mana',
				Value: '+125',
			},
		],
		item_short_desc: 'Health and Protections.',
		item_tier: 2,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/armored-cloak.jpg',
	},
	{
		id: 245,
		item_id: 17356,
		active_item: 'y',
		item_name: 'Arondight',
		child_item_id: 17351,
		icon_id: 7723,
		item_desc:
			'PASSIVE - When your Ultimate ability has finished casting, reveal all enemy gods within 120 units for 8s. While moving towards revealed enemies gain 30% Movement Speed. When first striking a revealed target they take an additional 20 + 40% of your Physical Power. This can only occur once every 45 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+75',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'On ultimate use seek out and banish evil.',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/arondight.jpg',
	},
	{
		id: 12,
		item_id: 17090,
		active_item: 'y',
		item_name: 'Asi',
		child_item_id: 7574,
		icon_id: 2526,
		item_desc:
			'PASSIVE - While below 35% Health, you gain an additional 30% Physical Lifesteal for 5 seconds.  Can only occur once every 15 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Attack Speed',
				Value: '+25%',
			},
			{
				Description: 'Physical Penetration',
				Value: '+15',
			},
		],
		item_short_desc: 'Gain Physical Lifesteal when at low Health',
		item_tier: 3,
		item_price: 1300,
		starting_item: 0,
		type: 'Item',
		item_icon: 'https://webcdn.hirezstudios.com/smite/item-icons/asi.jpg',
	},
	{
		id: 171,
		item_id: 14849,
		active_item: 'y',
		item_name: "Atalanta's Bow",
		child_item_id: 14848,
		icon_id: 5451,
		item_desc:
			"PASSIVE - Upon getting a kill or assist on an Enemy god you gain Atalanta's Agility for 10s. This effect increases your Attack Speed by 20% and decreases the Movement Penalty for attacking, backpedaling, and strafing by 30%.",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+10%',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+20%',
			},
		],
		item_short_desc: 'Reduce Attacking and Movement Penalties',
		item_tier: 3,
		item_price: 1300,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/atalantas-bow.jpg',
	},
	{
		id: 8,
		item_id: 7574,
		active_item: 'y',
		item_name: 'Balanced Blade',
		child_item_id: 7573,
		icon_id: 2736,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
		],
		item_short_desc: 'Physical Power and Attack Speed.',
		item_tier: 2,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/balanced-blade.jpg',
	},
	{
		id: 18269,
		item_id: 22901,
		active_item: 'y',
		item_name: "Bancroft's Claw",
		child_item_id: 8551,
		icon_id: 11029,
		item_desc:
			'PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 100 power and 20% Lifesteal at 25% Health. <n>GLYPH - Every 15s gain a stack of Hunger(max 3). Abilities cast within 30 units of enemy gods consume a stack, dealing bonus damage equal to 0.5% of their max HP for each 75 Magical Power you have. Each god damaged by Hunger provides you with a shield of 1% of your Max HP for each 75 Magical Power you have. This cannot exceed 35% of your Max HP. ',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+100',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
		],
		item_short_desc: 'Cast abilities near enemy gods to gain a shield',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bancrofts-claw.jpg',
	},
	{
		id: 17,
		item_id: 8551,
		active_item: 'y',
		item_name: "Bancroft's Talon",
		child_item_id: 8574,
		icon_id: 11045,
		item_desc:
			'PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 100 power and 20% Lifesteal at 25% Health.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+100',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
		],
		item_short_desc: 'Gain Magical Power as Health is lost',
		item_tier: 3,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bancrofts-talon.jpg',
	},
	{
		id: 231,
		item_id: 16083,
		active_item: 'y',
		item_name: "Baron's Brew",
		child_item_id: 0,
		icon_id: 7022,
		item_desc:
			"Rum from Baron Samedi's personal cabinet. This consumable heals 140 Health and 100 Mana over 20 seconds per use. Comes with 3 uses that are refilled if you enter the Fountain, sells for 0 gold.",
		menuitems: [],
		item_short_desc: 'Restores Health and Mana over time.',
		item_tier: 1,
		item_price: 150,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/barons-brew.jpg',
	},
	{
		id: 264,
		item_id: 14536,
		active_item: 'y',
		item_name: 'Belt of Frenzy',
		child_item_id: 18307,
		icon_id: 4304,
		item_desc:
			'Using this item grants all allied gods within 70 units 10% Increased Damage dealt to all targets, including objectives, and 25% Attack Speed increase for 5 seconds. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Ally damage buff.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/belt-of-frenzy.jpg',
	},
	{
		id: 2654,
		item_id: 21550,
		active_item: 'y',
		item_name: 'Belt of Frenzy',
		child_item_id: 18307,
		icon_id: 10347,
		item_desc:
			'Using this item grants all allied gods within 70 units 10% Increased Damage dealt to all targets, including objectives, and 25% Attack Speed increase for 6 seconds. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Damage buff for allied gods',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/belt-of-frenzy.jpg',
	},
	{
		id: 281,
		item_id: 14538,
		active_item: 'y',
		item_name: 'Belt of Frenzy Upgrade',
		child_item_id: 14536,
		icon_id: 5302,
		item_desc:
			'Using this item grants all allied gods within 70 units 10% Increased Damage dealt to all targets, including objectives, and 25% Attack Speed increase for 8 seconds. While active they also gain +10 Penetration. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Ally damage buff.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/belt-of-frenzy-upgrade.jpg',
	},
	{
		id: 2744,
		item_id: 21489,
		active_item: 'y',
		item_name: 'Belt of Insatiable Hunger',
		child_item_id: 21554,
		icon_id: 10350,
		item_desc:
			'Using this item grants all allied gods within 70 units 10% Increased Damage dealt to all targets, including objectives, and 25% Attack Speed increase for 8 seconds. If you gain a kill or assist on an Enemy God while this buff is active, the duration refreshes. This can only occur once per use. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Refreshing damage buff for allied gods',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/belt-of-insatiable-hunger.jpg',
	},
	{
		id: 2743,
		item_id: 21488,
		active_item: 'y',
		item_name: 'Belt of the Berserker',
		child_item_id: 21554,
		icon_id: 10349,
		item_desc:
			'Using this item grants all allied gods within 70 units 20% Increased Damage dealt to all targets, including objectives, and 40% Attack Speed increase, decaying every 0.5s for 6 seconds. Cooldown - 110s.',
		menuitems: [],
		item_short_desc:
			'Huge damage buff for allied gods that decays over time',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/belt-of-the-berserker.jpg',
	},
	{
		id: 319,
		item_id: 19634,
		active_item: 'y',
		item_name: 'Benevolence',
		child_item_id: 0,
		icon_id: 9208,
		item_desc:
			'PASSIVE - While not near an ally god you gain 1 stack of Benevolence every second, up to a maximum of 50. Assists provide 4 stacks. While within 70 units of a hurt ally god you use up to 5 stacks a second to heal them and yourself for 0.75% of your Maximum Health. Each stack consumed provide you with 1 gold. If you overcap stacks they will still provide gold as long as you are near an ally god. Can be upgraded at level 15.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+75',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
			{
				Description: 'HP5',
				Value: '+7',
			},
		],
		item_short_desc: 'Be benevolent and restore your allies!',
		item_tier: 1,
		item_price: 600,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/benevolence.jpg',
	},
	{
		id: 92,
		item_id: 16544,
		active_item: 'y',
		item_name: "Berserker's Shield",
		child_item_id: 8566,
		icon_id: 7140,
		item_desc:
			'PASSIVE - Can only be built by Assassins or Warriors. While below 40% Health you become Berserk for 5s. Berserk provides 7% Damage Mitigation. Can only occur once every 15 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+40',
			},
			{
				Description: 'Attack Speed',
				Value: '+25%',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
		],
		item_short_desc: 'When dropping low, go Berserk.',
		item_tier: 3,
		item_price: 1250,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/berserkers-shield.jpg',
	},
	{
		id: 85,
		item_id: 14096,
		active_item: 'y',
		item_name: 'Blackthorn Hammer',
		child_item_id: 14083,
		icon_id: 5039,
		item_desc:
			'PASSIVE - While over 25% Mana, you gain +10% Cooldown Reduction. While under 25% Mana, you gain +50 MP5.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Health',
				Value: '+400',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
		],
		item_short_desc:
			'Increased Cooldown at high Mana, Increased MP5 at low Mana',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/blackthorn-hammer.jpg',
	},
	{
		id: 2750,
		item_id: 21491,
		active_item: 'y',
		item_name: 'Blighted Ankh',
		child_item_id: 21562,
		icon_id: 10373,
		item_desc:
			'Using this item reduces the Healing received by all enemy gods within 55 units by 60% for 10s and removes 75% of any currently applied shield. Enemies that are healed by god abilities while affected by this curse take 20% more damage from all sources for the duration of the curse. All healing reduced by this effect is instead distributed to your allies in a 40 unit radius around you. Cooldown - 100s.',
		menuitems: [],
		item_short_desc: 'Redistribute enemy healing to allies',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/blighted-ankh.jpg',
	},
	{
		id: 2655,
		item_id: 21556,
		active_item: 'y',
		item_name: 'Blink Rune',
		child_item_id: 18307,
		icon_id: 10351,
		item_desc:
			'Using this item will allow you to teleport up to 45 units away instantly. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Short range teleport',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/blink-rune.jpg',
	},
	{
		id: 254,
		item_id: 8844,
		active_item: 'y',
		item_name: 'Blink Rune',
		child_item_id: 18307,
		icon_id: 5060,
		item_desc:
			'Using this item will allow you to teleport up to 45 units away instantly. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Short range teleport',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/blink-rune.jpg',
	},
	{
		id: 270,
		item_id: 14150,
		active_item: 'y',
		item_name: 'Blink Rune Upgrade',
		child_item_id: 8844,
		icon_id: 5061,
		item_desc:
			'Using this item will allow you to teleport up to 45 units away instantly. After using this item you gain a 10% Damage Mitigation Buff for 2s. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Short range teleport',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/blink-rune-upgrade.jpg',
	},
	{
		id: 314,
		item_id: 19511,
		active_item: 'y',
		item_name: 'Blood-soaked Shroud',
		child_item_id: 19510,
		icon_id: 9218,
		item_desc:
			'PASSIVE - Damaging any enemy with an ability restores 1.5% Health and Mana. Can only trigger once per target per ability.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+75',
			},
			{
				Description: 'Physical Protection',
				Value: '+55',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+15%',
			},
		],
		item_short_desc: 'Bonus Sustain and Lifesteal for hitting Abilities',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/blood-soaked-shroud.jpg',
	},
	{
		id: 69,
		item_id: 9236,
		active_item: 'y',
		item_name: 'Bloodforge',
		child_item_id: 9826,
		icon_id: 2846,
		item_desc:
			'PASSIVE - Killing an enemy god forges a shield from their blood with Health equal to 200 + 10 per Player Level for 20s. While the Blood Shield is active you gain +10% movement speed.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+75',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Movement Speed',
				Value: '+5%',
			},
		],
		item_short_desc: 'Increases Physical Power and Physical Lifesteal',
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bloodforge.jpg',
	},
	{
		id: 293,
		item_id: 19491,
		active_item: 'y',
		item_name: 'Bluestone Brooch',
		child_item_id: 19490,
		icon_id: 9185,
		item_desc:
			'PASSIVE - Enemies hit by your damaging abilities take an additional 50 (+7.5% of their Current Health) as Physical Damage over 2s. (Max 2 Stacks)',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+45',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'HP5',
				Value: '+30',
			},
			{
				Description: 'MP5',
				Value: '+30',
			},
		],
		item_short_desc: 'Deal additional damage with abilities.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bluestone-brooch.jpg',
	},
	{
		id: 292,
		item_id: 19490,
		active_item: 'y',
		item_name: 'Bluestone Pendant',
		child_item_id: 0,
		icon_id: 9184,
		item_desc:
			'PASSIVE - Enemies hit by your damaging Abilities take an additional 20 Physical Damage over 2s. (Max 2 Stacks) Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Deal additional damage with abilities.',
		item_tier: 1,
		item_price: 700,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bluestone-pendant.jpg',
	},
	{
		id: 139,
		item_id: 9859,
		active_item: 'y',
		item_name: 'Book of Souls',
		child_item_id: 9858,
		icon_id: 6629,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+65',
			},
			{
				Description: 'Mana',
				Value: '+125',
			},
		],
		item_short_desc: 'Magical Power and Mana.',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/book-of-souls.jpg',
	},
	{
		id: 143,
		item_id: 14080,
		active_item: 'y',
		item_name: 'Book of the Dead',
		child_item_id: 9859,
		icon_id: 5040,
		item_desc:
			'PASSIVE - If you drop below 40% Health, you gain a shield equal to 25% of your maximum Mana. This shield lasts 6s. This effect can only occur once every 90s.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+120',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Gain a shield when low on Health',
		item_tier: 3,
		item_price: 1250,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/book-of-the-dead.jpg',
	},
	{
		id: 140,
		item_id: 7334,
		active_item: 'y',
		item_name: 'Book of Thoth',
		child_item_id: 9859,
		icon_id: 2909,
		item_desc:
			'PASSIVE - You permanently gain 10 Mana per Stack, and receive 5 Stacks for a god kill and 1 Stack for a minion kill (max. 75 Stacks). 7% of your Mana from items is converted to Magical Power. At 75 stacks this item Evolves, gaining 3% extra Mana to Power conversion.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+80',
			},
			{
				Description: 'Mana',
				Value: '+250',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc:
			'Gain Mana Stacks from kills and converts Mana to Magical Power',
		item_tier: 3,
		item_price: 1150,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/book-of-thoth.jpg',
	},
	{
		id: 66,
		item_id: 9827,
		active_item: 'y',
		item_name: 'Bound Gauntlet',
		child_item_id: 9825,
		icon_id: 2849,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+10%',
			},
		],
		item_short_desc: 'Increases Physical Lifesteal.',
		item_tier: 2,
		item_price: 450,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bound-gauntlet.jpg',
	},
	{
		id: 2748,
		item_id: 21508,
		active_item: 'y',
		item_name: 'Bracer of Brilliance',
		child_item_id: 21559,
		icon_id: 10357,
		item_desc:
			'Place a radiant glow at a target location for 90s. Allies who move through this field gain 15% increased Power and 20% Movement Speed for 8s. This fragment acts as a Sentry Ward. If destroyed the cooldown of the relic is reduced by 20s. Cooldown - 100s.',
		menuitems: [],
		item_short_desc: 'Provides vision and warmth to allies',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-brilliance.jpg',
	},
	{
		id: 2747,
		item_id: 21477,
		active_item: 'y',
		item_name: 'Bracer of Illumination',
		child_item_id: 21559,
		icon_id: 10358,
		item_desc:
			'Place a radiant glow at a target location for 90s. Allies who move through this field gain 10% increased Power if above half health or 15% Movement Speed if below Half Health for 12s. This fragment acts as a Sentry Ward. If destroyed the cooldown of the relic is reduced by 20s. On use, a light sprite appears that patrols back and forth on a 80 unit line, revealing enemies along the way. Cooldown - 90s.',
		menuitems: [],
		item_short_desc: 'Summon a mobile ward and buff allies',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-illumination.jpg',
	},
	{
		id: 266,
		item_id: 20692,
		active_item: 'y',
		item_name: 'Bracer of Radiance',
		child_item_id: 18307,
		icon_id: 9901,
		item_desc:
			'Place a radiant glow at a target location for 90s. Allies who move through this glow gain 10% increased Power if above half health or 15% Movement Speed if below Half Health for 8s. This fragment acts as a ward. If destroyed the cooldown of the relic is reduced by 20s. Cooldown - 100s.',
		menuitems: [],
		item_short_desc: 'Provides vision and warmth to allies.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-radiance.jpg',
	},
	{
		id: 2656,
		item_id: 21558,
		active_item: 'y',
		item_name: 'Bracer of Radiance',
		child_item_id: 18307,
		icon_id: 10355,
		item_desc:
			'Place a radiant glow at a target location for 90s. Allies who move through this glow gain 10% increased Power if above half health or 15% Movement Speed if below Half Health for 8s. This fragment acts as a ward. If destroyed the cooldown of the relic is reduced by 20s. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Provides vision and warmth to allies',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-radiance.jpg',
	},
	{
		id: 283,
		item_id: 20693,
		active_item: 'y',
		item_name: 'Bracer of Radiance Upgrade',
		child_item_id: 20692,
		icon_id: 9902,
		item_desc:
			'Place a radiant glow at a target location for 90s. Allies who move through this field gain 15% increased Power if above half health or 15% Movement Speed if below Half Health for 8s. This fragment acts as a Sentry Ward. If destroyed the cooldown of the relic is reduced by 20s. Cooldown - 100s.',
		menuitems: [],
		item_short_desc: 'Provides vision and warmth to allies.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-radiance-upgrade.jpg',
	},
	{
		id: 29,
		item_id: 7829,
		active_item: 'y',
		item_name: "Brawler's Beat Stick",
		child_item_id: 7828,
		icon_id: 2585,
		item_desc:
			'PASSIVE - Enemies hit by your Abilities have 40% reduced healing for 5 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+55',
			},
			{
				Description: 'Physical Penetration',
				Value: '+15',
			},
		],
		item_short_desc: 'Ability Damage reduces enemy healing.',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/brawlers-beat-stick.jpg',
	},
	{
		id: 93,
		item_id: 9837,
		active_item: 'y',
		item_name: 'Breastplate',
		child_item_id: 0,
		icon_id: 2876,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+20',
			},
		],
		item_short_desc: 'Physical Protection and MP5',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/breastplate.jpg',
	},
	{
		id: 2490,
		item_id: 21483,
		active_item: 'y',
		item_name: 'Breastplate of Determination',
		child_item_id: 7641,
		icon_id: 10333,
		item_desc:
			'GLYPH - Each time you are hit by an ability, gain a stack of 5 Protections that corresponds to the damage type you were hit with, up to a max of 4 of each type. Once you reach max stacks of both kinds, gain a burst of 20% Movement Speed and double your Protections gained by this effect for 8s, after which all stacks are removed.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+65',
			},
			{
				Description: 'Mana',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Gain stacks of Protections when hit with abilities from enemy gods',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/breastplate-of-determination.jpg',
	},
	{
		id: 96,
		item_id: 7641,
		active_item: 'y',
		item_name: 'Breastplate of Valor',
		child_item_id: 9838,
		icon_id: 10332,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+65',
			},
			{
				Description: 'Mana',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Provides Cooldown Reduction and Physical Protection',
		item_tier: 3,
		item_price: 1250,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/breastplate-of-valor.jpg',
	},
	{
		id: 2491,
		item_id: 21503,
		active_item: 'y',
		item_name: 'Breastplate of Vigilance',
		child_item_id: 7641,
		icon_id: 10334,
		item_desc:
			'GLYPH - When your ultimate ability has finished casting you provide an aura in a 40 unit range around you reducing basic attack damage from enemies by 15% for 5s. This effect may only occur once every 45s.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+65',
			},
			{
				Description: 'Mana',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'On ultimate use, gain a defensive aura that reduces basic attack damage',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/breastplate-of-vigilance.jpg',
	},
	{
		id: 288,
		item_id: 18706,
		active_item: 'y',
		item_name: 'Bristlebush Acorn',
		child_item_id: 18705,
		icon_id: 8687,
		item_desc:
			'PASSIVE: Dart deals 35% increased damage and can Critically Strike. When Dart damages an enemy Ratatoskr gains 20% Physical Lifesteal and 20% Basic Attack damage for 6s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+45',
			},
			{
				Description: 'Movement Speed',
				Value: '+6%',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+25%',
			},
		],
		item_short_desc: 'Dart becomes empowered',
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bristlebush-acorn.jpg',
	},
	{
		id: 111,
		item_id: 8540,
		active_item: 'y',
		item_name: 'Bulwark of Hope',
		child_item_id: 9846,
		icon_id: 2882,
		item_desc:
			'PASSIVE - When you take damage and are below 40% Health, you gain a Shield with health equal to 12% of your Maximum Health for 20s. Can only occur once every 60s.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+70',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Gain a damage shield at low Health',
		item_tier: 3,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bulwark-of-hope.jpg',
	},
	{
		id: 307,
		item_id: 19502,
		active_item: 'y',
		item_name: "Bumba's Dagger",
		child_item_id: 0,
		icon_id: 9199,
		item_desc:
			"PASSIVE - Your Basic Attacks deal +25 True Damage and your Abilities deal +35% Damage versus Jungle Monsters. When a Jungle Monster is killed you are restored for 10% of the Monster's Health and 25 Mana. Can be upgraded at level 20.",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+7',
			},
			{
				Description: 'Magical Power',
				Value: '+12',
			},
			{
				Description: 'Health',
				Value: '+50',
			},
			{
				Description: 'Mana',
				Value: '+50',
			},
		],
		item_short_desc: 'Defeating Jungle Monsters provides health and mana.',
		item_tier: 1,
		item_price: 600,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bumbas-dagger.jpg',
	},
	{
		id: 309,
		item_id: 19831,
		active_item: 'y',
		item_name: "Bumba's Hammer",
		child_item_id: 19502,
		icon_id: 9201,
		item_desc:
			'PASSIVE - After casting an ability your next Basic Attack deals an additional 70 True Damage. After hitting a Basic Attack empowered by Bumba’s Hammer, your active cooldowns are reduced by 0.5s and you are healed for 100 Health.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Magical Power',
				Value: '+70',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Weave in attacks and abilities.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bumbas-hammer.jpg',
	},
	{
		id: 308,
		item_id: 19514,
		active_item: 'y',
		item_name: "Bumba's Spear",
		child_item_id: 19502,
		icon_id: 9200,
		item_desc:
			'PASSIVE - Your Basic Attacks deal +50 True Damage and your Abilities deal +35% damage against Jungle Camps, Structures, and Jungle Bosses. When any of these die you gain a 10% power buff for 30s and are healed for 10% of their Health, 10% of your Mana.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+70',
			},
			{
				Description: 'Magical Power',
				Value: '+105',
			},
			{
				Description: 'Penetration',
				Value: '+10%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc:
			'Jungle Monsters and Objectives take massive damage from you.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/bumbas-spear.jpg',
	},
	{
		id: 157,
		item_id: 18195,
		active_item: 'y',
		item_name: 'Caduceus Shield',
		child_item_id: 9835,
		icon_id: 8134,
		item_desc:
			'AURA - Allied gods within 70 units have their Healing increased by 20%.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
		],
		item_short_desc: 'Physical Power and Increased Healing',
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/caduceus-shield.jpg',
	},
	{
		id: 2548,
		item_id: 21484,
		active_item: 'y',
		item_name: 'Calamitous Rod of Tahuti',
		child_item_id: 7600,
		icon_id: 10331,
		item_desc:
			'PASSIVE - Basic Attacks and Abilities gain 25% additional Magical Power against targets below 50% Health. <n>GLYPH - Successfully hitting an enemy god with an ability calls down a meteor that lands after 1s, dealing 100 (+35% of your Magical Power) damage in a 15 unit radius. This effect can only occur once every 30s.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+135',
			},
			{
				Description: 'MP5',
				Value: '+30',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Successful abilities spawn a meteor of damage',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/calamitous-rod-of-tahuti.jpg',
	},
	{
		id: 161,
		item_id: 10600,
		active_item: 'y',
		item_name: 'Celestial Legion Helm',
		child_item_id: 10602,
		icon_id: 3262,
		item_desc:
			'PASSIVE - Every 3s you receive a stack of 7 Physical Protection and 4% Reduced Damage from Physical Critical Strikes, up to a max of 5 stacks. Stacks are removed upon taking Physical Damage from gods. Stacks can only be gained after not taking Physical Damage from gods for 3s.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+55',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Provides Physical Protections',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/celestial-legion-helm.jpg',
	},
	{
		id: 202,
		item_id: 14031,
		active_item: 'y',
		item_name: 'Chalice of Healing',
		child_item_id: 0,
		icon_id: 5055,
		item_desc:
			'This consumable heals 250 Health over 25 seconds per use. Comes with 3 uses that are refilled if you enter the Fountain, sells for 0 gold.',
		menuitems: [],
		item_short_desc:
			'Restores Health over time, can be refilled in Fountain',
		item_tier: 1,
		item_price: 300,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/chalice-of-healing.jpg',
	},
	{
		id: 203,
		item_id: 14032,
		active_item: 'y',
		item_name: 'Chalice of Mana',
		child_item_id: 0,
		icon_id: 5057,
		item_desc:
			'This consumable heals 150 Mana over 25 seconds per use. Comes with 3 uses that are refilled if you enter the Fountain, sells for 0 gold',
		menuitems: [],
		item_short_desc: 'Restores Mana over time, can be refilled in Fountain',
		item_tier: 1,
		item_price: 300,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/chalice-of-mana.jpg',
	},
	{
		id: 204,
		item_id: 14033,
		active_item: 'y',
		item_name: 'Chalice of the Oracle',
		child_item_id: 0,
		icon_id: 5059,
		item_desc:
			"This consumable places a ward that allows you to see normal enemy movements with 45 units. It does respect line of sight and can't see through walls or stealth. It remains for 3 minutes or until killed. Comes with 2 uses that are refilled in Fountain, sells for 0 gold.",
		menuitems: [],
		item_short_desc: 'Detects enemies, can be refilled in Fountain',
		item_tier: 1,
		item_price: 400,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/chalice-of-the-oracle.jpg',
	},
	{
		id: 2758,
		item_id: 21480,
		active_item: 'y',
		item_name: 'Chaotic Beads',
		child_item_id: 21573,
		icon_id: 10312,
		item_desc:
			'Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Any Hard Crowd Control Effect that is cleansed during this time, including on activation, sends out a homing projectile to the Enemy who applied it, dealing 5% of their Current Health as True Damage. Cooldown - 140s.',
		menuitems: [],
		item_short_desc:
			'Cleansing effects sends homing projectiles at enemies',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/chaotic-beads.jpg',
	},
	{
		id: 166,
		item_id: 10687,
		active_item: 'y',
		item_name: 'Charged Bow',
		child_item_id: 10662,
		icon_id: 3307,
		item_desc:
			'PASSIVE -Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 15 damage +30% of your total Basic Attack Power.',
		menuitems: [
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
		],
		item_short_desc: 'Has a chance to trigger chain lightning',
		item_tier: 2,
		item_price: 550,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/charged-bow.jpg',
	},
	{
		id: 33,
		item_id: 8560,
		active_item: 'y',
		item_name: 'Charged Morningstar',
		child_item_id: 7922,
		icon_id: 2948,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
			{
				Description: 'MP5',
				Value: '+7',
			},
		],
		item_short_desc: 'Physical Power and Mana.',
		item_tier: 2,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/charged-morningstar.jpg',
	},
	{
		id: 151,
		item_id: 18183,
		active_item: 'y',
		item_name: "Charon's Coin",
		child_item_id: 9861,
		icon_id: 8135,
		item_desc:
			'PASSIVE - On god kill or assist a coin is flipped. If heads, you gain a stack of 7 HP5. If tails, you gain a stack of 2% Movement Speed. Each effect can stack up to 4 times and at 8 stacks this item evolves. You also gain 1 gold every time the coin is flipped.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+80',
			},
			{
				Description: 'Magical Penetration',
				Value: '+20%',
			},
			{
				Description: 'HP5',
				Value: '+7',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Permanent stacks of HP5 and Movement Speed',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/charons-coin.jpg',
	},
	{
		id: 149,
		item_id: 7784,
		active_item: 'y',
		item_name: "Chronos' Pendant",
		child_item_id: 9861,
		icon_id: 8139,
		item_desc:
			'PASSIVE - Every 10s the Pendant activates, subtracting 1s from all of your abilities currently on Cooldown. The initial countdown will not start until you leave the fountain.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+90',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Magical Power and Strong Cooldown Reduction',
		item_tier: 3,
		item_price: 1300,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/chronos-pendant.jpg',
	},
	{
		id: 102,
		item_id: 9842,
		active_item: 'y',
		item_name: "Cleric's Cloak",
		child_item_id: 9840,
		icon_id: 2879,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
			{
				Description: 'Magical Protection',
				Value: '+10',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
		],
		item_short_desc: 'Health and Protections.',
		item_tier: 2,
		item_price: 500,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/clerics-cloak.jpg',
	},
	{
		id: 100,
		item_id: 9840,
		active_item: 'y',
		item_name: 'Cloak',
		child_item_id: 0,
		icon_id: 2881,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
			{
				Description: 'Magical Protection',
				Value: '+10',
			},
		],
		item_short_desc: 'Health and Protections.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon: 'https://webcdn.hirezstudios.com/smite/item-icons/cloak.jpg',
	},
	{
		id: 101,
		item_id: 9360,
		active_item: 'y',
		item_name: 'Cloak of Concentration',
		child_item_id: 9840,
		icon_id: 2554,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+7%',
			},
		],
		item_short_desc: 'Protections and Cooldown Reduction.',
		item_tier: 2,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-concentration.jpg',
	},
	{
		id: 2661,
		item_id: 21570,
		active_item: 'y',
		item_name: 'Cloak of Meditation',
		child_item_id: 18307,
		icon_id: 10343,
		item_desc:
			'Using this item causes you to Enter a meditative state where nearby allies gods within 35 units restore 10 + 3% of their missing health and mana each tick. Heals occur once every second for 4s. Cooldown - 150s.',
		menuitems: [],
		item_short_desc: 'Mana and health restoration',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-meditation.jpg',
	},
	{
		id: 2757,
		item_id: 21510,
		active_item: 'y',
		item_name: 'Cloak of the Ascetic',
		child_item_id: 21571,
		icon_id: 10341,
		item_desc:
			'Using this item causes you to Enter a meditative state where nearby allies gods within 35 units restore 30 + 4% of their missing health and mana each pulse. Additionally each pulse reduces cooldowns for all abilities by 1.5s. Pulses occur once every second for 4s. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Mana and health restoration with cooldown reduction.',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-the-ascetic.jpg',
	},
	{
		id: 2756,
		item_id: 21479,
		active_item: 'y',
		item_name: 'Cloak of the Avatar',
		child_item_id: 21571,
		icon_id: 10324,
		item_desc:
			'Using this item causes you to Enter a meditative state where nearby allies gods within 35 units restore 10 + 3% of their missing health and mana each pulse. You also gain a protective barrier of wind that explodes if an enemy comes within 15 units, knocking them back. Pulses occur once every second for 4s. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Gain a shield of wind that knocks enemies back',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-the-avatar.jpg',
	},
	{
		id: 320,
		item_id: 19635,
		active_item: 'y',
		item_name: 'Compassion',
		child_item_id: 19634,
		icon_id: 9209,
		item_desc:
			'AURA - You gain 8 GP5 if you have the lowest gold on your team. Damage taken by allied gods within 70 units of you is reduced by 15%, up to a maximum of 100 damage. The reduced damage is redirected to you as Magical Damage. If you would die from this damage it does not get reduced or redirected.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+60',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'HP5',
				Value: '+45',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Sacrifice your health to defend your allies.',
		item_tier: 2,
		item_price: 1250,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/compassion.jpg',
	},
	{
		id: 328,
		item_id: 19677,
		active_item: 'y',
		item_name: 'Conduit Gem',
		child_item_id: 0,
		icon_id: 9211,
		item_desc:
			'PASSIVE - Every second you gain a stack of Arcane Energy, causing your next damaging ability to deal an additional 2 True Damage and remove all stacks. Also deals an additional 2 true damage per stack to minions. This effect stacks up to 20 times. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+25',
			},
			{
				Description: 'Mana',
				Value: '+100',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Focus your power and release it.',
		item_tier: 1,
		item_price: 700,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/conduit-gem.jpg',
	},
	{
		id: 98,
		item_id: 17467,
		active_item: 'y',
		item_name: 'Contagion',
		child_item_id: 9838,
		icon_id: 7779,
		item_desc:
			'AURA - Enemy gods within 55 units have their healing reduced by 25%. This does not stack with similar Auras.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+60',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Mana',
				Value: '+250',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Aura that reduces the healing of nearby enemies',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/contagion.jpg',
	},
	{
		id: 2746,
		item_id: 21490,
		active_item: 'y',
		item_name: 'Corrupted Blink Rune',
		child_item_id: 21557,
		icon_id: 10353,
		item_desc:
			'Using this item will allow you to teleport up to 45 units away instantly. This item can not be used if you have taken or dealt damage in the last 3s. On teleporting, slow all enemies’ Movement Speed and Attack Speed by 15% within a 25 unit radius for 2.5s. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Slow enemies after teleporting',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/corrupted-blink-rune.jpg',
	},
	{
		id: 294,
		item_id: 20689,
		active_item: 'y',
		item_name: 'Corrupted Bluestone',
		child_item_id: 19490,
		icon_id: 9186,
		item_desc:
			'PASSIVE - Enemies hit by your damaging Abilities are corrupted, taking 75 Physical Damage over 5s and reducing their Attack Speed by 10%. (Max 2 Stacks). Each time you apply corruption you gain 10% Attack Speed and 4% increased Protections for 6s, up to a maximum of 5 stacks.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'HP5',
				Value: '+20',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Corrupt your opponents to gain Attack Speed.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/corrupted-bluestone.jpg',
	},
	{
		id: 79,
		item_id: 9830,
		active_item: 'y',
		item_name: 'Cudgel',
		child_item_id: 0,
		icon_id: 2900,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+10',
			},
			{
				Description: 'Health',
				Value: '+75',
			},
		],
		item_short_desc: 'Health and Physical Power.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cudgel.jpg',
	},
	{
		id: 2657,
		item_id: 21561,
		active_item: 'y',
		item_name: 'Cursed Ankh',
		child_item_id: 18307,
		icon_id: 10361,
		item_desc:
			'Using this item reduces the Healing received by all enemy gods within 55 units by 40% for 10s  and removes 75% of any currently applied shield. Enemies that are healed by god abilities while affected by this curse take 10% more damage from all sources for the duration of the curse. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Reduce enemy healing',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cursed-ankh.jpg',
	},
	{
		id: 252,
		item_id: 7671,
		active_item: 'y',
		item_name: 'Cursed Ankh',
		child_item_id: 18307,
		icon_id: 5064,
		item_desc:
			'Using this item reduces the Healing received by all enemy gods within 55 units by 40% for 10s and removes 50% of any currently applied shield. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Reduces enemy Healing',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cursed-ankh.jpg',
	},
	{
		id: 271,
		item_id: 14151,
		active_item: 'y',
		item_name: 'Cursed Ankh Upgrade',
		child_item_id: 7671,
		icon_id: 5065,
		item_desc:
			'Using this item reduces the Healing received by all enemy gods within 55 units by 40% for 10s  and removes 50% of any currently applied shield. Enemies that are healed by god abilities while affected by this curse take 20% more damage from all sources for the duration of the curse. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Reduced enemy healing.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cursed-ankh-upgrade.jpg',
	},
	{
		id: 74,
		item_id: 18190,
		active_item: 'y',
		item_name: 'Cursed Blade',
		child_item_id: 9828,
		icon_id: 2894,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+75',
			},
			{
				Description: 'Attack Speed',
				Value: '+10%',
			},
			{
				Description: 'Movement Speed',
				Value: '+5%',
			},
		],
		item_short_desc: 'Attack Speed and Movement Speed',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cursed-blade.jpg',
	},
	{
		id: 65,
		item_id: 9826,
		active_item: 'y',
		item_name: 'Cursed Gauntlet',
		child_item_id: 9825,
		icon_id: 2848,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+7%',
			},
		],
		item_short_desc: 'Grants Physical Power and Lifesteal',
		item_tier: 2,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cursed-gauntlet.jpg',
	},
	{
		id: 146,
		item_id: 7924,
		active_item: 'y',
		item_name: 'Cursed Orb',
		child_item_id: 9860,
		icon_id: 2842,
		item_desc:
			'PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Magical Power per stack. Stacks last for 10s and stack up to 4 times. Enemy gods provide 4 stacks.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+55',
			},
			{
				Description: 'Mana',
				Value: '+75',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
			{
				Description: 'Movement Speed',
				Value: '+2%',
			},
		],
		item_short_desc:
			'Kills and assists provide stacking Movement Speed and Magical Power',
		item_tier: 2,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/cursed-orb.jpg',
	},
	{
		id: 296,
		item_id: 19493,
		active_item: 'y',
		item_name: "Death's Embrace",
		child_item_id: 19492,
		icon_id: 9173,
		item_desc:
			'PASSIVE - Hitting an enemy with a Basic Attack restores 2% of your Health and Mana. Basic Attacks that deal damage in an AoE restore less health (75% for Melee Attacks, 50% for Ranged Attacks) for each enemy hit after the first. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+65',
			},
			{
				Description: 'Magical Power',
				Value: '+110',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
		],
		item_short_desc: 'Basic Attacks restore more Health and Mana.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/deaths-embrace.jpg',
	},
	{
		id: 297,
		item_id: 19587,
		active_item: 'y',
		item_name: "Death's Temper",
		child_item_id: 19492,
		icon_id: 9174,
		item_desc:
			'PASSIVE - When an enemy dies within 80 units of you gain 1 stack of Temper that provides 3.5% increased Basic Attack Damage for 10s. This can stack up to 10 times. If an enemy god dies near you immediately gain 5 stacks.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Magical power',
				Value: '+75',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Attack Speed',
				Value: '+30%',
			},
		],
		item_short_desc: 'Killing enemies provides Basic Attack Damage',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/deaths-temper.jpg',
	},
	{
		id: 295,
		item_id: 19492,
		active_item: 'y',
		item_name: "Death's Toll",
		child_item_id: 0,
		icon_id: 9172,
		item_desc:
			'PASSIVE - Hitting an enemy with a Basic Attack restores 2 Health (+0.4% of your Maximum Health) and 1 Mana (+1% of your Maximum Mana). Basic Attacks that deal damage in an AoE restore less health (75% for Melee Attacks, 50% for Ranged Attacks) for each enemy hit after the first. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Magical Power',
				Value: '+35',
			},
			{
				Description: 'Health',
				Value: '+75',
			},
		],
		item_short_desc: 'Basic Attacks restore health and mana.',
		item_tier: 1,
		item_price: 650,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/deaths-toll.jpg',
	},
	{
		id: 60,
		item_id: 7545,
		active_item: 'y',
		item_name: 'Deathbringer',
		child_item_id: 9813,
		icon_id: 10326,
		item_desc:
			'PASSIVE - Critical Strike bonus damage dealt is increased by 25%.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+30%',
			},
		],
		item_short_desc: 'Critical Strike damage increased',
		item_tier: 3,
		item_price: 1550,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/deathbringer.jpg',
	},
	{
		id: 117,
		item_id: 8564,
		active_item: 'y',
		item_name: 'Demonic Grip',
		child_item_id: 9848,
		icon_id: 2831,
		item_desc:
			"PASSIVE - Your Basic Attacks reduce your target's Magical Protection by 10% for 3s (max 3 Stacks).",
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+75',
			},
			{
				Description: 'Attack Speed',
				Value: '+30%',
			},
		],
		item_short_desc: 'Basic Attacks reduce Magical Protection',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/demonic-grip.jpg',
	},
	{
		id: 68,
		item_id: 7914,
		active_item: 'y',
		item_name: "Devourer's Gauntlet",
		child_item_id: 9826,
		icon_id: 2845,
		item_desc:
			'PASSIVE - Killing an enemy god or minion gives you stacks of +.8 Physical Power and +.2% Physical Lifesteal. You receive 5 stacks for a god kill and 1 stack for a minion kill. Stacks up to 50 times.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+15%',
			},
		],
		item_short_desc: 'Gain Physical Power and Lifesteal from kills',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/devourers-gauntlet.jpg',
	},
	{
		id: 299,
		item_id: 19495,
		active_item: 'y',
		item_name: 'Diamond Arrow',
		child_item_id: 19494,
		icon_id: 9176,
		item_desc:
			'PASSIVE - When you kill an enemy you gain 7 gold and 20% Attack Speed for 8s. This can stack up to 3 times. If you kill an enemy god you gain 3 stacks and 21 gold immediately.',
		menuitems: [
			{
				Description: 'Basic Attack Damage',
				Value: '+80',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
		],
		item_short_desc: 'Defeating enemies provides gold and attack speed.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/diamond-arrow.jpg',
	},
	{
		id: 124,
		item_id: 7832,
		active_item: 'y',
		item_name: 'Divine Ruin',
		child_item_id: 9851,
		icon_id: 2823,
		item_desc:
			'PASSIVE - Enemies hit by your abilities have 40% reduced healing for 5 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+100',
			},
			{
				Description: 'Magical Penetration',
				Value: '+12',
			},
		],
		item_short_desc: 'Enemies hit by your abilities have reduced healing',
		item_tier: 3,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/divine-ruin.jpg',
	},
	{
		id: 38,
		item_id: 19924,
		active_item: 'y',
		item_name: 'Dominance',
		child_item_id: 8560,
		icon_id: 9238,
		item_desc:
			'PASSIVE - Your Basic Attacks benefit from an additional 15% Physical Penetration.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+55',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Physical and Basic Attack Penetration',
		item_tier: 3,
		item_price: 1300,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/dominance.jpg',
	},
	{
		id: 150,
		item_id: 16882,
		active_item: 'y',
		item_name: 'Doom Orb',
		child_item_id: 7924,
		icon_id: 2839,
		item_desc:
			'PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Magical Power per stack. Stacks last for 15s and stack up to 5 times. Enemy gods provide 5 stacks.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+145',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'MP5',
				Value: '+25',
			},
			{
				Description: 'Movement Speed',
				Value: '+4%',
			},
		],
		item_short_desc:
			'Kills and assists provide stacking Movement Speed and Magical Power',
		item_tier: 3,
		item_price: 1250,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/doom-orb.jpg',
	},
	{
		id: 2749,
		item_id: 21478,
		active_item: 'y',
		item_name: 'Drowned Ankh',
		child_item_id: 21562,
		icon_id: 10374,
		item_desc:
			"Using this item reduces the Healing received by all enemy gods within 55 units by 40% for 10s and removes 75% of any currently applied shield. Enemies that are healed by god abilities while affected by this curse cause a pool of miasma to form beneath them that persists for 6s. The miasma deals 4% of the enemy's Current Health every 0.5s while enemies are inside it and refreshes the Ankh debuff effect. Cooldown - 100s.",
		menuitems: [],
		item_short_desc:
			'Spawn damaging pools of miasma under healing enemy gods',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/drowned-ankh.jpg',
	},
	{
		id: 205,
		item_id: 14071,
		active_item: 'y',
		item_name: 'Druid Stone',
		child_item_id: 0,
		icon_id: 5042,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+10',
			},
			{
				Description: 'Magical Protection',
				Value: '+20',
			},
		],
		item_short_desc: 'Magical Power and Magical Protection.',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/druid-stone.jpg',
	},
	{
		id: 160,
		item_id: 10605,
		active_item: 'y',
		item_name: 'Dynasty Plate Helm',
		child_item_id: 10603,
		icon_id: 3263,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+40',
			},
			{
				Description: 'Physical Protection',
				Value: '+20',
			},
			{
				Description: 'Health',
				Value: '+50',
			},
		],
		item_short_desc: 'Provides Magical Power and Physical Protection',
		item_tier: 2,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/dynasty-plate-helm.jpg',
	},
	{
		id: 24,
		item_id: 7804,
		active_item: 'y',
		item_name: 'Elixir of Defense',
		child_item_id: 0,
		icon_id: 2065,
		item_desc:
			'This consumable provides 50 Magical and Physical Protection, 10% Damage Mitigation, 20% Crowd Control Reduction, and decreases damage taken from Structures by 25% for 6 minutes. This effect persists through death.',
		menuitems: [],
		item_short_desc: 'Provides a Defense buff.',
		item_tier: 1,
		item_price: 3000,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/elixir-of-defense.jpg',
	},
	{
		id: 23,
		item_id: 7803,
		active_item: 'y',
		item_name: 'Elixir of Power',
		child_item_id: 0,
		icon_id: 2064,
		item_desc:
			'This consumable increases your Magical and Physical Power by 25%, increases damage done to Structures by 25%, and grants 10% Penetration for 6 minutes. This effect persists through death.',
		menuitems: [],
		item_short_desc: 'Provides a Power buff.',
		item_tier: 1,
		item_price: 3000,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/elixir-of-power.jpg',
	},
	{
		id: 3507,
		item_id: 21493,
		active_item: 'y',
		item_name: 'Emblem of Increasing Peril',
		child_item_id: 21567,
		icon_id: 10366,
		item_desc:
			"Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is reduced by 25% for the duration. Additionally, their Damage Dealt is reduced by 15%. If an enemy deals 10% of an Allied God's Maximum Health within the duration, the debuff's effects are increased by 10% each, stacking up to 3 times. Cooldown - 110s.",
		menuitems: [],
		item_short_desc: 'Punish enemy gods for damaging allied gods',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/emblem-of-increasing-peril.jpg',
	},
	{
		id: 2753,
		item_id: 21494,
		active_item: 'y',
		item_name: 'Emblem of Trembling Terror',
		child_item_id: 21567,
		icon_id: 10365,
		item_desc:
			'Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is reduced by 25% for the duration. Additionally, their Damage Dealt is reduced by 15%. If an enemy is dealt 15% of their max. HP during this duration, they are trembled for 1.5s. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Tremble damaged enemy gods',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/emblem-of-trembling-terror.jpg',
	},
	{
		id: 179,
		item_id: 9839,
		active_item: 'y',
		item_name: 'Emerald Mail',
		child_item_id: 12663,
		icon_id: 2912,
		item_desc: '',
		menuitems: [
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'HP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Health and HP5.',
		item_tier: 2,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/emerald-mail.jpg',
	},
	{
		id: 115,
		item_id: 9847,
		active_item: 'y',
		item_name: 'Emerald Ring',
		child_item_id: 0,
		icon_id: 2833,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Attack Speed',
				Value: '+5%',
			},
		],
		item_short_desc: 'Magical Power',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/emerald-ring.jpg',
	},
	{
		id: 178,
		item_id: 7571,
		active_item: 'y',
		item_name: 'Emerald Talisman',
		child_item_id: 12663,
		icon_id: 2953,
		item_desc:
			'PASSIVE - Regenerates 0.2% of your max. Health every second.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Health and HP5',
		item_tier: 2,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/emerald-talisman.jpg',
	},
	{
		id: 6,
		item_id: 13189,
		active_item: 'y',
		item_name: "Emperor's Armor",
		child_item_id: 7527,
		icon_id: 4670,
		item_desc:
			'AURA - Damageable enemy structures within 55 units have their Attack Speed reduced by 30%.\nDamageable allied structures within 55 units have their Attack Speed increased by 50%.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'Physical Protection',
				Value: '+60',
			},
		],
		item_short_desc: 'Tower buff and debuff aura',
		item_tier: 3,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/emperors-armor.jpg',
	},
	{
		id: 153,
		item_id: 10190,
		active_item: 'y',
		item_name: 'Enchanted Buckler',
		child_item_id: 0,
		icon_id: 3146,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+7',
			},
			{
				Description: 'Magical Protection',
				Value: '+10',
			},
		],
		item_short_desc: 'Physical Power and Magical Protection.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/enchanted-buckler.jpg',
	},
	{
		id: 196,
		item_id: 12675,
		active_item: 'y',
		item_name: 'Enchanted Kusari',
		child_item_id: 0,
		icon_id: 4313,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+20',
			},
			{
				Description: 'MP5',
				Value: '+5',
			},
		],
		item_short_desc: 'Magical Protection and MP5.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/enchanted-kusari.jpg',
	},
	{
		id: 116,
		item_id: 9848,
		active_item: 'y',
		item_name: 'Enchanted Ring',
		child_item_id: 9847,
		icon_id: 2832,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+55',
			},
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
		],
		item_short_desc: 'Magical Power and Movement Speed',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/enchanted-ring.jpg',
	},
	{
		id: 123,
		item_id: 9851,
		active_item: 'y',
		item_name: 'Enchanted Spear',
		child_item_id: 9849,
		icon_id: 2837,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+60',
			},
		],
		item_short_desc: 'Magical Power',
		item_tier: 2,
		item_price: 750,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/enchanted-spear.jpg',
	},
	{
		id: 14,
		item_id: 7609,
		active_item: 'y',
		item_name: 'Enchanted Trinket',
		child_item_id: 7610,
		icon_id: 2827,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+12%',
			},
		],
		item_short_desc: 'Magical Power and Magical Lifesteal.',
		item_tier: 2,
		item_price: 550,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/enchanted-trinket.jpg',
	},
	{
		id: 2751,
		item_id: 21485,
		active_item: 'y',
		item_name: 'Entangling Wings',
		child_item_id: 21565,
		icon_id: 10369,
		item_desc:
			'Using this item increases the Movement Speed of allied gods within 55 units by 20% for 5s and makes them immune to Slows. On use, this Relic also Roots Enemies in the area for 1s. Cooldown - 110s',
		menuitems: [],
		item_short_desc: 'Root enemies on cast',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/entangling-wings.jpg',
	},
	{
		id: 2454,
		item_id: 21501,
		active_item: 'y',
		item_name: 'Envenomed Deathbringer',
		child_item_id: 7545,
		icon_id: 10328,
		item_desc:
			'PASSIVE - Critical Strike bonus damage dealt is increased by 25%. <n>GLYPH - Critical hits on enemy gods afflict them with poison for 2s. This poison slows them by 10% and reduces their damage output by 10%.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+30%',
			},
		],
		item_short_desc:
			"Critical hits reduce enemy's Movement Speed and damage",
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/envenomed-deathbringer.jpg',
	},
	{
		id: 135,
		item_id: 8599,
		active_item: 'y',
		item_name: 'Ethereal Staff',
		child_item_id: 14081,
		icon_id: 2868,
		item_desc:
			'PASSIVE - Whenever you damage an enemy god with an ability you steal 8% maximum mana as well as 6% maximum health from the target. The Stats remain stolen for 45s and targets affected can have multiple Buffs and Debuffs at once. This can only occur once every 15 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+90',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Temporarily steal enemy health and mana',
		item_tier: 3,
		item_price: 1250,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/ethereal-staff.jpg',
	},
	{
		id: 290,
		item_id: 18708,
		active_item: 'y',
		item_name: 'Evergreen Acorn',
		child_item_id: 18704,
		icon_id: 8685,
		item_desc:
			'PASSIVE: When Ratatoskr deals damage to an enemy god with an ability he restores 7% of his Maximum Health and Mana.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Movement Speed',
				Value: '+6%',
			},
			{
				Description: 'Maximum Health',
				Value: '+10%',
			},
		],
		item_short_desc: 'Restore health when hitting with abilities',
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evergreen-acorn.jpg',
	},
	{
		id: 144,
		item_id: 15725,
		active_item: 'y',
		item_name: 'Evolved Book of Thoth',
		child_item_id: 7334,
		icon_id: 6652,
		item_desc:
			'PASSIVE - 10% of your Mana from items is converted to Magical Power.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+80',
			},
			{
				Description: 'Mana',
				Value: '+1000',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Mana is converted to Magical Power',
		item_tier: 4,
		item_price: 1,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-book-of-thoth.jpg',
	},
	{
		id: 152,
		item_id: 18314,
		active_item: 'y',
		item_name: "Evolved Charon's Coin",
		child_item_id: 18183,
		icon_id: 8221,
		item_desc:
			'PASSIVE - On god kill or assist a coin is flipped. If heads, you gain 150 Health over 6 seconds. If tails, you gain 5% Movement Speed for 6 seconds. You also gain 1 gold every time the coin is flipped.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+80',
			},
			{
				Description: 'HP5 & MP5',
				Value: '+35',
			},
			{
				Description: 'Magical Penetration',
				Value: '+20%',
			},
			{
				Description: 'Movement Speed',
				Value: '+8%',
			},
		],
		item_short_desc:
			'Kills and assists on enemy gods provide Healing or Movement Speed',
		item_tier: 4,
		item_price: 1,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-charons-coin.jpg',
	},
	{
		id: 70,
		item_id: 15736,
		active_item: 'y',
		item_name: "Evolved Devourer's Gauntlet",
		child_item_id: 7914,
		icon_id: 6630,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+70',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+25%',
			},
		],
		item_short_desc: 'Gain Physical Power and Lifesteal from kills',
		item_tier: 4,
		item_price: 1,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-devourers-gauntlet.jpg',
	},
	{
		id: 99,
		item_id: 15594,
		active_item: 'y',
		item_name: 'Evolved Gauntlet of Thebes',
		child_item_id: 12665,
		icon_id: 6631,
		item_desc:
			'AURA - Allies within 70 units receive 10 Physical Protection and 10 Magical Protection.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Physical Protection',
				Value: '+50',
			},
			{
				Description: 'Magical Protection',
				Value: '+50',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
		],
		item_short_desc: "Increases allies' protections",
		item_tier: 4,
		item_price: 0,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-gauntlet-of-thebes.jpg',
	},
	{
		id: 108,
		item_id: 15646,
		active_item: 'y',
		item_name: 'Evolved Hide of the Urchin',
		child_item_id: 9338,
		icon_id: 6632,
		item_desc:
			'PASSIVE - Provides a Health Shield that gains stacks every 2s. Shield only stacks if you have not taken or dealt damage in the last 5s. Each stack provides 10% of 100 Health +5 Per Level.  The full shield will regenerate after 20 seconds.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+51',
			},
			{
				Description: 'Magical Protection',
				Value: '+51',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Mana',
				Value: '+250',
			},
		],
		item_short_desc: '',
		item_tier: 4,
		item_price: 1,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-hide-of-the-urchin.jpg',
	},
	{
		id: 63,
		item_id: 14855,
		active_item: 'y',
		item_name: 'Evolved Rage',
		child_item_id: 8546,
		icon_id: 5455,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+45%',
			},
		],
		item_short_desc:
			'Earn Critical Strike Chance stacks from kills or assists',
		item_tier: 4,
		item_price: 0,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-rage.jpg',
	},
	{
		id: 71,
		item_id: 15316,
		active_item: 'y',
		item_name: 'Evolved Soul Eater',
		child_item_id: 7539,
		icon_id: 6440,
		item_desc:
			'PASSIVE - Your abilities heal you for 25% of the damage dealt to targets.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Cooldown Reduction and Lifesteal',
		item_tier: 4,
		item_price: 0,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-soul-eater.jpg',
	},
	{
		id: 42,
		item_id: 15767,
		active_item: 'y',
		item_name: 'Evolved Transcendence',
		child_item_id: 8547,
		icon_id: 6638,
		item_desc: 'PASSIVE - 3% of your Mana is converted to Physical Power.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Mana',
				Value: '+1050',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Mana is converted to Physical Power',
		item_tier: 4,
		item_price: 1,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-transcendence.jpg',
	},
	{
		id: 137,
		item_id: 15724,
		active_item: 'y',
		item_name: "Evolved Warlock's Staff",
		child_item_id: 7917,
		icon_id: 6636,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+155',
			},
			{
				Description: 'Health',
				Value: '+225',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Increased max. Health and Power from kills',
		item_tier: 4,
		item_price: 1,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/evolved-warlocks-staff.jpg',
	},
	{
		id: 331,
		item_id: 19694,
		active_item: 'y',
		item_name: 'Eye of the Jungle',
		child_item_id: 0,
		icon_id: 9193,
		item_desc:
			'PASSIVE - You deal 30% increased damage to Jungle Monsters. Upon defeating a Large Jungle Monster you place a ward at its location that lasts for 30 seconds. While in the jungle you gain +20 HP5 and +15 MP5 Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+10',
			},
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'HP5',
				Value: '+10',
			},
			{
				Description: 'Attack Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Slay camps to gain new vision.',
		item_tier: 1,
		item_price: 650,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/eye-of-the-jungle.jpg',
	},
	{
		id: 18610,
		item_id: 23009,
		active_item: 'y',
		item_name: 'Fae-Blessed Hoops',
		child_item_id: 23149,
		icon_id: 11041,
		item_desc:
			'Each time an allied god dies within 70 units of you or you heal an allied god with an ability, a flower drops from your ally that can be picked up by you or an allied god. Picking up the flower gives that god a shield equal to 7.5% of their Max HP that lasts for 8s. Flowers last 7s on ground. Picking up a new flower refreshes shield.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'HP5',
				Value: '+20',
			},
			{
				Description: 'MP5',
				Value: '+40',
			},
		],
		item_short_desc:
			'Allies being healed by you or dying create a shield of flowers',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/fae-blessed-hoops.jpg',
	},
	{
		id: 246,
		item_id: 17357,
		active_item: 'y',
		item_name: 'Fail-not',
		child_item_id: 17351,
		icon_id: 7722,
		item_desc:
			'PASSIVE - When your Ultimate ability has finished casting, your next ability or basic attack within 8s that damages an enemy god marks them, increasing the chance you and your allies can land a Critical Strike by 20% for 10 seconds. This can only occur once every 45 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+20%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc:
			'On ultimate use your next damaging ability marks an enemies weak point',
		item_tier: 3,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/fail-not.jpg',
	},
	{
		id: 234,
		item_id: 16397,
		active_item: 'y',
		item_name: "Fighter's Mask",
		child_item_id: 0,
		icon_id: 5084,
		item_desc:
			"PASSIVE - <font color='#42F46E'>Increase Damage Dealt by 6% + 0.25% per your god’s level.\n<font color='#F44242'>Increase Damage Taken by 6% + 0.25% per your god’s level.\nPASSIVE - This item grants 2 MP5 per 10% of your missing Mana. Your abilities deal +10 Bonus Ability True Damage to minions. <n>Can be upgraded at level 20.",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+10',
			},
			{
				Description: 'Magical Power',
				Value: '+15',
			},
			{
				Description: 'HP5',
				Value: '+10',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Trade tankiness for power.',
		item_tier: 1,
		item_price: 650,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/fighters-mask.jpg',
	},
	{
		id: 132,
		item_id: 14081,
		active_item: 'y',
		item_name: 'Fortified Scepter',
		child_item_id: 9855,
		icon_id: 5043,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+50',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+5%',
			},
		],
		item_short_desc: 'Magical Power and Health.',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/fortified-scepter.jpg',
	},
	{
		id: 2754,
		item_id: 21497,
		active_item: 'y',
		item_name: 'Fortifying Shell',
		child_item_id: 21569,
		icon_id: 10368,
		item_desc:
			'Using this item applies a shield to yourself and allies within 35 units for 100 Health + 12 Health per God Level for 3 seconds. Additionally, all allies take 40% reduced damage from Basic Attacks while the shield is active. When the shield is broken or expires, Allied Gods gain a new buff providing 15% Damage Mitigation and 20% Movement Speed for 3s. Cooldown - 130s.',
		menuitems: [],
		item_short_desc:
			'Gain mitigation and Movement Speed when the shield breaks',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/fortifying-shell.jpg',
	},
	{
		id: 82,
		item_id: 7589,
		active_item: 'y',
		item_name: 'Frostbound Hammer',
		child_item_id: 9831,
		icon_id: 2896,
		item_desc:
			'PASSIVE - Enemies hit by your Basic Attacks have their Movement Speed reduced by 25% (15% for Ranged Basic Attacks) and have their Attack Speed reduced 20% for 1.25 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
		],
		item_short_desc: 'Basic Attack hits slow enemies.',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/frostbound-hammer.jpg',
	},
	{
		id: 183,
		item_id: 12665,
		active_item: 'y',
		item_name: 'Gauntlet of Thebes',
		child_item_id: 9839,
		icon_id: 4326,
		item_desc:
			'PASSIVE - Assists on a minion give 1 Stack and God kills and assists give 5 Stacks. Stacks provide 1 Physical and Magical Protection. At 50 Stacks this item evolves, providing an Aura of 10 Physical Protection and 10 Magical Protection.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
		],
		item_short_desc:
			'Gain increased Protections on Assists and enemy God deaths',
		item_tier: 3,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/gauntlet-of-thebes.jpg',
	},
	{
		id: 239,
		item_id: 17349,
		active_item: 'y',
		item_name: 'Gem Of Fate',
		child_item_id: 0,
		icon_id: 7718,
		item_desc: null,
		menuitems: [
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Cooldown Reduction and Ultimate Activation',
		item_tier: 1,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/gem-of-fate.jpg',
	},
	{
		id: 330,
		item_id: 19679,
		active_item: 'y',
		item_name: 'Gem of Focus',
		child_item_id: 19677,
		icon_id: 9213,
		item_desc:
			'PASSIVE - Every time you cast an ability that costs mana you gain a stack of Focus for 10s, providing 3% Movement Speed, 3% Damage Increase, and 2% Damage Taken Reduction, stacking up to 3 times.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+100',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Cast continuously, do not break your focus.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/gem-of-focus.jpg',
	},
	{
		id: 133,
		item_id: 7594,
		active_item: 'y',
		item_name: 'Gem of Isolation',
		child_item_id: 14081,
		icon_id: 2869,
		item_desc:
			'PASSIVE - Enemies hit by your damaging abilities will move 20% Slower for 1 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+90',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Damaging abilities Slow enemy movement.',
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/gem-of-isolation.jpg',
	},
	{
		id: 198,
		item_id: 12678,
		active_item: 'y',
		item_name: "Genji's Guard",
		child_item_id: 12676,
		icon_id: 4315,
		item_desc:
			'PASSIVE - When you take Magical Damage from Abilities your cooldowns are reduced by 3s. This can only occur once every 30s.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Magical Protection',
				Value: '+70',
			},
			{
				Description: 'MP5',
				Value: '+40',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc:
			'Magical Protection and situational Cooldown Reduction',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/genjis-guard.jpg',
	},
	{
		id: 298,
		item_id: 19494,
		active_item: 'y',
		item_name: 'Gilded Arrow',
		child_item_id: 0,
		icon_id: 9175,
		item_desc:
			'PASSIVE - Every 10s the highest health enemy minion or jungle monster within 80 units of you is marked. If you secure the killing blow on that target you gain 3 bonus gold and 20% attack speed for 8s, and restore 20 Mana. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Basic Attack Damage',
				Value: '+20',
			},
			{
				Description: 'Health',
				Value: '+50',
			},
			{
				Description: 'MP5',
				Value: '+7',
			},
		],
		item_short_desc: 'Mark a minion as your bounty.',
		item_tier: 1,
		item_price: 650,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/gilded-arrow.jpg',
	},
	{
		id: 91,
		item_id: 14085,
		active_item: 'y',
		item_name: "Gladiator's Shield",
		child_item_id: 8566,
		icon_id: 5044,
		item_desc:
			'PASSIVE - When damaging an enemy god with an ability you deal an additional 15 + 35% of your Protections from items and abilities. Can only trigger once per enemy per ability.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+40',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Deal bonus damage to low health enemies.',
		item_tier: 3,
		item_price: 1250,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/gladiators-shield.jpg',
	},
	{
		id: 18607,
		item_id: 23148,
		active_item: 'y',
		item_name: 'Gleaming Ear Cuffs',
		child_item_id: 23147,
		icon_id: 11035,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Magical Power',
				Value: '+30',
			},
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Power and Attack Speed',
		item_tier: 2,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/gleaming-ear-cuffs.jpg',
	},
	{
		id: 177,
		item_id: 12663,
		active_item: 'y',
		item_name: 'Glowing Emerald',
		child_item_id: 0,
		icon_id: 4325,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'HP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Health and HP5. ',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/glowing-emerald.jpg',
	},
	{
		id: 194,
		item_id: 16592,
		active_item: 'y',
		item_name: 'Golden Blade',
		child_item_id: 12672,
		icon_id: 7141,
		item_desc:
			'PASSIVE - All Basic Attacks will also hit enemies within a 15 unit radius of the target for 50% of the damage to Gods, Minions and Jungle Camps.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Basic Attack hits damage additional enemies',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/golden-blade.jpg',
	},
	{
		id: 2671,
		item_id: 21546,
		active_item: 'y',
		item_name: 'Greater Aegis Amulet',
		child_item_id: 21545,
		icon_id: 10344,
		item_desc:
			'Using this item makes you invulnerable to damage and healing for 1.5s, and prevents you from taking any actions. You may still move. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Invulnerability for a duration',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-aegis-amulet.jpg',
	},
	{
		id: 2672,
		item_id: 21554,
		active_item: 'y',
		item_name: 'Greater Belt of Frenzy',
		child_item_id: 21550,
		icon_id: 10348,
		item_desc:
			'Using this item grants all allied gods within 70 units 10% Increased Damage dealt to all targets, including objectives, and 25% Attack Speed increase for 6 seconds. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Damage buff for allied gods',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-belt-of-frenzy.jpg',
	},
	{
		id: 2673,
		item_id: 21557,
		active_item: 'y',
		item_name: 'Greater Blink Rune',
		child_item_id: 21556,
		icon_id: 10359,
		item_desc:
			'Using this item will allow you to teleport up to 45 units away instantly. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Short range teleport',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-blink-rune.jpg',
	},
	{
		id: 2674,
		item_id: 21559,
		active_item: 'y',
		item_name: 'Greater Bracer of Radiance',
		child_item_id: 21558,
		icon_id: 10356,
		item_desc:
			'Place a radiant glow at a target location for 90s. Allies who move through this glow gain 10% increased Power if above half health or 15% Movement Speed if below Half Health for 8s. This fragment acts as a ward. If destroyed the cooldown of the relic is reduced by 20s. Cooldown - 100s.',
		menuitems: [],
		item_short_desc: 'Provides vision and warmth to allies',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-bracer-of-radiance.jpg',
	},
	{
		id: 2679,
		item_id: 21571,
		active_item: 'y',
		item_name: 'Greater Cloak of Meditation',
		child_item_id: 21570,
		icon_id: 10352,
		item_desc:
			'Using this item causes you to Enter a meditative state where nearby allies gods within 35 units restore 10 + 3% of their missing health and mana each tick. Heals occur once every second for 4s. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Mana and health restoration',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-cloak-of-meditation.jpg',
	},
	{
		id: 2675,
		item_id: 21562,
		active_item: 'y',
		item_name: 'Greater Cursed Ankh',
		child_item_id: 21561,
		icon_id: 10360,
		item_desc:
			'Using this item reduces the Healing received by all enemy gods within 55 units by 40% for 10s  and removes 75% of any currently applied shield. Enemies that are healed by god abilities while affected by this curse take 10% more damage from all sources for the duration of the curse. Cooldown - 100s.',
		menuitems: [],
		item_short_desc: 'Reduce enemy healing',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-cursed-ankh.jpg',
	},
	{
		id: 2676,
		item_id: 21565,
		active_item: 'y',
		item_name: 'Greater Heavenly Wings',
		child_item_id: 21564,
		icon_id: 10371,
		item_desc:
			'Using this item increases the Movement Speed of allied gods within 55 units by 20% for 5s and makes them immune to Slows. Cooldown - 110s',
		menuitems: [],
		item_short_desc: 'Increases Movement Speed of allied gods',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-heavenly-wings.jpg',
	},
	{
		id: 2677,
		item_id: 21567,
		active_item: 'y',
		item_name: 'Greater Horrific Emblem',
		child_item_id: 21566,
		icon_id: 10367,
		item_desc:
			'Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is reduced by 25% for the duration. Additionally, their Damage Dealt is reduced by 15%. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Reduces enemy Attack Speed and Movement Speed',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-horrific-emblem.jpg',
	},
	{
		id: 2678,
		item_id: 21569,
		active_item: 'y',
		item_name: 'Greater Magic Shell',
		child_item_id: 21568,
		icon_id: 10363,
		item_desc:
			'Using this item applies a shield to yourself and allies within 35 units for 100 Health + 12 Health per God Level for 3 seconds. Additionally, all allies take 20% reduced damage from Basic Attacks while the shield is active. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Gain a health shield',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-magic-shell.jpg',
	},
	{
		id: 2680,
		item_id: 21573,
		active_item: 'y',
		item_name: 'Greater Purification Beads',
		child_item_id: 21572,
		icon_id: 10311,
		item_desc:
			'Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Removes crowd control effects',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-purification-beads.jpg',
	},
	{
		id: 2681,
		item_id: 21576,
		active_item: 'y',
		item_name: 'Greater Shield of Thorns',
		child_item_id: 21575,
		icon_id: 10315,
		item_desc:
			'Using this item reflects 30% of all damage you take, before mitigations, for the next 5 seconds, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. While this is active enemies can only lifesteal from you for 75% of their total lifesteal. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Reflect damage taken',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-shield-of-thorns.jpg',
	},
	{
		id: 2682,
		item_id: 21578,
		active_item: 'y',
		item_name: 'Greater Sundering Spear',
		child_item_id: 21577,
		icon_id: 10319,
		item_desc:
			'Fire a bolt that travels 70 units, stopping on first god hit dealing 7.5% of their Current Health as True Damage and reducing any active shields by 75%. Targets hit take 5% increased damage for 5s, stacking 2 times. This relic has 2 charges. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Fires damage increasing projectile',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-sundering-spear.jpg',
	},
	{
		id: 2683,
		item_id: 21580,
		active_item: 'y',
		item_name: 'Greater Teleport Fragment',
		child_item_id: 21579,
		icon_id: 10323,
		item_desc:
			'Using this item allows you to teleport to any allied structure while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. Cooldown - 160s.',
		menuitems: [],
		item_short_desc:
			'Teleport to an allied structure. Not interrupted by damage.',
		item_tier: 3,
		item_price: 300,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/greater-teleport-fragment.jpg',
	},
	{
		id: 18613,
		item_id: 23146,
		active_item: 'y',
		item_name: 'Griffonwing Earrings',
		child_item_id: 23148,
		icon_id: 11038,
		item_desc:
			'Your Basic Attack projectile speed is increased by 40%. Your Basic Attack damage is reduced by 10%.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Magical Power',
				Value: '+60',
			},
			{
				Description: 'Attack Speed',
				Value: '+25%',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Speed up your Basic Attacks at the cost of damage',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/griffonwing-earrings.jpg',
	},
	{
		id: 249,
		item_id: 18200,
		active_item: 'y',
		item_name: 'Hand of the Gods',
		child_item_id: 0,
		icon_id: 8137,
		item_desc:
			'This consumable deals 200 True damage to Jungle Monsters around you. This only affects Monsters on your side of the Jungle.',
		menuitems: [],
		item_short_desc: 'Deals damage to Jungle Monsters',
		item_tier: 1,
		item_price: 100,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hand-of-the-gods.jpg',
	},
	{
		id: 193,
		item_id: 14850,
		active_item: 'y',
		item_name: 'Hastened Katana',
		child_item_id: 12672,
		icon_id: 5453,
		item_desc:
			'PASSIVE - Hitting an enemy with a Basic Attack grants Haste for 1s, causing you to be immune from Basic Attack Movement Penalty.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Successful Basic Attacks no longer slow',
		item_tier: 3,
		item_price: 1200,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hastened-katana.jpg',
	},
	{
		id: 119,
		item_id: 14840,
		active_item: 'y',
		item_name: 'Hastened Ring',
		child_item_id: 9848,
		icon_id: 5450,
		item_desc:
			'PASSIVE - Hitting an enemy God with a Basic Attack grants Haste for 6s, causing you to be immune from Basic Attack Movement Penalty. (Internal Cooldown 25s)',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+70',
			},
			{
				Description: 'Attack Speed',
				Value: '+25%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc:
			'Successful Basic Attacks causes you to be immune from Basic Attack Movement Penalty.',
		item_tier: 3,
		item_price: 1400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hastened-ring.jpg',
	},
	{
		id: 2752,
		item_id: 21492,
		active_item: 'y',
		item_name: 'Hastened Wings',
		child_item_id: 21565,
		icon_id: 10370,
		item_desc:
			'Using this item increases the Movement Speed of allied gods within 55 units by 20% for 4s, makes them immune to Slows, and grants Haste causing them to be immune to Basic Attack Movement Penalty. For the duration, successful basic attacks increase the duration by 1s up to an additional 4s.  Cooldown - 110s',
		menuitems: [],
		item_short_desc:
			'Grants a haste buff that refreshes on successful basic attacks',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hastened-wings.jpg',
	},
	{
		id: 20,
		item_id: 7621,
		active_item: 'y',
		item_name: 'Healing Potion',
		child_item_id: 0,
		icon_id: 2929,
		item_desc: 'This consumable heals 250 Health over 25 seconds.',
		menuitems: [],
		item_short_desc: 'Restores Health over time.',
		item_tier: 1,
		item_price: 50,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/healing-potion.jpg',
	},
	{
		id: 37,
		item_id: 12680,
		active_item: 'y',
		item_name: 'Heartseeker',
		child_item_id: 8560,
		icon_id: 3487,
		item_desc:
			'PASSIVE - Your abilities deal an additional 3% of the targets maximum Health as Physical Damage. If you have over 200 Physical Power, your ability bonus damage scales up. This effect reaches a maximum of 6% Maximum Health damage at 400 Physical Power. Subsequent hits on the same target do 75% bonus damage for the next 3s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+65',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Abilities deal bonus health-based damage',
		item_tier: 3,
		item_price: 1700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heartseeker.jpg',
	},
	{
		id: 113,
		item_id: 11116,
		active_item: 'y',
		item_name: 'Heartward Amulet',
		child_item_id: 9846,
		icon_id: 10335,
		item_desc:
			'AURA - Allied gods within 70 units have their Magical Protections increased by 15 and their MP5 increased by 30.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+55',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
		],
		item_short_desc: 'Magical Protection Aura',
		item_tier: 3,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heartward-amulet.jpg',
	},
	{
		id: 2658,
		item_id: 21564,
		active_item: 'y',
		item_name: 'Heavenly Wings',
		child_item_id: 18307,
		icon_id: 10372,
		item_desc:
			'Using this item increases the Movement Speed of allied gods within 55 units by 20% for 5s and makes them immune to Slows. Cooldown - 130s',
		menuitems: [],
		item_short_desc: 'Increases Movement Speed of allied gods',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heavenly-wings.jpg',
	},
	{
		id: 251,
		item_id: 7353,
		active_item: 'y',
		item_name: 'Heavenly Wings',
		child_item_id: 18307,
		icon_id: 4309,
		item_desc:
			'Using this item increases the Movement Speed of allied gods within 55 units by 20% for 5s and makes them immune to Slows. Cooldown - 120s',
		menuitems: [],
		item_short_desc: 'Increases ally Movement Speed.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heavenly-wings.jpg',
	},
	{
		id: 269,
		item_id: 14147,
		active_item: 'y',
		item_name: 'Heavenly Wings Upgrade',
		child_item_id: 7353,
		icon_id: 5105,
		item_desc:
			'Using this item increases the Movement Speed of allied gods within 55 units by 20% for 5s, makes them immune to Slows, and grants Haste causing them to be immune to Basic Attack Movement Penalty.  Cooldown - 120s',
		menuitems: [],
		item_short_desc: 'Increases ally Movement Speed.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heavenly-wings-upgrade.jpg',
	},
	{
		id: 80,
		item_id: 9831,
		active_item: 'y',
		item_name: 'Heavy Hammer',
		child_item_id: 9830,
		icon_id: 2898,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
		],
		item_short_desc: 'Health and Physical Power.',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heavy-hammer.jpg',
	},
	{
		id: 27,
		item_id: 7828,
		active_item: 'y',
		item_name: 'Heavy Mace',
		child_item_id: 7827,
		icon_id: 2889,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
		],
		item_short_desc: 'Physical Power.',
		item_tier: 2,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heavy-mace.jpg',
	},
	{
		id: 303,
		item_id: 19607,
		active_item: 'y',
		item_name: "Hero's Axe",
		child_item_id: 19496,
		icon_id: 9189,
		item_desc:
			'PASSIVE - When an ally god within 55 units of you is hit by a hard crowd control effect, give them a shield equal to 15% of your Maximum Health. This effect can only occur once every 8s.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+45',
			},
			{
				Description: 'Magical Protection',
				Value: '+45',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+30%',
			},
		],
		item_short_desc: "Shield your CC'd allies.",
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heros-axe.jpg',
	},
	{
		id: 2765,
		item_id: 21499,
		active_item: 'y',
		item_name: 'Heroic Teleport',
		child_item_id: 21580,
		icon_id: 10340,
		item_desc:
			'Using this item allows you to teleport to any allied structure or ward while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. After teleporting you gain slow immunity, 20% Movement Speed and 40 Protections for 10s. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Gain buffs after teleporting',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/heroic-teleport.jpg',
	},
	{
		id: 58,
		item_id: 9812,
		active_item: 'y',
		item_name: 'Hidden Dagger',
		child_item_id: 0,
		icon_id: 2856,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
		],
		item_short_desc: 'Physical Power and Critical Chance.',
		item_tier: 1,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hidden-dagger.jpg',
	},
	{
		id: 95,
		item_id: 7578,
		active_item: 'y',
		item_name: 'Hide of the Nemean Lion',
		child_item_id: 9838,
		icon_id: 2862,
		item_desc:
			"PASSIVE - Every 10 seconds you gain a block stack if you have at least 80 total Protections from items and abilities, preventing 65% of the next Basic Attack's damage. For each additional 80 total Protections from items and abilities the max. stacks increases, up to a cap of 3.",
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+70',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Block incoming Basic Attacks',
		item_tier: 3,
		item_price: 1150,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hide-of-the-nemean-lion.jpg',
	},
	{
		id: 105,
		item_id: 9338,
		active_item: 'y',
		item_name: 'Hide of the Urchin',
		child_item_id: 9843,
		icon_id: 2536,
		item_desc:
			'PASSIVE - You gain +3 Magical Protection and +3 Physical Protection for each god kill or assist. At 7 stacks this item Evolves, providing a Health Shield that gains stacks every 2s. Shield only stacks if you have not taken or dealt damage in the last 5s. Each stack provides 10% of 100 Health +5 Per Level. ',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Mana',
				Value: '+250',
			},
		],
		item_short_desc: 'Gains protection from god kills or assists. Evolves.',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hide-of-the-urchin.jpg',
	},
	{
		id: 240,
		item_id: 17351,
		active_item: 'y',
		item_name: 'Honed Edge',
		child_item_id: 17349,
		icon_id: 7720,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Cooldown Reduction and Physical Power',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/honed-edge.jpg',
	},
	{
		id: 262,
		item_id: 14056,
		active_item: 'y',
		item_name: 'Horrific Emblem',
		child_item_id: 18307,
		icon_id: 5068,
		item_desc:
			'Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is also reduced by 25% for the duration. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Reduces enemy Attack Speed and Movement Speed.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/horrific-emblem.jpg',
	},
	{
		id: 2659,
		item_id: 21566,
		active_item: 'y',
		item_name: 'Horrific Emblem',
		child_item_id: 18307,
		icon_id: 10375,
		item_desc:
			'Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is reduced by 25% for the duration. Additionally, their Damage Dealt is reduced by 15%. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Reduce enemy Attack Speed and Movement Speed',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/horrific-emblem.jpg',
	},
	{
		id: 279,
		item_id: 14162,
		active_item: 'y',
		item_name: 'Horrific Emblem Upgrade',
		child_item_id: 14056,
		icon_id: 5069,
		item_desc:
			'Using this item Slows the Movement Speed of all enemy gods within 35 units by 30% for 5s. Their Attack Speed is reduced by 25% for the duration. Additionally, their Damage Dealt is reduced by 15%. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Reduces enemy Attack Speed and Movement Speed.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/horrific-emblem-upgrade.jpg',
	},
	{
		id: 167,
		item_id: 14848,
		active_item: 'y',
		item_name: "Hunter's Bow",
		child_item_id: 10662,
		icon_id: 4994,
		item_desc: null,
		menuitems: [
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
			{
				Description: 'Physical Power',
				Value: '+10',
			},
		],
		item_short_desc: 'Increases Attack Speed.',
		item_tier: 2,
		item_price: 550,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hunters-bow.jpg',
	},
	{
		id: 326,
		item_id: 19674,
		active_item: 'y',
		item_name: "Hunter's Cowl",
		child_item_id: 19672,
		icon_id: 9179,
		item_desc:
			'AURA - While you are within 55 units of an allied god you gain 20% Attack Speed Aura. If you are alone you instead gain 10% Movement Speed.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+60',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
		],
		item_short_desc: 'Stalk alone, fight with allies to empower them.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hunters-cowl.jpg',
	},
	{
		id: 36,
		item_id: 8550,
		active_item: 'y',
		item_name: "Hydra's Lament",
		child_item_id: 8568,
		icon_id: 2263,
		item_desc:
			'PASSIVE - For 8s after using an ability, your next Basic Attack will deal an additional 35% damage. Abilities that function like basic attacks do not benefit from this.\nPASSIVE - This item grants 2.5 MP5 per 10% of your missing Mana.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc:
			'Using abilities gives your next Basic Attack bonus damage based on Physical Power',
		item_tier: 3,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hydras-lament.jpg',
	},
	{
		id: 34,
		item_id: 8568,
		active_item: 'y',
		item_name: "Hydra's Star",
		child_item_id: 7922,
		icon_id: 2950,
		item_desc:
			'PASSIVE - For 8 seconds after using an ability, your next basic attack will deal an additional 10% damage. The effect can only occur every 3 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+5%',
			},
			{
				Description: 'MP5',
				Value: '+7',
			},
		],
		item_short_desc:
			'Using abilities gives your next Basic Attack bonus damage based on Physical Power.',
		item_tier: 2,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/hydras-star.jpg',
	},
	{
		id: 169,
		item_id: 10664,
		active_item: 'y',
		item_name: 'Ichaival',
		child_item_id: 14848,
		icon_id: 3285,
		item_desc:
			'PASSIVE - Every successful Basic Attack increases your Physical Power by 10 and reduces the attack speed of your opponent by 7% for 5s. (Max. 3 Stacks)',
		menuitems: [
			{
				Description: 'Attack Speed',
				Value: '+30%',
			},
			{
				Description: 'Physical Power',
				Value: '+35',
			},
		],
		item_short_desc: 'Basic Attacks weaken enemies',
		item_tier: 3,
		item_price: 1250,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/ichaival.jpg',
	},
	{
		id: 158,
		item_id: 10603,
		active_item: 'y',
		item_name: 'Imperial Helmet',
		child_item_id: 0,
		icon_id: 3260,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+10',
			},
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
		],
		item_short_desc: 'Magical Power and Physical Protection',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/imperial-helmet.jpg',
	},
	{
		id: 336,
		item_id: 19753,
		active_item: 'y',
		item_name: 'Infused Sigil',
		child_item_id: 19751,
		icon_id: 9192,
		item_desc:
			'PASSIVE - When you are hit by an ability the Infused Sigil gains a stack. This can occur only once per ability cast. At 4 stacks it explodes after 0.5s, dealing 600 Physical Damage to enemies within 30 units of you. ',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Physical Protection',
				Value: '+35',
			},
			{
				Description: 'Magical Protection',
				Value: '+35',
			},
			{
				Description: 'Health',
				Value: '+350',
			},
		],
		item_short_desc: 'Absorb attacks to generate an explosion.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/infused-sigil.jpg',
	},
	{
		id: 1,
		item_id: 7526,
		active_item: 'y',
		item_name: 'Iron Mail',
		child_item_id: 0,
		icon_id: 2866,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+75',
			},
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
		],
		item_short_desc: 'Physical Protection and Health.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/iron-mail.jpg',
	},
	{
		id: 163,
		item_id: 14179,
		active_item: 'y',
		item_name: "Jade Emperor's Crown",
		child_item_id: 10602,
		icon_id: 5046,
		item_desc:
			'AURA - Enemy gods within 40 units have their Physical Power reduced by 15%.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+30',
			},
			{
				Description: 'Physical Protection',
				Value: '+50',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Aura reducing enemy Physical Power',
		item_tier: 3,
		item_price: 1400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/jade-emperors-crown.jpg',
	},
	{
		id: 159,
		item_id: 10602,
		active_item: 'y',
		item_name: 'Jade Mountain Helm',
		child_item_id: 10603,
		icon_id: 3261,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+20',
			},
		],
		item_short_desc: 'Magical Power and Physical Protection',
		item_tier: 2,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/jade-mountain-helm.jpg',
	},
	{
		id: 18609,
		item_id: 23154,
		active_item: 'y',
		item_name: 'Jeweled Studs',
		child_item_id: 23147,
		icon_id: 11036,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Magical power',
				Value: '+30',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Power and Cooldown Reduction',
		item_tier: 2,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/jeweled-studs.jpg',
	},
	{
		id: 18257,
		item_id: 22940,
		active_item: 'y',
		item_name: "Jotunn's Cunning",
		child_item_id: 7904,
		icon_id: 11027,
		item_desc:
			'<n>GLYPH - Every time you damage an enemy god with an ability you gain a stack of Wit. At 2 stacks, your next non-ultimate ability that damages an enemy god gets 25% of its cooldown instantly refunded. This effect may only occur once every 5s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+45',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Heavily reduce an ability cooldown',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/jotunns-cunning.jpg',
	},
	{
		id: 2419,
		item_id: 21506,
		active_item: 'y',
		item_name: "Jotunn's Ferocity",
		child_item_id: 7904,
		icon_id: 10339,
		item_desc:
			'GLYPH - Your next basic attack marks an enemy god for 8s. If you hit the marked enemy or the marked enemy hits you with a basic attack or ability, gain 1 stack. Each stack provides 2% increased damage towards the marked enemy, stacking up to 10 times. This effect can only occur every 30s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Mark an enemy god to deal more damage',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/jotunns-ferocity.jpg',
	},
	{
		id: 2420,
		item_id: 21507,
		active_item: 'y',
		item_name: "Jotunn's Vigor",
		child_item_id: 7904,
		icon_id: 10342,
		item_desc:
			'GLYPH - If you drop beneath 40% health, gain 10% Movement Speed and 30% Physical Ability Lifesteal for 5s. This effect may only occur once every 15s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+45',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Gain Ability Lifesteal and Movement Speed when at low health',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/jotunns-vigor.jpg',
	},
	{
		id: 30,
		item_id: 7904,
		active_item: 'y',
		item_name: "Jotunn's Wrath",
		child_item_id: 7828,
		icon_id: 10338,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+45',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Cooldown Reduction and Physical Penetration',
		item_tier: 3,
		item_price: 750,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/jotunns-wrath.jpg',
	},
	{
		id: 190,
		item_id: 12671,
		active_item: 'y',
		item_name: 'Katana',
		child_item_id: 0,
		icon_id: 4317,
		item_desc:
			'This item and all upgrades are only available to Assassins and Warriors.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+7',
			},
			{
				Description: 'Movement Speed',
				Value: '+3%',
			},
		],
		item_short_desc: 'Physical Power and Movement Speed',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/katana.jpg',
	},
	{
		id: 241,
		item_id: 17352,
		active_item: 'y',
		item_name: "Knight's Shield",
		child_item_id: 17349,
		icon_id: 7719,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+25',
			},
			{
				Description: 'Magical protection',
				Value: '+25',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Cooldown Reduction and Protections',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/knights-shield.jpg',
	},
	{
		id: 327,
		item_id: 19675,
		active_item: 'y',
		item_name: "Leader's Cowl",
		child_item_id: 19672,
		icon_id: 9180,
		item_desc:
			'AURA - You provide 5% increased Power to all nearby allied gods. This aura gains a bonus stack for each ally god within 55 units causing it to provide an additional 3% increased Power. For each enemy god within 55 units a stack is removed.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+15%',
			},
		],
		item_short_desc: 'Move together. Fight together. Isolate your enemies.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/leaders-cowl.jpg',
	},
	{
		id: 325,
		item_id: 19672,
		active_item: 'y',
		item_name: 'Leather Cowl',
		child_item_id: 0,
		icon_id: 9178,
		item_desc:
			'PASSIVE - While you are within 55 units of an allied god you gain 10% Attack Speed. If you are alone you instead gain 5% Movement Speed. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical power',
				Value: '+15',
			},
			{
				Description: 'MP5',
				Value: '+5',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+7%',
			},
			{
				Description: 'Attack Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Stalk alone, fight together.',
		item_tier: 1,
		item_price: 700,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/leather-cowl.jpg',
	},
	{
		id: 7,
		item_id: 7573,
		active_item: 'y',
		item_name: 'Light Blade',
		child_item_id: 0,
		icon_id: 2738,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+5',
			},
			{
				Description: 'Attack Speed',
				Value: '+10%',
			},
		],
		item_short_desc: 'Physical Power and Attack Speed',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/light-blade.jpg',
	},
	{
		id: 286,
		item_id: 18704,
		active_item: 'y',
		item_name: 'Lively Acorn',
		child_item_id: 18703,
		icon_id: 8683,
		item_desc:
			'PASSIVE: When Ratatoskr deals damage with an ability he restores 3% of his Maximum Health.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+10',
			},
			{
				Description: 'Movement Speed',
				Value: '+4%',
			},
		],
		item_short_desc: 'Restorative Acorn',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/lively-acorn.jpg',
	},
	{
		id: 18605,
		item_id: 23131,
		active_item: 'y',
		item_name: "Lono's Mask",
		child_item_id: 23048,
		icon_id: 7071,
		item_desc:
			"Gain 6 GP5 if you have the lowest gold on your team. Gain 5 stacks of <font color='#F44242'>Cowardice. Each stack reduces your damage dealt and healing output by 10%. For each 55 protections from items, remove a stack of <font color='#F44242'>Cowardice. When you remove a stack of <font color='#F44242'>Cowardice gain a stack of <font color='#42F46E'> Bravery. For each stack of <font color='#42F46E'>Bravery, gain +3% damage mitigation and provide 7 Physical and Magical Protections to all allied gods within 55 units.",
		menuitems: [
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: '',
		item_tier: 2,
		item_price: 1250,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/lonos-mask.jpg',
	},
	{
		id: 145,
		item_id: 9860,
		active_item: 'y',
		item_name: 'Lost Artifact',
		child_item_id: 0,
		icon_id: 2844,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'MP5',
				Value: '+5',
			},
		],
		item_short_desc: 'Magical Power and MP5.',
		item_tier: 1,
		item_price: 550,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/lost-artifact.jpg',
	},
	{
		id: 162,
		item_id: 11110,
		active_item: 'y',
		item_name: 'Lotus Crown',
		child_item_id: 10602,
		icon_id: 3491,
		item_desc:
			'PASSIVE - Any god affected by your ability heals gains 15 increased Physical and Magical Protection for 5 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+30',
			},
			{
				Description: 'Physical Protection',
				Value: '+50',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Provides protections to gods you heal',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/lotus-crown.jpg',
	},
	{
		id: 25,
		item_id: 7827,
		active_item: 'y',
		item_name: 'Mace',
		child_item_id: 0,
		icon_id: 2890,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+10',
			},
		],
		item_short_desc: 'Physical Power and Penetration.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon: 'https://webcdn.hirezstudios.com/smite/item-icons/mace.jpg',
	},
	{
		id: 104,
		item_id: 7935,
		active_item: 'y',
		item_name: "Magi's Cloak",
		child_item_id: 9842,
		icon_id: 11044,
		item_desc:
			'PASSIVE - Protects you from a single hard Crowd Control effect once every 70 seconds. When this occurs, you gain 1s of Crowd Control immunity.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
			{
				Description: 'Magical Protection',
				Value: '+15',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
		],
		item_short_desc: 'Absorbs a hard Crowd Control effect.',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/magis-cloak.jpg',
	},
	{
		id: 18341,
		item_id: 22991,
		active_item: 'y',
		item_name: "Magi's Revenge",
		child_item_id: 7935,
		icon_id: 11033,
		item_desc:
			'PASSIVE - Protects you from a single hard Crowd Control effect once every 70 seconds. When this occurs, you gain 1s of Crowd Control immunity. <n>GLYPH - If an enemy God consumes your passive, they become Marked for Revenge for 5s, causing them to receive 10% more damage and granting allied Gods within 40 units 20% increased Movement Speed towards them.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
			{
				Description: 'Magical Protection',
				Value: '+15',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
		],
		item_short_desc:
			'Enemies that hard Crowd Control you make themselves vulnerable',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/magis-revenge.jpg',
	},
	{
		id: 18340,
		item_id: 22945,
		active_item: 'y',
		item_name: "Magi's Shelter",
		child_item_id: 7935,
		icon_id: 11032,
		item_desc:
			'PASSIVE - Protects you from a single hard Crowd Control effect once every 70 seconds. When this occurs, you gain 1s of Crowd Control immunity. <n>GLYPH - Whenever your passive is consumed, the nearest allied god within 25 units gains protection from a single hard Crowd Control effect for 5s. If this passive is consumed before time runs out, they gain 1s of Crowd Control immunity.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
			{
				Description: 'Magical Protection',
				Value: '+15',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
		],
		item_short_desc:
			'Protects your allies when you are hard Crowd Controlled',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/magis-shelter.jpg',
	},
	{
		id: 285,
		item_id: 18703,
		active_item: 'y',
		item_name: 'Magic Acorn',
		child_item_id: 0,
		icon_id: 8682,
		item_desc:
			'This item can be upgraded from anywhere and replaces Boots for Ratatoskr.',
		menuitems: [
			{
				Description: 'Movement Speed',
				Value: '+2%',
			},
		],
		item_short_desc: 'Starting Acorn',
		item_tier: 1,
		item_price: 0,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/magic-acorn.jpg',
	},
	{
		id: 121,
		item_id: 9849,
		active_item: 'y',
		item_name: 'Magic Focus',
		child_item_id: 0,
		icon_id: 2838,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+20',
			},
		],
		item_short_desc: 'Magical Power and Penetration.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/magic-focus.jpg',
	},
	{
		id: 2660,
		item_id: 21568,
		active_item: 'y',
		item_name: 'Magic Shell',
		child_item_id: 18307,
		icon_id: 10364,
		item_desc:
			'Using this item applies a shield to yourself and allies within 35 units for 100 Health + 12 Health per God Level for 3 seconds. Additionally, all allies take 20% reduced damage from Basic Attacks while the shield is active. Cooldown - 150s.',
		menuitems: [],
		item_short_desc: 'Gain a health shield',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/magic-shell.jpg',
	},
	{
		id: 184,
		item_id: 20217,
		active_item: 'y',
		item_name: 'Mail of Renewal',
		child_item_id: 9839,
		icon_id: 2539,
		item_desc:
			'PASSIVE - When you are hit by an enemy god you gain a stack, up to once a second, increasing your protections by 4. Max of 5 stacks, lasts for 5s each. At max stacks, upon being hit you are immediately healed for 15% of your maximum health. Allies within 35 units heal for 15% of their maximum health over 10s. This effect can only occur once every 60 seconds.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
		],
		item_short_desc: 'Gain Healing when taking Damage from Enemy Gods',
		item_tier: 3,
		item_price: 1150,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/mail-of-renewal.jpg',
	},
	{
		id: 2453,
		item_id: 21500,
		active_item: 'y',
		item_name: 'Malicious Deathbringer',
		child_item_id: 7545,
		icon_id: 10327,
		item_desc:
			'PASSIVE - Critical Strike bonus damage dealt is increased by 25%. <n>GLYPH - Successfully hitting an Enemy God with a Critical Strike will subtract 1s from all of your abilities currently on cooldown, except your ultimate ability.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+30%',
			},
		],
		item_short_desc: 'Critical strikes reduce ability cooldowns',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/malicious-deathbringer.jpg',
	},
	{
		id: 21,
		item_id: 7622,
		active_item: 'y',
		item_name: 'Mana Potion',
		child_item_id: 0,
		icon_id: 2930,
		item_desc: 'This consumable heals 150 Mana over 25 seconds.',
		menuitems: [],
		item_short_desc: 'Restores Mana over time.',
		item_tier: 1,
		item_price: 50,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/mana-potion.jpg',
	},
	{
		id: 306,
		item_id: 19641,
		active_item: 'y',
		item_name: 'Manikin Hidden Blade',
		child_item_id: 19500,
		icon_id: 9198,
		item_desc:
			'PASSIVE - If you have not taken or dealt damage in the last 5s and hit an enemy god, Jungle Monster, or Jungle Boss, they immediately take 20% of their Current Health as Physical Damage and are slowed by 20% for 5s.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+90',
			},
			{
				Description: 'Physical Power',
				Value: '+60',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Damage Reduction',
				Value: '+5',
			},
		],
		item_short_desc: 'Attack first for massive damage.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/manikin-hidden-blade.jpg',
	},
	{
		id: 305,
		item_id: 19513,
		active_item: 'y',
		item_name: 'Manikin Mace',
		child_item_id: 19500,
		icon_id: 9197,
		item_desc:
			'PASSIVE - Enemies hit by your Basic Attacks are burned, taking 60 physical damage over 2s and have their Attack Speed slowed by 10%. Jungle Monsters and Bosses take 4x damage and restore 3% Health and 5% Mana when they die if they are burned. This effect can stack up to 4 times.',
		menuitems: [
			{
				Description: 'Basic Attack Damage',
				Value: '+50',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
		],
		item_short_desc:
			'Basic attack burn enemies. Jungle Monsters take extra damage.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/manikin-mace.jpg',
	},
	{
		id: 304,
		item_id: 19500,
		active_item: 'y',
		item_name: 'Manikin Scepter',
		child_item_id: 0,
		icon_id: 9196,
		item_desc:
			'PASSIVE - Enemies hit by your Basic Attacks are burned, taking 16 Physical Damage (+5% of your Physical and Magical Power) over 2s and have their Attack Speed reduced by 4.5%. Jungle Monsters take 4x the amount of damage and restore 3% Health and 5% Mana when they die if they are burned. This effect can stack up to 3 times. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Basic Attack Damage',
				Value: '+10',
			},
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
		],
		item_short_desc:
			'Basic attack hits burn enemies. Jungle Monsters take extra damage.',
		item_tier: 1,
		item_price: 750,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/manikin-scepter.jpg',
	},
	{
		id: 18612,
		item_id: 23143,
		active_item: 'y',
		item_name: "Manticore's Spike",
		child_item_id: 23149,
		icon_id: 11040,
		item_desc:
			'When you hit an enemy god with Hard Crowd Control, they drop a Spike on the ground that lasts for 7s. When you or an allied god pick up a spike, they gain a buff that causes their next ability to deal bonus damage equal to 3% of their own Max HP. This effect lasts 5s and is doubled if you are the one who picks up the spike.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+350',
			},
			{
				Description: 'HP5',
				Value: '+30',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Hard Crowd Control an enemy to create a buff your team can pick up.',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/manticores-spike.jpg',
	},
	{
		id: 107,
		item_id: 12666,
		active_item: 'y',
		item_name: 'Mantle of Discord',
		child_item_id: 9360,
		icon_id: 4328,
		item_desc:
			'PASSIVE - If you take damage below 30% health you unleash a shockwave that stuns all enemies within a range of 20 units for 1s and become immune to Crowd Control for 1s. This effect cannot trigger more than once every 110s.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+55',
			},
			{
				Description: 'Magical Protection',
				Value: '+55',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc:
			'Stun all nearby Enemies upon falling below 30% Health.',
		item_tier: 3,
		item_price: 1400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/mantle-of-discord.jpg',
	},
	{
		id: 232,
		item_id: 16393,
		active_item: 'y',
		item_name: 'Mask',
		child_item_id: 0,
		icon_id: 7068,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Mana',
				Value: '+100',
			},
		],
		item_short_desc: 'Health and Mana',
		item_tier: 1,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon: 'https://webcdn.hirezstudios.com/smite/item-icons/mask.jpg',
	},
	{
		id: 265,
		item_id: 20690,
		active_item: 'y',
		item_name: 'Meditation Cloak',
		child_item_id: 18307,
		icon_id: 4305,
		item_desc:
			'Using this item causes you to Enter a meditative state where nearby allies gods within 35 units restore 8 + 5% of their missing health and mana each tick. Heals occur once every second for 4s. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Mana and Health restoration.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/meditation-cloak.jpg',
	},
	{
		id: 282,
		item_id: 20691,
		active_item: 'y',
		item_name: 'Meditation Cloak Upgrade',
		child_item_id: 20690,
		icon_id: 5107,
		item_desc:
			'Using this item causes you to Enter a meditative state where nearby allies gods within 35 units restore 8 + 5% of their missing health and mana each pulse. Additionally each pulse reduces cooldowns for all abilities by 1s. Pulses occur once every second for 4s. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Mana and Health restoration.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/meditation-cloak-upgrade.jpg',
	},
	{
		id: 5,
		item_id: 7907,
		active_item: 'y',
		item_name: 'Midgardian Mail',
		child_item_id: 7527,
		icon_id: 2863,
		item_desc:
			'PASSIVE - Enemies that successfully land a basic attack  on you have their Movement Speed and Attack Speed reduced by 8% for 2 seconds. This effect can stack up to 3 times and can stack with other item slow effects.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'Physical Protection',
				Value: '+40',
			},
		],
		item_short_desc: 'Slow enemies when hit by their Basic Attacks',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/midgardian-mail.jpg',
	},
	{
		id: 32,
		item_id: 7922,
		active_item: 'y',
		item_name: 'Morningstar',
		child_item_id: 0,
		icon_id: 2946,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+7',
			},
			{
				Description: 'MP5',
				Value: '+5',
			},
		],
		item_short_desc: 'Physical Power and Mana',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/morningstar.jpg',
	},
	{
		id: 57,
		item_id: 9804,
		active_item: 'y',
		item_name: 'Multi Potion',
		child_item_id: 0,
		icon_id: 2931,
		item_desc:
			'This consumable heals 125 Health and 75 Mana over 25 seconds.',
		menuitems: [],
		item_short_desc: 'Restores Health and Mana over time.',
		item_tier: 1,
		item_price: 50,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/multi-potion.jpg',
	},
	{
		id: 18606,
		item_id: 23147,
		active_item: 'y',
		item_name: 'Mystical Earring',
		child_item_id: 0,
		icon_id: 11034,
		item_desc: '',
		menuitems: [
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'MP5',
		item_tier: 1,
		item_price: 400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/mystical-earring.jpg',
	},
	{
		id: 4,
		item_id: 7537,
		active_item: 'y',
		item_name: 'Mystical Mail',
		child_item_id: 7527,
		icon_id: 2917,
		item_desc:
			'AURA - ALL enemies within 25 units are dealt 20 (+1 Per Level) Magical Damage per second.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Physical Protection',
				Value: '+35',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'Nearby enemies take damage over time',
		item_tier: 3,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/mystical-mail.jpg',
	},
	{
		id: 287,
		item_id: 18705,
		active_item: 'y',
		item_name: 'Nettle Acorn',
		child_item_id: 18703,
		icon_id: 8684,
		item_desc: ' ',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Movement Speed',
				Value: '+4%',
			},
		],
		item_short_desc: 'Powerful Acorn',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/nettle-acorn.jpg',
	},
	{
		id: 18270,
		item_id: 23136,
		active_item: 'y',
		item_name: "Nimble Bancroft's Talon",
		child_item_id: 8551,
		icon_id: 11028,
		item_desc:
			'PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 100 power and 20% Lifesteal at 25% Health. <n>GLYPH - For every 40 Magical Power you have, you gain 2% Attack Speed. ',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+100',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
		],
		item_short_desc: 'Convert Magical Power to Attack Speed',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/nimble-bancrofts-talon.jpg',
	},
	{
		id: 2549,
		item_id: 21502,
		active_item: 'y',
		item_name: 'Nimble Rod of Tahuti',
		child_item_id: 7600,
		icon_id: 10330,
		item_desc:
			'PASSIVE - Basic Attacks and Abilities gain 25% additional Magical Power against targets below 50% Health. <n>GLYPH - For every 40 Magical Power you gain a stack of 2% Attack Speed (max. 20 Stacks).',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+120',
			},
			{
				Description: 'MP5',
				Value: '+30',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Convert Magical Power to Attack Speed',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/nimble-rod-of-tahuti.jpg',
	},
	{
		id: 126,
		item_id: 18179,
		active_item: 'y',
		item_name: 'Obsidian Shard',
		child_item_id: 9850,
		icon_id: 2834,
		item_desc:
			'PASSIVE - Your first ability cast gains 10% Magical Penetration. This can only occur once every 10 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+100',
			},
			{
				Description: 'Magical Penetration',
				Value: '+20%',
			},
		],
		item_short_desc: 'Strong Magical Penetration against Tanks',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/obsidian-shard.jpg',
	},
	{
		id: 168,
		item_id: 10482,
		active_item: 'y',
		item_name: "Odysseus' Bow",
		child_item_id: 10687,
		icon_id: 3105,
		item_desc:
			'PASSIVE - Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 15 damage +60% of your total Basic Attack Power.',
		menuitems: [
			{
				Description: 'Attack Speed',
				Value: '+30%',
			},
		],
		item_short_desc: 'Every four basic attacks trigger chain lightning',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/odysseus-bow.jpg',
	},
	{
		id: 199,
		item_id: 12679,
		active_item: 'y',
		item_name: "Oni Hunter's Garb",
		child_item_id: 12676,
		icon_id: 4316,
		item_desc:
			'PASSIVE - For each enemy God within 55 units of you, you gain a stack of 3% damage mitigation. This caps at 3 stacks.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Magical Protection',
				Value: '+60',
			},
			{
				Description: 'MP5',
				Value: '+30',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Gives defensive bonuses for fighting near multiple enemies',
		item_tier: 3,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/oni-hunters-garb.jpg',
	},
	{
		id: 300,
		item_id: 19650,
		active_item: 'y',
		item_name: 'Ornate Arrow',
		child_item_id: 19494,
		icon_id: 9177,
		item_desc:
			'PASSIVE - All sources of gold gain are increased by 5%. For every 100 gold you have gain 1.25% Attack Speed and 1% Physical Critical Strike Chance, up to a maximum of 20 stacks.',
		menuitems: [
			{
				Description: 'Basic Attack Damage',
				Value: '+60',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Attack Speed',
				Value: '+10%',
			},
			{
				Description: 'Physical Critical Strike Chance',
				Value: '+5%',
			},
		],
		item_short_desc:
			'Accrue gold, allowing your horde of treasure to empower you',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/ornate-arrow.jpg',
	},
	{
		id: 311,
		item_id: 19509,
		active_item: 'y',
		item_name: 'Pendulum of Ages',
		child_item_id: 19508,
		icon_id: 9215,
		item_desc:
			'PASSIVE - This item grants 4 MP5 per 10% of your missing Mana. This item grants 10 Magical power per 10% of your available Mana.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+90',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc: 'More power the higher your Mana pool is.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/pendulum-of-ages.jpg',
	},
	{
		id: 18390,
		item_id: 22941,
		active_item: 'y',
		item_name: 'Perfected Rod of Tahuti',
		child_item_id: 7600,
		icon_id: 11026,
		item_desc:
			'PASSIVE - Basic Attacks and Abilities gain 25% additional Magical Power against targets below 50% Health. <n>GLYPH - Successfully damaging an enemy god with an ability applies a mark for 3s. Damaging them a second time with an ability consumes the mark and provides you 10% movement speed for 2s and reduces your ability cooldowns by 1.5s. Only one mark can be active at a time and cannot be applied for 8s after consuming a mark. ',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+135',
			},
			{
				Description: 'MP5',
				Value: '+30',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Combo enemies to refresh your cooldowns.',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/perfected-rod-of-tahuti.jpg',
	},
	{
		id: 2764,
		item_id: 21498,
		active_item: 'y',
		item_name: 'Persistent Teleport',
		child_item_id: 21580,
		icon_id: 10325,
		item_desc:
			'Using this item allows you to teleport to any allied structure or ward while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. Kills and assists on enemy gods reduces the cooldown by 10s. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Teleport cooldown reduced by kills and assists',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/persistent-teleport.jpg',
	},
	{
		id: 112,
		item_id: 9364,
		active_item: 'y',
		item_name: 'Pestilence',
		child_item_id: 9846,
		icon_id: 2558,
		item_desc:
			'AURA - Enemy gods within 55 units have their healing reduced by 25%. This does not stack with similar Auras.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+80',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
		],
		item_short_desc: 'Aura that reduces the healing of nearby enemies',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/pestilence.jpg',
	},
	{
		id: 2755,
		item_id: 21509,
		active_item: 'y',
		item_name: 'Phantom Shell',
		child_item_id: 21569,
		icon_id: 10362,
		item_desc:
			'Using this item applies a shield to yourself and allies within 35 units for 150 Health + 15 Health per God Level for 4 seconds. Additionally, all allies take 40% reduced damage from Basic Attacks while the shield is active. Using this item also allows you and allied gods to pass through players and player made objects. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Health shield, reduced damage taken, and passthrough',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/phantom-shell.jpg',
	},
	{
		id: 141,
		item_id: 7597,
		active_item: 'y',
		item_name: 'Polynomicon',
		child_item_id: 9859,
		icon_id: 2824,
		item_desc:
			'PASSIVE - Using an ability gives your next Basic Attack within the next 8 seconds +75% of your Magical Power as additional Magical Damage. The effect can only apply once every 2 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+95',
			},
			{
				Description: 'Mana',
				Value: '+300',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+12%',
			},
		],
		item_short_desc: 'Abilities increase damage on next Basic Attack',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/polynomicon.jpg',
	},
	{
		id: 248,
		item_id: 18194,
		active_item: 'y',
		item_name: 'Potion of Power',
		child_item_id: 0,
		icon_id: 1980,
		item_desc:
			'\r\nThis consumable increases your Physical Power by 40, Magical Power by 70 and Cooldown Reduction by 10% for 5 minutes or until you are killed. ',
		menuitems: [
			{
				Description: ' ',
				Value: '',
			},
			{
				Description: 'Unlocks at level 10',
				Value: '',
			},
		],
		item_short_desc: 'Increases Physical and Magical Power on use',
		item_tier: 1,
		item_price: 500,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/potion-of-power.jpg',
	},
	{
		id: 244,
		item_id: 17355,
		active_item: 'y',
		item_name: 'Pridwen',
		child_item_id: 17352,
		icon_id: 7724,
		item_desc:
			'PASSIVE - When your Ultimate ability has finished casting, you gain a Shield equal to 90% of your Protections from items and abilities for 5s. When destroyed, by timing out or being depleted, it explodes and deals Magical damage equal to 75% of the Shield’s initial Health and slows targets by 25% for 3s. This can only occur once every 45 seconds.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'On ultimate use, gain a defensive shield to punish attacks',
		item_tier: 3,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/pridwen.jpg',
	},
	{
		id: 333,
		item_id: 19697,
		active_item: 'y',
		item_name: 'Protector of the Jungle',
		child_item_id: 19694,
		icon_id: 9194,
		item_desc:
			'PASSIVE - While in the jungle you gain 15% Power and 12% Protections. ',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+70',
			},
			{
				Description: 'Magical Power',
				Value: '+100',
			},
			{
				Description: 'Physical Protection',
				Value: '+35',
			},
			{
				Description: 'Attack Speed',
				Value: '+35%',
			},
		],
		item_short_desc: 'Guard the jungle to gain immense power.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/protector-of-the-jungle.jpg',
	},
	{
		id: 18604,
		item_id: 23048,
		active_item: 'y',
		item_name: "Protector's Mask",
		child_item_id: 0,
		icon_id: 5305,
		item_desc:
			"PASSIVE - <font color='#F44242'>Decrease damage dealt by 6% + 0.25% per your god's level. <font color='#42F46E'>Decrease Damage Taken by 6% + 0.25% per your god's level. \nPASSIVE - Getting the assist for an enemy minion or jungle monster dying will provide 8 bonus gold and restore 15 health and 15 mana. If you are not within 30 units of an allied god for 20 seconds this passive is disabled until you are near an allied god again. <n>Can be upgraded at level 15.",
		menuitems: [
			{
				Description: 'Health',
				Value: '+125',
			},
			{
				Description: 'Mana',
				Value: '+100',
			},
		],
		item_short_desc: 'Trade damage for tankiness.',
		item_tier: 1,
		item_price: 650,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/protectors-mask.jpg',
	},
	{
		id: 233,
		item_id: 16394,
		active_item: 'y',
		item_name: "Protector's Mask",
		child_item_id: 16393,
		icon_id: 5305,
		item_desc: 'Passive - Only can be bought by Mages, Hunters, Assassins',
		menuitems: [
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
			{
				Description: 'Magical Protection',
				Value: '+15',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Health and Protections',
		item_tier: 2,
		item_price: 500,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/protectors-mask.jpg',
	},
	{
		id: 2662,
		item_id: 21572,
		active_item: 'y',
		item_name: 'Purification Beads',
		child_item_id: 18307,
		icon_id: 10310,
		item_desc:
			'Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Cooldown - 170s.',
		menuitems: [],
		item_short_desc: 'Removes crowd control effects',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/purification-beads.jpg',
	},
	{
		id: 255,
		item_id: 8879,
		active_item: 'y',
		item_name: 'Purification Beads',
		child_item_id: 18307,
		icon_id: 4301,
		item_desc:
			'Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Cooldown - 160s.',
		menuitems: [],
		item_short_desc: 'Removes Crowd Control Effects.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/purification-beads.jpg',
	},
	{
		id: 268,
		item_id: 14146,
		active_item: 'y',
		item_name: 'Purification Beads Upgrade',
		child_item_id: 8879,
		icon_id: 5109,
		item_desc:
			'Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Removes Crowd Control Effects.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/purification-beads-upgrade.jpg',
	},
	{
		id: 16,
		item_id: 7534,
		active_item: 'y',
		item_name: "Pythagorem's Piece",
		child_item_id: 7609,
		icon_id: 2825,
		item_desc:
			'AURA - Allied gods within 70 units have their Magical Lifesteal increased by 12% and their Magical Power increased by 30 or their Physical Lifesteal increased by 10% and their Physical Power increased by 20.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+40',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+12%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Power and Lifesteal Aura',
		item_tier: 3,
		item_price: 1200,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/pythagorems-piece.jpg',
	},
	{
		id: 11,
		item_id: 7593,
		active_item: 'y',
		item_name: "Qin's Sais",
		child_item_id: 7574,
		icon_id: 2802,
		item_desc:
			"PASSIVE - On Basic Attack hits, deal Physical Damage equal to 3% of the target's maximum Health. If the target has over 2000 Health, the bonus damage scales up. This effect reaches a maximum of 5% of the targets Maximum Health at 2750 Health.",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
		],
		item_short_desc: "Bonus damage based on target's maximum Health",
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/qins-sais.jpg',
	},
	{
		id: 61,
		item_id: 8546,
		active_item: 'y',
		item_name: 'Rage',
		child_item_id: 9813,
		icon_id: 2256,
		item_desc:
			'PASSIVE - Killing or getting an assist on an enemy god gives you 1 stack. Each stack provides 3% Critical Strike Chance. Stacks are permanent and stack up to 5 times.  ',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+30%',
			},
		],
		item_short_desc:
			'Earn Critical Strike Chance stacks from kills or assists',
		item_tier: 3,
		item_price: 1150,
		starting_item: 0,
		type: 'Item',
		item_icon: 'https://webcdn.hirezstudios.com/smite/item-icons/rage.jpg',
	},
	{
		id: 236,
		item_id: 14098,
		active_item: 'y',
		item_name: "Rangda's Mask",
		child_item_id: 16397,
		icon_id: 7069,
		item_desc:
			"Gain 5 stacks of <font color='#F44242'>Weakness. Each stack increases your damage taken by 10%. For each 55 Physical Power or 90 Magical Power from items, remove a stack of <font color='#F44242'>Weakness. When you remove a stack of <font color='#F44242'>Weakness  gain a stack of <font color='#42F46E'>Strength. For each stack of <font color='#42F46E'>Strength gain +3% damage dealt and 2% movement speed.",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+60',
			},
			{
				Description: 'Magical Power',
				Value: '+80',
			},
			{
				Description: 'HP5',
				Value: '+20',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Gain Damage, Sacrifice Defenses',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/rangdas-mask.jpg',
	},
	{
		id: 174,
		item_id: 12333,
		active_item: 'y',
		item_name: 'Relic',
		child_item_id: 0,
		icon_id: 4312,
		item_desc:
			'Relics provide special powers available to all gods. Your first Relic is free at Level 1 and your Second Relic is unlocked once you reach Level 12.',
		menuitems: [],
		item_short_desc: 'Relics provide special powers available to all gods.',
		item_tier: 1,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon: 'https://webcdn.hirezstudios.com/smite/item-icons/relic.jpg',
	},
	{
		id: 77,
		item_id: 13187,
		active_item: 'y',
		item_name: 'Relic Dagger',
		child_item_id: 8239,
		icon_id: 4673,
		item_desc: 'PASSIVE - Your relics receive 40s Cooldown Reduction',
		menuitems: [
			{
				Description: 'Health',
				Value: '+350',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+10%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'This item Reduces the cooldown of equipped Relics.',
		item_tier: 3,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/relic-dagger.jpg',
	},
	{
		id: 147,
		item_id: 9861,
		active_item: 'y',
		item_name: 'Restored Artifact',
		child_item_id: 9860,
		icon_id: 2843,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+60',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Magical Power and MP5',
		item_tier: 2,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/restored-artifact.jpg',
	},
	{
		id: 120,
		item_id: 18191,
		active_item: 'y',
		item_name: 'Ring of Hecate',
		child_item_id: 9848,
		icon_id: 8138,
		item_desc:
			'PASSIVE - Each successful basic attack applies a hex to enemies and empowers you, increasing your power by 5% and reducing the power of your opponent by 5% for 5s. (Max. 3 Stacks).',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+80',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+15%',
			},
		],
		item_short_desc: 'Attack Speed and Lifesteal',
		item_tier: 3,
		item_price: 1200,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/ring-of-hecate.jpg',
	},
	{
		id: 136,
		item_id: 9345,
		active_item: 'y',
		item_name: 'Rod of Asclepius',
		child_item_id: 9857,
		icon_id: 2542,
		item_desc:
			'AURA - Allied gods within 70 units have their Healing increased by 20%.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+90',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Magical Power and Increased Healing',
		item_tier: 3,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/rod-of-asclepius.jpg',
	},
	{
		id: 131,
		item_id: 9857,
		active_item: 'y',
		item_name: 'Rod of Healing',
		child_item_id: 9855,
		icon_id: 2872,
		item_desc:
			'AURA - Allied gods within 70 units have their Healing increased by 10%.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+45',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Movement Speed',
				Value: '+5%',
			},
		],
		item_short_desc: 'Magical Power and Increased Healing ',
		item_tier: 2,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/rod-of-healing.jpg',
	},
	{
		id: 148,
		item_id: 7600,
		active_item: 'y',
		item_name: 'Rod of Tahuti',
		child_item_id: 9861,
		icon_id: 10329,
		item_desc:
			'PASSIVE - Basic Attacks and Abilities gain 25% additional Magical Power against targets below 50% Health.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+135',
			},
			{
				Description: 'MP5',
				Value: '+30',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Increased damage against low health Gods',
		item_tier: 3,
		item_price: 1600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/rod-of-tahuti.jpg',
	},
	{
		id: 18608,
		item_id: 23149,
		active_item: 'y',
		item_name: 'Rose Spike Earrings',
		child_item_id: 23147,
		icon_id: 11037,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Health and Regen',
		item_tier: 2,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/rose-spike-earrings.jpg',
	},
	{
		id: 86,
		item_id: 9833,
		active_item: 'y',
		item_name: 'Round Shield',
		child_item_id: 0,
		icon_id: 2907,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+7',
			},
			{
				Description: 'Physical Protection',
				Value: '+5',
			},
		],
		item_short_desc: 'Physical Power and Physical Protection.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/round-shield.jpg',
	},
	{
		id: 83,
		item_id: 8959,
		active_item: 'y',
		item_name: 'Runeforged Hammer',
		child_item_id: 9831,
		icon_id: 2897,
		item_desc:
			'PASSIVE - Enemies take 20% increased damage from you if they are affected by Crowd Control. Does not include Knockbacks, Blinds, or Grabs.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'HP5',
				Value: '+25',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc:
			'Deal more damage to any target afflicted by Crowd Control',
		item_tier: 3,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/runeforged-hammer.jpg',
	},
	{
		id: 155,
		item_id: 9111,
		active_item: 'y',
		item_name: 'Runic Shield',
		child_item_id: 9835,
		icon_id: 2903,
		item_desc:
			'AURA - Enemy gods within 55 units have their Magical Power reduced by 40.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+50',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
		],
		item_short_desc: 'Magical Power debuff aura.',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/runic-shield.jpg',
	},
	{
		id: 315,
		item_id: 19600,
		active_item: 'y',
		item_name: 'Sacrificial Shroud',
		child_item_id: 19510,
		icon_id: 9219,
		item_desc:
			"PASSIVE - Your abilities deal 15% more damage, but cost 5% of your Maximum Health. If the cost would kill you, you instead don't pay the cost.",
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+115',
			},
			{
				Description: 'Physical Protection',
				Value: '+20',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+15%',
			},
		],
		item_short_desc: 'Abilities do more damage...for a price.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sacrificial-shroud.jpg',
	},
	{
		id: 207,
		item_id: 14072,
		active_item: 'y',
		item_name: "Sage's Stone",
		child_item_id: 14071,
		icon_id: 5047,
		item_desc: '',
		menuitems: [
			{
				Description: 'Health',
				Value: '+50',
			},
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
			{
				Description: 'Magical Protection',
				Value: '+15',
			},
		],
		item_short_desc: 'Magical Power and Magical Protection.',
		item_tier: 2,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sages-stone.jpg',
	},
	{
		id: 310,
		item_id: 19508,
		active_item: 'y',
		item_name: 'Sands of Time',
		child_item_id: 0,
		icon_id: 9214,
		item_desc:
			'PASSIVE - This item grants 2 MP5 per 10% of your missing Mana. Your damaging abilities deal an extra 10 true damage to minions. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+25',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Cooldown Reduction and MP5',
		item_tier: 1,
		item_price: 700,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sands-of-time.jpg',
	},
	{
		id: 201,
		item_id: 13668,
		active_item: 'y',
		item_name: 'Scare Tactics',
		child_item_id: 0,
		icon_id: 4048,
		item_desc: 'Hit an enemy with this!',
		menuitems: [],
		item_short_desc: 'Hit an enemy with this!',
		item_tier: 1,
		item_price: 0,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/scare-tactics.jpg',
	},
	{
		id: 2745,
		item_id: 21476,
		active_item: 'y',
		item_name: 'Scorching Blink Rune',
		child_item_id: 21557,
		icon_id: 10354,
		item_desc:
			'Using this item will allow you to teleport up to 45 units away instantly, leaving behind a trail of wildfire that burns Enemies that pass through it for 20 (+ 4 per level) True Damage every 0.5s for the next 4s. Enemies are damaged for 1s after leaving the flames. This item can not be used if you have taken or dealt damage in the last 3s. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Teleporting creates a damaging trail of wildfire',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/scorching-blink-rune.jpg',
	},
	{
		id: 332,
		item_id: 19695,
		active_item: 'y',
		item_name: 'Seer of the Jungle',
		child_item_id: 19694,
		icon_id: 9195,
		item_desc:
			'PASSIVE - You deal 35% increased damage to Jungle Monsters and Jungle Bosses. Upon defeating a Large Jungle Monster or Jungle Boss, you gain the ability to see wards for 30s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+65',
			},
			{
				Description: 'Magical Power',
				Value: '+95',
			},
			{
				Description: 'Physical Protection',
				Value: '+35',
			},
			{
				Description: 'Attack Speed',
				Value: '+25%',
			},
		],
		item_short_desc: 'Gain the sight to see what is hidden.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/seer-of-the-jungle.jpg',
	},
	{
		id: 317,
		item_id: 19625,
		active_item: 'y',
		item_name: "Sentinel's Boon",
		child_item_id: 19609,
		icon_id: 9203,
		item_desc:
			'PASSIVE - Getting the assist when an enemy dies restores 4% of your Health and Mana. If you have the lowest gold on your team, the assists also provides 15 Bonus Gold.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+45',
			},
			{
				Description: 'Magical Protection',
				Value: '+45',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Gain more health, mana, and gold!',
		item_tier: 2,
		item_price: 1250,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sentinels-boon.jpg',
	},
	{
		id: 318,
		item_id: 19627,
		active_item: 'y',
		item_name: "Sentinel's Embrace",
		child_item_id: 19609,
		icon_id: 9204,
		item_desc:
			'AURA - You gain 6 GP5 if you have the lowest gold on your team. Evenly split 80 Physical and Magical Protection among all allied gods within 55 units and yourself. If you are alone you only gain 40 Physical and Magical Protections.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
		],
		item_short_desc: 'Share protections with nearby allies.',
		item_tier: 2,
		item_price: 1250,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sentinels-embrace.jpg',
	},
	{
		id: 316,
		item_id: 19609,
		active_item: 'y',
		item_name: "Sentinel's Gift",
		child_item_id: 0,
		icon_id: 9202,
		item_desc:
			'PASSIVE - Getting the assist for an enemy minion or jungle monster dying will provide 8 Bonus gold and restore 12 Health and 8 Mana. If you are not within 30 units of an allied god for 20 seconds this passive is disabled until you are near an allied god again. Can be upgraded at level 15.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
			{
				Description: 'Magical Protection',
				Value: '+10',
			},
			{
				Description: 'Health',
				Value: '+75',
			},
			{
				Description: 'MP5',
				Value: '+7',
			},
		],
		item_short_desc: 'Assists provide health, mana, and gold.',
		item_tier: 1,
		item_price: 550,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sentinels-gift.jpg',
	},
	{
		id: 43,
		item_id: 9005,
		active_item: 'y',
		item_name: 'Sentry Ward',
		child_item_id: 0,
		icon_id: 1993,
		item_desc:
			"This is a ward that allows you to see enemy movements and other wards within 45 units. It does respect line of sight and can't see through walls or stealth. It remains for 3 minutes or until killed. Can only carry one at a time.",
		menuitems: [],
		item_short_desc: 'Sees enemy movements and wards.',
		item_tier: 1,
		item_price: 120,
		starting_item: 0,
		type: 'Consumable',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sentry-ward.jpg',
	},
	{
		id: 195,
		item_id: 19003,
		active_item: 'y',
		item_name: 'Serrated Edge',
		child_item_id: 12672,
		icon_id: 8679,
		item_desc:
			'PASSIVE - For every non-ultimate ability on cooldown you gain a stack of Cruelty. Each stack provides 8 Physical Power and 3% Physical Lifesteal.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+10%',
			},
			{
				Description: 'Physical Penetration',
				Value: '+20%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc:
			'Bonus Power and Lifesteal when abilities are on cooldown',
		item_tier: 3,
		item_price: 1400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/serrated-edge.jpg',
	},
	{
		id: 189,
		item_id: 18905,
		active_item: 'y',
		item_name: 'Shadowsteel Shuriken',
		child_item_id: 12668,
		icon_id: 8680,
		item_desc:
			'PASSIVE - Enemies hit by your Critical Strikes have 40% reduced healing for 5s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Attack Speed',
				Value: '+25%',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+20%',
			},
		],
		item_short_desc: "Critical Hits reduce Enemy's Healing",
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shadowsteel-shuriken.jpg',
	},
	{
		id: 181,
		item_id: 9112,
		active_item: 'y',
		item_name: 'Shield of Regrowth',
		child_item_id: 9839,
		icon_id: 2904,
		item_desc:
			'PASSIVE - After healing yourself from an ability, you gain 30% movement speed, 15 Physical Power, and 30 Magical Power for 4 seconds. This cannot occur more than once every 10 seconds.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'HP5',
				Value: '+15',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Provides a boost after healing.',
		item_tier: 3,
		item_price: 750,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shield-of-regrowth.jpg',
	},
	{
		id: 259,
		item_id: 11106,
		active_item: 'y',
		item_name: 'Shield of Thorns',
		child_item_id: 18307,
		icon_id: 5072,
		item_desc:
			'Using this item reflects 30% of all damage you take, before mitigations, for the next 5s, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Reflect 40% of all damage',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shield-of-thorns.jpg',
	},
	{
		id: 2663,
		item_id: 21575,
		active_item: 'y',
		item_name: 'Shield of Thorns',
		child_item_id: 18307,
		icon_id: 10314,
		item_desc:
			'Using this item reflects 30% of all damage you take, before mitigations, for the next 5 seconds, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. While this is active enemies can only lifesteal from you for 75% of their total lifesteal. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Reflect damage taken',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shield-of-thorns.jpg',
	},
	{
		id: 278,
		item_id: 14158,
		active_item: 'y',
		item_name: 'Shield of Thorns Upgrade',
		child_item_id: 11106,
		icon_id: 5073,
		item_desc:
			'Using this item reflects 30% of all damage you take, before mitigations, for the next 5 seconds, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. While this is active enemies can only lifesteal from you for 50% of their total lifesteal. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Reflect 40% of all damage',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shield-of-thorns-upgrade.jpg',
	},
	{
		id: 89,
		item_id: 8549,
		active_item: 'y',
		item_name: "Shifter's Shield",
		child_item_id: 8566,
		icon_id: 2254,
		item_desc:
			'PASSIVE - While over 75% Health, you gain +25 Physical Power. While under 75% Health, you gain +40 Protections.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Physical Protection',
				Value: '+25',
			},
		],
		item_short_desc:
			'Provides Physical Power or Protections based on missing Health',
		item_tier: 3,
		item_price: 1200,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shifters-shield.jpg',
	},
	{
		id: 81,
		item_id: 14083,
		active_item: 'y',
		item_name: 'Shillelagh',
		child_item_id: 9830,
		icon_id: 5048,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Mana',
				Value: '+100',
			},
		],
		item_short_desc: 'Health and Physical Power.',
		item_tier: 2,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shillelagh.jpg',
	},
	{
		id: 200,
		item_id: 14178,
		active_item: 'y',
		item_name: "Shogun's Kusari",
		child_item_id: 12676,
		icon_id: 5049,
		item_desc:
			'AURA - Allied gods within 70 units have their Attack Speed increased by 30%.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+50',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Attack Speed Aura',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shoguns-kusari.jpg',
	},
	{
		id: 165,
		item_id: 10662,
		active_item: 'y',
		item_name: 'Short Bow',
		child_item_id: 0,
		icon_id: 3283,
		item_desc: null,
		menuitems: [
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
		],
		item_short_desc: 'Increases Attack Speed.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/short-bow.jpg',
	},
	{
		id: 59,
		item_id: 9813,
		active_item: 'y',
		item_name: 'Short Sword',
		child_item_id: 9812,
		icon_id: 2854,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
		],
		item_short_desc: 'Physical Power and Critical Chance.',
		item_tier: 2,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/short-sword.jpg',
	},
	{
		id: 185,
		item_id: 12667,
		active_item: 'y',
		item_name: 'Shuriken',
		child_item_id: 0,
		icon_id: 4321,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+7',
			},
			{
				Description: 'Attack Speed',
				Value: '+5%',
			},
		],
		item_short_desc: 'Critical Strike and Attack Speed.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/shuriken.jpg',
	},
	{
		id: 335,
		item_id: 19752,
		active_item: 'y',
		item_name: 'Sigil of The Old Guard',
		child_item_id: 19751,
		icon_id: 9191,
		item_desc:
			'PASSIVE - You gain 5% Damage Mitigation. Whenever you are hit by an ability you gain a stack of Rebuke, providing an additional 4% Damage Mitigation for 8s. This occurs only once per ability cast. This can stack up to three times. ',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Physical Protection',
				Value: '+45',
			},
			{
				Description: 'Magical Protection',
				Value: '+75',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
		],
		item_short_desc: 'Stalwart against abilities.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sigil-of-the-old-guard.jpg',
	},
	{
		id: 94,
		item_id: 9838,
		active_item: 'y',
		item_name: 'Silver Breastplate',
		child_item_id: 9837,
		icon_id: 2875,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+35',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Physical Protection and MP5.',
		item_tier: 2,
		item_price: 450,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/silver-breastplate.jpg',
	},
	{
		id: 110,
		item_id: 9846,
		active_item: 'y',
		item_name: 'Silver Talisman',
		child_item_id: 9844,
		icon_id: 2883,
		item_desc: '',
		menuitems: [
			{
				Description: 'Health',
				Value: '+125',
			},
			{
				Description: 'Magical Protection',
				Value: '+45',
			},
		],
		item_short_desc: 'Health and Magical Protection.',
		item_tier: 2,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/silver-talisman.jpg',
	},
	{
		id: 170,
		item_id: 14084,
		active_item: 'y',
		item_name: 'Silverbranch Bow',
		child_item_id: 14848,
		icon_id: 5045,
		item_desc:
			'PASSIVE - For each 0.02 Attack Speed you go over 2.5 Attack Speed, you gain 2 Physical Power.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Attack Speed',
				Value: '+30%',
			},
			{
				Description: 'Physical Penetration',
				Value: '+20%',
			},
		],
		item_short_desc: 'Bonus Power when capped on Attack Speed',
		item_tier: 3,
		item_price: 1200,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/silverbranch-bow.jpg',
	},
	{
		id: 130,
		item_id: 9856,
		active_item: 'y',
		item_name: "Sorcerer's Staff",
		child_item_id: 9855,
		icon_id: 6635,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+45',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Mana',
				Value: '+100',
			},
		],
		item_short_desc: 'Magical Power and Health',
		item_tier: 2,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sorcerers-staff.jpg',
	},
	{
		id: 67,
		item_id: 7539,
		active_item: 'y',
		item_name: 'Soul Eater',
		child_item_id: 9827,
		icon_id: 2847,
		item_desc:
			'PASSIVE - Your abilities heal you for 5% of damage dealt. Each time anything dies within 80 units you gain a stack. Gods, Large Jungle monsters and Bosses provide 5 stacks. At 75 Stacks Soul Eater Evolves, gaining 15 Physical Power, 5% Physical Lifesteal, and causing abilities to heal you for 25% of damage dealt.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+10%',
			},
			{
				Description: 'Physical Penetration',
				Value: '+10%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Cooldown Reduction and Lifesteal',
		item_tier: 3,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/soul-eater.jpg',
	},
	{
		id: 19,
		item_id: 15582,
		active_item: 'y',
		item_name: 'Soul Gem',
		child_item_id: 7609,
		icon_id: 6633,
		item_desc:
			'PASSIVE - On successful hit of an Ability you gain 1 stack. At 4 Stacks your next Ability that damages an enemy God will deal bonus damage equal to 25% of your Magical power to each God hit, and will heal yourself and allies within 20 units for 30% of your Magical Power and will consume the 4 stacks.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+80',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+12%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Build stacks to get bonus damage and healing',
		item_tier: 3,
		item_price: 1200,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/soul-gem.jpg',
	},
	{
		id: 142,
		item_id: 9128,
		active_item: 'y',
		item_name: 'Soul Reaver',
		child_item_id: 9859,
		icon_id: 2908,
		item_desc:
			"PASSIVE - Your abilities deal an additional 2% of the target's maximum Health as Magical Damage. If the target has over 2000 Health, your ability bonus damage scales up. This effect reaches a maximum of 9% Maximum Health damage at 2750 Health. Subsequent hits on the same target do half the bonus damage for the next 3s.",
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+95',
			},
			{
				Description: 'Mana',
				Value: '+300',
			},
		],
		item_short_desc:
			'Abilities deal bonus damage based on targets maximum health',
		item_tier: 3,
		item_price: 1300,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/soul-reaver.jpg',
	},
	{
		id: 3,
		item_id: 7528,
		active_item: 'y',
		item_name: 'Sovereignty',
		child_item_id: 7527,
		icon_id: 2864,
		item_desc:
			'AURA - Allied gods within 70 units have their Physical Protections increased by 15 and their HP5 increased by 35.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Physical Protection',
				Value: '+40',
			},
		],
		item_short_desc: 'Physical Protection Aura',
		item_tier: 3,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sovereignty.jpg',
	},
	{
		id: 338,
		item_id: 19749,
		active_item: 'y',
		item_name: 'Spartan Flag',
		child_item_id: 20698,
		icon_id: 9207,
		item_desc:
			'PASSIVE - When you damage an enemy god you call down a Spartan Flag at your location, providing 10% increased Power to allies standing in the radius. Lasts for 10s, can only occur once every 10s. ',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Magical Power',
				Value: '+65',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Mark an area for attack! Charge!',
		item_tier: 2,
		item_price: 1250,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spartan-flag.jpg',
	},
	{
		id: 125,
		item_id: 12670,
		active_item: 'y',
		item_name: 'Spear of Desolation',
		child_item_id: 9851,
		icon_id: 4327,
		item_desc:
			'PASSIVE - If you receive a kill or assist on an Enemy God all of your non-ultimate cooldowns are reduced by 2 seconds and your ultimate cooldown is reduced by 6 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+110',
			},
			{
				Description: 'Magical Penetration',
				Value: '+12',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Reduces ability cooldowns after a kill or assist',
		item_tier: 3,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spear-of-desolation.jpg',
	},
	{
		id: 127,
		item_id: 18180,
		active_item: 'y',
		item_name: 'Spear of the Magus',
		child_item_id: 9851,
		icon_id: 2835,
		item_desc:
			'PASSIVE - Whenever you damage an enemy god with an ability you mark them to take 7.5% increased damage from all sources. This effect lasts for 7s and can only occur once every 15s.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+110',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+12%',
			},
			{
				Description: 'Magical Penetration',
				Value: '+12',
			},
		],
		item_short_desc: 'Mark a target to take increased damage',
		item_tier: 3,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spear-of-the-magus.jpg',
	},
	{
		id: 97,
		item_id: 12664,
		active_item: 'y',
		item_name: 'Spectral Armor',
		child_item_id: 9838,
		icon_id: 4324,
		item_desc:
			'PASSIVE - Physical Critical Strikes bonus damage taken is decreased by 40%.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+60',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Mana',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Reduces damage from Physical Critical Strikes',
		item_tier: 3,
		item_price: 1050,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spectral-armor.jpg',
	},
	{
		id: 122,
		item_id: 9850,
		active_item: 'y',
		item_name: 'Spell Focus',
		child_item_id: 9849,
		icon_id: 2836,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+55',
			},
			{
				Description: 'Magical Penetration',
				Value: '+5%',
			},
		],
		item_short_desc: 'Magical Power',
		item_tier: 2,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spell-focus.jpg',
	},
	{
		id: 138,
		item_id: 9858,
		active_item: 'y',
		item_name: 'Spellbook',
		child_item_id: 0,
		icon_id: 6628,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Mana',
				Value: '+75',
			},
		],
		item_short_desc: 'Magical Power and Mana.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spellbook.jpg',
	},
	{
		id: 197,
		item_id: 12676,
		active_item: 'y',
		item_name: 'Spellbound Kusari',
		child_item_id: 12675,
		icon_id: 4314,
		item_desc: '',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+40',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Magical Protection and MP5.',
		item_tier: 2,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spellbound-kusari.jpg',
	},
	{
		id: 18611,
		item_id: 23102,
		active_item: 'y',
		item_name: "Sphinx's Bauble",
		child_item_id: 23154,
		icon_id: 11039,
		item_desc:
			'PASSIVE - Your Cooldown Reduction cap is increased from 40% to 50%. Your Physical and Magical Protections are reduced by 15%, and your healing output is decreased by 20%.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+45',
			},
			{
				Description: 'Magical Power',
				Value: '+70',
			},
			{
				Description: 'MP5',
				Value: '+20',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc:
			'Overcap your Cooldown Reduction at the cost of damage',
		item_tier: 3,
		item_price: 1300,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sphinxs-bauble.jpg',
	},
	{
		id: 64,
		item_id: 9825,
		active_item: 'y',
		item_name: 'Spiked Gauntlet',
		child_item_id: 0,
		icon_id: 2850,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+5',
			},
			{
				Description: 'Physical Lifesteal',
				Value: '+5%',
			},
		],
		item_short_desc: 'Increases Physical Lifesteal',
		item_tier: 1,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spiked-gauntlet.jpg',
	},
	{
		id: 88,
		item_id: 9834,
		active_item: 'y',
		item_name: 'Spiked Shield',
		child_item_id: 9833,
		icon_id: 2905,
		item_desc:
			'AURA - Reduces the Physical Protection of enemies within 55 units by 5%.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+50',
			},
		],
		item_short_desc: 'Physical Power and Physical Protection.',
		item_tier: 2,
		item_price: 750,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spiked-shield.jpg',
	},
	{
		id: 106,
		item_id: 9361,
		active_item: 'y',
		item_name: 'Spirit Robe',
		child_item_id: 9360,
		icon_id: 2555,
		item_desc:
			'PASSIVE - You gain an additional 15% Damage Mitigation for 3s whenever you are hit with a hard Crowd Control Effect or Root.  This can only occur once every 15 seconds.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+40',
			},
			{
				Description: 'Magical Protection',
				Value: '+40',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Grants the owner Damage Mitigation when hit by a hard Crowd Control Effect.',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/spirit-robe.jpg',
	},
	{
		id: 247,
		item_id: 20694,
		active_item: 'y',
		item_name: 'Staff of Myrddin',
		child_item_id: 17353,
		icon_id: 7725,
		item_desc:
			"PASSIVE - When your ultimate ability has finished casting you gain Myrddin's Rage which provides 25% Increased Damage Dealt decaying over 8s. At the end of the 8s you lose Myrddin's Rage. This can only occur once every 45s.",
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+105',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'On ultimate use you deal massive damage.',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/staff-of-myrddin.jpg',
	},
	{
		id: 2,
		item_id: 7527,
		active_item: 'y',
		item_name: 'Steel Mail',
		child_item_id: 7526,
		icon_id: 2865,
		item_desc: '',
		menuitems: [
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Physical Protection',
				Value: '+20',
			},
		],
		item_short_desc: 'Physical Protection and Health.',
		item_tier: 2,
		item_price: 750,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/steel-mail.jpg',
	},
	{
		id: 192,
		item_id: 12673,
		active_item: 'y',
		item_name: 'Stone Cutting Sword',
		child_item_id: 12672,
		icon_id: 4320,
		item_desc:
			'PASSIVE - Melee Basic Attacks decreases enemy Physical protections by 7, and increase your physical protection by 5 for 3s (max. 2 Stacks).',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: "Basic Attacks reduce target's Physical Protection",
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/stone-cutting-sword.jpg',
	},
	{
		id: 208,
		item_id: 14175,
		active_item: 'y',
		item_name: 'Stone of Binding',
		child_item_id: 14071,
		icon_id: 5051,
		item_desc:
			'PASSIVE - Successfully hitting an enemy god with Crowd Control will place a debuff on the enemy, reducing their Magical and Physical Protections by 10 for 5s.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+25',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Magical Power and Protections item for CC heavy gods',
		item_tier: 2,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/stone-of-binding.jpg',
	},
	{
		id: 211,
		item_id: 20224,
		active_item: 'y',
		item_name: 'Stone of Fal',
		child_item_id: 14072,
		icon_id: 5052,
		item_desc:
			'PASSIVE - When you hit an enemy god with a basic attack you gain a stack of Fals Blessing giving you 2% damage mitigation per stack. At 3 stacks you gain double the damage mitigation and 20% CCR. This effect lasts for 10s.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+40',
			},
			{
				Description: 'Magical Protection ',
				Value: '+40',
			},
		],
		item_short_desc: 'Gain Damage Mitigation through Basic Attacks',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/stone-of-fal.jpg',
	},
	{
		id: 180,
		item_id: 7572,
		active_item: 'y',
		item_name: 'Stone of Gaia',
		child_item_id: 7571,
		icon_id: 2579,
		item_desc:
			'PASSIVE - If you are hit by a Knockup, Knockback, Pull, or Grab you gain 8% of your max Health over the next 5 seconds. This effect does not trigger on Vortexes. Can only occur once every 45s.\n\nPASSIVE - Regenerates 0.5% of your max health every second.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+400',
			},
			{
				Description: 'HP5',
				Value: '+25',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Grants bonus Regeneration after Knockup',
		item_tier: 3,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/stone-of-gaia.jpg',
	},
	{
		id: 302,
		item_id: 19512,
		active_item: 'y',
		item_name: 'Sundering Axe',
		child_item_id: 19496,
		icon_id: 9188,
		item_desc:
			'PASSIVE - Damaging an enemy god steals 2% (+2% of your Protection from items) of their Current Health away from your target and restores it to you. This effect can only occur once every 10s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Magical Power',
				Value: '+65',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
		],
		item_short_desc:
			'Steal a large amount of health from enemies during combat',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sundering-axe.jpg',
	},
	{
		id: 2762,
		item_id: 21481,
		active_item: 'y',
		item_name: 'Sundering Blast',
		child_item_id: 21578,
		icon_id: 10320,
		item_desc:
			'Fire a bolt that travels 70 units, stopping on the first Enemy God hit and splashing in a 20 unit radius, dealing 15% of their Current Health as True Damage and reducing any active shields by 75%. Targets hit take 7.5% increased damage for 5s, stacking 2 times. This relic has 2 charges. Cooldown - 110s.',
		menuitems: [],
		item_short_desc: 'Fire a true damage projectile in an AoE',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sundering-blast.jpg',
	},
	{
		id: 2763,
		item_id: 21482,
		active_item: 'y',
		item_name: 'Sundering Siphon',
		child_item_id: 21578,
		icon_id: 10321,
		item_desc:
			'Fire a bolt that travels 50 units, stopping on first god hit, reducing any active shields by 75%, and linking them to you. For the next 4s, they are dealt 5% of their Current Health as True Damage every second, and you receive half that amount as healing. Enemies can break the link if they move 60 units away from you. This relic has 2 charges. A second hit on the same target will just refresh the duration. Cooldown - 110s.',
		menuitems: [],
		item_short_desc:
			'Fires a projectile that steals health from enemy gods',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sundering-siphon.jpg',
	},
	{
		id: 267,
		item_id: 20695,
		active_item: 'y',
		item_name: 'Sundering Spear',
		child_item_id: 18307,
		icon_id: 5074,
		item_desc:
			'Fire a bolt that travels 70 units, stopping on first god hit dealing 7.5% of their Current Health as True Damage and reducing any active shields by 50%. Targets hit take 5% increased damage for 5s, stacking 2 times. This relic has 2 charges. Cooldown - 125s.',
		menuitems: [],
		item_short_desc: 'Fires Damage Increasing Projectile',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sundering-spear.jpg',
	},
	{
		id: 2664,
		item_id: 21577,
		active_item: 'y',
		item_name: 'Sundering Spear',
		child_item_id: 18307,
		icon_id: 10318,
		item_desc:
			'Fire a bolt that travels 70 units, stopping on first god hit dealing 7.5% of their Current Health as True Damage and reducing any active shields by 75%. Targets hit take 5% increased damage for 5s, stacking 2 times. This relic has 2 charges. Cooldown - 130s.',
		menuitems: [],
		item_short_desc: 'Fires damage increasing projectile',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sundering-spear.jpg',
	},
	{
		id: 284,
		item_id: 20696,
		active_item: 'y',
		item_name: 'Sundering Spear Upgrade',
		child_item_id: 20695,
		icon_id: 5075,
		item_desc:
			'Fire a bolt that travels 70 units, stopping on first god hit dealing 12.5% of their Current Health as True Damage and reducing any active shields in by 75%. Targets hit take 7% increased damage for 5s, stacking 2 times. This relic has 2 charges. Cooldown - 125s.',
		menuitems: [],
		item_short_desc: 'Fires True Damage Projectile',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/sundering-spear-upgrade.jpg',
	},
	{
		id: 323,
		item_id: 19643,
		active_item: 'y',
		item_name: 'Tainted Amulet',
		child_item_id: 19640,
		icon_id: 9183,
		item_desc:
			'PASSIVE - Enemy Gods that you hit have their healing taken reduced by 30% for 5s. You are healed for 100% of the healing reduced. ',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+30',
			},
			{
				Description: 'Magical Power',
				Value: '+50',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Magical Protection',
				Value: '+90',
			},
		],
		item_short_desc: 'Siphon healing from enemies your have hit.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/tainted-amulet.jpg',
	},
	{
		id: 324,
		item_id: 19645,
		active_item: 'y',
		item_name: 'Tainted Breastplate',
		child_item_id: 19640,
		icon_id: 9182,
		item_desc:
			'PASSIVE - Enemy gods that you hit have their healing taken reduced by 50% for 5s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Magical Power',
				Value: '+75',
			},
			{
				Description: 'Physical Protection',
				Value: '+80',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
		],
		item_short_desc: 'Hit an enemy to reduce their healing taken.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/tainted-breastplate.jpg',
	},
	{
		id: 322,
		item_id: 19640,
		active_item: 'y',
		item_name: 'Tainted Steel',
		child_item_id: 0,
		icon_id: 9181,
		item_desc:
			'PASSIVE - Enemy Gods that you hit have their healing taken reduced by 15% for 5s. You are healed for 100% of the healing reduced. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Magical Power',
				Value: '+25',
			},
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
			{
				Description: 'Magical Protection',
				Value: '+15',
			},
		],
		item_short_desc: 'Hit an enemy to steal their healing.',
		item_tier: 1,
		item_price: 600,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/tainted-steel.jpg',
	},
	{
		id: 109,
		item_id: 9844,
		active_item: 'y',
		item_name: 'Talisman',
		child_item_id: 0,
		icon_id: 2884,
		item_desc: null,
		menuitems: [
			{
				Description: 'Health',
				Value: '+75',
			},
			{
				Description: 'Magical Protection',
				Value: '+15',
			},
		],
		item_short_desc: 'Health and Magical Protection.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/talisman.jpg',
	},
	{
		id: 114,
		item_id: 15619,
		active_item: 'y',
		item_name: 'Talisman of Energy',
		child_item_id: 9846,
		icon_id: 5053,
		item_desc:
			'PASSIVE - Getting a kill or assist on enemies causes you and allies within 70 units to gain stacks of energy. Energy stacks provide 2% Movement Speed, 2% Attack Speed, and 10MP5 per stack. Lasts 10s and stacks up to 6 times.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+60',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
		],
		item_short_desc:
			'Kills and assists give benefits for self and nearby allies',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/talisman-of-energy.jpg',
	},
	{
		id: 15,
		item_id: 8574,
		active_item: 'y',
		item_name: 'Talon Trinket',
		child_item_id: 7610,
		icon_id: 2828,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+60',
			},
			{
				Description: 'Mana',
				Value: '+100',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+8%',
			},
		],
		item_short_desc: 'Magical Power and Magical Lifesteal.',
		item_tier: 2,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/talon-trinket.jpg',
	},
	{
		id: 2665,
		item_id: 21579,
		active_item: 'y',
		item_name: 'Teleport Fragment',
		child_item_id: 18307,
		icon_id: 10322,
		item_desc:
			'Using this item allows you to teleport to any allied structure while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. Cooldown - 200s.',
		menuitems: [],
		item_short_desc:
			'Teleport to an allied structure. Not interrupted by damage.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/teleport-fragment.jpg',
	},
	{
		id: 256,
		item_id: 9040,
		active_item: 'y',
		item_name: 'Teleport Glyph',
		child_item_id: 18307,
		icon_id: 5076,
		item_desc:
			'Using this item allows you to teleport to any allied structure while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. Cooldown - 200s.',
		menuitems: [],
		item_short_desc:
			'Teleport to an allied structure. Not interrupted by damage.',
		item_tier: 2,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/teleport-glyph.jpg',
	},
	{
		id: 277,
		item_id: 14157,
		active_item: 'y',
		item_name: 'Teleport Glyph Upgrade',
		child_item_id: 9040,
		icon_id: 5077,
		item_desc:
			'Using this item allows you to teleport to any allied structure or ward while Rooted in place. This effect is not interrupted by damage but is interrupted by hard Crowd Control. Cooldown - 200s.',
		menuitems: [],
		item_short_desc:
			'Teleport to an allied structure or ward. Not interrupted by damage.',
		item_tier: 3,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/teleport-glyph-upgrade.jpg',
	},
	{
		id: 118,
		item_id: 9351,
		active_item: 'y',
		item_name: 'Telkhines Ring',
		child_item_id: 9848,
		icon_id: 2830,
		item_desc:
			'PASSIVE - Your Basic Attacks deal bonus damage of 10 + 10% of your Magical Power. This effect does not hit structures.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+90',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
		],
		item_short_desc: 'Bonus Magical Basic Attack damage',
		item_tier: 3,
		item_price: 1400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/telkhines-ring.jpg',
	},
	{
		id: 2759,
		item_id: 21511,
		active_item: 'y',
		item_name: 'Temporal Beads',
		child_item_id: 21573,
		icon_id: 10313,
		item_desc:
			'Using this item removes Crowd Control Effects and makes you immune to new ones for 2s. Additionally, your active cooldowns are reduced by 3s on use. Cooldown - 140s.',
		menuitems: [],
		item_short_desc: 'Removes crowd control effects and reduces cooldown.',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/temporal-beads.jpg',
	},
	{
		id: 312,
		item_id: 19654,
		active_item: 'y',
		item_name: 'The Alternate Timeline',
		child_item_id: 19508,
		icon_id: 9216,
		item_desc:
			'PASSIVE - When you would die you instead find a timeline you are still alive, becoming CC Immune, Damage Immune, and unable to act. After 1.75s you are restored to 25% Health and Mana and can act again. This can only occur once every 6 minutes.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+70',
			},
			{
				Description: 'Physical Protection',
				Value: '+45',
			},
			{
				Description: 'Magical Protections',
				Value: '+45',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
		],
		item_short_desc: 'Jump to an alternate timeline upon death.',
		item_tier: 2,
		item_price: 1500,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/the-alternate-timeline.jpg',
	},
	{
		id: 31,
		item_id: 11111,
		active_item: 'y',
		item_name: 'The Crusher',
		child_item_id: 7828,
		icon_id: 3489,
		item_desc:
			'PASSIVE - Enemies hit by your damaging Abilities take an additional 20 Physical Damage + 20% of your Physical Power over 2s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+45',
			},
			{
				Description: 'Attack Speed',
				Value: '+10%',
			},
			{
				Description: 'Physical Penetration',
				Value: '+15',
			},
		],
		item_short_desc: 'Bonus damage on Abilities',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/the-crusher.jpg',
	},
	{
		id: 10,
		item_id: 7575,
		active_item: 'y',
		item_name: 'The Executioner',
		child_item_id: 7574,
		icon_id: 11046,
		item_desc:
			"PASSIVE - Basic Attacks against an enemy reduce your target's Physical Protection by 7% for 3 seconds (max. 4 Stacks).",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
		],
		item_short_desc: "Basic Attacks reduce target's Physical Protection",
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/the-executioner.jpg',
	},
	{
		id: 19017,
		item_id: 23135,
		active_item: 'y',
		item_name: 'The Ferocious Executioner',
		child_item_id: 7575,
		icon_id: 11030,
		item_desc:
			"PASSIVE - Basic Attacks against an enemy reduce your target's Physical Protection by 7% for 3 seconds (max. 4 Stacks). GLYPH - Your next basic attack marks an enemy god for 8s. If you hit the marked enemy or the marked enemy hits you with a basic attack or ability, gain 1 stack. Each stack provides 2% increased damage towards the marked enemy, stacking up to 10 times. This effect can only occur every 30s.",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
		],
		item_short_desc: 'Mark an enemy god to deal more damage',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/the-ferocious-executioner.jpg',
	},
	{
		id: 18236,
		item_id: 22960,
		active_item: 'y',
		item_name: 'The Heavy Executioner',
		child_item_id: 7575,
		icon_id: 11031,
		item_desc:
			"<n>GLYPH - Basic Attacks against an enemy reduce your target's Physical Protection by 17.5%  for 3 seconds (max. 2 Stacks). Your Attack Speed cannot exceed 1.75. ",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Attack Speed',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Shred more protections faster, but slow your Attack Speed',
		item_tier: 4,
		item_price: 600,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/the-heavy-executioner.jpg',
	},
	{
		id: 84,
		item_id: 12677,
		active_item: 'y',
		item_name: 'The Sledge',
		child_item_id: 14083,
		icon_id: 8678,
		item_desc:
			'PASSIVE - For each enemy god within 55 units of you, you gain a stacking buff that provides 8 Protections. Stacks up to 3 times.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Mana',
				Value: '+150',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+30%',
			},
		],
		item_short_desc: 'Gain Protections when near enemy Gods',
		item_tier: 3,
		item_price: 1000,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/the-sledge.jpg',
	},
	{
		id: 291,
		item_id: 18709,
		active_item: 'y',
		item_name: 'Thickbark Acorn',
		child_item_id: 18704,
		icon_id: 8686,
		item_desc:
			'PASSIVE: When Ratatoskr deals damage with an ability he restores 3% of his Maximum Health. Flurry now provides protections equal to the protections shred from enemy gods. Flurry gains an additional charge.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+35',
			},
			{
				Description: 'Movement Speed',
				Value: '+6%',
			},
			{
				Description: 'Protections',
				Value: '+10%',
			},
		],
		item_short_desc: 'Flurry becomes empowered.',
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/thickbark-acorn.jpg',
	},
	{
		id: 289,
		item_id: 18707,
		active_item: 'y',
		item_name: 'Thistlethorn Acorn',
		child_item_id: 18705,
		icon_id: 8688,
		item_desc:
			"PASSIVE: Enemies hit by Acorn Blast are debuffed, taking 5% additional damage from Ratatoskr's abilities, stacking up to 3 times. Acorn Blast now fires 5 Acorns.",
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+50',
			},
			{
				Description: 'Movement Speed',
				Value: '+6%',
			},
		],
		item_short_desc: 'Acorn Blast becomes empowered.',
		item_tier: 3,
		item_price: 1350,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/thistlethorn-acorn.jpg',
	},
	{
		id: 2760,
		item_id: 21495,
		active_item: 'y',
		item_name: 'Thorns of Overgrowth',
		child_item_id: 21576,
		icon_id: 10316,
		item_desc:
			'Using this item reflects 25% of all damage you take, before mitigations, for the next 5 seconds, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. While this is active enemies can only lifesteal from you for 50% of their total lifesteal. Additionally, you gain a stack of 5% Movement Speed and Attack Speed for all Enemy Gods within a 70 unit radius. Cooldown - 120s.',
		menuitems: [],
		item_short_desc:
			'Gain Movement and Attack Speed while close to enemy gods',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/thorns-of-overgrowth.jpg',
	},
	{
		id: 2761,
		item_id: 21496,
		active_item: 'y',
		item_name: 'Thorns of Sapping Strength',
		child_item_id: 21576,
		icon_id: 10317,
		item_desc:
			'Using this item reflects 35% of all damage you take, before mitigations, for the next 3 seconds, back to its owner as Magical Damage. If you are dealt 120 * your level damage while this effect is active, the effect will end early. While this is active enemies can only lifesteal from you for 75% of their total lifesteal. Each basic attack from enemy gods reduces the cooldown of this item by 0.5s. Cooldown - 80s.',
		menuitems: [],
		item_short_desc: 'Low cooldown, high reflect damage',
		item_tier: 4,
		item_price: 500,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/thorns-of-sapping-strength.jpg',
	},
	{
		id: 191,
		item_id: 12672,
		active_item: 'y',
		item_name: 'Thousand Fold Blade',
		child_item_id: 12671,
		icon_id: 4318,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Movement Speed',
				Value: '+5%',
			},
		],
		item_short_desc: 'Physical Power and Movement Speed',
		item_tier: 2,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/thousand-fold-blade.jpg',
	},
	{
		id: 13,
		item_id: 7610,
		active_item: 'y',
		item_name: 'Tiny Trinket',
		child_item_id: 0,
		icon_id: 2829,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+6%',
			},
		],
		item_short_desc: 'Magical Power and Magical Lifesteal.',
		item_tier: 1,
		item_price: 550,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/tiny-trinket.jpg',
	},
	{
		id: 28,
		item_id: 7523,
		active_item: 'y',
		item_name: "Titan's Bane",
		child_item_id: 7522,
		icon_id: 2885,
		item_desc:
			'PASSIVE - Your first ability cast gains 20% Physical Penetration. This can only occur once every 6 seconds.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+55',
			},
			{
				Description: 'Physical Penetration',
				Value: '+20%',
			},
		],
		item_short_desc: 'Bonus Physical Penetration on abilities',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/titans-bane.jpg',
	},
	{
		id: 87,
		item_id: 8566,
		active_item: 'y',
		item_name: 'Tower Shield',
		child_item_id: 9833,
		icon_id: 2938,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Physical Protection',
				Value: '+15',
			},
		],
		item_short_desc: 'Physical Power and Physical Protection.',
		item_tier: 2,
		item_price: 500,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/tower-shield.jpg',
	},
	{
		id: 78,
		item_id: 14846,
		active_item: 'y',
		item_name: 'Toxic Blade',
		child_item_id: 18190,
		icon_id: 5454,
		item_desc:
			'PASSIVE - Enemies hit by your basic attacks gain 20% reduced healing, stacking up to 3 times and lasting 5s.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Penetration',
				Value: '+15',
			},
			{
				Description: 'Attack Speed',
				Value: '+30%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Basic Attack Anti-Heal',
		item_tier: 3,
		item_price: 950,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/toxic-blade.jpg',
	},
	{
		id: 35,
		item_id: 8547,
		active_item: 'y',
		item_name: 'Transcendence',
		child_item_id: 8560,
		icon_id: 6651,
		item_desc:
			'PASSIVE - You permanently gain 15 Mana per Stack, and receive 5 Stacks for a god kill, and 1 Stack for a minion kill (max. 50 stacks). 3% of your Mana is converted to Physical Power. At 50 stacks this item Evolves, gaining 10% Cooldown Reduction.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+40',
			},
			{
				Description: 'Mana',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc:
			'Gain Stacks of Mana from kills and converts Mana to Physical Power',
		item_tier: 3,
		item_price: 1400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/transcendence.jpg',
	},
	{
		id: 18,
		item_id: 15579,
		active_item: 'y',
		item_name: "Typhon's Fang",
		child_item_id: 8574,
		icon_id: 6639,
		item_desc:
			'PASSIVE - Your Healing obtained from Magical Lifesteal is increased by 25%. Your Magical power is increased by twice the amount of Magical Lifesteal you have.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+70',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+15%',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Increased Healing from Magical Lifesteal',
		item_tier: 3,
		item_price: 1400,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/typhons-fang.jpg',
	},
	{
		id: 164,
		item_id: 18199,
		active_item: 'y',
		item_name: 'Tyrannical Plate Helm',
		child_item_id: 10605,
		icon_id: 7601,
		item_desc:
			'AURA - Ally lane minions within 70 units gain 25% Health and Attack Speed. Whenever an ally lane minion dies within 70 units of you, gain 5 power per stack, max 6 stacks for 15 seconds.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+70',
			},
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Magical Power, Physical Protection and Minion empowerment',
		item_tier: 3,
		item_price: 800,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/tyrannical-plate-helm.jpg',
	},
	{
		id: 129,
		item_id: 9855,
		active_item: 'y',
		item_name: 'Uncommon Staff',
		child_item_id: 0,
		icon_id: 6634,
		item_desc: null,
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+15',
			},
			{
				Description: 'Health',
				Value: '+75',
			},
		],
		item_short_desc: 'Magical Power and Health.',
		item_tier: 1,
		item_price: 650,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/uncommon-staff.jpg',
	},
	{
		id: 313,
		item_id: 19510,
		active_item: 'y',
		item_name: 'Vampiric Shroud',
		child_item_id: 0,
		icon_id: 9217,
		item_desc:
			'PASSIVE - Damaging any enemy with an ability restores 4 health and 6 mana. Can only trigger once per target per ability. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+5',
			},
			{
				Description: 'Health',
				Value: '+75',
			},
			{
				Description: 'Magical Lifesteal',
				Value: '+5%',
			},
		],
		item_short_desc: 'Bonus Sustain from hitting Abilities',
		item_tier: 1,
		item_price: 700,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/vampiric-shroud.jpg',
	},
	{
		id: 250,
		item_id: 18307,
		active_item: 'y',
		item_name: 'Vision Shard',
		child_item_id: 0,
		icon_id: 8136,
		item_desc:
			'Using this item places a ward that lasts 60 seconds. Vision Shard can be upgraded to a new relic once you reach Level 12. Cooldown - 120s.',
		menuitems: [],
		item_short_desc: 'Allows you to place a short duration ward',
		item_tier: 1,
		item_price: 0,
		starting_item: 0,
		type: 'Active',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/vision-shard.jpg',
	},
	{
		id: 90,
		item_id: 9836,
		active_item: 'y',
		item_name: 'Void Shield',
		child_item_id: 9834,
		icon_id: 2901,
		item_desc:
			'AURA - Enemy gods within 55 units have their Physical Protection reduced by 15%.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+20',
			},
			{
				Description: 'Physical Protection',
				Value: '+35',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
		],
		item_short_desc: 'Physical Protection debuff Aura',
		item_tier: 3,
		item_price: 1200,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/void-shield.jpg',
	},
	{
		id: 209,
		item_id: 7791,
		active_item: 'y',
		item_name: 'Void Stone',
		child_item_id: 9853,
		icon_id: 2439,
		item_desc:
			'AURA - Enemy gods within 55 units have their Magical Protection reduced by 10%.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Magical Power',
				Value: '+40',
			},
			{
				Description: 'Magical Protection',
				Value: '+50',
			},
		],
		item_short_desc: 'Aura reduces magical protection on enemies',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/void-stone.jpg',
	},
	{
		id: 339,
		item_id: 20697,
		active_item: 'y',
		item_name: 'War Banner',
		child_item_id: 20698,
		icon_id: 9206,
		item_desc:
			"PASSIVE - Getting an assist for an enemy dying provides a stack that provides 2% Movement Speed and 4% Attack Speed for 8s to nearby allies up to 10 stacks. When you've gained 4 or more stacks from assists, once per ability, each time you damage an enemy god you restore 1.25% Health and 1.25% Mana to nearby allies within 55 units and refresh the duration of these stacks.",
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+40',
			},
			{
				Description: 'Magical Protection',
				Value: '+40',
			},
			{
				Description: 'Health',
				Value: '+300',
			},
			{
				Description: 'MP5',
				Value: '+15',
			},
		],
		item_short_desc: 'Enemies fall to empower your allies.',
		item_tier: 2,
		item_price: 1250,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/war-banner.jpg',
	},
	{
		id: 337,
		item_id: 20698,
		active_item: 'y',
		item_name: 'War Flag',
		child_item_id: 0,
		icon_id: 9205,
		item_desc:
			"PASSIVE - Getting an assist when an enemy dies provides a stack that gives 1% Movement Speed and 2% Attack Speed for 8s to nearby allies up to 10 stacks. When you've gained 3 or more stacks from assists, once per ability, each time you damage an enemy god you restore 15 Health and Mana to nearby allies within 55 units and gain 10 gold. Can be upgraded at level 15.",
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
			{
				Description: 'Magical Protection',
				Value: '+10',
			},
			{
				Description: 'Health',
				Value: '+100',
			},
			{
				Description: 'MP5',
				Value: '+10',
			},
		],
		item_short_desc: 'Assists empower you and your allies.',
		item_tier: 1,
		item_price: 600,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/war-flag.jpg',
	},
	{
		id: 22,
		item_id: 7668,
		active_item: 'y',
		item_name: 'Ward',
		child_item_id: 0,
		icon_id: 1992,
		item_desc:
			"This is a ward that allows you to see normal enemy movements with 45 units. It does respect line of sight and can't see through walls or stealth. It remains for 3 minutes or until killed.",
		menuitems: [],
		item_short_desc: 'Detects enemies within an area.',
		item_tier: 1,
		item_price: 50,
		starting_item: 0,
		type: 'Consumable',
		item_icon: 'https://webcdn.hirezstudios.com/smite/item-icons/ward.jpg',
	},
	{
		id: 206,
		item_id: 9853,
		active_item: 'y',
		item_name: 'Ward Stone',
		child_item_id: 14071,
		icon_id: 2860,
		item_desc:
			'AURA - Enemy gods within 55 units have their Magical Protection reduced by 5%.',
		menuitems: [
			{
				Description: 'Health',
				Value: '+50',
			},
			{
				Description: 'Magical Power',
				Value: '+20',
			},
			{
				Description: 'Magical Protection',
				Value: '+30',
			},
		],
		item_short_desc: 'Reduces the Magical Protection of enemies',
		item_tier: 2,
		item_price: 750,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/ward-stone.jpg',
	},
	{
		id: 154,
		item_id: 9835,
		active_item: 'y',
		item_name: 'Warded Shield',
		child_item_id: 10190,
		icon_id: 2906,
		item_desc: '',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Magical Protection',
				Value: '+25',
			},
		],
		item_short_desc: 'Physical Power and Magical Protection.',
		item_tier: 2,
		item_price: 500,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/warded-shield.jpg',
	},
	{
		id: 334,
		item_id: 19751,
		active_item: 'y',
		item_name: 'Warding Sigil',
		child_item_id: 0,
		icon_id: 9190,
		item_desc:
			'PASSIVE - When you are hit by an ability you gain a stack of Dampening, gaining 5 Protections for 5s. This occurs only once per ability cast. This can stack twice. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
			{
				Description: 'Magical Protection',
				Value: '+10',
			},
			{
				Description: 'Health',
				Value: '+75',
			},
		],
		item_short_desc: 'Ward off enemy abilities to gain protection.',
		item_tier: 1,
		item_price: 650,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/warding-sigil.jpg',
	},
	{
		id: 134,
		item_id: 7917,
		active_item: 'y',
		item_name: "Warlock's Staff",
		child_item_id: 9856,
		icon_id: 6637,
		item_desc:
			'PASSIVE - You permanently gain +1 Health and +0.8 Magical Power per Stack, and receive 5 Stacks for a god kill and 1 Stack per minion kill. (Max. 75 Stacks)',
		menuitems: [
			{
				Description: 'Magical Power',
				Value: '+95',
			},
			{
				Description: 'Health',
				Value: '+150',
			},
			{
				Description: 'Mana',
				Value: '+200',
			},
			{
				Description: 'Magical Penetration',
				Value: '+10%',
			},
		],
		item_short_desc: 'Increase max. Health and Power from minion kills',
		item_tier: 3,
		item_price: 1150,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/warlocks-staff.jpg',
	},
	{
		id: 301,
		item_id: 19496,
		active_item: 'y',
		item_name: "Warrior's Axe",
		child_item_id: 0,
		icon_id: 9187,
		item_desc:
			'PASSIVE - Damaging an enemy god steals 20 health (+1.5 per level) away from your target and restores 20 mana. This effect can only occur once every 10s. Can be upgraded at level 20.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+15',
			},
			{
				Description: 'Magical Power',
				Value: '+15',
			},
			{
				Description: 'Physical Protection',
				Value: '+10',
			},
			{
				Description: 'Magical Protection',
				Value: '+10',
			},
		],
		item_short_desc: "Steal your opponent's health through combat.",
		item_tier: 1,
		item_price: 650,
		starting_item: 1,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/warriors-axe.jpg',
	},
	{
		id: 26,
		item_id: 7522,
		active_item: 'y',
		item_name: "Warrior's Bane",
		child_item_id: 7827,
		icon_id: 2888,
		item_desc: null,
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Physical Penetration',
				Value: '+5%',
			},
		],
		item_short_desc: 'Physical Power',
		item_tier: 2,
		item_price: 850,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/warriors-bane.jpg',
	},
	{
		id: 187,
		item_id: 12674,
		active_item: 'y',
		item_name: 'Wind Demon',
		child_item_id: 12668,
		icon_id: 4323,
		item_desc:
			'PASSIVE - Your Critical Hits provide you with 10% Physical Penetration and increase your Attack Speed by 10% and Movement Speed by 10% for 4s.',
		menuitems: [
			{
				Description: 'Physical Power',
				Value: '+25',
			},
			{
				Description: 'Attack Speed',
				Value: '+15%',
			},
			{
				Description: 'Critical Strike Chance',
				Value: '+20%',
			},
		],
		item_short_desc:
			'Critical Hits give increased Penetration, Movement Speed, and Attack Speed',
		item_tier: 3,
		item_price: 1100,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/wind-demon.jpg',
	},
	{
		id: 76,
		item_id: 8240,
		active_item: 'y',
		item_name: 'Winged Blade',
		child_item_id: 8239,
		icon_id: 2204,
		item_desc:
			'PASSIVE - When hit by a Slow, you are immune to Slows and your movement speed is increased by 20% for 4s.  Only occurs once every 30 seconds.',
		menuitems: [
			{
				Description: 'Magical Protection',
				Value: '+25',
			},
			{
				Description: 'Health',
				Value: '+200',
			},
			{
				Description: 'Crowd Control Reduction',
				Value: '+10%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Periodic immunity to Slow effects.',
		item_tier: 3,
		item_price: 700,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/winged-blade.jpg',
	},
	{
		id: 75,
		item_id: 7910,
		active_item: 'y',
		item_name: 'Witchblade',
		child_item_id: 8239,
		icon_id: 2892,
		item_desc:
			'AURA - Enemies within 55 units have their Attack Speed reduced by 25%.',
		menuitems: [
			{
				Description: 'Physical Protection',
				Value: '+30',
			},
			{
				Description: 'Health',
				Value: '+250',
			},
			{
				Description: 'Cooldown Reduction',
				Value: '+10%',
			},
			{
				Description: 'Movement Speed',
				Value: '+7%',
			},
		],
		item_short_desc: 'Attack Speed Debuff Aura',
		item_tier: 3,
		item_price: 900,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/witchblade.jpg',
	},
	{
		id: 341,
		item_id: 20781,
		active_item: 'y',
		item_name: 'Worn Boots',
		child_item_id: 0,
		icon_id: 2686,
		item_desc:
			"<font color='#9E9E6E'>The worn leather of these boots hint at power that has long since faded. <font color='#CE6E6E'>Boots have been removed and the Movement Speed that would have been provided by Boots is instead gained over your first 7 levels.",
		menuitems: [],
		item_short_desc: 'Removed from the battleground.',
		item_tier: 1,
		item_price: 9999,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/worn-boots.jpg',
	},
	{
		id: 340,
		item_id: 20780,
		active_item: 'y',
		item_name: 'Worn Shoes',
		child_item_id: 0,
		icon_id: 2682,
		item_desc:
			"<font color='#9E9E6E'>The frayed threads of these shoes hint at power that has long since faded. <font color='#CE6E6E'>Shoes have been removed and the Movement Speed that would have been provided by Shoes is instead gained over your first 7 levels.",
		menuitems: [],
		item_short_desc: 'Removed from the battleground.',
		item_tier: 1,
		item_price: 9999,
		starting_item: 0,
		type: 'Item',
		item_icon:
			'https://webcdn.hirezstudios.com/smite/item-icons/worn-shoes.jpg',
	},
];

module.exports = items;