let count = 1500, //sesslen
  count2 = 600, //breaklen
  count3 = 1500, //setTime, stays static
  count4 = 600, //breakTime, stays static
  goStop = false,
  checkBreak = false,
  start,
  startBreak;

//disable things
function disable() {
  var sess = $('#sesslen').disabled,
    breakl = $('#breaklen').disabled;
}
disable();

function changeTitle() {
  $('h1').css('color', 'white');
}

//light options
function redLight() {
  $('.well').css('background-color', '#D86C70');
}

function blueLight() {
  $('.well').css('background-color', '#BEE9E4');
}

function greenLight() {
  $('.well').css('background-color', '#76C4AE');
}

function plainLight() {
  $('.well').css('background-color', 'white');
}

function turnOn() {
  $('body').css('background-color', 'black');
}

function dimLight() {
  $('body').css('opacity', '0.7');
}

function notdimLight() {
  $('body').css('opacity', '1');
}

function changeSessLight() {
  $('#sesslen,#breaklen').css('background-color', 'white');
  $('#sesslen,#breaklen').css('color', 'black');
}

//Set Session Length
$('#minusSess').click(function minusOne() {
  count -= 60;
  count3 -= 60;

  if (count < 60) {
    alert('Minimum value of 1!');
    count += 60;
    count3 += 60;
  }

  $('#sesslen').html('Session : </br>' + Math.floor(count3 / 60) + 'm');
  $('#countdown').html(Math.floor(count / 60) + ':00');
});

$('#plusSess').click(function plusOne() {
  count += 60;
  count3 += 60;

  if (count >= 3600) {
    alert("Max value of 1 Hour! don't over do yourself");
    count -= 60;
    count3 -= 60;
  }

  $('#sesslen').html('Session : </br>' + Math.floor(count3 / 60) + 'm');
  $('#countdown').html(Math.floor(count / 60) + ':00');
});

function time(count) {
  var min = Math.floor(count / 60);
  var sec = ((count % 60));
  return min + ':' + (sec < 10 ? '0' : '') + sec;
}

$('#go').click(function startTimer() {

  //timer

  if (goStop === false) {
    changeSessLight();
    changeTitle();
    greenLight();
    turnOn();
    dimLight();

    start = setInterval(function() {
      count--;
      $('#countdown').html(time(count));
      goStop = true;

      if (count === 0) {
        changeTitle();
        dimLight();
        turnOn();
        blueLight();

        clearInterval(start);
        alert('Time is up! Take a Break');

        startBreak = setInterval(function() {
          checkBreak = true;
          count2--;
          $('#countdown').html(time(count2) + ' Break remaining');

          if (count2 === 0) {
            changeTitle();
            dimLight();
            turnOn();
            clearInterval(startBreak);
            count2 = count4;
            alert('Time to Code');
            count = count3;
            checkBreak = false;
            goStop = false;
            startTimer();
          }
        }, 1000);
      }
    }, 1000);
  }
  console.log('count2 :' + count2);
  console.log('count :' + count);

  //break timer
  if (checkBreak == false && goStop == true && count == 0) {
    blueLight();
    notdimLight();
    startBreak = setInterval(function() {
      checkBreak = true;
      count2--;
      $('#countdown').html(time(count2) + ' Break remaining');
    }, 1000);
  }

  if (count < 0 || count2 < 0) {
    $('#countdown').html('Clock Broke X.X');
    notdimLight();
    count = count3; //Clock
    count2 = count4; //Break
  }
});

$('#stop').click(function stopTimer() {
  redLight();
  notdimLight();

  if (goStop == true && checkBreak == false) {
    clearInterval(start);
    $('#countdown').html(time(count));
    goStop = false;
  } else if (checkBreak == true) {
    clearInterval(startBreak);
    $('#countdown').html(time(count2) + ' Break remaining');
    checkBreak = false;
  }

});

//Set Break Length
$('#minusBreak').click(function minusOne() {
  count2 -= 60;
  count4 -= 60;

  if (count < 60) {
    alert('Minimum value of 1!');
    count2 += 60;
    count4 += 60;
  }

  $('#breaklen').html('Break : </br>' + Math.floor(count4 / 60) + 'm');
});

$('#plusBreak').click(function plusOne() {
  count2 += 60;
  count4 += 60;

  if (count > 3600) {
    alert("Max value of 1 Hour! don't Procrastinate");
    count2 -= 60;
    count4 -= 60;
  }

  $('#breaklen').html('Break : </br>' + Math.floor(count4 / 60) + 'm');
});

$('#reset').click(function() {
  if (goStop == true || checkBreak == true) {
    notdimLight();
    alert('Timer still Active. Stop timer if you wish to reset');
  } else if (checkBreak == false && goStop == true) {
    notdimLight();
    plainLight();
    clearInterval(startBreak);
    count2 = count4;
    $('#countdown').html(time(count2) + ' Break remaining');
  } else {
    notdimLight();
    plainLight();
    clearInterval(start);
    count = count3;
    $('#countdown').html(time(count));
  }

});
