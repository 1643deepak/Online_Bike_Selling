const exp = require ("express");
const mysql = require ("mysql");
const cors = require ("cors");

const app = exp();
app.use(cors());
app.use(exp.json());

const c = mysql.createConnection({
   host : "localhost",
   user : "root",
   password : "Deepak@191643",
   database : "online_bike",  
});

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log("Database Connected")}
})
app.get('/details',(req,res)=>{
    c.query("select *from formdet",(err,result)=>{
        res.send(result);
    });
});
app.get('/jawabikedetail/:id',(req,res)=>{
    const {id} = req.params;
    c.query("select * from formdet where id=?",[id],(err,result)=>{
       res.send(result);
    });
});
app.get('/',(req,res)=>{
    c.query("select * from signup",(err,result)=>{
        res.send(result);
    });
});
app.post('/signup',(req,res)=>{
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    c.query("insert into signup(firstname,lastname,email,password)values(?,?,?,?)",[firstname,lastname,email,password],(err,result)=>{
        if(err){
            let s = {'status':'error'}
            res.send(err);
        }
        else{
            let s = {'status':'inserted'}
            res.send(s);
        }
    })
})

// bikedet.get('/',(req,res)=>{
//     c.query("select *from formdet",(err,result)=>{
//         res.send(result);
//     });
// });


app.post('/bikeformdet',(req,res)=>{
    let bikename = req.body.bikename;
    let bikemodel = req.body.bikemodel;
    let PurchasingYear = req.body.PurchasingYear;
    let kilometer = req.body.kilometer;
    let ownername = req.body.ownername;
    let bikecondtion = req.body.bikecondtion;
    let price = req.body.price;
    let address = req.body.address;
    let image = req.body.image;


    c.query("insert into formdet(bikename,bikemodel,PurchasingYear,kilometer,ownername,bikecondtion,price,address,image)values(?,?,?,?,?,?,?,?,?)",[bikename,bikemodel,PurchasingYear,kilometer,ownername,bikecondtion,price,address,image],(err,result)=>{
        if(err){
            let s = {'status':'error'}
            res.send(err);
            console.log(err);
        }
        else{
            let s = {'status':'inserted'}
            res.send(s);
            console.log(result);
        }
    })
})

app.post("/login",(req,res)=>{
    let email2=req.body.email;
    let password=req.body.password;
    c.query("select* from signup where email=?",[email2],(error,rows)=>{
        if(error){
            let s={'invalid':'login'}
            res.send(s);
        }
        else{
            let password1=rows[0].password;
            let email1=rows[0].email;
            if(email1==email2 && password==password1){
                let s={'status':'correct'};
                res.send(s);
            }
            else{
                let s={'status':'error'};
                res.send(s);
            }
        }
    });
})


app.listen(3003);