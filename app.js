const express = require('express'),
      app     = express(),
      mongoose= require('mongoose'),
      bodyParser = require('body-parser'),
      port    = process.env.PORT || 9001;

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://glenwan:digimon1@ds033196.mlab.com:33196/heroku_wlqcnnxb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
        // we're connected!
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  time: String,
  name: String,
  email: String,
  message: String
});

const user = mongoose.model('User', userSchema);

app.set('view engine', 'ejs');
app.use('/', express.static('views'));
app.use('/jscalculator',  express.static('views/Projects/Javascript calculator'));
app.use('/pomodoroclock', express.static('views/Projects/Pomodoro Clock'));
app.use('/randomquotemachine', express.static('views/Projects/Random Quote Machine'));
app.use('/showthelocalweather', express.static('views/Projects/Show the local weather'));
app.use('/twitchtv', express.static('views/Projects/TwitchTV API'));
app.use('/wikiviewer', express.static('views/Projects/Wiki Viewer'));
//route

app.get('/', function(req,res){
  res.render('Portfolio');
});

app.get('/jscalculator', function(req,res){
  res.render('Projects/Javascript calculator/calc');
});

app.get('/pomodoroclock', function(req,res){
  res.render('Projects/Pomodoro Clock/clock');
});

app.get('/randomquotemachine', function(req,res){
  res.render('Projects/Random Quote Machine/random');
});

app.get('/showthelocalweather', function(req,res){
  res.render('Projects/Show the local weather/weather.ejs');
});

app.get('/twitchtv', function(req,res){
  res.render('Projects/TwitchTV API/twitchtv');
});

app.get('/wikiviewer', function(req,res){
  res.render('Projects/Wiki Viewer/wiki');
});

app.get('*', function(req,res){
  res.render('Portolio');
});)

//post

app.post('/post', function(req,res){
   const name     = req.body.name;
   const email    = req.body.email;
   const message  = req.body.message;
   const time     = Date();
   const newUser = {time:time ,name: name, email: email, message:message};
   user.create(newUser, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           console.log('new entry');
            res.redirect('/');
       }
   });
});



//

app.listen(port, function(){
    console.log('JamSpreadNinja server has Started!')
});
