var x = document.getElementsByClassName('fas');
console.log(x);
var y = document.getElementsByClassName('hamburger-menu');
console.log(y);


x.addEventListener ("click", myFunction);

function myFunction(){
    y.style.display = 'block';
}


