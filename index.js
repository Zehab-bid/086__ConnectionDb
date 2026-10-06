import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Mahasiswa',
    password: '123',//sesuakan dengan password database masing masing
    port: 5432,  //sesuai port masing2
})

app.get('/', (req, res, next) => {
    console.log("TEST DATA :");
    pool.query('Select * from biodata')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
})
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})