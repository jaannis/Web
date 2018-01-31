$(document).ready(function(){
    // $( "#box" ).draggable({ scroll: true });
    // $( "#draggable2" ).draggable({ scroll: true, scrollSensitivity: 100 });

    $( ".candy" ).draggable({ scroll: true, scrollSpeed: 100, revert: "invalid" });
    $( ".cell" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );