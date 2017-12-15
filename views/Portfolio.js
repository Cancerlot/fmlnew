$(document).ready(function() {

  /*function scrollWin() {
    window.scrollTo(0,0);
  }
  scrollWin();
  */

  let i = 0;
  const text = 'Daily routine: Open eyes, turn on Computer, Make coffee, open IDE, Code away.';

  function delay() {
    setTimeout(function intro() {
      if (i < text.length) {
        document.querySelector('#description').innerHTML += text.charAt(i);
        i++;
        setTimeout(intro, 50);
      }
    }, 1000)
  }

  delay();


  //scroll effects

  const me = document.querySelector('.navbar-brand').addEventListener('click', scrollTo),

    skill = document.querySelector('#skillsLink').addEventListener('click', scrollTo1),

    portfolio =
    document.querySelector('#projectLink').addEventListener('click', scrollTo2),

    contact =
    document.querySelector('#contactLink').addEventListener('click', scrollTo3);

  function scrollTo() {
    document.querySelector('#me').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function scrollTo1() {
    document.querySelector('#skills').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function scrollTo2() {
    document.querySelector('#projects').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  function scrollTo3() {
    document.querySelector('#contactMe').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  $('.resizeImg').mouseover(function() {
    $(this).css('animation', 'dissapear 0.5s 1 forwards')
  })

  $('.resizeImg').mouseout(function() {
    $(this).css('animation', 'appear 0.5s 1 forwards')
  })

  //form validation

  $('form').bootstrapValidator({
    fields: {
      name: {
        validators: {
          stringLength: {
            min: 2,
          },
          notEmpty: {
            message: 'Please enter your name'
          }
        }
      },
      email: {
        validators: {
          stringLength: {
            min: 5,
          },
          notEmpty: {
            message: 'Please enter your email'
          }
        }
      },
      message: {
        validators: {
          stringLength: {
            min: 10,
          },
          notEmpty: {
            message: 'Enter more then 10 characters!'
          }
        }
      }
    }
  })

});
