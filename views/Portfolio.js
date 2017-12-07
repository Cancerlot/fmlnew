$(document).ready(function(){

  //scroll effects

  var me = document.querySelector('#meLink').addEventListener('click', scrollTo),

  skill = document.querySelector('#skillsLink').addEventListener('click', scrollTo1),

  portfolio =
  document.querySelector('#portfolioLink').addEventListener('click', scrollTo2),

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
    document.querySelector('#portfolio').scrollIntoView({
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

  //portfolio image overlay

  


});
