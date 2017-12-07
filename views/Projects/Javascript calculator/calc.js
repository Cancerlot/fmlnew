$(document).ready(function(){

  let log = [],
      input,
      screen = [];

  console.log(log);



  $('button').click(function(){
    input = $(this).attr('value');
    if(input == 'AC'){
      log = [];
      screen = [];
      $('#output').html(screen);
    } else if(screen.length > 10){
      setTimeout(function(){
        alert('Too many characters')
      });
      log.pop();
      screen = log;
      $('#output').html(screen.join(' '));
    }
    else if(input == '='){
      let ans = eval(log.join(''));
        log = [];
        log.push(ans.toString());
        screen = log;
        $('#output').html(screen);
    }
    else if(input == 'Del'){
      log.pop();
      screen = log;
      $('#output').html(screen);
    }
    else if(input == '1' ||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0'){
      log.push(input);
      screen = log;
      $('#output').html(screen.join(' '));
    }
    else if(input == '/' && log.slice(-1) == '/'){
      $('#output').html(error);
    }
    else if(input == '/' && log.slice(-1) == '/'){
      log.push(input);
      screen = log;
      $('#output').html(screen.join(' '));
    }
    //if log.length longer then 10 display error

  });

});
