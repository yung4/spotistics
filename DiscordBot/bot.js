/*
* @author Chris Yung, yung4@purdue.edu
* @version 1/1/2020
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);

client.on('message', message => {
	if (message.author.bot) return;
	var msgContent = message.content;
	if (message.content === 'ping') {
	  message.channel.send('pong');
	}

	if (msgContent.substring(0, 1) === '!') {
		var args = msgContent.substring(1).split(' ');
		var cmd = args[0];

		args = args.splice[0];
		switch(cmd) {
			case "hello": {
				randGreeting(message);
				break;
			}
			case "nihao": {
				message.channel.send("你好嗎?");
				break;
			}
			case "info": {
				message.channel.send("```\n" + 
					"Hi yall, I'm a bot made by Chris Yung to annoy everyone!\n" + 
					"If you want to turn me off, you can't! Chris isn't that smart.\n" + 
					"```");
				break;
			}
			case "greet": {
				randGreeting(message);
				break;
			}
			case "help": {
				help(message);
				break;
			}
			case "joke": {
				randJoke(message);
				break;
			}
		}
	} else if (msgContent.toLowerCase().search("im ") != -1 || msgContent.toLowerCase().search("i'm ") != -1) {
		var splitMsg = msgContent.split(" ");
		var botMessage = '';
		var test = '';
		var i;
		var length; 
		var print; 
			
		for (i = 0; i < (splitMsg.length); i++) {
			if (splitMsg[i].toLowerCase().search("im") != -1 || splitMsg[i].toLowerCase().search("i'm") != -1) {
				break;
			}
		}

		if (splitMsg[i + 1] == null) {
			return;
		}

		if ((splitMsg.length - i) > 3) {
			print = false;
		} else {
			print = true;
		}

		if (splitMsg[i + 2] != null) {
		  botMessage = "Hi " + splitMsg[i + 1] + " " + splitMsg[i + 2] + ", I'm dad bot!  :sunglasses:";
		} else {
		  botMessage = "Hi " + splitMsg[i + 1] + ", I'm dad bot!  :sunglasses:";
		}
	
		if (print == true) {
			message.channel.send(botMessage);
		}
	} else if (msgContent.toLowerCase().search("er") != -1) {
		var splitMsg = msgContent.split(" ");
		var botMessage = '';
		var word = '';
		var i;
		var found = false;

		for (i = 0; i < splitMsg.length; i++) {
			splitMsg[i] = splitMsg[i].concat(" ");
			if (splitMsg[i].toLowerCase().search("er ") != -1) {
				word = splitMsg[i].substring(0, (splitMsg[i].length - 1));
				found = true;
				break;
			}
		}

		if (found == false) {
			return; 
		}
		if (word == "her") {
			return;
		}
		if (word.length < 4) {
			return;
		}

		botMessage = word.substring(0, 1).toUpperCase() + word.substr(1).toLowerCase() + "? I hardly know her!  :laughing:";

		message.channel.send(botMessage);
	}
});

function randGreeting(message) {
	var greetings = [
		"Hello there!",
		"Hi, I'm dad bot!",
		"How are you doing?",
		"你好嗎？",
		"beep borp i'm a bot  :robot:",
		"Helloooo",
		"beep borp i'm a bot  :robot:  what can i do you for?  :wink:"
	];

	var randInt = Math.floor(Math.random() * greetings.length); 

	try {
		message.channel.send(greetings[randInt]);
	} catch (error) {
		console.log("Error: " + error);
	}
	
}

function help(message) {
	var botMessage = (
		">>> " +
		"Welcome to the help menu!\n" +
		"**!hello** \n" +
		"Greets you with a variety of welcome messages.\n" +
		"**!info** \n " + 
		"Gives you a bunch of useless information!\n"
	);

	message.channel.send(botMessage);
}

function randJoke(message) {
	var jokes = [
		"dad joke",
		"another dad joke"
	];

	var randInt = Math.floor(Math.random() * jokes.length);

	message.channel.send("Here's a joke for you!\n*" + jokes[randInt] + "*"); 
}