var Discord = require('discord.js');

var botName = require('./package.json');

var bot = new Discord.Client();

var servers = {};

const YTDL = require("ytdl-core");

function play(connection, message){
    var server = servers[message.guild.id];
    
    server.despatcher = connection.playStream(YTDL(server.queue[0],{filter: "audioonly"}));
    
    server.queue.shift();
    
    server.despatcher.on("end", function(){
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
       });
   } 

bot.on('message', message =>{

    // Variables

    var sender = message.author; //The person who sent the message

    var msg = message.content;

    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "482828147155402752" && message.channel.id === "496384836156653588"){

        if(msg.startsWith('>', 0)){

            if(msg === prefix + "ping" && message.channel.id === "496384836156653588"){

                message.channel.send(sender + 'pong!!!!!') // Sends a message to the channel, with the content

            }

            else{

                message.channel.send(sender + "Hey, I only understand >bang right now. More will be added when my creator is free. :) ")

            }

        }
            
           case "play":
                 if (!args[1]) {
                   message.channel.sendmessage("please provide a link");
                   return;
               } 
        
                 if(!message.member.voiceChannel) {
                     message.channel.sendmessage("you must be in a voice channel");
               } 
        
                if(!servers[message.guild.id]) server[message.guild.id]= {
                    queue: [] 
               };
        
                var server = servers[message.guild.id];
        
                server.queue.push(args[1]);
        
                if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                    play(connection, message);
                    
              });
              break;
             case "skip":
                  var server = servers[message.guild.id];
        
                  if (server.despatcher) server.despatcher.end();



        


        
        else{

            message.delete();

            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");

        }

    }

});

bot.login(process.env.BOT_TOKEN)
