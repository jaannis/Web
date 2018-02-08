$(document).ready(function(){

    $('#send-chat-message').click(function(){
        var username = $('#chat-username-input').val();
        // document.querySelector('#chat-username-input').value // <-- vanilla JS
        var comment = $('#chat-message-input').val();
        // document.querySelector('#chat-message-input').value // <-- vanilla JS

        var date = new Date('2017-12-24');
        var commentElement = $('<div class="chat-message">' +
            '<h4>' + username + '<em>' + date + '</em></h4>' +
            '<p>' +
            comment +
             '</p>' +
         '</div>');
        $('#chat-window').append(commentElement);
        $('#chat-message-input').val('');
    });
    $('#send-chat-message').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#send-chat-message').click();//Trigger search button click event
        }
    });
});