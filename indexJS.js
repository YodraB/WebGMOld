 // JavaScript Document


// General Functions

function randomPick(array) {
	var randomNumber = Math.floor(Math.random() * (array.length));
	return array[randomNumber];
}

function print(str) {
	if (document.getElementById("display").value == '') {
		document.getElementById("display").value = str;
	} else {
		document.getElementById("display").value = (document.getElementById("display").value + " \n" + str);
 }
}


// Multiple-use variables

var characteristics = ['abrasive', 'absent-minded', 'adaptable', 'adventurous', 'agreeable', 'agressive', 'aimless', 'airy', 'all-loving', 'aloof', 'amoral', 'ambitous', 'angry', 'anxious', 'apathetic', 'argumentative', 'arrogant', 'artistic', 'articulate', 'aspiring', 'assertive', 'athletic', 'attractive', 'barbaric', 'benevolent', 'bewildered', 'bizarre', 'bland', 'boisterous', 'bold', 'breezy', 'brilliant', 'brutal', 'businesslike', 'busy', 'calculating', 'callous', 'calm', 'cantankerous', 'capable', 'captivating', 'careless', 'caring', 'casual', 'cautious', 'charismatic', 'charming', 'cheerful', 'childish', 'clumsy', 'competitive', 'cold', 'concilliatory', 'conceited', 'confident', 'conformist', 'confused', 'conscientious', 'considerate', 'contemplative', 'cooperative', 'courageous', 'courteous', 'cowardly', 'clever', 'crass', 'creative', 'crippled', 'crude', 'cruel', 'cultured', 'cunning', 'curious', 'cute', 'cynical', 'daring', 'debonair', 'decent', 'deceptive', 'decisive', 'dedicated', 'delicate', 'desperate', 'destructive ', 'determined', 'devious', 'dignified', 'disciplined', 'disconcerting', 'discreet', 'dishonest', 'disrespectful', 'distractible', 'disturbing', 'dogmatic', 'domineering', 'dour', 'down-to-earth', 'dramtic', 'dreamy', 'driven', 'droll', 'dull', 'dutiful', 'dynamic', 'earnest', 'earthy', 'educated', 'egocentric', 'elegant', 'emotional', 'empathetic', 'energetic', 'enigmatic', 'enthusiastic', 'erratic', 'faithful', 'fanatical', 'far-sighted', 'fatalistic', 'fearful', 'feminine', 'fickle', 'flamboyant', 'flexible', 'focused', 'foolish', 'forceful', 'forgetful', 'forgiving', 'formal', 'forthright', 'freethinking', 'friendly', 'frightening', 'frugal', 'fun-loving', 'funny', 'gallant', 'genrous', 'gentle', 'genuine', 'gloomy', 'good-natured', 'gracious', 'greedy', 'grim', 'grumpy', 'guileless', 'gullible', 'hardworking', 'haughty', 'hearty', 'helpful', 'heroic', 'hesitant', 'high-minded', 'high-spirited', 'honest', 'honorable', 'humble', 'hypnotic', 'idealistic', 'ignorant', 'imaginative', 'impatient', 'impersonable', 'imposing', 'impressionable', 'impulsive', 'incisive', 'inconsiderate', 'incorruptable', 'indecisive', 'individualistic', 'innovative', 'inoffensive', 'insane', 'insecure', 'insightful', 'insouciant', 'intelligent', 'intellectual', 'intense', 'intimidating', 'intuitive', 'irreverant', 'irritable', 'jovial', 'kind', 'knowledgeable', 'lazy', 'leaderly', 'logical', 'lonely', 'lovable', 'loyal', 'lucky', 'magnanimous', 'masculine', 'mature', 'meddlesome', 'mellow', 'messy', 'methodical', 'meticulous', 'miserable', 'miserly', 'misguided', 'modest', 'modern', 'moody', 'morbid', 'mystical', 'naive', 'narcissistic', 'narrow-minded', 'neat', 'neurotic', 'noncommittal', 'obnoxious', 'observant', 'obsessive', 'old-fashioned', 'optimistic', 'organized', 'outspoken', 'paranoid', 'parental', 'passionate', 'patient', 'patriotic', 'peaceful', 'perceptive', 'perfectionist', 'personable', 'persuasive', 'petulant', 'placid', 'playful', 'pompous', 'popular', 'practical', 'precise', 'predictable', 'preoccupied', 'prescient', 'pretentious', 'prim', 'principled', 'private', 'progressive', 'protective', 'proud', 'prudent', 'purposeful', 'quiet', 'rational', 'reflective', 'regretful', 'repentant', 'relaxed', 'reliable', 'religious', 'reserved', 'resourceful', 'respectful', 'responsible', 'restrained', 'retiring', 'rowdy', 'sadistic', 'sarcastic', 'secretive', 'self-concious', 'scrupulous', 'selfish', 'selfless', 'self-critical', 'self-denying', 'self-sufficient', 'sensitive', 'sensual', 'simple', 'skeptical', 'skilled', 'sleazy', 'sociable', 'solemn', 'somber', 'sophisticated', 'stern', 'stoic', 'strict', 'strong', 'strong-willed', 'stubborn', 'studious', 'stylish', 'suave', 'superstitious', 'suspicious', 'sympathetic', 'tidy', 'timid', 'tolerant', 'tough', 'tractable', 'trendy', 'trusting', 'twitchy', 'uncomplaining', 'unchanging',  'undemanding', 'unhurried', 'uninhibited','understanding', 'unlucky', 'vacuous', 'vindictive', 'vivacious', 'vulnerable', 'weak', 'well-bred', 'well-meaning', 'well-read', 'well-rounded', 'whimsical', 'wise', 'witty']

