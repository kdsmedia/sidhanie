const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

_KATA-KATA HARI INI_ 

*JUJUR ITU SOPAN .*
*BERBAGI ITU BAIK*

___________________________

╭─❒ 「 *OWNER MENU* 」
│
│○ !addprem  
│○ !delprem  
│○ !listprem  
│○ !block  
│○ !unblock  
│○ !public  
│○ !self  
│○ !out  
│○ !kosong  
│○ !join  
│○ !addsewa  
│○ !delsewa  
│○ !setnamabot  
│○ !setbiobot  
│○ !broadcastvid  
│○ !bctext  
│○ !bcimage  
│○ !pushkon
│○ !pushkonid
│○ !anticall [on/off]
│○ !setexif
│○ !idgrub
│○ !restartbot
│○ !creategc
│○ !banned
│○ !listbanned
│○ !unbanned
│○ !autoread
│○ !autoblok212
│
╰❒

╭─❒ 「 *DATABASE MENU* 」
│
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addzip
│○ !delzip
│○ !listzip
│○ !yozip
│○ !sendzip
│○ !addapk
│○ !delapk
│○ !listapk
│○ !sendapk
│○ !addpdf
│○ !listpdf
│○ !sendpdf
│○ !yopdf
│○ !sendpdf
│
╰❒

╭─❒ 「 *MENU GA PENTING* 」 
│
│○ !runtime  
│○ !groupbot  
│○ !developer  
│○ !gitclone  
│
╰❒

╭─❒ 「  *STORE MENU*  」
│
│○ !list  
│○ !addlist  
│○ !updatelist  
│○ !dellist  
│○ !jeda  
│○ !tambah  
│○ !kurang  
│○ !kali  
│○ !bagi  
│○ !setproses  
│○ !changeproses  
│○ !delsetproses  
│○ !setdone  
│○ !changedone  
│○ !delsetdone  
│○ !proses  
│○ !done  
│○ !setwelcome  
│○ !changewelcome  
│○ !delsetwelcome  
│○ !setleft  
│○ !changeleft  
│○ !delsetleft  
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ !antiwame  [on/off]
│○ !antiwame2  [on/off]
│○ !antilink  [on/off]
│○ !antilink2  [on/off]
│○ !welcome  [on/off]
│○ !goodbye  [on/off]
│○ !group open
│○ !group close
│○ !hidetag  
│○ !kick  
│○ !linkgc  
│○ !resetlinkgc  
│○ !delete  
│○ !listonline  
│○ !setnamegc  
│○ !setdesc  
│○ !listsewa  
│○ !add  
│○ !promote  
│○ !demote  
│○ !antilinkall  
│○ !sendlinkgc  
│○ !tagall  
│○ !totag
│○ !mute [on/off]
│○ !nsfw [on/off]
│
╰❒

╭─❒ 「 *SEARCH MENU* 」 
│
│○ !ytsearch  
│○ !google  
│○ !cariresep
│○ !bacaresep
│○ !happymod
│○ !ssweb
│
╰❒

╭─❒ 「 *DOWNLOAD MENU* 」
│ 
│○ !tiktok  
│○ !tiktokaudio  
│○ !facebook
│○ !instagram
│○ !spotify  
│○ !ytmp3  
│○ !ytmp4  
│○ !play  
│○ !playmp3  
│○ !playmp4  
│
╰❒

╭─❒ 「 *ASUPAN MENU* 」
│
│○ !tiktokkayes  
│○ !tiktokgirl  
│○ !tiktokghea  
│○ !tiktokbocil  
│○ !tiktokukhty  
│○ !tiktoksantuy  
│○ !tiktokpanrika  
│○ !tiktoknotnot  
│○ !tiktokgabagtha  
│
╰❒


╭─❒ 「 *STICKER MENU* 」 
│
│○ !sticker  
│○ !toimage  
│○ !pinterest  
│○ !smeme  
│○ !emojimix  
│○ !wm  
│○ !qc
│
╰❒

