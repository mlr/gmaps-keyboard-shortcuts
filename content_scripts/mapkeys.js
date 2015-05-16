window.addEventListener('keydown', function(event) {
  if($('#searchboxinput').is(':focus')) return true;
  if(currentlyPanningMap(event)) return true;

  pressed = letter(event);
  if(pressed != 'Z' && pressed != 'X') switchToEarthMap();

  event.stopImmediatePropagation();
  applyKeyMapping(pressed);
}, true);

currentlyPanningMap = function(event) {
  chr = event.keyCode;
  return chr >= 37 && chr <= 40;
}

switchToEarthMap = function() {
  if(!$('button[jsaction="compass.left"]').length) {
    $('.widget-minimap-shim-button').trigger('click');
  }
}

letter = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    return String.fromCharCode(event.keyCode);
  }
}

applyKeyMapping = function(letter) {
  switch(letter) {
    case 'Q':
      $('button[jsaction="compass.left"]').trigger('click');
      break;
    case 'E':
      $('button[jsaction="compass.right"]').trigger('click');
      break;
    case 'Z':
      $('.widget-zoom-in').trigger('click');
      break;
    case 'X':
      $('.widget-zoom-out').trigger('click');
      break;
    case 'T':
      $('button.widget-tilt-button').trigger('click');
      break;
  }

  return true;
}
