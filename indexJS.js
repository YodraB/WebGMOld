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

function inside(needle, haystack) {
  var count = haystack.length;
    for(var i = 0; i < count; i++)
    {
        if(haystack[i] === needle){
					return true;
				}
    }
    return false;
}

function aan(string) {
	var firstLetter = string[0]
	if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u'){
		string = 'an ' + string
	} else {
		string = 'a ' + string
	}
	return string
}

// Multiple-use variables

var ages = ['small child', 'child', 'teenager', 'young adult', 'young adult', 'adult', 'adult', 'adult', 'adult', 'middle aged', 'middle aged', 'middle aged', 'middle aged', 'old', 'old', 'ancient']

var sexes = [ 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'of unusual gender']

var characteristics = ['abrasive', 'absent-minded', 'adaptable', 'adventurous', 'agreeable', 'agressive', 'aimless', 'airy', 'all-loving', 'aloof', 'amoral', 'ambitous', 'angry', 'anxious', 'apathetic', 'argumentative', 'arrogant', 'artistic', 'articulate', 'aspiring', 'assertive', 'athletic', 'attractive', 'barbaric', 'benevolent', 'bewildered', 'bizarre', 'bland', 'boisterous', 'bold', 'breezy', 'brilliant', 'brutal', 'businesslike', 'busy', 'calculating', 'callous', 'calm', 'cantankerous', 'capable', 'captivating', 'careless', 'caring', 'casual', 'cautious', 'charismatic', 'charming', 'cheerful', 'childish', 'clumsy', 'competitive', 'cold', 'concilliatory', 'conceited', 'confident', 'conformist', 'confused', 'conscientious', 'considerate', 'contemplative', 'cooperative', 'courageous', 'courteous', 'cowardly', 'clever', 'crass', 'creative', 'crippled', 'crude', 'cruel', 'cultured', 'cunning', 'curious', 'cute', 'cynical', 'daring', 'debonair', 'decent', 'deceptive', 'decisive', 'dedicated', 'delicate', 'desperate', 'destructive ', 'determined', 'devious', 'dignified', 'disciplined', 'disconcerting', 'discreet', 'dishonest', 'disrespectful', 'distractible', 'disturbing', 'dogmatic', 'domineering', 'dour', 'down-to-earth', 'dramtic', 'dreamy', 'driven', 'droll', 'dull', 'dutiful', 'dynamic', 'earnest', 'earthy', 'educated', 'egocentric', 'elegant', 'emotional', 'empathetic', 'energetic', 'enigmatic', 'enthusiastic', 'erratic', 'faithful', 'fanatical', 'far-sighted', 'fatalistic', 'fearful', 'feminine', 'fickle', 'flamboyant', 'flexible', 'focused', 'foolish', 'forceful', 'forgetful', 'forgiving', 'formal', 'forthright', 'freethinking', 'friendly', 'frightening', 'frugal', 'fun-loving', 'funny', 'gallant', 'genrous', 'gentle', 'genuine', 'gloomy', 'good-natured', 'gracious', 'greedy', 'grim', 'grumpy', 'guileless', 'gullible', 'hardworking', 'haughty', 'hearty', 'helpful', 'heroic', 'hesitant', 'high-minded', 'high-spirited', 'honest', 'honorable', 'humble', 'hypnotic', 'idealistic', 'ignorant', 'imaginative', 'impatient', 'impersonable', 'imposing', 'impressionable', 'impulsive', 'incisive', 'inconsiderate', 'incorruptable', 'indecisive', 'individualistic', 'innovative', 'inoffensive', 'insane', 'insecure', 'insightful', 'insouciant', 'intelligent', 'intellectual', 'intense', 'intimidating', 'intuitive', 'irreverant', 'irritable', 'jovial', 'kind', 'knowledgeable', 'lazy', 'leaderly', 'logical', 'lonely', 'lovable', 'loyal', 'lucky', 'magnanimous', 'masculine', 'mature', 'meddlesome', 'mellow', 'messy', 'methodical', 'meticulous', 'miserable', 'miserly', 'misguided', 'modest', 'modern', 'moody', 'morbid', 'mystical', 'naive', 'narcissistic', 'narrow-minded', 'neat', 'neurotic', 'noncommittal', 'obnoxious', 'observant', 'obsessive', 'old-fashioned', 'optimistic', 'organized', 'outspoken', 'paranoid', 'parental', 'passionate', 'patient', 'patriotic', 'peaceful', 'perceptive', 'perfectionist', 'personable', 'persuasive', 'petulant', 'placid', 'playful', 'pompous', 'popular', 'practical', 'precise', 'predictable', 'preoccupied', 'prescient', 'pretentious', 'prim', 'principled', 'private', 'progressive', 'protective', 'proud', 'prudent', 'purposeful', 'quiet', 'rational', 'reflective', 'regretful', 'repentant', 'relaxed', 'reliable', 'religious', 'reserved', 'resourceful', 'respectful', 'responsible', 'restrained', 'retiring', 'rowdy', 'sadistic', 'sarcastic', 'secretive', 'self-concious', 'scrupulous', 'selfish', 'selfless', 'self-critical', 'self-denying', 'self-sufficient', 'sensitive', 'sensual', 'simple', 'skeptical', 'skilled', 'sleazy', 'sociable', 'solemn', 'somber', 'sophisticated', 'stern', 'stoic', 'strict', 'strong', 'strong-willed', 'stubborn', 'studious', 'stylish', 'suave', 'superstitious', 'suspicious', 'sympathetic', 'tidy', 'timid', 'tolerant', 'tough', 'tractable', 'trendy', 'trusting', 'twitchy', 'uncomplaining', 'unchanging',  'undemanding', 'unhurried', 'uninhibited','understanding', 'unlucky', 'vacuous', 'vindictive', 'vivacious', 'vulnerable', 'weak', 'well-bred', 'well-meaning', 'well-read', 'well-rounded', 'whimsical', 'wise', 'witty']

