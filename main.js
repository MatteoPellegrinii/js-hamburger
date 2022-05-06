let simbolo = document.querySelector('fas');
console.log(simbolo);
let menu = document.querySelector('hamburger-menu');
console.log(menu);


simbolo.addEventListener ('click',
    function() {
        menu.style.display = 'block'
    }
);

