var input=parseInt(window.prompt("ループ回数を入力してください"));
var output="";

for(var i = 1; i < input; i++){
  var li = document.createElement('li');
  if( i % 15 == 0){
    li.textContent = 'FizzBuzz';
  }else if(i % 3 == 0){
    li.textContent = 'Fizz';
  }else if(i % 5 == 0
