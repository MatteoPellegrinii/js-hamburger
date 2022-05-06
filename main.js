
var menu = document.querySelector(".hamburger-menu");
console.log(menu);
var simbolo = document.querySelector(".fa-bars");
console.log(simbolo);
var chiusura = document.querySelector(".close");
console.log(chiusura);

simbolo.addEventListener ('click',
    function() {
        menu.style.display = 'block'
    }
);

chiusura.addEventListener ('click',
    function() {
        menu.style.display = 'none'
    }
);


