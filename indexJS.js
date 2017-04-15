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

var characteristics = ['abrasive', 'absent-minded', 'adaptable', 'adventurous', 'agreeable', 'agressive', 'aimless', 'airy', 'all-loving', 'aloof', 'amoral', 'ambitous', 'angry', 'anxious', 'apathetic', 'argumentative', 'arrogant', 'artistic', 'articulate', 'aspiring', 'assertive', 'athletic', 'attractive', 'barbaric', 'benevolent', 'bewildered', 'bizarre', 'bland', 'boisterous', 'bold', 'breezy', 'brilliant', 'brutal', 'businesslike', 'busy', 'calculating', 'callous', 'calm', 'cantankerous', 'capable', 'captivating', 'careless', 'caring', 'casual', 'cautious', 'charismatic', 'charming', 'cheerful', 'childish', 'clumsy', 'competitive', 'cold', 'concilliatory', 'conceited', 'confident', 'conformist', 'confused', 'conscientious', 'considerate', 'contemplative', 'cooperative', 'courageous', 'courteous', 'cowardly', 'clever', 'crass', 'creative', 'crippled', 'crude', 'cruel', 'cultured', 'cunning', 'curious', 'cute', 'cynical', 'daring', 'debonair', 'decent', 'deceptive', 'decisive', 'dedicated', 'delicate', 'desperate', 'destructive ', 'determined', 'devious', 'dignified', 'disciplined', 'disconcerting', 'discreet', 'dishonest', 'disrespectful', 'distractible', 'disturbing', 'dogmatic', 'domineering', 'dour', 'down-to-earth', 'dramtic', 'dreamy', 'driven', 'droll', 'dull', 'dutiful', 'dynamic', 'earnest', 'earthy', 'educated', 'egocentric', 'elegant', 'emotional', 'empathetic', 'energetic', 'enigmatic', 'enthusiastic', 'erratic', 'faithful', 'fanatical', 'far-sighted', 'fatalistic', 'fearful', 'feminine', 'fickle', 'flamboyant', 'flexible', 'focused', 'foolish', 'forceful', 'forgetful', 'forgiving', 'formal', 'forthright', 'freethinking', 'friendly', 'frightening', 'frugal', 'fun-loving', 'funny', 'gallant', 'genrous', 'gentle', 'genuine', 'gloomy', 'good-natured', 'gracious', 'greedy', 'grim', 'grumpy', 'guileless', 'gullible', 'hardworking', 'haughty', 'hearty', 'helpful', 'heroic', 'hesitant', 'high-minded', 'high-spirited', 'honest', 'honorable', 'humble', 'hypnotic', 'idealistic', 'ignorant', 'imaginative', 'impatient', 'impersonable', 'imposing', 'impressionable', 'impulsive', 'incisive', 'inconsiderate', 'incorruptable', 'indecisive', 'individualistic', 'innovative', 'inoffensive', 'insane', 'insecure', 'insightful', 'insouciant', 'intelligent', 'intellectual', 'intense', 'intimidating', 'intuitive', 'irreverant', 'irritable', 'jovial', 'kind', 'knowledgeable', 'lazy', 'leaderly', 'logical', 'lonely', 'lovable', 'loyal', 'lucky', 'magnanimous', 'masculine', 'mature', 'meddlesome', 'mellow', 'messy', 'methodical', 'meticulous', 'miserable', 'miserly', 'misguided', 'modest', 'modern', 'moody', 'morbid', 'mystical', 'naive', 'narcissistic', 'narrow-minded', 'neat', 'neurotic', 'noncommittal', 'obnoxious', 'observant', 'obsessive', 'old-fashioned', 'optimistic', 'organized', 'outspoken', 'paranoid', 'parental', 'passionate', 'patient', 'patriotic', 'peaceful', 'perceptive', 'perfectionist', 'personable', 'persuasive', 'petulant', 'placid', 'playful', 'pompous', 'popular', 'practical', 'precise', 'predictable', 'preoccupied', 'prescient', 'pretentious', 'prim', 'principled', 'private', 'progressive', 'protective', 'proud', 'prudent', 'purposeful', 'quiet', 'rational', 'reflective', 'regretful', 'repentant', 'relaxed', 'reliable', 'religious', 'reserved', 'resourceful', 'respectful', 'responsible', 'restrained', 'retiring', 'rowdy', 'sadistic', 'sarcastic', 'secretive', 'self-concious', 'scrupulous', 'selfish', 'selfless', 'self-critical', 'self-denying', 'self-sufficient', 'sensitive', 'sensual', 'sentimental', 'serious', 'shrewed', 'silly', 'simple', 'skeptical', 'skilled', 'sleazy', 'sociable', 'solemn', 'somber', 'sophisticated', 'stern', 'stoic', 'strict', 'strong', 'strong-willed', 'stubborn', 'studious', 'stylish', 'suave', 'superstitious', 'suspicious', 'sympathetic', 'tidy', 'timid', 'tolerant', 'tough', 'tractable', 'trendy', 'trusting', 'twitchy', 'uncomplaining', 'unchanging', 'undemanding', 'unhurried', 'uninhibited', 'understanding', 'unlucky', 'vacuous', 'vindictive', 'vivacious', 'vulnerable', 'weak', 'well-bred', 'well-meaning', 'well-read', 'well-rounded', 'whimsical', 'wise', 'witty']

// Y/N
function yesno() {
 var yn = Math.random()
 var answer = ''
 var ynAnd = [', and...', ', but...', ', because...']
 var ynAndChance = Math.random()
 var chance = document.getElementById("slider").value / 20
 yn = yn + chance
 if (yn > 1) {
  answer = 'yes'
 } else {
  answer = 'no'
 }
 if (ynAndChance > 0.5) {
  answer = answer + randomPick(ynAnd)
 }
 print(answer)
}

function showValue(newValue) {
 newValue = newValue * 5
 document.getElementById("chance").innerHTML=newValue + '% yes'
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

var hairDescs = ['very long', 'long', 'ordinary', 'short', 'very short', 'extremely curly', 'curly', 'frizzy', 'poofy',  'wavy', 'straight', 'tangled', 'lustrous', 'spiked', 'asymetrical', 'bouncy', 'braided', 'vivid', 'elegant', 'coarse', 'crimped', 'dyed', 'feathered', 'full', 'thick', 'untidy', 'frosted', 'glossy', 'limp', 'loose', 'messy', 'luxuriant', 'cute', 'shaggy', 'sun-streaked', 'elaborately coiffed', 'nicely done-up', 'windswept', 'wiry', 'plaited']

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

var roles = ['administrator', 'adventurer', 'advisor', 'agent', 'ambassador', 'alchemist', 'analyst', 'animal trainer',  'antihero', 'apothocary', 'arbiter', 'archeologist', 'archer', 'artisan', 'artist', 'assassin', 'astronaut', 'athlete', 'bandit', 'barbarian', 'barber', 'bard', 'beggar', 'beserker', 'biologist', 'bounty hunter', 'brigand', 'captain', 'carpenter', 'chancellor', 'charlatan', 'cleric', 'clerk', 'counsellor', 'courtesan', 'craftsman', 'criminal', 'dancer', 'detective', 'diplomat', 'doctor', 'duelist', 'empath', 'engineer', 'exile', 'explorer', 'farmer', 'fighter', 'gambler', 'guardian', 'gladiator', 'gunslinger', 'harbringer',  'healer', 'hero', 'hired gun', 'hunter', 'impersonator', 'informant', 'information broker', 'intellectual', 'inventor', 'jester', 'judge', 'knight', 'laborer', 'leader', 'magic user', 'magician', 'maniac', 'marauder', 'marshal', 'mason', 'mastermind', 'mentor', 'mercenary', 'merchant', 'messenger', 'miner', 'monk', 'mystic', 'ninja', 'nomad', 'officer', 'outcast', 'paladin', 'performer', 'philosopher', 'pilot', 'pirate', 'poet', 'police', 'politician', 'priest', 'prostitute', 'psychic', 'ranger', 'rogue', 'sailor', 'salaryman', 'samurai', 'scientist', 'scholar', 'servant', 'settler', 'shaman', 'shopkeep', 'singer', 'smuggler', 'soldier', 'spy', 'strategist', 'surveon', 'survivor', 'tactician', 'teacher', 'technician', 'thief', 'thrall', 'thug', 'tinkerer', 'tracker', 'trader', 'trickster', 'vigilante', 'wanderer', 'warden', 'warlord', 'warrior', 'writer', 'zealot']

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

var quirks = ['believe the end is near', 'know a secret', 'can juggle', "can't swim", 'are afraid of the dark', 'collect something as a hobbby', 'love games and jokes', 'get lost easily',  'have unusually keen senses', 'have an unusual form of transportation', 'are afraid of heights', 'have tea every afternoon', 'have an allergy', 'have a big appetite', 'have a great sense of direction', "don't understand sarcasm", 'have a distinct accent', 'give everyone nicknames', 'know a lot of weird trivia', 'like scary stories', 'are a vegetarian', 'laugh a lot', 'are overly friendly', 'have a sensitive stomach', 'are double-jointed', 'are more honest than maybe they should be', 'are extremely passionate about politics', 'carry a lucky charm with them everywhere', 'have a lovely singing voice', 'once dyed their hair an unusual color', 'can hold their breath a really long time', 'have a younger sibling', 'have a lot of siblings', 'know a lot about a particular type of animal', "can't stop talking", 'fret about ethics', 'talk with their hands', 'have an annoying laugh', 'snore loudly', 'tell corny jokes', 'talk to themselves', 'whistle when bored', 'use foreign words gratuitously', 'often forget what they were saying partway through', 'twitch occasionally', 'have a nasal voice', 'speak in a breathy tone', 'have a lisp', 'are always chewing something', "can't sit still", "won't look you in the eye", 'are always asking for confirmation', 'speak in an old-fashioned way', 'get cold easily', 'fuss with their appearance', "tap their chin when they're thinking", 'have a foul mouth', 'stutter when nervous', 'have a big nose', 'are staggeringly beautiful', 'have big ears', 'have unusually-shaped ears', 'wear noticeable earrings', 'have perfect white teeth', 'have a crooked smile', 'have facial piercings', 'wear glasses', 'wear a mask', 'have a large scar across their face', 'wear face paint', 'have a delicate face', 'have flowers in their hair', 'have an unusual hairstyle', 'blush easily', 'can jump really high', 'can hold their breath for a really long time', 'have a large tattoo', 'have six toes on their left foot', 'are rather top-heavy', 'are surprisingly strong', 'have a prosthetic hand', 'grind their teeth in thier sleep', 'have an embarrassing scar', 'have weatherbeaten skin', 'wear loose, flowing clothing', 'wear clothing all of one color', 'wear clothing unusual for their occupation', 'wear lots of bangles and jewelry', 'wear clothing with a great many pockets', 'prefer the clothing of the opposite sex', 'are possesed', 'are cursed', 'have only two teeth', 'have a gold tooth', 'have only one leg', 'have a limp', 'have a slight hunchback', 'have trouble with back pain', 'have an animal companion', 'are fiercely loyal', 'were an illegitimate child', 'were raised in a cult', 'have an alterior motive', 'are bearing a grudge', 'have a prophecy about them', 'were born under a bad omen', 'are cold an calculating', 'are stupidly brave', 'are blessed by a god', 'have an interesting birthmark', 'come from a well-known family', 'are dangerously curious', 'were once a slave', 'are a natural diplomat', 'arwe incredibly lucky', 'are an orphan', 'are strangely alluring', 'are devoted to a dead god', 'are impervious to pain', 'are a bit unhinged', 'are adopted', 'are an avid reader', 'are a child of the streets', 'are a natural-born leader', 'have friends in high places', 'have friends in low places', 'never show strong emotion', 'never give up', 'have a twin', 'speak in a stilted, formal way', 'have special dietary needs', 'compulsively interrupt people while they\'re talking', 'tend to take stupid bets or dares', 'have an unlikely addiction', 'habitually wear a strange or unusual accessory', 'speak in the third person', 'speak in a monotone', 'don\'t talk much', 'are easily distracted', 'speak in metaphors', 'were artificially conceived', 'enjoy ancient languages', 'collect swearwords', 'adopt dramatic poses', 'always lean on things', 'are always slouching', 'wear strong perfume or cologne', 'smell bad', 'are fiercely loyal', 'were raised in a cult', 'have an alterior motive', 'are bearing a grudge', 'are adopted', 'are an avid reader', 'keep the old ways',  'prefer to rely on their instincts', 'enjoy giving gifts', 'laugh at inappropriate times', 'always have to have the latest newfangled invention', 'never talk about their past', 'are wary of publicity', 'really hate losing', 'hate "roughing it"', 'are extremely disorganized', 'follow a complex code of honor', 'have an unusual obsession', 'have an over-active libido', 'are asexual', 'have an unusual sexual preference', 'are always flirting', 'are an adrenaline junkie', 'have a morbid fascination with death and disease', 'are a bit paranoid', 'struggle with delusions', 'are well-off', 'fret about their health']

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

var aliens = ['hive-mind', 'animal-like', 'cannibalistic', 'crystaline', 'immobile', 'xenophobic', 'ancient', 'fluffy', 'three-limbed', 'five-limbed', 'hydraulically powered', 'asexual', 'metamorphasizing', 'sequential hermaphrodite', 'shelled', 'skeleton-less', 'adaptive', 'psyonic', 'ascended', 'gentically engineered', 'cyborg', 'fungus-like', 'plant-like', 'artificial', 'robot', 'helium-filled', 'silicon-based', 'differently-gendered', 'uploaded', 'parasitic', 'symbiotic', 'heavy-gravity', 'low-gravity', 'multi-individual colony', 'radiation-eating', 'caste-based', 'humanoid', 'space-dwelling', 'aquatic', 'desert-dwelling', 'plains-dwelling', 'arboreal', 'burrowing', 'swamp-dwelling', 'flying', 'other-planar', 'clawed', 'poisonous', 'spiny', 'armored', 'quadrepedal', 'six-limbed', 'eight-limbed', 'genetically engineered', 'furry', 'reptilian', 'insectoid', 'feathered', 'small', 'large', 'radially symmetrical', 'tentacled', 'many-eyed', 'blobby', 'fragile', 'gender dimorphic', 'carnivorous', 'herbivorous', 'scavenger', 'non-biological', 'non-physical', 'long-limbed', 'squat', 'nocturnal', 'speedy', 'slow-moving', 'with a hole in their center', 'rapdily evolving', 'technologically backwards', 'godlike', 'hyper-advanced', 'beaked', 'deeply spiritual', 'polyamorous', 'expantionist', 'dancing', 'clairvoyant', 'time-travelling', 'extinct', 'highly artistic', 'highly mercantile', 'cloning-based', 'infection-based']

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

 var like = ['a duck', 'a cat', 'a bat', 'a dog', 'a horse', 'a deer', 'a tapir', 'an alligator', 'an octopus', 'a squid', 'a slug', 'a dragonfly', 'a sardine', 'an elephant', 'a snail', 'a turtle', 'a snake', 'a stingray', 'a kangaroo', 'a chameleon', 'a pelican', 'a worm', 'a beetle', 'a mass of spaghetti', 'a blob', 'an ape', 'an eagle', 'a weasel', 'a rat', 'a frog', 'a monkey', 'a fish', 'a scorpion', 'a starfish', 'an emu', 'a lion', 'a rhino', 'a hippo', 'a wombat', 'a kangaroo mouse', 'a platypus', 'an otter', 'a bear', 'a giraffe', 'a llama', 'a spider', 'an anenome', 'a sponge', 'a hummingbird', 'a cow', 'an antelope', 'a camel', 'a pig', 'a shark', 'a raccoon', 'a dolphin', 'a turtle', 'a crab', 'a mouse', 'a koala', 'a sloth', 'an armadillo', 'an anteater', 'a hummingbird', 'a goose', 'an owl', 'a chicken', 'a crane', 'a jellyfish', 'a mole', 'a rabbit', 'a robin', 'a lizard', 'a centaur', 'a balloon', 'a raptor']

var but = ['on stilts', 'inside-out', 'capable of flight', 'aquatic', 'covered in spines', 'with many more limbs', 'burrowing', 'with a horrible disease', 'standing upright', 'partially melted', 'upside-down', 'from the mind of H. R. Giger', 'really fluffy', 'gaunt and bony', 'with swelling in unsettling places', 'more dangerous', 'as designed by a young girl', 'inflatable', 'fatter, with stubby legs', 'triangular', 'built for speed', 'frilly', 'keenly intelligent', 'arboreal']

var head = ['one eye', 'no eyes', 'huge eyes', 'slitted eyes', 'tiny eyes', 'a small beak', 'a long beak', 'a long snout', 'a forked tongue', 'a long neck', 'multiple heads', 'pointed ears', 'a great many eyes', 'eye stalks', 'antennae', 'tusks', 'a forlorn expression', 'large flappy ears', 'a huge nose', 'a muscular trunk', 'a short snout', 'a large nose', 'no nose', 'a great many teeth', 'no teeth', 'a huge mouth', 'a probiscus', 'a tentacled face']

var extras = ['retractable claws', 'six limbs', 'a shaggy mane', 'a pair of antlers', 'horns', 'fangs', 'giant feet', 'tentacles', 'a prehensile tail', 'hooves', 'bony scutes', 'delicate whiskers', 'loose folds of skin', 'glows', 'changes color', 'can leap great distances', 'is controlled by a tiny parasite', 'a sail fin', 'a heavy shell', 'frills']

var fight = ['sharp quills', 'the ability to discharge electricity', 'can appear more dangerous than it really is', 'can move surprisingly quickly', 'emits a noxious gas', 'a poisonous bite', 'incredible endurance', 'flees at the first sign of danger', 'can camouflage itself', 'wickedly sharp claws', 'shoots acid', 'poisonous spines', 'bony spurs', 'exudes a paralytic from its skin', 'shrieks like a banshee', 'is oddly hypnotizing', 'can move faster than the eye can see', 'plays dead very convincingly', 'emits a terrible smell when startled', 'buries itself', 'exceedingly tough scales']

var cover = ['is covered in long, shaggy fur', 'is completely bald', 'is covered in soft, velvety down', 'is very wrinkly', 'has feathers', 'has patches of scraggly fur', 'has curly fur', 'has short fur', 'has densely matted fur', 'has thick scales', 'has shiny scales', 'has tough, leathery skin', 'has delicate skin', 'has a covering of mucuous', 'is slimy', 'has long, dazzling plumage', 'is covered in tiny scales, is soft to the touch,', 'has tough, rubbery skin']

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
