(function() {
// --- burger.js ---
document.addEventListener("DOMContentLoaded", function () {
        const burger = document.querySelector(".mobile__menu");
        const burgerIcon = document.querySelector(".burger");
        const nav = document.querySelector(".header__nav");
        const html = document.querySelector("html");
        const navLinks = document.querySelectorAll(".header__nav a");

        burger.addEventListener("click", function () {
            burgerIcon.classList.toggle("open");
            nav.classList.toggle("navOpen");
            if (html.style.overflow === "hidden") {
                html.style.overflow = "";
            } else {
                html.style.overflow = "hidden";
            }
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                burgerIcon.classList.remove("open");
                nav.classList.remove("navOpen");
                html.style.overflow = "";
            });
        });
    });


// --- toc.js ---
document.addEventListener("DOMContentLoaded", function () {
    if (Swiper) {
        var swiper = new Swiper(".toc__container", {
            slidesPerView: "auto",
            spaceBetween: 24,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: true,
            }})}})

       

// --- galleria.js ---
document.addEventListener("DOMContentLoaded", function (){
if (Swiper) {
var swiper = new Swiper(".galleria", {
            slidesPerView: "6",
            spaceBetween: 20,
            draggable: true,
            loop: true,
            navigation: {
                nextEl: ".swiperResultArrowRight",
                prevEl: ".swiperResultArrowLeft",
                disabledClass: "disabled",
            },
            autoplay: {
                delay: 1000,
            },
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    initialSlide: 1,
                },
                769: {
                    slidesPerView: "3",
                },
                1024: {
                    slidesPerView: "6",
                },
            },
        });}})

// --- reviews.js ---
document.addEventListener("DOMContentLoaded", function () {
  if (Swiper) {
    const swiperreviews_2 = new Swiper("#recensioni .swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
                nextEl: ".arrow.right",
                prevEl: ".arrow.left",
                disabledClass: "disabled",
            },
      breakpoints:{
        769: {
          slidesPerView: 1
        },
        1024:{
          slidesPerView: 3
        }
      }
    });
  }
});

// --- faq.js ---
document.addEventListener("DOMContentLoaded", function () {


    function setParagraphMarginTop(paragraph) {
        if (window.innerWidth < 768) {
            paragraph.style.marginTop = "0";
        } else {
            paragraph.style.marginTop = "0";
        }
    }

    function toggleAccordionIcon(item, isOpen) {
        var iconParagraph = item.querySelector(".accord__item>div:first-child>p");
        if (iconParagraph) {
            if (isOpen) {
                iconParagraph.textContent = "-";
            } else {
                iconParagraph.textContent = "+";
            }
        }
    }

    var sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
        var items = section.querySelectorAll(".accord__item");
        if (items.length > 0) {
            var firstItem = items[0];
            var descr = firstItem.querySelector("div + div");
            setTimeout(() => {
                descr.classList.add("show");

                var firstParagraph = descr.querySelector("p");

                if (firstParagraph) {
                    firstParagraph.style.visibility = "visible";
                    setParagraphMarginTop(firstParagraph);
                }

                descr.style.maxHeight = descr.scrollHeight  + "px";
                
                // Устанавливаем иконку "-" для первого открытого элемента
                toggleAccordionIcon(firstItem, true);
            }, 0);

            items.forEach(function (item) {
                // Устанавливаем иконку "+" для всех остальных элементов
                if (item !== firstItem) {
                    toggleAccordionIcon(item, false);
                }

                item.addEventListener("click", function () {
                    var descr = item.querySelector("div + div");
                    var secondDiv = item.querySelector("div + div");
                    var paragraph = secondDiv
                        ? secondDiv.querySelector("p")
                        : null;

                    // Закрываем все другие аккордеоны
                    items.forEach(function (otherItem) {
                        if (otherItem !== item) {
                            var otherDescr = otherItem.querySelector("div + div");
                            var otherSecondDiv = otherItem.querySelector("div + div");
                            var otherParagraph = otherSecondDiv
                                ? otherSecondDiv.querySelector("p")
                                : null;
                            
                            otherDescr.classList.remove("show");
                            otherDescr.style.maxHeight = "0";
                            if (otherParagraph) {
                                otherParagraph.style.visibility = "hidden";
                                otherParagraph.style.marginTop = "0";
                            }
                            // Меняем иконку на "+" для закрытых аккордеонов
                            toggleAccordionIcon(otherItem, false);
                        }
                    });

                    // Переключаем текущий аккордеон
                    if (descr.classList.contains("show")) {
                        descr.classList.remove("show");
                        descr.style.maxHeight = "0";
                        if (paragraph) {
                            paragraph.style.visibility = "hidden";
                            paragraph.style.marginTop = "0";
                        }
                        toggleAccordionIcon(item, false);
                    } else {
                        descr.classList.add("show");
                        descr.style.maxHeight = descr.scrollHeight + "px";
                        if (paragraph) {
                            paragraph.style.visibility = "visible";
                            setParagraphMarginTop(paragraph);
                        }
                        toggleAccordionIcon(item, true);
                    }
                });
            });
        }
    });

    window.addEventListener("resize", function () {
        var sections = document.querySelectorAll("section");
        sections.forEach(function (section) {
            var items = section.querySelectorAll(".accord__item");
            items.forEach(function (item) {
                var descr = item.querySelector("div + div");
                if (descr.classList.contains("show")) {
                    var paragraph = descr.querySelector("p");
                    if (paragraph) {
                        setParagraphMarginTop(paragraph);
                    }
                }
            });
        });
    });
});
})();