╭─❒ 「 *Anonymous MENU* 」 
│
│○ !menfess
│
╰❒

╭─❒ 「 *Ai Menu* 」 
│
│○ !ai
│○ !chatgpt  
│○ !aiimg
│
╰❒

╭─❒ 「 *STALKER MENU* 」 
│
│○ !ffstalk
│○ !mlstalk
│○ !githubstalk
│○ !npmstalk
│
╰❒

╭─❒ 「 *TEXTPRO MENU* 」
│
│○ !candy
│○ !christmas
│○ !3dchristmas
│○ !sparklechristmas
│○ !deepsea
│○ !scifi
│○ !rainbow
│○ !waterpipe
│○ !spooky
│○ !pencil
│○ !circuit
│○ !discovery
│○ !metalic
│○ !fiction
│○ !demon
│○ !transformer
│○ !berry
│○ !thunder
│○ !magma
│○ !3dstone
│○ !neonlight
│○ !glitch
│○ !harrypotter
│○ !brokenglass
│○ !papercut
│○ !watercolor
│○ !multicolor
│○ !neondevil
│○ !underwater
│○ !graffitibike
│○ !snow
│○ !cloud
│○ !honey
│○ !ice
│○ !fruitjuice
│○ !biscuit
│○ !wood
│○ !chocolate
│○ !strawberry
│○ !matrix
│○ !blood
│○ !dropwater
│○ !toxic
│○ !lava
│○ !rock
│○ !bloodglas
│○ !hallowen
│○ !joker
│○ !darkgold
│○ !wicker
│○ !firework
│○ !skeleton
│○ !blackpink
│○ !sand
│○ !glue
│○ !1917
│○ !leaves
│
╰❒

╭─❒ 「 *NSFW MENU* 」
│
│○ !cry
│○ !kill
│○ !hug
│○ !pat
│○ !lick
│○ !kiss
│○ !bite
│○ !yeet
│○ !neko
│○ !bully
│○ !bonk
│○ !wink
│○ !poke
│○ !nom
│○ !slap
│○ !smile
│○ !awoo
│○ !wave
│○ !blush
│○ !smug
│○ !glomp
│○ !happy
│○ !dance
│○ !cringe
│○ !cuddle
│○ !highfive
│○ !shinobu
│○ !megumin
│○ !handhold
│○ !loli-waifu
│○ !hentaivid
│○ !trap
│○ !hentai-neko
│○ !gasm
│○ !hentai-waifu
│○ !milf
│○ !ahegao
│○ !bdsm
│○ !ass
│○ !blowjob
│○ !cuckold
│○ !eba
│○ !cum
│○ !ero
│○ !foot
│○ !femdom
│○ !glasses
│○ !gangbang
│○ !hentai
│○ !jahy
│○ !manga
│○ !masturbation
│○ !neko-hentai
│○ !nsfwloli
│○ !neko-hentai2
│○ !orgy
│○ !panties
│○ !pussy
│○ !thights
│○ !tentacles
│○ !yuri
│○ !zettai
│○ !gifblowjob
│○ !gifhentai
│
╰❒

