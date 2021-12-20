window.addEventListener("DOMContentLoaded", function () {
  //бургер меню
  let burger = document.getElementById("nav_toggle");
  console.log(burger);

  burger.addEventListener("click", myBurger);

  function myBurger() {
    let element = document.getElementById("nav");

    element.classList.toggle("open");
    burger.classList.toggle("active");
  }

    //прокрутка при клике
    const menuLinks = document.querySelectorAll(".header__nav-link[data-goto]");

    if (menuLinks.length > 0) {
      menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
      });

      function onMenuLinkClick(e) {
        const menuLink = e.target;

        //проверка есть ли такой атрибут
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
          const gotoBlock = document.querySelector(menuLink.dataset.goto);
          const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

          window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
          });
          e.preventDefault();
        }
      }
    }

  //яндекс карта
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("yandex-map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 10,
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.8, 37.8], // координаты точки
      },
    });

    var myPlacemark = new ymaps.Placemark(
      [55.76, 37.56],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/form/PIN1.png",
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42],
      }
    );

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }
});
