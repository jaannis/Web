$(document).ready(function(){
    // $( "#box" ).draggable({ scroll: true });
    // $( "#draggable2" ).draggable({ scroll: true, scrollSensitivity: 100 });

    $( ".candy" ).draggable({ scroll: true, scrollSpeed: 100, revert: "invalid" });

    var counter = 0;


    $( ".cell" ).droppable({
      accept: '.candy',
      drop: function( event, ui ) {
        var $candy = ui.draggable;
       $candy.position({
         my: 'center',
         at: 'center',
         of: $(event.target)
       });

       $candy.addClass('is-in-the-box');
       countCandy();
      }
    });

    function countCandy(){
      console.info($('is-in-the-box').length);
    }
  });