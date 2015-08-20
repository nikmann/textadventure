$(document).ready(function() {
	var userGenerator = function(){
		var firstNames = ["Mikey", "Spizzle", "Fez", "Rando", "Sharkey", "Chip", "PJ", "Karen", "Terry", "Orange", "BooBoo", "Graeahaeme", "Lumpy", "Corky", "Pixie", "Sal", "Pokey", "Pluto", "Moon", "Rusty", "Miguel", "Angel", "Spartacus", "Radioactive", "Jeffrey", "Cher", "Michelle", "Parallel", "Ugly", "Spirit", "Cowboy", "Hazel", "Stagger", "Gucci", "Cyrus", "Doc", "Esther", "Depeche", "Hamlet", "Opportunity", "David", "Shaft", "Mysterious", "Alleycat", "Crystal", "Scruffy", "Dizzy", "Thin", "Cramsy", "Tweedle", "Ironside", "Gar", "Damien", "Nico", "Vic", "Windham",  "Xerxes", "Yo!", "Zaphod", "Precious", "Teeeeefa", "Aeris 'Aerith'", "Sakura", "Chun Li", "Crumbum", "Chareth", "Crindy", "Glen", "Dieter", "Rex", "Race", "Triana", "Brock", "Tuesday"];
		var lastNames = ["McGarrity", "O'Halaran", "Hardboil", "Rosencrantz", "Brickhouse", "Nerdlinger", "Stegosaurus", "Pancakes", "Floopydoop", "of Seville", "Weatherman", "Dentarthurdent", "Jackson", "Gunderson", "Shackleford", "Charmquark", "Weinerslave", "Skinner", "Parallel", "Noisewater", "Perignon", "Bubblebath", "Danger", "Nightshade", "Hightower", "Buttsteak", "Snow", "Lee", "Bandersnatch", "Elaine", "Venture", "Stranger", "Metheney", "Crandall", "Lizzy", "Bedwetter", "Banner", "Karling", "Muhnarnar", "Kringle", "Guevarra", "Hyphenated", "Cutestory", "Fingerbottom", "Piece of Toast", "Orpheus", "Cook", "Simpson", "Cusack", "Yesterday", "Kropotkin"];
		var namePrefix = ["Lady", "Dame", "Dr.", "Prof", "The", "Mr.", "Duke", "Ser", "Duchess", "Count", "Countess", "Sir", "Master", "Father", "Mother", "Brother", "Sister", "Captain", "Not", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","",""];
		var nameSuffix = ["I", "II", "III", "IV", "V", "VI", "VII", "XIV", "XXI", "XXVIII", "Esq", "LLC", ".com", "Jr", "Sr", "Jr Jr", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","",""]; 	
		var nickName = ["'Whiskey Dick'", "'Maverick'", "'Danger'", "'Dead Eye'", "'David'", "'Gun Show'", "'Terminator'", "'Showtime'", "'Saucy Jack'", "'Shaft'", "'The Funny One'", "'The 5th Beatle'", "'Fun Bags'","'Dumptruck'", "'The Wolf'", "'Psycho'", "'Dreamboat'","'Stick'","'El Diablo'", "'Normal'","'Turkey neck'","'Whistlin' Dixie'","'Snacks'","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","",""];					  
		var personalityTrait = ["is socially awkward", "is greedy", "is really attractive", "is really ugly", "is lucky", "is a moron", "is hexed", "is romantic", "comes from a rich family", "is sickly", "is brilliant", "is tactless", "seems angry all the time", "is a total bummer", "comes from a poor family", "missing one or more limbs", "can't stop eating", "is magical", "tries to be a hero all the time", "a good cook", "is shy"];
		var userAge = ["child", "teenager", "young adult", "adult", "old", "ancient"];
		var homeTown = ["Orlando", "Chennai", "Jinquan"];
		var personality = personalityTrait[Math.floor(Math.random() * personalityTrait.length)];
		var home = homeTown[Math.floor(Math.random() * homeTown.length)];
		var age = userAge[Math.floor(Math.random() * userAge.length)];

		var concatenator = function(){
			var fn = firstNames[Math.floor(Math.random() * firstNames.length)];
			var ln = lastNames[Math.floor(Math.random() * lastNames.length)];
			var pf = namePrefix[Math.floor(Math.random() * namePrefix.length)];
			var sf = nameSuffix[Math.floor(Math.random() * nameSuffix.length)];
			var nn = nickName[Math.floor(Math.random() * nickName.length)];
			return pf + " " + fn + " " + nn + " " + ln + " " + sf + " ";
		}
		var userName = concatenator();
		return "Mysterious forces have convened to create for you the perfect avatar. Behold! Name: " + userName + ", Age: " + age + ", Hometown: " + home + ". This character " + personality + ".";

	}
});