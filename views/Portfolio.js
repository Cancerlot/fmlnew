$(document).ready(function(){

let i = 0;
const text = 'Hi, I am Glen and I am a Front-end Web Developer who is motivated to combine the art of design with the aptitude of programming.';

function delay(){
  setTimeout(function intro() {
    if (i < text.length) {
      document.querySelector('#description').innerHTML += text.charAt(i);
      i++;
      setTimeout(intro, 50);
    }
  },1000)
}

delay();


  //scroll effects

  const me = document.querySelector('#meLink').addEventListener('click', scrollTo),

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

});
