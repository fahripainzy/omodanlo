/*
SCRIPT INI DI KEMBANGKAN OLEH LYNZZDEV
BEBAS RECODE ASALKAN TARO CR GUA
© LynzzDev All Right Reversed 2021 -:- 2024
Kalo ada yang error silahkan hubungi saya
*/

require("./all/module.js")
const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
//========== Setting Owner ==========//
global.owner = "6285820360355" // no owner
global.dbowner = "./all/database/owner.json"
global.dbprem = './all/database/premium.json'
global.namaowner = "BOT VIP XD" // bebas

//======== Setting Bot & Link ========//
global.namabot = "BOT VIP - Botz Ainy" // bebas ubah
global.versionbot = `V5`
global.saluran = "https://whatsapp.com/channel/0029VaqXw9S7dmegum5shD2D" // bebas
global.linkgc = 'https://chat.whatsapp.com/BZze2IvOVpjDaMUzWdZqZn' // bebas
global.sret = "`" // jangan ubah
global.packname = "AINY" // bebas
global.author = "BOT VIP" // terserah

//========== Setting Event ==========//
global.autoTyping = true
global.welcome = false
global.autoread = false
global.anticall = false 
global.delaypushkontak = 7500
global.delayjpm = 7500

//========= Setting Url Foto =========//
global.image = "https://files.catbox.moe/e1f30c.jpg" 
global.makasi = "https://files.catbox.moe/e1f30c.jpg" 

//========== Setting Panell Server 1 ==========//
global.egg = "15" // egg
global.loc = "1" // location
global.domain = "https://" // ubah jadi domain mu
global.apikey = "ptla_" // ubah jadi apikey mu
global.capikey = "ptlc_" // ubah jadi capikey mu

//========== Setting Panel Server 2 ==========//
global.domain2 = "https://" // ubah jadi domain mu
global.apikey2 = "ptla_" // ubah jadi apikey mu
global.capikey2 = "ptlc_" // ubah jadi capikey mu

//========= Setting Payment =========//
global.dana = "081649158554"
global.gopay = "081649158554" // ubah jadi no gopay mu 
global.ovo = "081649158554" // ubah jadi no ovo mu 
global.shopeepay = "081649158554" // ubah jdi no spy mu
global.qris = "https://telegra.ph/file/5158c0791fbc4b49be104.jpg" // ubah jadi link Qris mu
global.bri = "235xxxx" // ubah jadi no bank mu "2937xxxxxx"
global.atasnama = "AINY XD" // atas nama pay mu
global.syarat1 = "SERTAKAN BUKTI TF" // bebas ubah
global.syarat2 = "ALL TRX NO REFUND" // bebas ubah

//========= Jangan Di Ubah =========//
global.rulvip = `*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 15 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian`
global.pzm = "A"
global.kbh = "B"
global.obp = "C"
global.mkq = "D"
global.epo = "E"
global.hjr = "F"
global.mdm = "G"
global.knt = "H"
global.jmb = "I"
global.sci = "J"
global.dby = "K"
global.zhr = "L"
global.jup = "M"
global.mel = "N"
global.nic = "O"
global.vpd = "P"
global.zqq = "Q"
global.kbs = "R"
global.pxd = "S"
global.ytm = "T"
global.ytv = "U"
global.hdh = "V"
global.wkw = "W"
global.jir = "X"
global.lah = "Y"
global.kok = "Z"
global.pza = "a"
global.kbb = "b"
global.obc = "c"
global.mkd = "d"
global.epe = "e"
global.hjf = "f"
global.mdg = "g"
global.knh = "h"
global.jmi = "i"
global.scj = "j"
global.dbk = "k"
global.zhl = "l"
global.jum = "m"
global.men = "n"
global.nio = "o"
global.vpp = "p"
global.zqp = "q"
global.kbr = "r"
global.pxs = "s"
global.ytt = "t"
global.ytu = "u"
global.hdv = "v"
global.wkm = "w"
global.jix = "x"
global.lay = "y"
global.koz = "z"
global.idsal = "120363341601187231@newsletter"
global.msg = {
"error": "Error anjir",
"done": "Data udah di ambil", 
"wait": "Bntar ya njing", 
"group": "Khusus Grub Dongo", 
"private": "Khusus Pm Blok", 
"admin": "Lu ae bukan admin anj", 
"adminbot": "Gw bukan admin cok", 
"owner": "Lu ae bukan owner pler", 
"developer": "Khusus dev cok"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})