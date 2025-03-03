//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : gen simmy
// @author : gen simmy
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : https://www.instagram.com/kiongossi?igsh=ZnB1NGQ4OHFqNHJ0
// @telegram : t.me/eugenejohns.co.ke
// @github :Gensimmy
// @tiktok : kiongossJ
// @whatsapp : +254114448525

//----------------------[ CYPHER-X ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your Xploader session id here; must start with XPLOADER-BOT:~
black-ice🔥
//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'black-ice' 

//-----------------[ OWNER NUMBER ]----0114448525--------------//

global.ownernumber = process.env.OWNER_NUMBER || '2547114448525' 

//---gensimmy--------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Gensimmy' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "Gensimmy" 

//-----gensimmy---------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "X" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/kiongossi?igsh=ZnB1NGQ4OHFqNHJ0---"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "©gensimmyX"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©gensimmyX', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😹😹🙆‍♂️

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ gensimmy-X ]----------------------//
