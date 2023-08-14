let boxs = document.querySelectorAll('#container-box .box h1');
let navbar = document.querySelector('header .navbar');
let section3 = document.querySelector('.wapper-main');

let Eqoual = false;
onscroll = () => {
    if (scrollY <= 270) {
        navbar.style.opacity = '1';
    }
    if (scrollY > 1558) {
        navbar.style.opacity = '1';
    }
    if (scrollY >= 271 & scrollY < 1558) {
        navbar.style.opacity = '0';
    }
    //-------------------
    if (scrollY >= section3.offsetTop) {
            if (!Eqoual) {
                boxs.forEach((box) => startCount(box));
            }
            Eqoual = true;
}
};
function startCount(box){
            let count = setInterval(() => {
                box.innerHTML++;
                if (box.innerHTML == box.dataset.number) {
                clearInterval(count);
            };
        },.5 / box.dataset.number);      
};
