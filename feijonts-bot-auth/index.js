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

const fs = require('fs');

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

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if (message.content.toLowerCase() == ".") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "..") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "...") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "....") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == ".....") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "b") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "c") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "d") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "e") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "f") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "g") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "h") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "i") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "j") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "l") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "m") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "n") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "o") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "p") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "q") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "r") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "s") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "t") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "u") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "v") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "x") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "z") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "aa") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "aaa") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "aaaa") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "aaaa") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "k") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "`") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "a") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "`") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "``") {
        message.delete();
    }
})
client.on('message', message =>{
    if (message.content.toLowerCase() == "f") {
        message.delete();
    }
})

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', (msg) => {
    if (msg.content.toLowerCase().startsWith(config.main.PREFIX + "setup-ticket")) {
        msg.delete();
        var roles = [
            '[🔱] Feijonts',
            '[💎] Administrador',
            '[👑] Moderador',
            '[🔨] Suporte'
        ]
        var hasRole = false;
        roles.forEach(findrole => {
            if (msg.member.roles.cache.some(role => role.name === findrole)) hasRole = true;
        });
        if (hasRole === true) {
            const embed = {
                "title": "Ticket Feijonts Bot",
                "description": "Para abrir um ticket reaja no emoji abaixo.",
                "color": 3092790
            };
            msg.channel.send({
                embed
            }).then(ticketMsg => {
                var ticket_msg_id = ticketMsg.id;

                ticketMsg.react('📨');

                client.on('raw', dados => {
                    if (dados.t != 'MESSAGE_REACTION_ADD' && dados.t != 'MESSAGE_REACTION_REMOVE') return;
                    if (dados.d.message_id != `${ticket_msg_id}`) return;
                    if (dados.d.user_id === '720445972672413737') return;

                    if (dados.t === 'MESSAGE_REACTION_ADD') {
                        if (dados.d.emoji.name === '📨') {
                            let a = client.users.cache.get(dados.d.user_id);
                            msg.guild.channels.create(`t-${a.username}`, {
                                type: "text",
                                parent: "859127986326470698",
                                permissionOverwrites: [{
                                    id: dados.d.user_id,
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128666705756190"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128620671827968"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128582252003388"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("834203415852220468"),
                                    deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                }
                                ]
                            }).then(ticketChannel => {
                                const embed = {
                                    "title": `Olá, ${a.username}`,
                                    "description": "Seja bem-vindo ao sistema de Ticket.\n Sinta se a vontade para tirar qualquer dúvida.",
                                    "color": 3092790,
                                };
                                ticketChannel.send({
                                    embed
                                }).then(channelTicketMsg => {
                                    channelTicketMsg.react('🔒');
                                    var channelTicketMsg_id = channelTicketMsg.id;

                                    client.on('raw', conteudo => {
                                        if (conteudo.t != 'MESSAGE_REACTION_ADD' && dados.t != 'MESSAGE_REACTION_REMOVE') return;
                                        if (conteudo.d.message_id != `${channelTicketMsg_id}`) return;
                                        if (conteudo.d.user_id === `720445972672413737`) return;

                                        if (conteudo.t === 'MESSAGE_REACTION_ADD') {
                                            if (conteudo.d.emoji.name === '🔒') {
                                                ticketChannel.send(`>>> Fechando o canal em **5** segundos`);
                                                setTimeout(() => {
                                                    ticketChannel.overwritePermissions([
                                                        {
                                                            id: dados.d.user_id,
                                                            deny: ['VIEW_CHANNEL'],
                                                        },
                                                        {
                                                            id: msg.guild.roles.cache.get("834203415852220468"),
                                                            deny: ['VIEW_CHANNEL'],
                                                        }
                                                    ]);
                                                    ticketChannel.setName(`closed-${a.username}`)
                                                    ticketChannel.send(`>>> O ticket foi fechado, para excluir o canal reaja na mensagem abaixo.`).then(async (lastMsg) => {
                                                        lastMsg.react('🚫')
                                                        var lastMsgId = lastMsg.id
                                                        client.on('raw', async (data) => {
                                                            if (data.t != 'MESSAGE_REACTION_ADD' && data.t != 'MESSAGE_REACTION_REMOVE') return;
                                                            if (data.d.message_id != `${lastMsgId}`) return;
                                                            if (data.d.user_id === `720445972672413737`) return;

                                                            if (data.t === 'MESSAGE_REACTION_ADD') {
                                                                if (data.d.emoji.name === '🚫') {
                                                                    ticketChannel.send(`>>> Deletando canal em **5** segundos.`)
                                                                    setTimeout(() => {
                                                                        ticketChannel.delete();
                                                                    }, 5000)
                                                                }
                                                            }
                                                        })
                                                    })
                                                }, 5000)
                                            }
                                        }
                                    })
                                })
                            })
                        }
                    }
                })
            })
        } else {
            return;
        }
    }
})

