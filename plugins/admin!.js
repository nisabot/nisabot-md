let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Jadiken hela botna jadi admin goblok'
  if (isAdmin) throw 'Padahal ges jadi admin manehteh'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.command = /^admin!$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
