/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------Mr Frank---------------------------------------
module.exports = {

SESSION_ID: process.env.SESSION_ID || "zZxn0CiI#_JevAe-xhqkyqbk3yFLtW2MjiNN3344-X_tTQZNXvnM",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //TRUE OR FALSE
OWNER_NUMBER: process.env.OWNER_NUMBER || "918509121704",
MODE: process.env.MODE || "private",  // PRIVATE OR PUBLIC
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/m2jtqrBC/Screenshot-20241216-090753-Video-Maker.jpg", // DO NOT CHANGE
ALIVE_MSG: process.env.ALIVE_MSG || "sᴜʙᴢᴇʀᴏ ᴀɪ ɪs ᴀʟɪᴠᴇ. ᴋᴇᴇᴘ sᴜᴘᴘᴏʀᴛɪɴɢ *Zᴇʀᴏ Cᴏᴅᴇʀs❄️*\n\n> ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴍʀ ꜰʀᴀɴᴋ",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".", // .,!/?
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "『 ＳＵＢＺＥＲＯ - ＭＤ 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

//--------------MADE BY MR FRANK 2024 DEC---------------->-
