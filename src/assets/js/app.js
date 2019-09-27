import $ from 'cash-dom';
// import mk from './mk';

// window.mk = new mk();

$(() => {

  var $mk = $('#mk');
  var $scene = $('#scene');
  var bgstep = 200;

  // capture keyboard events
  // 13: ENTER
  // 32: SPACE
  // 37: LEFT
  // 38: UP
  // 39: RIGHT
  // 40: DOWN
  $(window).on('keyup', (e) => {
    if (e.keyCode == 37) {
      if ($mk.hasClass('forward')) {
        // turn around
        $mk.removeClass('forward');
      } else {
        // walk to the left
        var matrix = $scene.css('transform').split(',');
        $scene.css('transform', 'matrix(1,0,0,1,' + (parseInt(matrix[4]) + bgstep) + ',0)');
      }
    } else if (e.keyCode == 39) {
      if ($mk.hasClass('forward')) {
        // walk to the right
        var matrix = $scene.css('transform').split(',');
        $scene.css('transform', 'matrix(1,0,0,1,' + (parseInt(matrix[4]) - bgstep) + ',0)');
      } else {
        // turn around
        $mk.addClass('forward');
      }

    }
  });

});
