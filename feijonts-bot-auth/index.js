const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

const colors = require('colors');

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: config.database.HOST,
    user: config.database.USER,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
    console.log('[CLIENT] -', '[STARTED]'.green);
    connection.connect((err) => {
        if (err) {
            console.log('[MYSQL] -', '[ERROR]'.red);
        } else {
            console.log('[MYSQL] -', '[STARTED]'.green);
        }
    })
});

client.on('message', async message => {
    if (!message.content.toLowerCase().startsWith(config.main.PREFIX) || message.author.bot) return;
    const args = message.content.slice(config.main.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try {
        command.execute(message, args, connection);
    } catch (error) {
        console.error(error);
        message.reply('Any error ocurred');
    }
});