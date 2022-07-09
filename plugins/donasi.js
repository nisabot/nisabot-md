let handler = async m => m.reply(`
            .✵.GRUP Mizuhara-Botོ.✵.

            https://chat.whatsapp.com/L9w3ut6Qj2ZLkAEegp0rjl
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler