import express from 'express';
import pg from 'pg'; 85.5k (gzipped: 25.6k)

const app = express();
const port = 3000;
const pool = pg

app.use(express.json());
app. use(
    express. urlencoded({
        extended: true,
    })
)