╭─❒ 「 *CERPEN MENU* 」 
│
│○ !cerpen-anak
│○ !cerpen-bahasadaerah
│○ !cerpen-bahasainggris
│○ !cerpen-bahasajawa
│○ !cerpen-bahasasunda
│○ !cerpen-budaya
│○ !cerpen-cinta
│○ !cerpen-cintaislami
│○ !cerpen-cintapertama
│○ !cerpen-cintaromantis
│○ !cerpen-cintasedih
│○ !cerpen-cintasegitiga
│○ !cerpen-cintasejati
│○ !cerpen-galau
│○ !cerpen-gokil
│○ !cerpen-inspiratif
│○ !cerpen-jepang
│○ !cerpen-kehidupan
│○ !cerpen-keluarga
│○ !cerpen-kisahnyata
│○ !cerpen-korea
│○ !cerpen-kristen
│○ !cerpen-liburan
│○ !cerpen-malaysia
│○ !cerpen-mengharukan
│○ !cerpen-misteri
│○ !cerpen-motivasi
│○ !cerpen-nasihat
│○ !cerpen-nasionalisme
│○ !cerpen-olahraga
│○ !cerpen-patahhati
│○ !cerpen-penantian
│○ !cerpen-pendidikan
│○ !cerpen-pengalaman
│○ !cerpen-pengorbanan
│○ !cerpen-penyesalan
│○ !cerpen-perjuangan
│○ !cerpen-perpisahan
│○ !cerpen-persahabatan
│○ !cerpen-petualangan
│○ !cerpen-ramadhan
│○ !cerpen-remaja
│○ !cerpen-rindu
│○ !cerpen-rohani
│○ !cerpen-romantis
│○ !cerpen-sastra
│○ !cerpen-sedih
│○ !cerpen-sejarah
│
╰❒

╭─❒ 「 *PRIMBON MENU* 」
│
│○ !nomorhoki
│○ !artimimpi
│○ !ramalanjodoh
│○ !ramalanjodohbali
│○ !suamiistri
│○ !ramalancinta
│○ !artinama
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rejeki
│○ !pekerjaan
│○ !ramalnasib
│○ !penyakit
│○ !artitarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !harinaga
│○ !arahrejeki
│○ !peruntungan
│○ !weton
│○ !sifat
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !shio
│
╰❒

╭─❒ 「 *FUN MENU* 」 
│
│○ !memek
│○ !bego
│○ !goblok
│○ !janda
│○ !perawan
│○ !babi
│○ !tolol
│○ !pinter
│○ !pintar
│○ !asu
│○ !bodoh
│○ !gay
│○ !lesby
│○ !bajingan
│○ !jancok
│○ !anjing
│○ !ngentod
│○ !ngentot
│○ !monyet
│○ !mastah
│○ !newbie
│○ !bangsat
│○ !bangke
│○ !sange
│○ !sangean
│○ !dakjal
│○ !horny
│○ !wibu
│○ !puki
│○ !pantex
│○ !pantek
│○ !setan
│○ !iblis
│○ !cacat
│○ !yatim
│○ !piatu
│
╰❒

╭─❒ 「 *SOUND MENU* 」 
│
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
│○ !sound70
│○ !sound71
│○ !sound72
│○ !sound73
│○ !sound74
│○ !sound75
│○ !sound76
│○ !sound77
│○ !sound78
│○ !sound79
│○ !sound80
│○ !sound81
│○ !sound82
│○ !sound83
│○ !sound84
│○ !sound85
│○ !sound86
│○ !sound87
│○ !sound88
│○ !sound89
│○ !sound90
│○ !sound91
│○ !sound92
│○ !sound93
│○ !sound94
│○ !sound95
│○ !sound96
│○ !sound97
│○ !sound98
│○ !sound99
│○ !sound100
│
╰❒

╭─❒ 「 *BUG MENU* 」 
│
│○ !kenon [ 628xx ]
│○ !verify [ 628xx ]
│○ !logout [ 628xx ]
│○ !banwa [ 628xx ]
│○ !spamsms [ +628xx ]
│○ !spamcall [ +628xx ]
│
╰❒

╭─❒ 「 *THANKS TO* 」 
│
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ Jer Ofc
│○ All Creator Bot
│
╰❒

📝 *SUBSCRIBE YT CREATOR : https://youtube.com/@jerofc*
`
}

global.menu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒  PILIH SALAH SATU MENU NYA
│
│○ !allmenu  
│○ !storemenu  
│○ !groupmenu  
│○ !ownermenu  
│○ !textpromenu  
│○ !funmenu  
│○ !databasemenu  
│○ !searchmenu  
│○ !downloadmenu  
│○ !aimenu  
│○ !anonymousmenu
│○ !stickermenu  
│○ !asupanmenu  
│○ !stalkermenu  
│○ !nsfwmenu  
│○ !cerpenmenu  
│○ !primbonmenu  
│○ !soundmenu
│○ !bugmenu
│○ !tqto
│
╰❒

╭─❒ 
│
│○ !owner  
│○ !sc  
│○ !ping  
│○ !donate  
│○ !tqto  
│○ !sewa  
│○ !q  
│○ !jasrun  
│○ !sewa  
│○ !buyprem  
│
╰❒ 
`
}

global.ownermenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *OWNER MENU* 」
│
│○ !addprem  
│○ !delprem  
│○ !listprem  
│○ !block  
│○ !unblock  
│○ !public  
│○ !self  
│○ !out  
│○ !kosong  
│○ !join  
│○ !addsewa  
│○ !delsewa  
│○ !setnamabot  
│○ !setbiobot  
│○ !broadcastvid  
│○ !bctext  
│○ !bcimage  
│○ !pushkon
│○ !pushkonid
│○ !anticall [on/off]
│○ !setexif
│○ !idgrub
│○ !restartbot
│○ !creategc
│○ !banned
│○ !listbanned
│○ !unbanned
│○ !autoread
│○ !autoblok212
│
╰❒
`
}

global.databasemenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *DATABASE MENU* 」
│
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addzip
│○ !delzip
│○ !listzip
│○ !yozip
│○ !sendzip
│○ !addapk
│○ !delapk
│○ !listapk
│○ !sendapk
│○ !addpdf
│○ !listpdf
│○ !sendpdf
│○ !yopdf
│○ !sendpdf
│
╰❒
`
}

global.storemenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「  *STORE MENU*  」
│
│○ !list  
│○ !addlist  
│○ !updatelist  
│○ !dellist  
│○ !jeda  
│○ !tambah  
│○ !kurang  
│○ !kali  
│○ !bagi  
│○ !setproses  
│○ !changeproses  
│○ !delsetproses  
│○ !setdone  
│○ !changedone  
│○ !delsetdone  
│○ !proses  
│○ !done  
│○ !setwelcome  
│○ !changewelcome  
│○ !delsetwelcome  
│○ !setleft  
│○ !changeleft  
│○ !delsetleft  
│
╰❒
`
}

global.groupmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *GROUP MENU* 」 
│
│○ !antiwame  [on/off]
│○ !antiwame2  [on/off]
│○ !antilink  [on/off]
│○ !antilink2  [on/off]
│○ !welcome  [on/off]
│○ !goodbye  [on/off]
│○ !group open
│○ !group close
│○ !hidetag  
│○ !kick  
│○ !linkgc  
│○ !resetlinkgc  
│○ !delete  
│○ !listonline  
│○ !setnamegc  
│○ !setdesc  
│○ !listsewa  
│○ !add  
│○ !promote  
│○ !demote  
│○ !antilinkall  
│○ !sendlinkgc  
│○ !tagall  
│○ !totag
│○ !mute [on/off]
│○ !nsfw [on/off]
│
╰❒
`
}

global.searchmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *SEARCH MENU* 」 
│
│○ !ytsearch  
│○ !google  
│○ !cariresep
│○ !bacaresep
│○ !happymod
│○ !ssweb
│
╰❒
`
}

global.downloadmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *DOWNLOAD MENU* 」
│ 
│○ !tiktok  
│○ !tiktokaudio  
│○ !spotify  
│○ !ytmp3  
│○ !ytmp4  
│○ !play  
│○ !playmp3  
│○ !playmp4  
│○ !facebook
│○ !instagram
│
╰❒
`
}

