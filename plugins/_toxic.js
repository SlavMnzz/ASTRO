import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./media/notoxic.jpg') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.customPrefix = /^(kontol|bgst|kntl|pepek|mmk|ppk|jnck|anj|bangsat|bangsad|bgsd|ngntd|memek|jembut|jancok|fuck|ajg|anjing|ngentod|tai|tae|ah tai)$/i
handler.command = new RegExp

export default handler
