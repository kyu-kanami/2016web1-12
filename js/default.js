ar li = document.createElement('li');
li.textContent = 'アイテム';
document.getElementById('list').appendChild(li);
document.getElementById('choice').textContent = new Date();

var include_inNumber = function(price){
  return Math.floor(price);
}

document.getElementById('FizzBuzz').onsubmit = function(){
  window.alert(document.getElementById('FizzBuzz').word.value);
};

  for(var i = 1; i < 101; i++)
  {
    var li = document.createElement('li');
    li.textContent = i ;
    document.getElementById('FizzBuzz').appendChild(li);
  }