// Glyph

var prefix = "Glyphs/"
var glyphs = ["acid", "ages", "alien-bug", "alien-stare", "all-seeing-eye", "amphora", "android-mask", "angel-wings", "aquarium"]

function displayImage(){
	//glyphA = prefix + randomPick(glyphs) + ".png";
	//glyphB = prefix + randomPick(glyphs) + ".png";
	//glyphC = prefix + randomPick(glyphs) + ".png";
	document.getElementById('canvasA').src = glyphA;
	document.getElementById('canvasB').src = glyphB;
	document.getElementById('canvasC').src = glyphC;
	print(glyphA + ", " + glyphB + ", " + glyphC);
}

// Y/N

function yesno() {
	var yn = Math.random();
	var answer = '';
	var ynAnd = [', and...', ', but...', ', because...'];
	var ynAndChance = Math.random();
	var chance = document.getElementById("ynSlider").value / 20;
	yn = yn + chance;
	if (yn > 1) {
		answer = 'yes';
	} else {
		answer = 'no';
	}
	if (ynAndChance > 0.5) {
		answer = answer + randomPick(ynAnd);
	}
	print(answer);
}

function ynShowValue(newValue) {
	newValue = newValue * 5;
	document.getElementById("chance").innerHTML=newValue + '% yes';
}

// Roll custom dice

function customDice(){
	var diceSides = document.getElementById("diceSides").value;
	var numDice = document.getElementById("numDice").value;
	var results = [];
	for (i = 0; i < numDice; i++){
		var randomNumber = (Math.floor(Math.random() * (diceSides))) + 1;
		results += randomNumber + ", ";
	}
	print(results)
}

// Fudge/Fate dice

function fudgefate() {
	ffValues = ['-', '0', '+'];
	dieA = randomPick(ffValues);
	dieB = randomPick(ffValues);
	dieC = randomPick(ffValues);
	dieD = randomPick(ffValues);
	ffDice = [dieA, dieB, dieC, dieD];
	ffTotal = 0;
	for (i = 0; i < 4; i++) {
		if (ffDice[i] == '+') {
			ffTotal = ffTotal + 1;
		} else if (ffDice[i] == '-') {
			ffTotal = ffTotal - 1;
		}
	} 
	print(dieA + ', ' + dieB + ', ' + dieC + ', ' + dieD + ' total: ' + ffTotal);
}

// Damage

var severity = ['life-threatening', 'life-threatening', 'critical', 'critical', 'severe', 'severe', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'minor', 'minor', 'minor', 'minor', 'minor', 'minor', 'negligible', 'negligible', 'negligible']

var area = ['head', 'torso', 'left arm', 'right arm', 'left leg', 'right leg']

function damageShowValue(newValue) {
	newValue = newValue;
	document.getElementById("danger").innerHTML='danger level ' + newValue;
}

function damage() {
	var hit = randomPick(area);
	var damageNumber = Math.floor(Math.random() * (severity.length));
	var danger = document.getElementById("damageSlider").value - 10;
	var change = damageNumber - danger;
	if (change < 0) {
		change = 0;
	} else if ( change > 20) {
		change = 20;
	}
	var mod = severity[change];
	print(mod + ' hit to the ' + hit);
}


// Character Generator - age, sex, characteristic

var ages = ['small child','child','teenager','young adult', 'young adult', 'adult', 'adult', 'adult', 'adult', 'middle aged', 'middle aged', 'middle aged', 'middle aged', 'old', 'old','ancient']

