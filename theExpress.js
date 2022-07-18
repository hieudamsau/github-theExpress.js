const express =require('express');
const app = express();
app.get('/form:Value',(req,res)=>{
    req.header('hieu')
    res.send(req.params.Value.toUpperCase())
    // res.send(req.query);
    // console.log(req.query);
    // for(const key in req.query){
    //     console.log(key , req.query[key])
    // }
    res.json({username : 'Hieu'});
    res.sendStatus(200); 
    // res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })
    // res.cookie('username', 'Flavio', { expires: new Date(Date.now() + 900000), httpOnly: true})
})
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.post('/forms',(req,res)=>{
//     const name = req.body.name;
//     console.log(name);
//     res.send(name);
// })
app.listen(8000);
