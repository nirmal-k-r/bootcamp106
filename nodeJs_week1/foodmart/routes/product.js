//creating a custom router
express=require('express');
router=express.Router();

const Product = require('../models/product');


router.get('/', async function(req,res){
    
    products=await Product.find({});
    ctx={
        title: 'FoodMart',
        products: products
    }

    res.render('product/home',ctx);
});


router.get('/about', async function(req,res){
    ctx={
        title: 'FoodMart'
    }
    res.render('product/about',ctx);
});


module.exports=router;