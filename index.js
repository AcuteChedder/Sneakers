let express = require('express');
let app = express();
let cors = require('cors');
let port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(cors());
app.use(express.json())
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
    const {sortBy} = req.query
    let sortObj = {}

    if(sortBy === 'price') {
        sortObj.price = 1
    } else if (sortBy === '-price') {
        sortObj.price = -1
    } else if(sortBy === 'title') {
        sortObj = 1
    }

    try {
        let data = await Products.find().sort(sortObj)
        res.send(data)
    } catch(err) {
        console.error('Ошибка при получении продуктов:', err.message);   
    }
})