client.on('message', (msg) => {
    if (msg.content.toLowerCase().startsWith(config.main.PREFIX + "setup-denuncia")) {
        msg.delete();
        var roles = [
            '[🔱] Feijonts',
            '[💎] Administrador',
            '[👑] Moderador',
            '[🔨] Suporte'
        ]
        var hasRole = false;
        roles.forEach(findrole => {
            if (msg.member.roles.cache.some(role => role.name === findrole)) hasRole = true;
        });
        if (hasRole === true) {
            const embed = {
                "title": "Denuncia Feijonts Bot",
                "description": "Para abrir uma denuncia reaja no emoji abaixo.",
                "color": 3092790
            };
            msg.channel.send({
                embed
            }).then(ticketMsg => {
                var ticket_msg_id = ticketMsg.id;

                ticketMsg.react('📨');

                client.on('raw', dados => {
                    if (dados.t != 'MESSAGE_REACTION_ADD' && dados.t != 'MESSAGE_REACTION_REMOVE') return;
                    if (dados.d.message_id != `${ticket_msg_id}`) return;
                    if (dados.d.user_id === '720445972672413737') return;

                    if (dados.t === 'MESSAGE_REACTION_ADD') {
                        if (dados.d.emoji.name === '📨') {
                            let a = client.users.cache.get(dados.d.user_id);
                            msg.guild.channels.create(`d-${a.username}`, {
                                type: "text",
                                parent: "859127986326470698",
                                permissionOverwrites: [{
                                    id: dados.d.user_id,
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128666705756190"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128620671827968"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128582252003388"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("834203415852220468"),
                                    deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                }
                                ]
                            }).then(ticketChannel => {
                                const embed = {
                                    "title": `Olá, ${a.username}`,
                                    "description": "Seja bem-vindo ao sistema de denuncia.\n Sinta se a vontade para denunciar qualquer pessoa.",
                                    "color": 3092790,
                                };
                                ticketChannel.send({
                                    embed
                                }).then(channelTicketMsg => {
                                    channelTicketMsg.react('🔒');
                                    var channelTicketMsg_id = channelTicketMsg.id;

                                    client.on('raw', conteudo => {
                                        if (conteudo.t != 'MESSAGE_REACTION_ADD' && dados.t != 'MESSAGE_REACTION_REMOVE') return;
                                        if (conteudo.d.message_id != `${channelTicketMsg_id}`) return;
                                        if (conteudo.d.user_id === `720445972672413737`) return;

                                        if (conteudo.t === 'MESSAGE_REACTION_ADD') {
                                            if (conteudo.d.emoji.name === '🔒') {
                                                ticketChannel.send(`>>> Fechando o canal em **5** segundos`);
                                                setTimeout(() => {
                                                    ticketChannel.overwritePermissions([
                                                        {
                                                            id: dados.d.user_id,
                                                            deny: ['VIEW_CHANNEL'],
                                                        },
                                                        {
                                                            id: msg.guild.roles.cache.get("834203415852220468"),
                                                            deny: ['VIEW_CHANNEL'],
                                                        }
                                                    ]);
                                                    ticketChannel.setName(`closed-${a.username}`)
                                                    ticketChannel.send(`>>> A denuncia foi fechado, para excluir o canal reaja na mensagem abaixo.`).then(async (lastMsg) => {
                                                        lastMsg.react('🚫')
                                                        var lastMsgId = lastMsg.id
                                                        client.on('raw', async (data) => {
                                                            if (data.t != 'MESSAGE_REACTION_ADD' && data.t != 'MESSAGE_REACTION_REMOVE') return;
                                                            if (data.d.message_id != `${lastMsgId}`) return;
                                                            if (data.d.user_id === `720445972672413737`) return;

                                                            if (data.t === 'MESSAGE_REACTION_ADD') {
                                                                if (data.d.emoji.name === '🚫') {
                                                                    ticketChannel.send(`>>> Deletando canal em **5** segundos.`)
                                                                    setTimeout(() => {
                                                                        ticketChannel.delete();
                                                                    }, 5000)
                                                                }
                                                            }
                                                        })
                                                    })
                                                }, 5000)
                                            }
                                        }
                                    })
                                })
                            })
                        }
                    }
                })
            })
        } else {
            return;
        }
    }
})

client.on('message', (msg) => {
    if (msg.content.toLowerCase().startsWith(config.main.PREFIX + "setup-bug")) {
        msg.delete();
        var roles = [
            '[🔱] Feijonts',
            '[💎] Administrador',
            '[👑] Moderador',
            '[🔨] Suporte'
        ]
        var hasRole = false;
        roles.forEach(findrole => {
            if (msg.member.roles.cache.some(role => role.name === findrole)) hasRole = true;
        });
        if (hasRole === true) {
            const embed = {
                "title": "Report Bug Feijonts Bot",
                "description": "Para abrir um ticket reaja no emoji abaixo.",
                "color": 3092790
            };
            msg.channel.send({
                embed
            }).then(ticketMsg => {
                var ticket_msg_id = ticketMsg.id;

                ticketMsg.react('📨');

                client.on('raw', dados => {
                    if (dados.t != 'MESSAGE_REACTION_ADD' && dados.t != 'MESSAGE_REACTION_REMOVE') return;
                    if (dados.d.message_id != `${ticket_msg_id}`) return;
                    if (dados.d.user_id === '720445972672413737') return;

                    if (dados.t === 'MESSAGE_REACTION_ADD') {
                        if (dados.d.emoji.name === '📨') {
                            let a = client.users.cache.get(dados.d.user_id);
                            msg.guild.channels.create(`b-${a.username}`, {
                                type: "text",
                                parent: "859127986326470698",
                                permissionOverwrites: [{
                                    id: dados.d.user_id,
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128666705756190"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128620671827968"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("859128582252003388"),
                                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                },
                                {
                                    id: msg.guild.roles.cache.get("834203415852220468"),
                                    deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                                }
                                ]
                            }).then(ticketChannel => {
                                const embed = {
                                    "title": `Olá, ${a.username}`,
                                    "description": "Seja bem-vindo ao sistema de report bugs.\n Sinta se a vontade para reportar qualquer bug.",
                                    "color": 3092790,
                                };
                                ticketChannel.send({
                                    embed
                                }).then(channelTicketMsg => {
                                    channelTicketMsg.react('🔒');
                                    var channelTicketMsg_id = channelTicketMsg.id;

                                    client.on('raw', conteudo => {
                                        if (conteudo.t != 'MESSAGE_REACTION_ADD' && dados.t != 'MESSAGE_REACTION_REMOVE') return;
                                        if (conteudo.d.message_id != `${channelTicketMsg_id}`) return;
                                        if (conteudo.d.user_id === `720445972672413737`) return;

                                        if (conteudo.t === 'MESSAGE_REACTION_ADD') {
                                            if (conteudo.d.emoji.name === '🔒') {
                                                ticketChannel.send(`>>> Fechando o canal em **5** segundos`);
                                                setTimeout(() => {
                                                    ticketChannel.overwritePermissions([
                                                        {
                                                            id: dados.d.user_id,
                                                            deny: ['VIEW_CHANNEL'],
                                                        },
                                                        {
                                                            id: msg.guild.roles.cache.get("808797193648603227"),
                                                            deny: ['VIEW_CHANNEL'],
                                                        }
                                                    ]);
                                                    ticketChannel.setName(`closed-${a.username}`)
                                                    ticketChannel.send(`>>> O ticket foi fechado, para excluir o canal reaja na mensagem abaixo.`).then(async (lastMsg) => {
                                                        lastMsg.react('🚫')
                                                        var lastMsgId = lastMsg.id
                                                        client.on('raw', async (data) => {
                                                            if (data.t != 'MESSAGE_REACTION_ADD' && data.t != 'MESSAGE_REACTION_REMOVE') return;
                                                            if (data.d.message_id != `${lastMsgId}`) return;
                                                            if (data.d.user_id === `720445972672413737`) return;

                                                            if (data.t === 'MESSAGE_REACTION_ADD') {
                                                                if (data.d.emoji.name === '🚫') {
                                                                    ticketChannel.send(`>>> Deletando canal em **5** segundos.`)
                                                                    setTimeout(() => {
                                                                        ticketChannel.delete();
                                                                    }, 5000)
                                                                }
                                                            }
                                                        })
                                                    })
                                                }, 5000)
                                            }
                                        }
                                    })
                                })
                            })
                        }
                    }
                })
            })
        } else {
            return;
        }
    }
})

client.on('message', message => {
    if (message.channel.id == '859128027183054858') {
        if (message.author.bot) {
            return;
        } else {
            const embedMsg = new Discord.MessageEmbed()
                .setTitle(`***SUGESTÃO***`)
                .setDescription(message.content)
                .setColor(13632027)
                .setTimestamp()
                .setFooter(`Sugestão enviada por ${message.author.username}`)
            message.channel.send(embedMsg).then(msg => {
                msg.react('✅')
                msg.react('❌')
            })
            message.delete();
        }
    }
})

client.login(config.main.TOKEN)