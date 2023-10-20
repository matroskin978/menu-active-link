(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

window.addEventListener('scroll', function () {
    let headerNav = document.getElementById('header-nav');
    headerNav.classList.toggle('headernav-scroll', window.scrollY > 142);
});

// https://stackoverflow.com/questions/67383776/bootstrap-5-offcanvas-scrolls-back-to-top-on-close
const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById("cart-open").addEventListener('click', (e) => {
    e.preventDefault();
    offcanvasCart.toggle();
});

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        offcanvasCart.hide();
        let href = item.dataset.href;
        document.getElementById(href).scrollIntoView();
    });
});

// https://github.com/ziggi/dom-parents/blob/master/index.js
function getParents(element, selector, includeElement = false) {
    const hasSelector = selector !== undefined;
    const elements = [];
    let el = element;
    if (!includeElement) {
        el = el.parentElement;
    }
    while (el !== null) {
        if (el.nodeType === Node.ELEMENT_NODE) {
            if (!hasSelector || el.matches(selector)) {
                elements.push(el);
            }
        }
        el = el.parentElement;
    }
    return elements;
}

let currentLink = location.pathname;
document.querySelectorAll('.navbar-nav a').forEach(item => {
    let linkHref = item.getAttribute('href');
    if (currentLink === linkHref) {
        item.classList.add('active');
        let parentBlocks = getParents(item, '.dropdown-menu');
        if (parentBlocks.length) {
            parentBlocks.forEach(el => {
                el.previousElementSibling.classList.add('active');
            });
        }
    }
});

$(document).ready(function () {

    /* let currentLink = location.pathname;
    $('.navbar-nav a').each(function () {
        let linkHref = $(this).attr('href');
        if (currentLink === linkHref) {
            $(this).addClass('active');
            let parentBlocks = $(this).parents('.dropdown-menu');
            if (parentBlocks.length) {
                parentBlocks.each(function () {
                    $(this).prev().addClass('active');
                });
            }
        }
    }); */

    $('#cart-open').appendTo('#nav-btns');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $(".owl-carousel-full").owlCarousel({
        margin: 20,
        // nav: true,
        dots: true,
        navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],

        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});