global.stickermenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *STICKER MENU* 」 
│
│○ !sticker  
│○ !toimage  
│○ !pinterest  
│○ !smeme  
│○ !emojimix  
│○ !wm  
│○ !qc
│
╰❒
`
}

global.asupanmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *ASUPAN MENU* 」
│
│○ !tiktokkayes  
│○ !tiktokgirl  
│○ !tiktokghea  
│○ !tiktokbocil  
│○ !tiktokukhty  
│○ !tiktoksantuy  
│○ !tiktokpanrika  
│○ !tiktoknotnot  
│○ !tiktokgabagtha  
│
╰❒
`
}

global.anonymousmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *Anonymous MENU* 」 
│
│○ !menfess
│
╰❒
`
}

global.aimenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *Ai Menu* 」 
│
│○ !ai
│○ !chatgpt  
│○ !aiimg
│
╰❒
`
}

global.stalkermenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *STALKER MENU* 」 
│
│○ !ffstalk
│○ !mlstalk
│○ !githubstalk
│○ !npmstalk
│
╰❒
`
}

global.textpromenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *TEXTPRO MENU* 」
│
│○ !candy
│○ !christmas
│○ !3dchristmas
│○ !sparklechristmas
│○ !deepsea
│○ !scifi
│○ !rainbow
│○ !waterpipe
│○ !spooky
│○ !pencil
│○ !circuit
│○ !discovery
│○ !metalic
│○ !fiction
│○ !demon
│○ !transformer
│○ !berry
│○ !thunder
│○ !magma
│○ !3dstone
│○ !neonlight
│○ !glitch
│○ !harrypotter
│○ !brokenglass
│○ !papercut
│○ !watercolor
│○ !multicolor
│○ !neondevil
│○ !underwater
│○ !graffitibike
│○ !snow
│○ !cloud
│○ !honey
│○ !ice
│○ !fruitjuice
│○ !biscuit
│○ !wood
│○ !chocolate
│○ !strawberry
│○ !matrix
│○ !blood
│○ !dropwater
│○ !toxic
│○ !lava
│○ !rock
│○ !bloodglas
│○ !hallowen
│○ !joker
│○ !darkgold
│○ !wicker
│○ !firework
│○ !skeleton
│○ !blackpink
│○ !sand
│○ !glue
│○ !1917
│○ !leaves
│
╰❒
`
}

global.nsfwmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *NSFW MENU* 」
│
│○ !cry
│○ !kill
│○ !hug
│○ !pat
│○ !lick
│○ !kiss
│○ !bite
│○ !yeet
│○ !neko
│○ !bully
│○ !bonk
│○ !wink
│○ !poke
│○ !nom
│○ !slap
│○ !smile
│○ !awoo
│○ !wave
│○ !blush
│○ !smug
│○ !glomp
│○ !happy
│○ !dance
│○ !cringe
│○ !cuddle
│○ !highfive
│○ !shinobu
│○ !megumin
│○ !handhold
│○ !loli-waifu
│○ !hentaivid
│○ !trap
│○ !hentai-neko
│○ !gasm
│○ !hentai-waifu
│○ !milf
│○ !ahegao
│○ !bdsm
│○ !ass
│○ !blowjob
│○ !cuckold
│○ !eba
│○ !cum
│○ !ero
│○ !foot
│○ !femdom
│○ !glasses
│○ !gangbang
│○ !hentai
│○ !jahy
│○ !manga
│○ !masturbation
│○ !neko-hentai
│○ !nsfwloli
│○ !neko-hentai2
│○ !orgy
│○ !panties
│○ !pussy
│○ !thights
│○ !tentacles
│○ !yuri
│○ !zettai
│○ !gifblowjob
│○ !gifhentai
│
╰❒
`
}

global.cerpenmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *CERPEN MENU* 」 
│
│○ !cerpen-anak
│○ !cerpen-bahasadaerah
│○ !cerpen-bahasainggris
│○ !cerpen-bahasajawa
│○ !cerpen-bahasasunda
│○ !cerpen-budaya
│○ !cerpen-cinta
│○ !cerpen-cintaislami
│○ !cerpen-cintapertama
│○ !cerpen-cintaromantis
│○ !cerpen-cintasedih
│○ !cerpen-cintasegitiga
│○ !cerpen-cintasejati
│○ !cerpen-galau
│○ !cerpen-gokil
│○ !cerpen-inspiratif
│○ !cerpen-jepang
│○ !cerpen-kehidupan
│○ !cerpen-keluarga
│○ !cerpen-kisahnyata
│○ !cerpen-korea
│○ !cerpen-kristen
│○ !cerpen-liburan
│○ !cerpen-malaysia
│○ !cerpen-mengharukan
│○ !cerpen-misteri
│○ !cerpen-motivasi
│○ !cerpen-nasihat
│○ !cerpen-nasionalisme
│○ !cerpen-olahraga
│○ !cerpen-patahhati
│○ !cerpen-penantian
│○ !cerpen-pendidikan
│○ !cerpen-pengalaman
│○ !cerpen-pengorbanan
│○ !cerpen-penyesalan
│○ !cerpen-perjuangan
│○ !cerpen-perpisahan
│○ !cerpen-persahabatan
│○ !cerpen-petualangan
│○ !cerpen-ramadhan
│○ !cerpen-remaja
│○ !cerpen-rindu
│○ !cerpen-rohani
│○ !cerpen-romantis
│○ !cerpen-sastra
│○ !cerpen-sedih
│○ !cerpen-sejarah
│
╰❒
`
}

