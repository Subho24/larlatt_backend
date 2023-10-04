const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai')
require('dotenv').config();

const router = express.Router();


const { Configuration, OpenAIApi } = OpenAI


// const configuration = new Configuration({
//     organization: "org-w9yhxXnU9JcnaMLUrChu1rC9",
//     apiKey: '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',
// });

const openai = new OpenAI({
    organization: "org-6gYlfgssZl6Vm8BHti62zrhJ",
    apiKey: process.env.apiKey
})

router.use(bodyParser.json());
router.use(cors());

router.post('/generateImage', async (req, res) => {
    const { message } = req.body
    console.log(message)
    const response = await openai.images.generate({
      prompt: `Illustration av "${message}" i en enkel och lättförståelig stil, idealisk för skolelever.`
    });
    console.log(response)
    console.log(response.data[0].url)
    if(response.data) {
        res.json({
            url: response.data[0].url
        })
    }
});



module.exports = router