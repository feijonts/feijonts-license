const Discord = require("discord.js");
const mysql = require('mysql');

module.exports = {
    name: 'adduser',
    execute(message, args, connection) {
        message.delete();
        var morsmordreRoles = [
            '[🔱] Feijonts'
        ]
        var hasRole = false;
        morsmordreRoles.forEach(findrole => {
            if (message.member.roles.cache.some(role => role.name === findrole)) hasRole = true;
        });
        if (hasRole) {
            var discordidentification = args[0];
			var ip = args[1];
			var name = args[2];
			var sql = "INSERT INTO users ( iddiscord, nameserver, ip ) VALUES ('" + discordidentification + "','" + name + "', '" + ip + "')";
			connection.query(sql, function (result) {   
	  			console.log("Licença adicionada com sucesso");
			});
            const adduserEmbed = new Discord.MessageEmbed()
                .setTitle(`Nova licença adicionada`)
                .setTimestamp()
                .setColor(3092790)
                .addFields({
                    name: '>>> IP adicionado',
                    value: `**${ip}**`,
                    inline: true
                }, {
                    name: '>>> Servidor',
                    value: `**${name}**`,
                    inline: true
                })
            message.channel.send(`${message.author} | Licença foi adicionada com sucesso em nosso banco de dados.`).then(msg => {
                msg.delete({
                    timeout: 5000
                })
            });
            message.guild.channels.cache.get(`891871989847953498`).send(adduserEmbed);
        }
    }
};