var sexes = ['male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'neither male nor female']

function character() {
	var age = randomPick(ages);
	var sex = randomPick(sexes);
	var char = randomPick(characteristics);
	print(age + ', ' + sex + ', ' + char);
}


// Human Appearance Generator - hair, eyes, skin, body type

var hairDescs = ['very long', 'long', 'ordinary', 'short', 'very short', 'extremely curly', 'curly', 'frizzy', 'poofy', 'wavy', 'straight', 'tangled', 'lustrous', 'spiked', 'asymetrical', 'bouncy', 'braided', 'vivid', 'elegant', 'coarse', 'crimped', 'dyed', 'feathered', 'full', 'thick', 'untidy', 'frosted', 'glossy', 'limp', 'loose', 'messy', 'luxuriant', 'cute', 'shaggy', 'sun-streaked', 'elaborately coiffed', 'nicely done-up', 'windswept', 'wiry', 'plaited']

var hairColors = ['blue black', 'black', 'dark', 'dark brown', 'chocolate', 'brown', 'light brown', 'tawny', 'sandy', 'blond', 'flaxen', 'white-blond', 'auburn', 'red']

var eyeDescs = ['light', 'medium', 'dark', 'limpid', 'round', 'almond-shaped', 'narrow', 'narrowed', 'large', 'wide', 'sparkling', 'squinting', 'flashing', 'deep-set', 'intense', 'hard', 'haunted', 'vacant', 'weary', 'dazzling', 'tired', 'hooded', 'half-closed', 'beady', 'bloodshot', 'liquid', 'sunken', 'smokey']

var eyeColors = ['blue', 'blue', 'green', 'green', 'green', 'brown', 'brown', 'brown', 'brown', 'brown', 'hazel', 'hazel', 'grey', 'amber', 'black']

var skinColors = ['pale', 'fair', 'apricot', 'tanned', 'golden bronze', 'bronzed', 'olive', 'brown', 'mahogany', 'deep brown', 'extremely dark']

var bodyTypes = ['towering', 'tall', 'lanky', 'leggy', 'thin', 'angular', 'gaunt', 'slim', 'slender', 'lithe', 'fit', 'toned', 'muscular', 'athletic', 'brawny', 'husky', 'short', 'petite', 'squat', 'curvy', 'heavyset', 'chubby', 'stout', 'plump', 'overweight', 'top-heavy', 'big-hipped', 'broad-shouldered']

function appearance() {
	var hairAdj = randomPick(hairDescs);
	var hairColor = randomPick(hairColors);
	var eyeAdj = randomPick(eyeDescs);
	var eyeColor = randomPick(eyeColors);
	var skin = randomPick(skinColors);
	var body = randomPick(bodyTypes);
	print(body + ", with " + hairAdj + " " + hairColor + " hair, " + eyeAdj + " " + eyeColor + " eyes, and " + skin + " skin");
}

// Role

var roles = ['administrator', 'adventurer', 'advisor', 'agent', 'ambassador', 'alchemist', 'analyst', 'animal trainer', 'antihero', 'apothocary', 'arbiter', 'archeologist', 'archer', 'artisan', 'artist', 'assassin', 'astronaut', 'athlete', 'bandit', 'barbarian', 'barber', 'bard', 'beggar', 'beserker', 'biologist', 'bounty hunter', 'brigand', 'captain', 'carpenter', 'chancellor', 'charlatan', 'cleric', 'clerk', 'counsellor', 'courtesan', 'craftsman', 'criminal', 'dancer', 'detective', 'diplomat', 'doctor', 'duelist', 'empath', 'engineer', 'exile', 'explorer', 'farmer', 'fighter', 'gambler', 'guardian', 'gladiator', 'gunslinger', 'harbringer',  'healer', 'hero', 'hired gun', 'hunter', 'impersonator', 'informant', 'information broker', 'intellectual', 'inventor', 'jester', 'judge', 'knight', 'laborer', 'leader', 'magic user', 'magician', 'maniac', 'marauder', 'marshal', 'mason', 'mastermind', 'mentor', 'mercenary', 'merchant', 'messenger', 'miner', 'monk', 'mystic', 'ninja', 'nomad', 'officer', 'outcast', 'paladin', 'performer', 'philosopher', 'pilot', 'pirate', 'poet', 'police', 'politician', 'priest', 'prostitute', 'psychic', 'ranger', 'rogue', 'sailor', 'salaryman', 'samurai', 'scientist', 'scholar', 'servant', 'settler', 'shaman', 'shopkeep', 'singer', 'smuggler', 'soldier', 'spy', 'strategist', 'surgeon', 'survivor', 'tactician', 'teacher', 'technician', 'thief', 'thrall', 'thug', 'tinkerer', 'tracker', 'trader', 'trickster', 'vigilante', 'wanderer', 'warden', 'warlord', 'warrior', 'writer', 'zealot']

function role() {
	var role = randomPick(roles);
	print(role);
}

// Friendliness

var fof = ['worships', 'loves', 'likes', 'is friendly with', 'is neutral towards', 'isn\'t sure they like', 'dislikes', 'hates', 'truly loathes']

function friend() {
	var friendly = randomPick(fof);
	print (friendly + " the person");
}

// Quirk

var quirks = ['believe the end is near', 'know a secret', 'can juggle', 'can\'t swim', 'are afraid of the dark', 'collect something as a hobbby', 'love games and jokes', 'get lost easily',  'have unusually keen senses', 'have an unusual form of transportation', 'are afraid of heights', 'have tea every afternoon', 'have an allergy', 'have a big appetite', 'have a great sense of direction', 'don\'t understand sarcasm', 'have a distinct accent', 'give everyone nicknames', 'know a lot of weird trivia', 'like scary stories', 'are a vegetarian', 'laugh a lot', 'are overly friendly', 'have a sensitive stomach', 'are double-jointed', 'are more honest than maybe they should be', 'are extremely passionate about politics', 'carry a lucky charm with them everywhere', 'have a lovely singing voice', 'once dyed their hair an unusual color', 'can hold their breath a really long time', 'have a younger sibling', 'have a lot of siblings', 'know a lot about a particular type of animal', 'can\'t stop talking', 'fret about ethics', 'talk with their hands', 'have an annoying laugh', 'snore loudly', 'tell corny jokes', 'talk to themselves', 'whistle when bored', 'use foreign words gratuitously', 'often forget what they were saying partway through', 'twitch occasionally', 'have a nasal voice', 'speak in a breathy tone', 'have a lisp', 'are always chewing something', 'can\'t sit still', 'won\'t look you in the eye', 'are always asking for confirmation', 'speak in an old-fashioned way', 'get cold easily', 'fuss with their appearance', 'tap their chin when they\'re thinking', 'have a foul mouth', 'stutter when nervous', 'have a big nose', 'are staggeringly beautiful', 'have big ears', 'have unusually-shaped ears', 'wear noticeable earrings', 'have perfect white teeth', 'have a crooked smile', 'have facial piercings', 'wear glasses', 'wear a mask', 'have a large scar across their face', 'wear face paint', 'have a delicate face', 'have flowers in their hair', 'have an unusual hairstyle', 'blush easily', 'can jump really high', 'can hold their breath for a really long time', 'have a large tattoo', 'have six toes on their left foot',  'are surprisingly strong', 'have a prosthetic hand', 'grind their teeth in thier sleep', 'have an embarrassing scar', 'have weatherbeaten skin', 'wear loose, flowing clothing', 'wear clothing all of one color', 'wear clothing unusual for their occupation', 'wear lots of bangles and jewelry', 'wear clothing with a great many pockets', 'prefer the clothing of the opposite sex', 'are possesed', 'are cursed', 'have only two teeth', 'have a gold tooth', 'have only one leg', 'have a limp', 'have a slight hunchback', 'have trouble with back pain', 'have an animal companion', 'are fiercely loyal', 'were an illegitimate child', 'were raised in a cult', 'have an alterior motive', 'are bearing a grudge', 'have a prophecy about them', 'were born under a bad omen', 'are cold an calculating', 'are stupidly brave', 'are blessed by a god', 'have an interesting birthmark', 'come from a well-known family', 'are dangerously curious', 'were once a slave', 'are a natural diplomat', 'are incredibly lucky', 'are an orphan', 'come from a non-traditional family', 'are strangely alluring', 'are devoted to a dead god', 'are impervious to pain', 'are a bit unhinged', 'are adopted', 'are an avid reader', 'are a child of the streets', 'are a natural-born leader', 'have friends in high places', 'have friends in low places', 'never show strong emotion', 'never give up', 'have a twin', 'speak in a stilted, formal way', 'have special dietary needs', 'compulsively interrupt people while they\'re talking', 'tend to take stupid bets or dares',  'have an unlikely addiction', 'habitually wear a strange or unusual accessory', 'speak in the third person', 'speak in a monotone', 'don\'t talk much', 'are easily distracted', 'speak in metaphors', 'were artificially conceived', 'enjoy ancient languages', 'collect swearwords', 'adopt dramatic poses', 'always lean on things', 'are always slouching', 'wear strong perfume or cologne', 'smell bad', 'keep the old ways',  'prefer to rely on their instincts', 'enjoy giving gifts', 'laugh at inappropriate times', 'always have to have the latest newfangled invention', 'never talk about their past', 'are wary of publicity', 'really hate losing', 'hate "roughing it"', 'are extremely disorganized', 'follow a complex code of honor', 'have an unusual obsession', 'have an over-active libido', 'are asexual', 'have an unusual sexual preference', 'are always flirting', 'are an adrenaline junkie', 'have a morbid fascination with death and disease', 'are a bit paranoid', 'struggle with delusions', 'are well-off', 'fret about their health', 'walk with a cane', 'have a disability', 'sing soprano', 'share way too much information', 'never follow the rules']

function quirk() {
	var quirk = randomPick(quirks);
	print ("they " + quirk);
}

//Fantasy Peoples

var commonSpecies = ['human', 'elf', 'dwarf', 'gnome', 'halfling', 'fairy']

var uncommonSpecies = ['giant', 'vampire', 'werecreature', 'nymph', 'nereid', 'dryad', 'sylph', 'merperson', 'elemental', 'nature spirit', 'dragon', 'unicorn', 'naga', 'ogre', 'troll', 'zombie', 'djinn', 'ghoul', 'ghost', 'bugbear', 'centaur', 'dragonkin', 'gnoll', 'goblin', 'kobold', 'lizardfolk', 'orc', 'pixie', 'satyr', 'troll', 'yuan-ti', 'lich', 'cat-person' ]

var rareSpecies = ['oceanid', 'nereid', 'naiad', 'oread', 'hamadryad', 'angel', 'demon', 'minotaur', 'gargoyle', 'mindflayer', 'ent', 'gremlin', 'sphinx', 'doppelganger', 'rakshasa', 'harpy', 'golem', 'banshee', 'gorgon', 'imp', 'siren', 'selkie', 'beastfolk', 'slime', 'arachnoid', 'tengu', 'kitsune']

var rarity = [commonSpecies, commonSpecies, commonSpecies, commonSpecies, commonSpecies, uncommonSpecies, uncommonSpecies, uncommonSpecies, rareSpecies]

function fPeoples() {
	var rare = randomPick(rarity);
	var species = randomPick(rare);
	var half = Math.random()
	if (half < 0.1) {
		print("half-" + species);
	} else {
		print(species);
	}
}


// Science Fiction Peoples

var aliens = ['hive-mind', 'animal-like', 'cannibalistic', 'crystaline', 'immobile', 'xenophobic', 'ancient', 'fluffy', 'three-limbed', 'five-limbed', 'hydraulically powered', 'asexual', 'metamorphasizing', 'sequential hermaphrodite', 'shelled', 'skeleton-less', 'adaptive', 'psyonic', 'ascended', 'gentically engineered', 'cyborg', 'fungus-like', 'plant-like', 'artificial', 'robot', 'helium-filled', 'silicon-based', 'differently-gendered', 'uploaded', 'parasitic', 'symbiotic', 'heavy-gravity', 'low-gravity', 'multi-individual colony', 'radiation-eating', 'caste-based', 'humanoid', 'space-dwelling', 'aquatic', 'desert-dwelling', 'plains-dwelling', 'arboreal', 'burrowing', 'swamp-dwelling', 'flying', 'other-planar', 'clawed', 'poisonous', 'spiny', 'armored', 'quadrepedal', 'six-limbed', 'eight-limbed', 'genetically engineered',  'furry', 'reptilian', 'insectoid', 'feathered', 'small', 'large', 'radially symmetrical', 'tentacled', 'many-eyed', 'blobby', 'fragile', 'gender dimorphic', 'carnivorous', 'herbivorous', 'scavenger', 'non-biological', 'non-physical', 'long-limbed', 'squat', 'nocturnal', 'speedy', 'slow-moving', 'with a hole in their center', 'rapdily evolving', 'technologically backwards', 'godlike', 'hyper-advanced', 'beaked', 'deeply spiritual', 'polyamorous', 'expantionist', 'dancing', 'clairvoyant', 'time-travelling', 'extinct', 'highly artistic', 'highly mercantile', 'cloning-based', 'infection-based', 'spore-releasing', 'gelatinous', 'plasma-based', 'high-gravity', 'low-gravity']

function sPeoples() {
	var descrip = randomPick(characteristics);
	var aliensA = randomPick(aliens);
	var aliensB = randomPick(aliens);
	while (aliensA == aliensB) {
		aliensB = randomPick(aliens);
	}
	print("A " + descrip +", " + aliensA + ", " + aliensB + " people");
}

// Creature Generator

var size = ['a small house', 'an elephant', 'a bear', 'a horse', 'a horse', 'an average adult human', 'a large dog', 'a large dog', 'a child', 'a child', 'a child', 'a house cat', 'a house cat', 'a house cat', 'a mouse']

 var like = ['a duck', 'a cat', 'a bat', 'a dog', 'a horse', 'a deer', 'a tapir', 'an alligator', 'an octopus', 'a squid', 'a slug', 'a dragonfly', 'a sardine', 'an elephant', 'a snail', 'a turtle', 'a snake', 'a stingray', 'a kangaroo', 'a chameleon', 'a pelican', 'a worm', 'a beetle', 'a mass of spaghetti', 'a blob', 'an ape',  'an eagle', 'a weasel', 'a rat', 'a frog', 'a monkey', 'a fish', 'a scorpion', 'a starfish', 'an emu', 'a lion', 'a rhino', 'a hippo', 'a wombat', 'a kangaroo mouse', 'a platypus', 'an otter', 'a bear', 'a giraffe', 'a llama', 'a spider', 'an anenome', 'a sponge', 'a hummingbird', 'a cow', 'an antelope', 'a camel', 'a pig', 'a shark', 'a raccoon', 'a dolphin', 'a turtle', 'a crab', 'a mouse', 'a koala', 'a sloth', 'an armadillo', 'an anteater', 'a hummingbird', 'a goose', 'an owl', 'a chicken', 'a crane', 'a jellyfish', 'a mole', 'a rabbit', 'a robin', 'a lizard', 'a centaur', 'a balloon', 'a raptor']

var but = ['on stilts', 'inside-out', 'capable of flight', 'aquatic', 'covered in spines', 'with many more limbs', 'burrowing', 'with a horrible disease', 'standing upright', 'partially melted', 'upside-down', 'from the mind of H. R. Giger', 'really fluffy', 'gaunt and bony', 'with swelling in unsettling places', 'more dangerous', 'as designed by a young girl', 'inflatable', 'fatter, with stubby legs', 'triangular', 'built for speed', 'frilly', 'keenly intelligent', 'arboreal', 'as understood in medieval times', 'nocturnal', 'glittering with gems', 'angry', 'sad', 'stretched out', 'mixed with a dinosaur', 'plant-like', 'with a hive-mind', 'non-biological', 'insectoid', 'split down the middle', 'sort of squished', 'ethereal', 'really young', 'with the limbs bent backwards']

var head = ['one eye', 'no eyes', 'huge eyes', 'slitted eyes', 'tiny eyes', 'a small beak', 'a long beak', 'a long snout', 'a forked tongue', 'a long neck', 'multiple heads', 'pointed ears', 'a great many eyes', 'eye stalks', 'antennae', 'tusks', 'a forlorn expression', 'large flappy ears', 'a huge nose', 'a muscular trunk', 'a short snout', 'a large nose', 'no nose', 'a great many teeth', 'no teeth', 'a huge mouth', 'a probiscus', 'a tentacled face', 'mandibles', 'no neck', 'a long, sticky tongue', 'with man long tongues', 'a mouth that opens in three or more parts', 'a wide bill']

var extras = ['retractable claws', 'six limbs', 'a shaggy mane', 'a pair of antlers', 'horns', 'fangs', 'giant feet', 'tentacles', 'a prehensile tail', 'hooves', 'bony scutes', 'delicate whiskers', 'loose folds of skin', 'glows', 'changes color', 'can leap great distances', 'is controlled by a tiny parasite', 'a sail fin', 'a heavy shell', 'frills', 'little wings', 'hooved feet', 'walks on its knuckles', 'a moustache', 'long decorative plumes', 'a prehensile upper lip', 'lots of jagged teeth', 'a heavy brow ridge', 'rolls of fat', 'a stubby tail', 'a long tail', 'a prehensile tail', 'a barbed tail']

var fight = ['sharp quills', 'the ability to discharge electricity', 'can appear more dangerous than it really is', 'can move surprisingly quickly', 'emits a noxious gas', 'a poisonous bite', 'incredible endurance', 'flees at the first sign of danger', 'can camouflage itself', 'wickedly sharp claws', 'shoots acid', 'poisonous spines', 'bony spurs', 'exudes a paralytic from its skin', 'shrieks like a banshee', 'is oddly hypnotizing', 'can move faster than the eye can see', 'plays dead very convincingly', 'emits a terrible smell when startled', 'buries itself', 'exceedingly tough scales']

var cover = ['is covered in long, shaggy fur', 'is completely bald', 'is covered in soft, velvety down', 'is very wrinkly', 'has feathers', 'has patches of scraggly fur', 'has curly fur', 'has short fur', 'has densely matted fur', 'has thick scales', 'has shiny scales', 'has tough, leathery skin', 'has delicate skin', 'has a covering of mucuous', 'is slimy', 'has long, dazzling plumage', 'is covered in tiny scales, is soft to the touch,', 'has tough, rubbery skin', 'is covered in a mat of greenery']

var color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'chocolate-colored', 'coffee-colored', 'copper colored', 'liver-colored', 'peach-colored', 'pure white', 'off-white', 'cream-colored', 'blue-grey', 'grey', 'silver', 'bronze', 'gold', 'the color of a bruise', 'black', 'lilac', 'iridescent']

