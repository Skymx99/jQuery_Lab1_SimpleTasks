$(document).ready(function () {
    let $btn = $('<button>Click Me</button>');

    $('#div1').append($btn);
    $($btn).click(function () {
        alert('Hello.  You are getting better at this!');
    });

})

let $btn1 = $('<input/>').attr({ type: 'text', id: 'textBox', name: 'test' }).appendTo('#div2');


$('#btn1').click(function () {
    let message = $('input').val();
    alert(message);


});


$('#hover').css({
    'background-color': 'red',
    'width': '250px',
    'height': '250px'
});


$('#hover').hover(function () {
    $(this).css({
        'background-color': 'red',
        'width': '250px',
        'height': '250px'
    });
}, function () {
    $(this).css({
        'background-color': 'blue',
        'width': '250px',
        'height': '250px'
    });
});

$('p').click(function () {
    let colorR = Math.floor((Math.random() * 256));
    let colorG = Math.floor((Math.random() * 256));
    let colorB = Math.floor((Math.random() * 256));
    $(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
})



$('#clickName').click(function () {
    let name = '<span>Alex Lewis</span>';
    $('#myname').append(name);
});


let increment = 0;

$('#btn2').click(function () {
    let friends = ['Sabina', 'Blake', 'Cassie', 'Trevor', 'Kelby', 'Jon N.', 'Wes', 'Jon U.', 'Chad', 'Ben'];
    let item = document.createElement('li');
    item.innerText = friends[increment];
    $('ul').append(item);
    if (increment < 9) {
        increment++;
    }
    else if (increment >= 9) {
        increment = 0;
    }
});
