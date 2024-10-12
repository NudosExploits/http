const axios = require('axios');

const WEBHOOK_URL = "https://discord.com/api/webhooks/1294752802123284550/UsNnE6gBqE8xiiggbsvLjQE6BWy_uvkSsJd9fkbJfue3d_bniJaaA4fdYYySEo-wSE6x";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { gameID } = req.body; 

        try {
          
            await axios.post(WEBHOOK_URL, {
                content: `Game ID: ${gameID}`
            });
            return res.status(200).json({ message: 'Game ID sent to Discord.' });
        } catch (error) {
            console.error('Error sending to Discord:', error);
            return res.status(500).json({ error: 'Error sending Game ID.' });
        }
    } else {
        // If the request method is not POST
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
