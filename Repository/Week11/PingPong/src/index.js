const express = require('express')
const api = express()
const morgan = require('morgan')

api.set('port', process.env.PORT || 3000);

//Middlewares
api.use(morgan("dev"));
api.use(express.json());

api.use('/api/buba-gump', require('./routes/pingpong'));

api.get('/', (req, res) => {
    res.json({message: `Redirect to: http://localhost:3000/api/buba-gump`});
})

api.listen(api.get("port"), () => {
    console.log(`Server running on port ${api.get("port")}`);
});