var design = ['striped with', 'with small spots of',  'with large, irregular spots of', 'tipped with', 'flecked with spots of', 'with blotches of', 'with patches of', 'with horizontal stripes of', 'and', 'and', 'and', 'and', 'and']

function creature() {
	var nsize = randomPick(size);
	var nlike = randomPick(like);
	var nbut = randomPick(but);
	var nhead = randomPick(head);
	var nextras = randomPick(extras);
	var nfight = randomPick(fight);
	var ncover = randomPick(cover);
	var ndesign = randomPick(design);
	var ncolorA = randomPick(color);
	var ncolorB = randomPick(color);
	var text = 'This creature is the size of ' + nsize + ' and resembles ' + nlike + ', but ' + nbut + '. It has ' + nhead + ', ' + nextras + ', and ' + nfight + '. It is ' + ncover + ' and is ';
	var blanket = Math.random()
	while (ncolorA == ncolorB) {
		ncolorB = randomPic(color);
	}
	if (blanket > 0.49) {
		text = text + ncolorA + '.';
	} else {
		text = text + ncolorA + ' ' + ndesign + ' ' + ncolorB + '.';
	}
	print(text);
}

// Event

var events = ['you lose something important', 'you find out you\'re surrounded', 'the police are trying to arrest you', 'night falls', 'it begins to rain', 'you stumble upon a wild animal', 'you stumble upon a terrible creature', 'your enemies catch up to you', 'you are offered a bribe', 'you stumble into something sinister', 'you come upon something to good to pass up', 'you see a "Help Wanted" sign', 'you overhear something interesting', 'a natural disaster strikes', 'you are wrongfully imprisoned', 'a robbery', 'a chance meeting', 'a critical summons', 'you are drafted', 'you are deputized', 'you are accused of something', 'you are mistaken for somebody else', 'you find an interesting item', 'a kidnapping occurs', 'you come across an obtacle to your travels', 'you come across something wonderful', 'you come across a merchant', 'you come across a con man', 'you get sick', 'a dangerous creature is nearby', 'you fall terribly ill', 'a rare animal crosses your path', 'you see someone you know', 'you realize someone is following you', 'you find an undiscovered area', 'you are challenged to a duel', 'you are challenegd to a battle to the death', 'a silent alarm goes off', 'you find a dead body', 'you suspect there may be a mole in your midst', 'the lights go out', 'the cavalry arrives', 'backup arrives', 'a critical piece of your equipment breaks', 'they decided they could never be friends with you again', 'it turns out you were wrong', 'it turns out it\'s a trap', 'your cover is blown', 'they turn out to be an impostor', 'you come across a derelict', 'you fall through a portal', 'you get a terrible feeling', 'you find something impossible', 'you fall in love', 'an inexplicable rage overcomes you', 'you run into a childhood friend', 'you come across a dying person, mumbling to themself and clutching something in their hands', 'you have no memories', 'you stumble across an incredible secret', 'you hear a strange rumor', 'you meet someone', 'someone says or does something offensive', 'you are bitten by something strange', 'you enter an anomolous field', 'you set in motion something far greater than you know', 'the war begins', 'you are accused of being a traitor', 'a kiss', 'someone betrays you', 'you collapse', 'the last piece of the puzzle slides into place', 'a heated argument begins', 'you find a child', 'your actions backfire', 'your wish comes true', 'it turns out it was all a lie', 'it turns out it was you all along', 'you find someone who looks exactly like you', 'it all goes wrong', 'things start looking up', 'it turns out they were in on it all along', 'someone makes a tortured confession', 'you hear a mysterious song', 'you meet a celebrity', 'are distracted at a critical moment', 'someone has a change of heart', 'it turns out someone you thought was dead, wasn\'t', 'there\'s an eerie howl in the distance', 'unexpectedtly, someone or something attacks', 'there are tigers', 'a being of phenomenal power stops by for a chat', 'you regret everything', 'you find something precious',]

function eventGen() {
	var event = randomPick(events);
	print(event);
}

// Setting

var settings = ['a burned building', 'a tavern', 'a pit', 'a shop', 'a marketplace', 'a tall building', 'a beach', 'an island', 'a mountaintop', 'in space', 'in the future', 'out west', 'at home', 'a bountiful kindom', 'a castle', 'a library', 'a cottage', 'the plains', 'a sacred spot', 'a shrine', 'a sentient location', 'the savanna', 'the desert', 'the rainforest', 'the arctic', 'a temperate forest', 'a hospital', 'a museum', 'a school', 'a university', 'a casino', 'a church', 'a squat building', 'a row of connected buildings', 'a row of townhouses', 'a store', "an artisan's workshop", 'a cafe', 'a resteraunt', 'an inn', 'a swanky hotel', 'a resort', 'a hunting cabin', 'a volcano', 'a weekend getaway', 'a den of dangerous beasts', 'a peaceful fishing village', 'a calm harbour', 'stormy seas', 'river rapids', 'a waterfall', 'a cave', 'on a ship', 'above the clouds', 'a forbidden chamber', 'a hidden compartment', 'a secret door', 'a huge statue', 'an ancient monument', 'mysterious ruins', 'an observation dome', 'a closet', 'a dungeon', 'a swamp', 'a meadow', 'a field of wheat', 'a field of wildflowers', 'a pasture, with animals grazing', 'a crack in the wall', 'underground', 'a bunker', 'a monestary', 'a park', 'a warehouse', 'a theater', 'a sports arena', 'a circus', 'a public bath', 'a sumptious garden', 'a supply depot', 'a mansion', 'a great estate', 'a squalid hovel', 'a comfortable home', 'a cafeteria', 'a bathroom', 'a conservatory', 'a building site', 'a lake', 'a farm', 'a secluded clearing', 'a kitchen', 'a factory', 'a prison', 'a courtroom', 'a bureaucratic building', 'a dock', 'a loading bay', 'a power station', 'a sewer', 'a garbage dump', 'an apothecary', 'an emergency room', 'a sanitarium', 'a morgue', 'a cemetary', 'a brothel', 'a back alley', 'a black market', 'a watchtower', 'an abandoned building', 'a research facility', 'a bank', 'an art gallery', 'an apartment building', 'surrounded by stacks of books', 'a war-torn countryside', 'a busy intersection', 'an icy winter', 'a swltering summer', 'a moderate autumn', 'a pleasant spring', 'a canyon', 'a city', 'a crowded space', 'a space full of odds and ends', 'a high-stakes chase', 'a domed city', 'changing times']

