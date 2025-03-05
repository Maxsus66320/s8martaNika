/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective: 600 });
TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

var total = 50; // Количество лепестков
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

// Создание лепестков
for (let i = 0; i < total; i++) {
    let Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class: 'dot' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
    warp.appendChild(Div);
    animm(Div);
}

// Анимация лепестков
function animm(elm) {
    TweenMax.to(elm, R(6, 15), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15
    });
    TweenMax.to(elm, R(4, 8), {
        x: '+=100',
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
    });
    TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5
    });
}

// Случайное число в диапазоне
function R(min, max) {
    return min + Math.random() * (max - min);
}

/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: [
        'Желаю, чтобы в твоей жизни было море счастья, любви и вдохновения! Ты невероятная, светлая и сильная, и я искренне желаю, чтобы твое сердце всегда было наполнено любовью, а жизнь — приятными сюрпризами. Пусть сбываются твои мечты, а рядом будут только те, кто искренне тебя ценит и любит. Люблю тебя ❤️'
    ],
    startDelay: 5000, // Задержка перед началом анимации текста
    typeSpeed: 50, // Скорость печати
    backSpeed: 0, // Скорость удаления текста (не используется, так как loop: false)
    fadeOut: true, // Постепенное исчезновение текста
    loop: false, // Не повторять анимацию
    showCursor: false, // Скрыть курсор
    onComplete: function () {
        // Показываем автора после завершения анимации текста
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});

// Оптимизация для мобильных устройств
window.addEventListener('resize', function () {
    w = window.innerWidth;
    h = window.innerHeight;
});