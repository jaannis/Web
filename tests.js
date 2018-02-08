$(document).ready(function () {
    // for(var itemKey in shopping_list) {
    //     var item = shopping_list[itemKey];
    //     addItem(item);
    // }

    $('#add-button').click(function () {
        var newItem = {
            name: $('#new-item-name').val(),
            completed: false,
        };
        addItem(newItem);
        $('#new-item-name').val('');
    });

    $(document).on('click', '#main-list li', function (event) {
        event.stopPropagation();
        $(this).toggleClass('done');
    });

    $('#load-data').click(function () {
        $('#main-list').html('');
        $.get('actions.php?page=load', function (response) {
            var data = JSON.parse(response);
            for (var itemKey in data) {
                var item = data[itemKey];
                addItem(item);
            }
        });
    });

    $('#save-data').click(function () {
        var data = [];
        $('#main-list li').each(function () {
            var obj = {
                name: $(this).find('span').text(),
                completed: $(this).hasClass('done') ? true : false,
            }
            data.push(obj);
        });
        console.log(data);
        $.post('actions.php?page=save',  "data_to_save=" + JSON.stringify(data),  function (response) {
        });
    });
});

function addItem(item) {
    var li = $('<li>'); // <li></li>
    li.html('<span>' + item.name + '</span>');
    if (item.completed) {
        li.addClass('done');
        var btn = $('<button>Delete</button>') // <button>Delete</button>
        li.append(btn);
    }
    $('#main-list').append(li);