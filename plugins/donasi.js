let handler = async m => m.reply(`
            .✵.GRUP ROBOT.✵.

            https://chat.whatsapp.com/FXSFCCYMGveGEcnA9HVEtm
`.trim(
            .┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [081387089252]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Ovo:* [083199789390]
❏────
)) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
