const Discord = require("discord.js");
const mysql = require('mysql');

module.exports = {
    name: 'mudarip',
    execute(message, args, connection) {
        message.delete();
        var discordid = message.author.id
        var ip = args[0];
        if (!ip) return;
        connection.query(`SELECT * FROM users WHERE iddiscord = '${discordid}'`, async (err, rows) => {
            if (err) throw err;

            if (rows.length <= 0) {
                await message.channel.send(`>>> ${message.author}, Lincença não encontrada no banco de dados.`)
            } else {
                await connection.query(`UPDATE users SET ip = '${ip}' WHERE iddiscord = '${discordid}'`)
                const ipchangeEmbed = new Discord.MessageEmbed()
                    .setTitle(`Ip alterado`)
                    .setTimestamp()
                    .setColor(3092790)
                    .addFields({
                        name: '>>> IP alterado',
                        value: `**${ip}**`,
                        inline: true
                    }, {
                        name: '>>> Discord ID',
                        value: `**${discordid}**`,
                        inline: true
                    })
                await message.channel.send(`${message.author} | Seu ip foi alterado com sucesso.`).then(msg => {
                    msg.delete({
                        timeout: 5000
                    })
                });
                await message.guild.channels.cache.get(`891871989847953498`).send(ipchangeEmbed);
            }
        })
    }
};