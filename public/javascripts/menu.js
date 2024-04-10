function menuToggle(state) {
  var el = document.getElementById('menu');

  switch(state) {
    case 'show':
      el.style.opacity=1;
      el.style.color='rgb(96, 96, 96)';
      el.style.visibility='visible';
      el.style.transition='visibility 0s, opacity 0.3s';
      break;
    case 'hide':
      el.style.opacity=0;
      el.style.color='black';
      el.style.visibility='hidden';
      el.style.transition='visibility 0.3s, opacity 0.3s';
      break;
  }
}
