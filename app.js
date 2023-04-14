const express = require('express')
const app = express()


const productRoutes = require('./routes/product');


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })


app.use('/product', productRoutes)



app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at http://localhost:3000/`);
});