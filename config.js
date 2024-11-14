//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/yeu6a8.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27693798048";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/olcl5p.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tmcFBrMTdLZ0VPWno1TTdSUUI2S3JWU01WT0E2R2orNGdqNjZ1Q2ZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVFUbUg2b1lsa2QrdkVqek9jMHF3aFI3M0JnMFBlL29IeVoxZzU2NjlYZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXS09UZGJPeEhkQVdleHM4V25xMlVpRVJPUHVtbXIyZDE4bnVScVorUldVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaQ2ZObWFaRkRjQ2FpTTFrVFVac1ZZN21JZks0bDVkYkZlMGx6MUNOcURjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDRXF6NTRHdFdKdGhIT29aakNPaURLUzNQWkN6SWtKNS8wNTVqcXkxWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY1dThKL2J4N2NCbnQxZ0xIam9uOS9kQzlHakZaS2ltTndoVjg4VWxhZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxLNG9hQzA3QnliWGRVSDlhZGo0cURxM09EazIyOVBBWGlhd0ZWYTIxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDBrZHAzUXJYZXhGYnRjUEZxMXczY1k5bTRMeWxjbVhSSHdJb2R3UHFnaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllEaFM4d2QzQ2ZpbnZVcUZjTUk4RVkyRExvZDYwdmVtaS9jNTU2N2cxZG9ESDNHQUF1MW5JWkw5cWxLUm9mb2JzWHNHSDA2VkZvandwV1ZMbTc3TkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJCQjdXTW9kS0p4eTZYNnl2WVhSL2poeEYwcS9rVUZnUThOTnRuSENjYzZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwc1FSN1o0UlRPNnowd0REZXFpR0F3IiwicGhvbmVJZCI6IjU3Y2NmYjI2LTQ0M2UtNDBiNC04YzIxLTY0ZjNhN2VjN2I5MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTng4UFEvU0lXL2pDT2pUUzRvNVpyOXI5YkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3JGOUpXYXIyQW56WCs1V1JobGVsemI4VUE4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhGOTE5UzNCIiwibWUiOnsiaWQiOiIyNzY5Mzc5ODA0ODoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZa8aMy28J2XjvCdlrxrzLbwnZi64LiFXuKAou+7jOKAol7guIUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xEdnFxZ0dFTHF1MXJrR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl0TWRyR1NtMDVPYmRJeWQyR000dUtvTS9SdGtsZFV4bHFBMTBaMm41aTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9iYTE2cGVWWFhOL1ZWNThYNkI4WlRmUFhvSmdueHBUaDdkaGtyVnJna3BIRzRKN2xDQ2tvUFU5VW1ibFRpQ0tkTEpzTjkvdk5HRXQxR1UrbXVXYkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDUHNtUVJLRnYvU1NOZVdNbktpZTBDRWQzNVlyNTlFTjRDT21qQzN4eHVIeERzZVpMNER1NWZhVm1VOGh1OE02SUZTY05mSExoazdhZHlSVnFtUVhBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjkzNzk4MDQ4OjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZiVEhheGtwdE9UbTNTTW5kaGpPTGlxRFAwYlpKWFZNWmFnTmRHZHArWXYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE1NjUzODV9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE 👸❤️🧸❄️™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "🧸❤️QUEEN_KYLIE❤️🧸",
  ownername: process.env.OWNER_NAME || "chucky",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
