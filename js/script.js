// Проверка устройства на отображение WEBP зображений
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
//конец webp проверки

$(document).ready(function(){
    $('.title-banner__slider-content').slick({
        dots: true,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
    });
  });