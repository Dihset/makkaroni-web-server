import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => res.send('hello'));

app.get('/hello', (req, res) => res.send('Liza go sex'));

app.listen(
    8080, 
    () => console.log('Start app in 8080 port')
);
