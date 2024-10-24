
var express = require('express');
var app     = express();
var cors    = require('cors');
const path  = require('path');
var dal     = require('./dal')

// used to serve static files from public directory
//app.use(express.static('public'));
//app.use(express.static('src'));
app.use(express.static(path.join(__dirname, './build')));

app.use(cors());

//create user account
app.get('/account/create/:name/:email/:password', function (req,res) {
   //dal create user
   dal.create(req.params.name, req.params.email, req.params.password).then((user) => {
     //console.log(user);
     res.send(user);
   }).catch((err) => {
    res.status(500).send({ error: 'Failed to create account' })
   })
})

//login user
app.get('/account/login/:email/:password', function (req,res) {
    dal.login(req.params.email, req.params.password).then((user) => {
        console.log('user:',user);
        res.send(user);
      }).catch((err) => {
       res.status(500).send({ error: 'Failed to login' })
      })
});

//all accounts
app.get('/account/all', function (req,res) {
    dal.all().then((docs) => {
       // console.log(docs);
        res.send(docs);
    }).catch((err) => {
        res.status(500).send({ error: 'Failed to fetch accounts' });
    });
})

//balance
app.get('/account/balance/:id', function (req,res) {
    dal.findById(req.params.id).then((user) => {
        res.send({ balance: user.balance });
        console.log(user.balance);
    }).catch((err) => {
        res.status(500).send({ error: 'Failed to balance accounts' });
    });
})

//deposit
app.get('/account/deposit/:id/:deposit', async function (req,res) {
    const depositAmount = Number(req.params.deposit);
    const userId = req.params.id;
    console.log('loggedin id',req.params.id)
    if(isNaN(depositAmount) || depositAmount <= 0) {
        return res.status(400).send({ error: 'Invalid deposit amount'})
    }

    //dal.deposit(req.params.id, depositAmount).then((newBalance) => {
        try {
            const newBalance = await dal.deposit(userId, depositAmount);
        res.send({ message: 'Deposit successful', newBalance})
        console.log(newBalance)
    }catch (err) {
        res.status(500).send({ error: 'Failed to deposit' });
    };

})

//withdraw
app.get('/account/withdraw/:id/:withdraw', function (req,res) {
    const withdrawAmount = Number(req.params.withdraw);
    if(isNaN(withdrawAmount) || withdrawAmount <= 0) {
        return res.status(400).send({ error: 'Invalid withdraw amount'})
    }
    dal.findById(req.params.id).then((user) => {
        if(withdrawAmount > user.balance) {
            res.status(500).send({ error: 'Insuffiecient balance' });
        }
    })
    
    dal.withdraw(req.params.id, withdrawAmount).then((newBalance) => {
        res.send({ message: 'Withdraw successful', newBalance})
        console.log('newBalance:', newBalance)
    }).catch((err) => {
        res.status(500).send({ error: 'Failed to withdraw' });
    });
})

var port = 3001;
app.listen(port);
console.log('Running on port:' + port)