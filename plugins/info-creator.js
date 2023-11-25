function handler(m) {
  
  const kontak = {
	"displayName": 'Zxfrcv',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:XMnzzVllnz\nitem1.TEL;waid=15155188267:15155188267\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;Email Owner:astrobotz.carrd.co\nORG: INI OWNER\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler