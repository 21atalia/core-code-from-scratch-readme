const { Router } = require("express")
const router = Router();

router.get('/', (req, res) => {
    res.json({ response: "This is a PingPong API"});
});

router.get('/ping', (req, res) => {
    res.status(200).json({message:"Pong!"});
});

router.get('/pong', function (req, res) {
    res.status(200).json({message:"Ping!"});
});

module.exports = router;