//Copy text to Clipboard - this function is basically copied from w3schools.com

function toClipboard() {
	/* Get the text field */
  var copyText = document.getElementById("display");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("Copy");

  /* Alert the copied text */
  alert("Copied all notes");
}

// Glyph

var prefix = "Glyphs/"
var glyphs = ['acid', 'ages', 'alien-bug', 'alien-stare', 'all-seeing-eye', 'amphora', 'android-mask', 'angel-wings', 'aquarium',  'architect-mask',  'awareness', 'barbed-coil', 'battery-pack-alt', 'beard', 'beech', 'bestial-fangs', 'big-wave', 'bindle', 'bird-mask', 'black-cat', 'black-hole-bolas', 'blindfold', 'body-swapping', 'boiling-bubbles', 'bolt-eye', 'bowen-knot', 'branch-arrow', 'breaking-chain', 'bubbling-bowl', 'bubbling-flask', 'burning-book', 'burning-meteor', 'burning-passion', 'calavera', 'card-joker', 'carnyx', 'cauldron', 'chained-heart', 'chalice-drops', 'chameleon-glyph', 'clover', 'cobweb', 'coma', 'concrete-bag', 'convince', 'coronation', 'crown-coin', 'crowned-heart', 'crowned-skull', 'crystalize', 'cultist', 'cursed-star', 'cyber-eye', 'cyborg-face', 'cycle', 'dagger-rose', 'dark-squad', 'deathcap', 'defibrilate', 'delighted', 'desert-skull', 'despair', 'direwolf', 'disintegrate', 'distraction', 'double-face-mask', 'dove', 'dozen', 'drakkar', 'dread', 'drink-me', 'dripping-star', 'ecology', 'egg-clutch', 'egyptian-pyramids', 'energy-shield', 'enlightenment', 'entangled-typhoon', 'evil-bat', 'evil-moon', 'evil-wings', 'eye-of-horus', 'eye-target', 'fangs-circle', 'fire-ace', 'fire-bottle', 'fire-dash', 'fire-silhouette', 'fishing-hook', 'fleshy-mass', 'forest', 'fox-head', 'freedom-dove', 'frontal-lobe', 'frostfire', 'fruiting', 'fuji', 'gas-mask', 'gem-chain', 'ghost-ally', 'gift-of-knowledge', 'gluttonous-smile', 'gooey-sword', 'gorilla', 'guarded-tower', 'hair-strands', 'halt', 'harpy', 'heart-bottle', 'heart-drop', 'heptagram', 'hole-ladder', 'holy-grail', 'holy-oak', 'ice-bolt', 'iceberg', 'id-card', 'ink-swirl', 'inner-self', 'invisible', 'ivory-tusks', 'juggler', 'keyring', 'knot', 'lamprey-mouth', 'life-in-the-balance', 'love-mystery', 'mad-scientist', 'magic-gate', 'marrow-drain', 'medieval-pavilion', 'minerals', 'moebius-star', 'mute', 'nothing-to-say', 'octoman', 'oily-spiral', 'one-eyed', 'ouroboros', 'overmind', 'paw-heart', 'pegasus', 'pierced-heart', 'piercing-sword', 'pirate-flag', 'pirate-grave', 'plague-doctor-profile', 'plants-and-animals', 'plesiosaurus', 'poison', 'poker-hand', 'prayer', 'processor', 'pyromaniac', 'radial-balance', 'rainbow-star', 'raise-skeleton', 'revolt', 'ringing-bell', 'river', 'roman-shield', 'rupee', 'scythe', 'secret-door', 'serrated-slash', 'shaking-hands', 'shark-fin', 'shield-echoes', 'shiny-purse', 'shouting', 'shuriken', 'sickle', 'sinking-ship', 'sinking-trap', 'skeleton-key', 'slalom', 'slashed-shield', 'sleepy', 'sly', 'smoke-bomb', 'sound-waves', 'spatter', 'spiked-armor', 'spiky-eclipse', 'spiral-arrow', 'spiral-tentacle', 'sprout', 'spy', 'star-sattelites', 'stars-stack', 'stigmata', 'stork-delivery', 'striped-sun', 'stump-regrowth', 'suits', 'sun-radiations', 'sun', 'surprised-skull', 'surrounded-eye', 'swamp', 'swan-breeze', 'swiss-army-knife', 'sword-break', 'tear-tracks', 'telepathy', 'temptation', 'tesla-coil', 'thor-fist', 'totem-head', 'totem', 'trojan-horse', 'two-shadows', 'vine-flower', 'volcano', 'voodoo-doll', 'wave-strike', 'winged-emblem', 'wingfoot', 'yin-yang']

function displayImage(){
	glyphA = prefix + randomPick(glyphs) + ".png";
	glyphB = prefix + randomPick(glyphs) + ".png";
	glyphC = prefix + randomPick(glyphs) + ".png";
	document.getElementById('canvasA').src = glyphA;
	document.getElementById('canvasB').src = glyphB;
	document.getElementById('canvasC').src = glyphC;
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

// Name generator

var numS = [1, 1, 1, 1, 2, 2, 2, 3, 3]
var vowels = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'ai', 'au', 'ea', 'ee', 'ei', 'ey', 'ia', 'ie', 'io', 'oa', 'oi', 'oo', 'ou', 'oy', 'ua', 'ui']
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'bl', 'br', 'ch', 'dr', 'fl', 'fr', 'gh', 'gl', 'gr', 'kl', 'kr', 'pl', 'pr', 'sh', 'shr', 'sl', 'st', 'th', 'vl', 'wr']
var finals = ['b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'ch', 'nd', 'sh', 'st', 'th']

function nameGen() {
	var syllable = [];
	var sLength = randomPick(numS);
	var vOrC = Math.random();

	//First letter
	if (vOrC > 0.66) { // i.e. 33% chance of vowel
		syllable.push(randomPick(vowels));
	} else {
		syllable.push(randomPick(consonants));
	}

	//additional syllables
	for (i = 0; i < sLength; i++) {
		if (inside(syllable[syllable.length - 1], vowels) == true) { // when the last letter was a vowel   inside(syllable[syllable.length], vowels) == true
			syllable.push(randomPick(consonants));
		} else { // when the last letter was not a vowel
			final = Math.random();
			if (final > 0.75) {
				syllable.push(randomPick(vowels) + randomPick(finals))
			} else {
				syllable.push(randomPick(vowels));
			}
		}
	}

	//Last final for single syllables
	if (sLength == 1 && inside(syllable[1], vowels) == true) {
		fFinal = Math.random();
		if (fFinal > 0.25) {
			syllable.push(randomPick(finals))
		}
	}

	//Turning result into string
	result = ''
	for (n = 0; n < syllable.length; n++) {
		result += syllable[n];
	}
	result = result.replace(result.charAt(0), result.charAt(0).toUpperCase())
	print(result);

}

// Character Generator - age, sex, characteristic

function character() {
	var age = randomPick(ages);
	var sex = randomPick(sexes);
	var char = randomPick(characteristics);
	print(age + ', ' + sex + ', ' + char);
	return age, sex, char
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

//genre generator
//basically a copy of the setting generator

var genres = ['high fantasy', 'space opera', 'western', 'comedy', 'horror', 'action', 'mystery', 'epic', 'fairy tale', 'historical', 'military', 'psychological thriller', 'modern', 'adventure', 'romance', 'buddy-cop', 'conspiracy', 'samurai', 'swashbuckler', 'sword and sorcery', 'political', 'psychological', 'low fantasy', 'urban fantasy', 'xenofiction', 'superhero', 'sports', 'mecha', 'time travel', 'cyberpunk', 'steampunk', 'paranormal', 'modern', 'ninja', 'drama', 'hard science-fiction']

function genre(){
	var genreA = randomPick(genres);
	var genreB = randomPick(genres);
	var genreC = randomPick(genres);
	var genreNum = Math.floor(Math.random() * (3)) + 1;
	var genreArray = [genreA, genreB, genreC];
	var genreText = '';
	for (i = 0; i < genreNum; i++) {
		genreText += genreArray[i] + ' ';
	}
	print(genreText);
}

// Event

var events = ['you lose something important', 'you find out you\'re surrounded', 'the police are trying to arrest you', 'night falls', 'it begins to rain', 'you stumble upon a wild animal', 'you stumble upon a terrible creature', 'your enemies catch up to you', 'you are offered a bribe', 'you stumble into something sinister', 'you come upon something to good to pass up', 'you see a "Help Wanted" sign', 'you overhear something interesting', 'a natural disaster strikes', 'you are wrongfully imprisoned', 'a robbery', 'a chance meeting', 'a critical summons', 'you are drafted', 'you are deputized', 'you are accused of something', 'you are mistaken for somebody else', 'you find an interesting item', 'a kidnapping occurs', 'you come across an obtacle to your travels', 'you come across something wonderful', 'you come across a merchant', 'you come across a con man', 'you get sick', 'a dangerous creature is nearby', 'you fall terribly ill', 'a rare animal crosses your path', 'you see someone you know', 'you realize someone is following you', 'you find an undiscovered area', 'you are challenged to a duel', 'you are challenegd to a battle to the death', 'a silent alarm goes off', 'you find a dead body', 'you suspect there may be a mole in your midst', 'the lights go out', 'the cavalry arrives', 'backup arrives', 'a critical piece of your equipment breaks', 'they decided they could never be friends with you again', 'it turns out you were wrong', 'it turns out it\'s a trap', 'your cover is blown', 'they turn out to be an impostor', 'you come across a derelict', 'you fall through a portal', 'you get a terrible feeling', 'you find something impossible', 'you fall in love', 'an inexplicable rage overcomes you', 'you run into a childhood friend', 'you come across a dying person, mumbling to themself and clutching something in their hands', 'you have no memories', 'you stumble across an incredible secret', 'you hear a strange rumor', 'you meet someone', 'someone says or does something offensive', 'you are bitten by something strange', 'you enter an anomolous field', 'you set in motion something far greater than you know', 'the war begins', 'you are accused of being a traitor', 'a kiss', 'someone betrays you', 'you collapse', 'the last piece of the puzzle slides into place', 'a heated argument begins', 'you find a child', 'your actions backfire', 'your wish comes true', 'it turns out it was all a lie', 'it turns out it was you all along', 'you find someone who looks exactly like you', 'it all goes wrong', 'things start looking up', 'it turns out they were in on it all along', 'someone makes a tortured confession', 'you hear a mysterious song', 'you meet a celebrity', 'are distracted at a critical moment', 'someone has a change of heart', 'it turns out someone you thought was dead, wasn\'t', 'there\'s an eerie howl in the distance', 'unexpectedtly, someone or something attacks', 'there are tigers', 'a being of phenomenal power stops by for a chat', 'you regret everything', 'you find something precious',]

function eventGen() {
	var event = randomPick(events);
	print(event);
}

// Setting

var settings = [ "an artisan's workshop", 'a back alley', 'a bank', 'a bathroom', 'a beach', 'a black market', 'a bountiful kingdom', 'a brothel', 'a building site', 'a bunker', 'a bureaucratic building', 'a burned building', 'a bustling metropolis', 'a busy intersection', 'a cafe', 'a cafeteria', 'a calm harbor', 'a canyon', 'a casino', 'a castle', 'a cave', 'a cemetery', 'a church', 'a circus', 'a city beneath the waves', 'a city', 'a closet', 'a comfortable home', 'a conservatory', 'a cottage', 'a courtroom', 'a crack in the wall', 'a crowded space', 'a den of dangerous beasts', 'a dock', 'a domed city', 'a drab and boring place', 'a dungeon', 'a factory', 'a farm', 'a field of wheat', 'a field of wildflowers', 'a field with animals grazing', 'a floating city', 'a forbidden chamber', 'a forsaken wasteland', 'a fortress', 'a garbage dump', 'a gathering of like minds', 'a giant tree', 'a great estate', 'a hidden compartment', 'a high-stakes chase', 'a hole in the ground', 'a hospital', 'a hub of multiculturalism', 'a huge statue', 'a hunting cabin', 'a kitchen', 'a shifting labyrinth', 'a lake', 'a library', 'a loading bay', 'a mansion', 'a marketplace', 'a meadow', 'a moderate autumn', 'a monastery', 'a morgue', 'a mountaintop', 'a museum', 'a park', 'a pasture', 'a peaceful fishing village', 'a pit', 'a place of leisure', 'a place of madness', 'a place of suffering', 'a pleasant spring', 'a power station', 'a prison', 'a public bath', 'a research facility', 'a resort', 'a restaurant', 'a row of connected buildings', 'a row of townhouses', 'a sacred spot', 'a sanitarium', 'a school', 'a secluded clearing', 'a secret door', 'a sentient location', 'a sewer', 'a shop', 'a shrine', 'a space full of odds and ends', 'a sports arena', 'a squalid hovel', 'a squat building', 'a store', 'a sumptuous garden', 'a supply depot', 'a swamp', 'a swanky hotel', 'a sweltering summer', 'a tall building', 'a tavern', 'a temperate forest', 'a theater', 'a trading post', 'a university', 'a volcano', 'a war-torn countryside', 'a warehouse', 'a watchtower', 'a waterfall', 'a weekend getaway', 'a workshop', 'above the clouds', 'an abandoned building', 'an ancient monument', 'an apartment building', 'an apothecary', 'an art gallery', 'deep underground', 'an emergency room', 'an escape pod', 'an icy winter', 'an inn', 'an island', 'an observation dome', 'another plane', 'at home', 'changing times', 'in space', 'in the future', 'mysterious ruins', 'on a ship', 'out west', 'river rapids', 'stormy seas', 'surrounded by mist', 'surrounded by stacks of books', 'the arctic', 'the desert', 'the plains', 'the rainforest', 'the savanna', 'under the light of two moons', 'underground']

function setting() {
	var settingA = randomPick(settings);
	var settingB = randomPick(settings);
	var settingC = randomPick(settings);
	var settingNum = Math.floor(Math.random() * (3)) + 1;
	var settingArray = [settingA, settingB, settingC];
	var settingText = '';
	for (i = 0; i < settingNum; i++) {
		settingText += settingArray[i] + '... ';
	}
	print(settingText);
}

// Item

var items = ["object d'art", 'access card', 'all-terrain vehicle', 'amphora', 'ancient artifact', 'ancient bone', 'animal', 'animalistic talisman', 'apron', 'axe', 'backpack', 'badge with a sigil', 'bag of holding', 'bag of tricks', 'barrel', 'bathtub', 'bell', 'belt with pouches', 'belt', 'bit of elastic', 'bit of string', 'black powder', 'blanket', 'blue bucket', 'blue sphere', 'boat', 'boat', 'bolt of cloth', 'bolt', 'bomb', 'book of riddles', 'bottle of a beverage', 'bottle of pills', 'box making small noises', 'box of chocolates', 'brown backpack', 'bucket', 'buckle', 'bulky glasses', 'bundle of netting', 'cable', 'calculator', 'carnivorous animal', 'cheap trinket', 'chisel', 'cleaning implement', 'coffin', 'coil of rope', 'communication device', 'complex puzzle', 'container of tea', 'cooling apparatus', 'cortical implant', 'crossbow', 'crowbar', 'crown', 'crystal sphere', 'crystal', 'cudgel', 'curious biological remnant', 'dagger', 'dangling earring', 'decent amount of water', 'deck of cards', 'decorative comb', 'deoderant', 'device with many buttons', 'distance-seeing tool', 'doll', 'domesticated animal', 'dress', 'drinking glass', 'dusting of sulphur', 'energy source', 'exotic plant', 'exotic portal', 'exotic weapon', 'expensive writing implement', 'extra-ordinary shield', 'fainting couch', 'feather', 'fiendish puzzle-box', 'filtering device', 'fine chain', 'fire starter', 'first aid kit', 'fishing gear', 'fishing rod', 'flag', 'flail', 'flare', 'flask of unknown liquid', 'flower', 'flying animal', 'flying craft', 'folding chair', 'folding fan', 'form of hovering transportation', 'form of skin protection', 'fossil', 'gardening tool', 'general-purpose adhesive', 'giant gong', 'glider', 'goblet', 'grappling hook', 'green backpack', 'grooming kit', 'gun', 'hairbrush', 'hammer', 'hammock', 'hankie', 'harpoon', 'hat', 'headscarf', 'heating apparatus', 'heavy chain', 'helmet', 'holy symbol', 'holy text', 'hookah', 'horn', 'huge statue', 'image-capturing device', 'implement of legend', 'important message', 'inner tube', 'intelligent item', 'interesting rock', 'interesting text', 'intriguing lure', 'item of clothing', 'item of fine lace', 'jewelled necklace', 'jewelry box', 'joke item', 'jug', 'jumpsuit', 'key', 'kind of harness', 'kit of art supplies', 'knife', 'ladder', 'large animal', 'large bag', 'large basin', 'large kite', 'light shirt', 'light source', 'lock', 'lockbox', 'long pole', 'lucky ticket', 'mace', 'magnifying glass', 'map', 'mask', 'maul', 'mechanical spare part', 'metal bucket', 'metal spike', 'minature world', 'mirror', 'moving picture', 'mug', 'multi-function tool', 'musical instrument', 'mysterious paste', 'mysterious spore', 'native artifact', 'navigational aid', 'nut', 'official certificate', 'old memento', 'orb of power', 'other-planar scanner', 'package of spices', 'package of trail rations', 'packet of biscuits', 'packet of jerky', 'painting', 'pair of gloves', 'pair of goggles', 'pair of handcuffs', 'pair of nunchuks', 'pair of pants', 'pair of scissors', 'pair of shoes', 'pair of socks', 'pair of strange glasses', 'pair of sturdy waterproof shoes', 'pair of underwear', 'pair of working boots', 'part of a crumbling wall', 'periscope', 'picnic lunch', 'piece of candy', 'piece of ceremonial clothing', 'piece of climbing equipment', 'piece of cold weather gear', 'piece of equipment for travelling through snow', 'piece of fruit', 'piece of jewelry', 'piece of meat', 'piece of riding equipment', 'piece of rotting food', 'piece of scrap metal', 'piece of traditional art', 'pile of detritus', 'pile of dust', 'pillow', 'pipe', 'portable shelter', 'portrait', 'pouch', 'power tool', 'powerful ointment', 'powerful talisman', 'powerful weapon', 'precious statue', 'private journal', 'projectile weapon', 'protective field', 'raft', 'red sphere', 'religious artifact', 'riding animal', 'rift-born sphere', 'ring of power', 'ring', 'robe', 'rocking chair', 'rod', 'rubber ball', 'saber', 'sash', 'scimitar', 'screw', 'seed', 'set of armor', 'set of chimes', 'set of dice', 'shell', 'shimmering sphere', 'shiny coin', 'ship', 'shortsword', 'shovel', 'sickle', 'signaling device', 'simple case', 'skirt', 'sled', 'sleeping bag', 'small animal', 'small bell', 'small bottle of perfume', 'small purse', 'small statue', 'soft toy', 'spatula', 'special soap', 'spigot', 'spool of string', 'sprig of a plant', 'star chart', 'stunning flower', 'sturdy pack', 'stylish hat', 'stylized mask', 'supply of ammunition', 'sword', 'tacky knick-knack', 'thick gel', 'tight spring', 'time-keeping method', 'tough rope', 'towel', 'toy weapon', 'tranquilizer', 'travel record', 'tribal artifact', 'trowel', 'two-handed sword', 'type of medicine', 'ugly sweater', 'umbrella', 'unusual hat', 'vermin repellant', 'vial of acid', 'vial of poison', 'vial of solvent', 'vital signs monitor', 'vitamin supplement', 'vizer', 'walking stick', 'wall decoration', 'warm beverage', 'watch', 'whip', 'whistle', 'wide bangle', 'wig', 'wind-up automoton', 'woven basket', 'wrench', 'writing implement']

function genItem() {
	var item = randomPick(items);
	print(item);
}

// Quest

var questTypeList = ['return', 'retrieve', 'destroy', 'steal', 'find and explore', 'explore', 'clear out', 'rescue', 'escort', 'prevent the plans of', 'spy on', 'negotiate with', 'survive', 'escape from', 'investigate', 'discover the fate of', 'expose the secrets of', 'research', 'hunt down', 'protect']
// 'put a stop to'

var questItems = [ "object d'art", 'ancient artifact', 'ancient bone', 'ancient monument', 'ancient tome', 'animal', 'animalistic talisman', 'axe', 'axe', 'badge with a sigil', 'bell', 'belt', 'black powder', 'blanket', 'blue sphere', 'boat', 'bomb', 'book of riddles', 'bottle of pills', 'box making small noises', 'bulky glasses', 'calculator', 'carnivorous animal', 'cheap trinket', 'coffin', 'coil of rope', 'communication device', 'container of tea', 'crown', 'crystal sphere', 'crystal', 'cudgel', 'curious biological remnant', 'dagger', 'dangling earring', 'decent amount of water', 'decent amount of water', 'deck of cards', 'decorative comb', 'device with many buttons', 'distance-seeing tool', 'doll', 'domesticated animal', 'energy source', 'exotic portal', 'exotic weapon', 'expensive writing implement', 'extra-ordinary shield', 'feather', 'fiendish puzzle-box', 'filtering device', 'fine chain', 'fire starter', 'flag', 'flail', 'flask of unknown liquid', 'flying animal', 'flying craft', 'folding fan', 'form of hovering transportation', 'fossil', 'fruit', 'gardening tool', 'giant gong', 'goblet', 'gun', 'hammer', 'harpoon', 'headscarf', 'headscarf', 'heavy chain', 'helmet', 'holy symbol', 'holy text', 'hookah', 'horn', 'huge statue', 'implement of legend', 'important files', 'important message', 'intelligent item', 'interesting text', 'intriguing lure', 'item of clothing', 'item of fine lace', 'jewelled necklace', 'jewelry box', 'key', 'knife', 'large animal', 'large basin', 'lock', 'lockbox', 'lucky ticket', 'mace', 'map', 'mask', 'maul', 'minature world', 'mirror', 'moving picture', 'multi-function tool', 'musical instrument', 'mysterious flower', 'mysterious paste', 'mysterious spore', 'native artifact', 'navigational aid', 'official certificate', 'official document', 'old memento', 'orb of power', 'package of spices', 'painting', 'pair of gloves', 'pair of gloves', 'pair of goggles', 'pair of nunchuks', 'pair of strange glasses', 'piece of ceremonial clothing', 'piece of fruit', 'piece of traditional art', 'pillow', 'portrait', 'pouch', 'powerful ointment', 'powerful talisman', 'powerful weapon', 'precious art supplies', 'precious statue', 'private journal', 'projectile weapon', 'protective field', 'red sphere', 'religious artifact', 'riding animal', 'ring of power', 'ring', 'rod', 'saber', 'sash', 'scimitar', 'seed', 'set of armor', 'shell', 'shell', 'shimmering sphere', 'ship', 'shortsword', 'shovel', 'sickle', 'signaling device', 'simple case', 'small animal', 'small bell', 'small bottle of perfume', 'small purse', 'small statue', 'spool of string', 'sprig of a plant', 'star chart', 'stone', 'stunning flower', 'stylized mask', 'sword', 'sword', 'tablet with important writings', 'tacky knick-knack', 'thick gel', 'tranquilizer', 'travel record', 'tribal artifact', 'two-handed sword', 'type of medicine', 'vial of acid', 'vial of poison', 'vial of solvent', 'vizer', 'walking stick', 'wall decoration', 'watch', 'watch', 'weapon', 'whip', 'whistle', 'wide bangle', 'wind-up automoton', 'writing implement']

var questSettings = [ 'a back alley', 'a beach', 'a black market', 'a bountiful kingdom', 'a brothel', 'a bunker', 'a burned building', 'a bustling metropolis', 'a canyon', 'a castle', 'a cave', 'a cemetery', 'a church', 'a city beneath the waves', 'a city', 'a conservatory', 'a crack in the wall', 'a den of dangerous beasts', 'a domed city', 'a dungeon', 'a factory', 'a farm', 'a floating city', 'a forbidden chamber', 'a forsaken wasteland', 'a fortress', 'a garbage dump', 'a great estate', 'a hidden compartment', 'a hunting retreat', 'a lake', 'a land above the clouds', 'a library', 'a lonely outpost', 'a mansion', 'a monastery', 'a morgue', 'a mountaintop', 'a museum of curiosities', 'a mysterious shop', 'a pit', 'a power station', 'a prison', 'a relic in space', 'a research facility', 'a resort', 'a rift in time', 'a ruined ship', 'a sacred spot', 'a sanitarium', 'a school', 'a secluded clearing', 'a seeming utopia', 'a sentient location', 'a sewer', 'a shifting labyrinth', 'a shrine', 'a squalid hovel', 'a sumptuous garden', 'a swamp', 'a swanky hotel', 'a tall building', 'a temperate forest', 'a trading post', 'a volcano', 'a war-torn countryside', 'a waterfall', 'a workshop', 'an abandoned building', 'an abandoned hospital', 'an ancient archive', 'an ancient monument', 'an apothecary', 'an island', 'an observation dome', 'mysterious ruins', 'river rapids', 'stormy seas', 'the arctic', 'the desert', 'the plains', 'the rainforest', 'the savanna', 'the underground']

var survive = ['an icy winter', 'a deadly plague', 'a bandit attack', 'a terrible storm', 'a famine', 'a war', 'a coup', ' a government collapse', 'a volcano', 'a typhoon', 'an invasion', 'a new dark age', 'an assasination attempt', 'a week with your family', 'in a web of deception', 'a trek across the desert', 'a horrific betrayal', 'an uprising', 'in endless night', 'a plague of locusts']

// creature/monster

function quest() {
	var questType = randomPick(questTypeList);
	var questText = '';
	var item = aan(randomPick(questItems))
	var loc = randomPick(questSettings)
	var obstacle = randomPick(survive)
	var age = randomPick(ages)
	var sex = randomPick(sexes)
	var char = ''
	if (age == 'small child' || age == 'child' || age == 'teenager' && sex != 'person of unusual gender'){
		char = aan(randomPick(characteristics)) + ' ' + sex + ' ' + age
	} else {
		char = aan(randomPick(characteristics)) + ' ' + age + ' ' + sex
	}

	switch(true) {
		case (questType == 'return' || questType == 'retrieve' || questType == 'destroy' || questType == 'steal'): // item only quests
			questText = questType + ' ' + item;
			break;
		case (questType == 'find and explore' || questType == 'explore' || questType == 'clear out'): // item only
			questText = questType + ' ' + loc;
			break;
		case (questType == 'rescue' || questType == 'escort' || questType == 'prevent the plans of' || questType == 'spy on' || questType == 'negotiate with'): // char only
			questText = questType + ' ' + char;
			humanYN = Math.random()
			if (humanYN > 0.75) {
				questText += ' of an unusual or monstrous species'
			}
			break;
		case ( questType == 'survive'): // obstacle only
			questText = questType + ' ' + obstacle;
			break;
		case (questType == 'escape from'):
			escape = randomPick([loc, char]);
			questText = questType + ' ' + escape;
			break;
		case (questType == 'investigate' || questType == 'discover the fate of' || questType == 'expose the secrets of' || questType == 'research' || questType == 'protect'):
			anything = randomPick([item, loc, char]);
			questText = questType + ' ' + anything;
			break;
		case (questType == 'hunt down'): // character or item
			charItem = randomPick([char, item]);
			questText = questType + ' ' + charItem;
			break;
	// prevent plans, spy on, negotiate with, escape from, hunt down
	}
	print(questText);
}


//Fantasy Peoples

var commonSpecies = ['human', 'elf', 'dwarf', 'gnome', 'halfling', 'fairy']

var uncommonSpecies = ['giant', 'vampire', 'werecreature', 'nymph', 'nereid', 'dryad', 'sylph', 'merperson', 'elemental', 'nature spirit', 'dragon', 'unicorn', 'naga', 'ogre', 'troll', 'zombie', 'djinn', 'ghoul', 'ghost', 'bugbear', 'centaur', 'dragonkin', 'gnoll', 'goblin', 'kobold', 'lizardfolk', 'orc', 'pixie', 'satyr', 'troll', 'yuan-ti', 'lich', 'cat-person', 'dark elf']

var rareSpecies = ['oceanid', 'nereid', 'naiad', 'oread', 'hamadryad', 'angel', 'demon', 'minotaur', 'gargoyle', 'mindflayer', 'ent', 'gremlin', 'sphinx', 'doppelganger', 'rakshasa', 'harpy', 'golem', 'banshee', 'gorgon', 'imp', 'siren', 'selkie', 'beastfolk', 'slime', 'arachnoid', 'tengu', 'kitsune', 'changeling']

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

//Fantasy Enemy Generator

var typeEnemy = ['common', 'unique']

var comEnemy = ['orcs', 'trolls', 'giants', 'dark elves', 'giant frogs', 'golems', 'carnivorous slimes', 'elemental spirits', 'zombies', 'skeltons', 'hostile fae', 'intelligent wolves' , 'cyclopses', 'ogres', 'drakes', 'giant eagles', 'salamanders', 'succubi', 'swan maidens', 'dinosaurs', 'fae creatures', 'fungoids', 'hell hounds', 'giant spiders', 'vampires', 'werebeasts', 'wolves', 'gremlins', 'goblins', 'oozes', 'lizardfolk', 'merfolk', 'dire bears', 'spectral horses', 'ghosts', 'wendigo', 'gryphons', 'banshees', 'winged lions', "will o' the whisps", 'harpies', 'gorgons', 'brownies', 'trickster foxes', 'lamias', 'pixies', 'fell hyenas', 'minotaurs', 'giant scorpions', 'snakes', 'centaurs', 'rocs', 'crocodiles', 'diseased rats', 'kobolds', 'cultists', 'bandits', 'vagabonds', 'mercenaries', 'corrupt guards', 'theives', 'acolytes of a dark god', 'cannibals', 'slavers', 'raiders']
var amountEnemy = ['a horde', 'a group', 'an army', 'a pack', 'a small band', 'a pair', 'a family', 'an assembly', 'a fighting company', 'a platoon', 'a nest', 'a band', 'a gang', 'a small group', 'a couple']

var uniqueEnemy = ['an ancient dragon hidden in a mountain', 'a fire-breathing dragon', 'a ruthless necromancer and their undead hordes', 'a lich with bones of black crystal', 'an iron collosus the size of a mountain', 'a demon king with the head of a goat', 'the demon lord Azazel', 'the demon Baphomet', 'the demon Moloch', 'a Great Wyrm from ages past', 'a dragon with an unusal breath power', 'an avenging angel driven mad my grief', 'a sea serpent with a grudge', 'a massive tunneling worm', 'a golem of diamond', 'a golem of mithril', 'a black worm large enough to swallow a man whole, and with powers of darkness', 'a toad-faced demon', 'an elemental dragon', 'a massive panther with glowing red eyes', 'a cunning sphinx', 'a wizard from a past age', 'the spirit of an old enemy', 'a water horse', 'a fearsome basilisk', 'an eldritch abomination', 'an old god, whom man should not know', 'the eldest medusa', 'a sword possesed by the spirit of its previous owner', 'what seems to be a cloak - until it starts strangling you', 'a young and beautiful witch', 'an ancient and gnarled witch', 'an incompetent but lucky wizard', 'a tall and broad minotaur', 'a trickster spirit that inhabits the area', "an orc war chief who's slain hundreds", 'a corrupted unicorn', 'a hydra with 13 heads', 'a hydra with seven heads', 'a giant wolf bearing a crown', 'a living swamp', 'a cannibal troll', 'a mad king', 'a corrupt sheriff and his cronies', 'the local king of theives', 'a skilled assasin', 'a mage specialized in summoning strange beasts', 'a master fencer with a jealous streak', 'a beggar driven to desperation', 'an angry drunk', 'a beserker astride a monstrous boar', 'an arrogant squire', 'a priest of a war-loving god', 'a protector of wild spaces', 'a mad alchemist', 'a guild enforcer']

function fEnemies() {
	eType = 'unique'
	eTypeNum = Math.random()
	if (eTypeNum < 0.75){
		eType = 'common'
	}
	if (eType == 'common') {
		enemySort = randomPick(comEnemy)
		enemyNum = randomPick(amountEnemy)
		print (enemyNum + ' of ' + enemySort)
	} else {
		enemy = randomPick(uniqueEnemy)
		print(enemy)
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
		text += ncolorA + '.';
	} else {
		text += ncolorA + ' ' + ndesign + ' ' + ncolorB + '.';
	}
	print(text);
}
