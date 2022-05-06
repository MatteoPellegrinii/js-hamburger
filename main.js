var x = document.getElementsByClassName('fas');
console.log(x);
var y = document.getElementsByClassName('hamburger-menu');
console.log(y);


x.addEventListener ('click',
    function() {
        y.style.display = 'block'
    }
);



