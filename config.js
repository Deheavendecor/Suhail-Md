const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348079730737";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_20_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICA4LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI4LFxuICAgICAgICA4MixcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzLFxuICAgICAgICA0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTbVhCZytqQ0VlYTZmMWtGSXN6L0xjVlhTUGZtODdYZktpSTdLWmtTS0NzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNzk3MzA3MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZERjY0NDg1REVBMjBFNDhDNEE4NkJCM0Y1MkJBQjgyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjM2MDAzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJub0dyRjhZSVNsU2tyOU1BU20xWDl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmYzdkMDM0LWY2ZTMtNDczNy1iMzZmLTQ3YTBiNWEyOTA3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDIxOCxcbiAgICAgIDI0NixcbiAgICAgIDE2OSxcbiAgICAgIDI2LFxuICAgICAgMTMwLFxuICAgICAgMTg3LFxuICAgICAgMjEwLFxuICAgICAgMTM5LFxuICAgICAgMTkyLFxuICAgICAgNTMsXG4gICAgICAyNDMsXG4gICAgICAzNSxcbiAgICAgIDIxMSxcbiAgICAgIDEwMyxcbiAgICAgIDMzLFxuICAgICAgMTA4LFxuICAgICAgMTE2LFxuICAgICAgMTUwLFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDU0LFxuICAgICAgMTkxLFxuICAgICAgMjQwLFxuICAgICAgMjM1LFxuICAgICAgMjUsXG4gICAgICA5NCxcbiAgICAgIDE0MSxcbiAgICAgIDUyLFxuICAgICAgNzYsXG4gICAgICAyMjQsXG4gICAgICAyMzIsXG4gICAgICAxMDQsXG4gICAgICAxNDcsXG4gICAgICAxNzksXG4gICAgICAxOSxcbiAgICAgIDAsXG4gICAgICAzLFxuICAgICAgMTExLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwxTTZDOTdBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc5NzMwNzM3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJERSBIRUFWRU4gREVDT1IgR0xPQkFMIFNFUlZJQ0VTIExJTUlURURcIixcbiAgICBcImxpZFwiOiBcIjIxNTc4Nzk0ODIyMDY2NDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lVnpxY0RFTmJCcExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMGFsSkovc3laOW5jU25OQ2l4K3ZUd2VHRy85Nm9QSjB5RGxuWlhNWDlFRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvWnNLTzkvMzlPN1RzdnhZZXE0Y0VMUkpWcXlWbTBjd2NXRm4zdVhyc0FSUTY2R0h0UnNucDQzcjZLbnN5WEorQ21VNkRaMk9RT0svYkUwZW5PeDFEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6THVkRjB0R3NHOTFZOXZ5UWhQQVovK3RKZXpML3AyQWZIeWlZVjc4cU5sVzJsQnA3M2xIb1RWOTUxMXdYMXZRWThSd2tpc2JTcWNJVTdENU80WHJnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc5NzMwNzM3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjM2MDAyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBTOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUFM4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicmZod0tsa3U3WDI2QUJrOUw4TmNZZUhuUlBJOE5EdWJoN1VEL1BBbHVsST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODgzNzYwMDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIzNTk5MTY4NzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
