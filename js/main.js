" use strict";

/* Burger-menu */

$(".menu-icon-wrapper").on("click", function(){
    $(".menu-icon").toggleClass("menu-icon-active");
});

$("#menu-icon-wrapper").on("click", function(event){
    event.preventDefault();

    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
});

/* Fixed Header */

var header = $("#header");
var introH = $("#intro").innerHeight();
var headerH = header.innerHeight();
var portfolioH = $("#portfolio").innerHeight();
var sumH = introH + portfolioH + headerH;
var scrollOffset = 0;

checkScroll(scrollOffset);

$(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
});

function checkScroll (scrollOffset) {
    if(scrollOffset >= sumH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}

/* Modal-window */

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");
modalCall.on("click", function(event){
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $(modalId).addClass('modal-show');
    $("body").addClass("no-scroll");

    setTimeout(function() {
        $(modalId).find('.modal__dialog').css({
            transform: "scale(1)"
        });
    }, 200);
});

modalClose.on("click", function(event){
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find('.modal__dialog').css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        modalParent.removeClass('modal-show');
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal").on("click", function(event){
    let $this = $(this);

    $this.find('.modal__dialog').css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        $this.removeClass('modal-show');
        $("body").removeClass("no-scroll");
    }, 200);
});

$(".modal__dialog").on("click", function(event){
    event.stopPropagation();
});

/* Slider */

$(".project__slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true
});













