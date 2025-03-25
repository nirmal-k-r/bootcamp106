//creating a custom router

express=require('express');
router=express.Router();


router.get('/', async function(req,res){
    ctx={
        title: 'My custom home'
    }
    res.render('product/home',ctx);
});


router.get('/about', async function(req,res){
    ctx={
        title: 'About us'
    }
    res.render('product/about',ctx);
});




module.exports=router;