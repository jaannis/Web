var number = 123123; //integer
var decimal = 3.14; //float
var bool = true; //bool
var name = 'John'; //string
var cars = [
    'zaz',
    'vaz',
    'gaz'
]; //array
var person = {
    name: 'John',
    age: 15
}; //object
var people = [
    {
        name: 'John',
        age: 15
    },
    {
        name: 'Billy',
        age: 16
    },
    {
        name: 'Jane',
        age: 17
    },
];

// +, -, *, /, %
var something = 1 + 1;
something = 3;

console.log(add(1, 2));

function add(num1, num2) {
    return num1 + num2;
}

if (true) {

} else {

}

var gender = 'male';
switch (gender) {
    case 'male':
        console.log('Gender is: male')
        break;
    case 'female':
        console.log('Gender is: female')
        break;
    case 'camel':
        console.log('Gender is: camel')
        break;
    default:
        console.log('Gender is: Not known')
        break;
}

var i=0;
while(i < 10) {
    i++;
    if(i == 5){
        break;
    }
}

for(var i=0; i < 10; i++){

}

var cars = ['vaz', 'gaz', 'zaz'];
for(var i in cars){
    console.log(cars[i]);
}

for (var i = 0; i <= 20; i++){
    if(i % 2 == 0){
    console.log(i);
    }
    
}
function addNumber(){
    var number = document.querySelector('#counter').innerHTML;
    document.querySelector('#counter').innerHTML = parseInt(number) + 1;
}

document.querySelector('#another-button').innerHTML = 'Super cool button';

document.querySelector('#another-button').addEventListener('click', function(){
document.querySelectorAll('.place-for-text').innerHTML = 'Some other text';
});