function clickCompose() {
  var global_button = document.querySelector('.J-J5-Ji.T-I-KE.L3');
  var mousedownEvent = new MouseEvent('mousedown'); 
  global_button.dispatchEvent(mousedownEvent); 
  var mouseupEvent = new MouseEvent('mouseup'); 
  global_button.dispatchEvent(mouseupEvent);
}

clickCompose();