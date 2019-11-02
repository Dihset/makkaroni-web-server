import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
const dbClinet = require("./db/MongooseClient")
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', require('./controllers'));
app.listen(
    7100,
    () => console.log('Start app in 7100 port')
);