global.primbonmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *PRIMBON MENU* 」
│
│○ !nomorhoki
│○ !artimimpi
│○ !ramalanjodoh
│○ !ramalanjodohbali
│○ !suamiistri
│○ !ramalancinta
│○ !artinama
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rejeki
│○ !pekerjaan
│○ !ramalnasib
│○ !penyakit
│○ !artitarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !harinaga
│○ !arahrejeki
│○ !peruntungan
│○ !weton
│○ !sifat
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !shio
│
╰❒
`
}

global.funmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *FUN MENU* 」 
│
│○ !memek
│○ !bego
│○ !goblok
│○ !janda
│○ !perawan
│○ !babi
│○ !tolol
│○ !pinter
│○ !pintar
│○ !asu
│○ !bodoh
│○ !gay
│○ !lesby
│○ !bajingan
│○ !jancok
│○ !anjing
│○ !ngentod
│○ !ngentot
│○ !monyet
│○ !mastah
│○ !newbie
│○ !bangsat
│○ !bangke
│○ !sange
│○ !sangean
│○ !dakjal
│○ !horny
│○ !wibu
│○ !puki
│○ !pantex
│○ !pantek
│○ !setan
│○ !iblis
│○ !cacat
│○ !yatim
│○ !piatu
│
╰❒
`
}

global.soundmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *SOUND MENU* 」 
│
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
│○ !sound70
│○ !sound71
│○ !sound72
│○ !sound73
│○ !sound74
│○ !sound75
│○ !sound76
│○ !sound77
│○ !sound78
│○ !sound79
│○ !sound80
│○ !sound81
│○ !sound82
│○ !sound83
│○ !sound84
│○ !sound85
│○ !sound86
│○ !sound87
│○ !sound88
│○ !sound89
│○ !sound90
│○ !sound91
│○ !sound92
│○ !sound93
│○ !sound94
│○ !sound95
│○ !sound96
│○ !sound97
│○ !sound98
│○ !sound99
│○ !sound100
│
╰❒
`
}

global.bugmenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *BUG MENU* 」 
│
│○ !kenon [ 628xx ]
│○ !verify [ 628xx ]
│○ !logout [ 628xx ]
│○ !banwa [ 628xx ]
│○ !spamsms [ +628xx ]
│○ !spamcall [ +628xx ]
│
╰❒
`
}

global.tqtomenu = (pushname, prefix, hituet) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *THANKS TO* 」 
│
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ Jer Ofc
│○ All Creator Bot
│
╰❒
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})