const express = require('express'),
      app     = express(),
      mongoose= require('mongoose'),
      port    = process.env.PORT || 3000;

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
})

app.get('/jscalculator', function(req,res){
  res.render('Projects/Javascript calculator/calc');
})

app.get('/pomodoroclock', function(req,res){
  res.render('Projects/Pomodoro Clock/clock');
})

app.get('/randomquotemachine', function(req,res){
  res.render('Projects/Random Quote Machine/random');
})

app.get('/showthelocalweather', function(req,res){
  res.render('Projects/Show the local weather/weather.ejs');
})

app.get('/twitchtv', function(req,res){
  res.render('Projects/TwitchTV API/twitchtv');
})

app.get('/wikiviewer', function(req,res){
  res.render('Projects/Wiki Viewer/wiki');
})





//

app.listen(port, function(){
    console.log('JamSpreadNinja server has Started!')
});