function setting() {
	var settingA = randomPick(settings);
	var settingB = randomPick(settings);
	var settingC = randomPick(settings);
	var settingNum = Math.floor(Math.random() * (3)) + 1;
	var settingArray = [settingA, settingB, settingC];
	var settingText = '';
	for (i = 0; i < settingNum; i++) {
		settingText = settingText + settingArray[i] + '... ';
	}
	print(settingText);
}

// Item

var items = ['ancient artifact', 'orb of power', 'device with many buttons', 'key', 'woven basket', 'other-planar scanner', 'animalistic talisman', 'vital signs monitor', 'simple case', 'hairbrush', 'cleaning implement', 'blue bucket', 'light source', 'bolt of cloth', 'cooling apparatus', 'heating apparatus', 'precious statue', 'interesting text', 'important message', 'doll', 'toy weapon', 'soft toy', 'complex puzzle', 'stylish hat', 'unusual hat', 'hat', 'drinking glass', 'sprig of a plant', 'small purse', 'pouch', 'stunning flower', 'flower', 'interesting rock', 'item of clothing', 'pair of pants', 'jumpsuit', 'robe', 'dress', 'skirt', 'pair of socks', 'book of riddles', 'filtering device', 'tight spring', 'power tool', 'implement of legend', 'box making small noises', 'official certificate', 'lucky ticket', "object d'art", 'bag of tricks', 'deck of cards', 'set of dice', 'badge with a sigil', 'old memento', 'folding fan', 'musical instrument', 'bottle of pills', 'flask of unknown liquid', 'ancient bone', 'shiny coin', 'religious artifact', 'powerful talisman', 'stylized mask', 'red sphere', 'blue sphere', 'shimmering sphere', 'pair of shoes', 'piece of jewelry', 'piece of fruit', 'piece of candy', 'rubber ball', 'piece of scrap metal', 'poweful ointment', 'small bottle of perfume', 'type of medicine', 'private journal', 'wide bangle', 'dangling earring', 'jewelled necklace', 'ring of power', 'portrait', 'moving picture', 'rocking chair', 'fainting couch', 'item of fine lace', 'curious biological remnant', 'sturdy pack', 'bag of holding', 'pair of scissors', 'pair of underwear', 'belt with pouches', 'tribal artifact', 'crystal sphere', 'small bell', 'bell', 'ugly sweater', 'expensive writing implement', 'writing implement', 'mysterious paste', 'minature world', 'exotic portal', 'warm beverage', 'spatula', 'bulky glasses', 'tacky knick-knack', 'general-purpose adhesive', 'communication device', 'extra-ordinary shield', 'cheap trinket', 'piece of rotting food', 'pile of detritus', 'wind-up automoton', 'part of a crumbling wall', 'picnic lunch', 'flying craft', 'tough rope', 'belt', 'buckle', 'painting', 'goblet', 'giant gong', 'hookah', 'piece of climbing equipment', 'apron', 'glider', 'boat', 'large basin', 'exotic plant', 'bottle of a beverage', 'light shirt', 'long pole', 'walking stick', 'piece of equipment for travelling through snow', 'green backpack', 'brown backpack', 'large bag', 'backpack', 'supply of ammunition', 'raft', 'inner tube', 'pair of sturdy waterproof shoes', 'harpoon', 'screw', 'nut', 'bolt', 'helmet', 'all-terrain vehicle', 'pair of strange glasses', 'form of hovering transportation', 'pair of working boots', 'piece of cold weather gear', 'gardening tool', 'flare', 'travel record', 'signaling device', 'first aid kit', 'package of trail rations', 'vermin repellant', 'fishing rod', 'mechanical spare part', 'fossil', 'jewelry box', 'native artifact', 'wall decoration', 'piece of traditional art', 'pillow', 'blanket', 'small animal', 'large animal', 'riding animal', 'animal', 'joke item', 'mug', 'large kite', 'special soap', 'piece of ceremonial clothing', 'vizer', 'hammer', 'crowbar', 'shovel', 'chisel', 'kit of art supplies', 'package of spices', 'fire starter', 'map', 'navigational aid', 'form of skin protection', 'jug', 'lockbox', 'distance-seeing tool', 'hankie', 'set of chimes', 'multi-function tool', 'kind of harness', 'crown', 'decorative comb', 'sleeping bag', 'portable shelter', 'magnifying glass', 'packet of biscuits', 'packet of jerky', 'vitamin supplement', 'barrel', 'decent amount of water', 'headscarf', 'pair of gloves', 'watch', 'shell', 'axe', 'spigot', 'piece of riding equipment', 'knife', 'bundle of netting', 'pipe', 'image-capturing device', 'amphora', 'time-keeping method', 'wrench', 'feather', 'intelligent item', 'ring', 'rod', 'vial of acid', 'vial of poison', 'bomb', 'mask', 'flag', 'exotic weapon', 'protective field', 'pair of handcuffs', 'ship', 'trttowel', 'pile of dust', 'seed', 'fine chain', 'heavy chain', 'lock', 'calculator', 'pair of goggles', 'grappling hook', 'ladder', 'periscope', 'umbrella', 'grooming kit', 'metal spike', 'bathtub', 'folding chair', 'hammock', 'fishing gear', 'mirror', 'bit of string', 'spool of string', 'horn', 'whistle', 'star chart', 'container of tea', 'box of chocolates', 'piece of meat', 'mysterious spore', 'dusting of sulphur', 'black powder', 'vial of solvent', 'deoderant', 'thick gel', 'intriguing lure', 'flying animal', 'carnivorous animal', 'domesticated animal', 'tranquilizer', 'wig', 'sash', 'coffin', 'small statue', 'huge statue', 'sled', 'boat', 'holy text', 'holy symbol', 'crystal', 'access card', 'energy source', 'cable', 'cortical implant', 'rift-born sphere', 'metal bucket', 'bucket', 'saber', 'scimitar', 'sword', 'pair of nunchuks', 'dagger', 'gun', 'projectile weapon', 'mace', 'maul', 'sickle', 'whip', 'cudgel', 'two-handed sword', 'shortsword', 'flail', 'crossbow', 'coil of rope', 'bit of elastic', 'set of armor']


function genItem() {
	var item = randomPick(items);
	print(item);
}
