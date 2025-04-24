let express = require('express');
let app = express();
let cors = require('cors');
let port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(cors);
app.use(express.json)
app.use(express.static('public'))

let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Sneakers').then(() => console.log('MongoDB подключен')).catch((err) => console.error('Ошибка подключение к MongoDB', err))

let schema = new mongoose.Schema({
    title: String,
    price: Number,
    imageUrl: String
})

let Products = mongoose.model('Products', schema);

app.get('/products', async function(req, res) {
    let data = await Products.find()
    res.send(data)
})
