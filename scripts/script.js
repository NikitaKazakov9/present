document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName(" car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль!");
    } else {
        alert("Спасибо за заявку? Мы свяжемся с вами в ближайшее время!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.5) / 10) + 'px,' + ((event.clientY * 0.5) / 10) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});

function openList(list, item_list) {
    let div = document.getElementById(list).style.display;
    let blockHidden = document.getElementById(list);
    let item = document.getElementById(item_list).style;

    if(div=="") {
        div = "none";
        item = "transform: rotate(0deg); top: -3px"
    }

    if (div == "none") {
        div = "block";
        item = "transform: rotate(180deg); top: 0px"
    } else {
        div = "none";
        item = "transform: rotate(0deg); top: -3px"
    }
    document.getElementById(list).style.display = div;
    document.getElementById(item_list).style = item;

    blockHidden.classList.add('b-show');
}

function openMenu() {
    document.getElementById("container_mobile").classList.toggle("show");
}