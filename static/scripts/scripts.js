
$(document).ready(function () {

    // For Sidebar Menu Collapse

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }


    // For Toggle Sidebar Menu 


    $('.toggler').on('click', function () {
        $('.menu-container').toggleClass('active');
    });

    $('.nav-toggler').on('click', function () {
        $('.navbar-toggler').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    function setMenuHeight() {
        var navbarHeight = $('.navbar').outerHeight();
        $('.menu-wrapper')
            .outerHeight(document.documentElement.clientHeight - navbarHeight)
            .niceScroll({
                emulatetouch: true
            });
    }
    setMenuHeight();
    $(window).on('resize', function () {
        setMenuHeight();
    });





});