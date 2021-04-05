var fired = false;
window.addEventListener('scroll', loadWithDelay, false);

function loadWithDelay() {

}

$(document).ready(function () {
    setTimeout(function () {

    }, 2000);

    $('body').AddClassAnimation();


    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height > 132) {
            $('.js-header').addClass('is-scroll');
        } else {
            $('.js-header').removeClass('is-scroll');
        }
    });

    $('.js-to-item').on('click', function () {
        scrollToItem($(this));
    });


    function ScrollTop() {
        var height = 400,
            speed = 800;

        var $link = $('<span class="__cl-c-button-up___ js-btn-up"><span class="__cl-c-button-up__in___" rabindex="0"></span></span>').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, speed);

            return false;
        });
        var $container = $($link).appendTo('.js-box-arrow').hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > height) {
                $container.fadeIn();
            } else {
                $container.fadeOut();
            }
        });
    }

    ScrollTop();

    // slider
    if ($('.js-skills-slider').length) {
        $('.js-skills-slider').slick({
            lazyLoad: 'ondemand',
            dots: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            mobileFirst: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 567,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    variableWidth: false
                }
            }, {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                    variableWidth: false
                }
            }, {
                breakpoint: 1365,
                settings: {
                    slidesToShow: 6,
                    variableWidth: false
                }
            }, {
                breakpoint: 1679,
                settings: {
                    slidesToShow: 6,
                    variableWidth: false
                }
            }]

        });
    }
});

// Add animation
(function ($) {
    var addClassAnimation = {
        elementAnim: '.js-animate',
        classAnim: 'is-animated'
    };

    addClassAnimation.add = function (element) {
        var $self = this;
        var element = this.elementAnim;
        var addClass = this.classAnim;

        $(element).each(function () {
            var $this = $(this);

            var offsetEl = $this.offset();

            if (offsetEl.top <= $(document).scrollTop() + $(window).height() / 1) {
                $this.addClass(addClass);
            }
        });
    };

    $.fn.AddClassAnimation = function (options) {
        if (options && typeof options === 'object') {
            $.extend(addClassAnimation, options);
        }

        var $this = $(this);

        addClassAnimation.add($this);

        $(window).on('scroll', function () {
            addClassAnimation.add($this);
        });

        return this;
    };
})(jQuery);

// scroll to element
function scrollToItem(elem) {
    var el = $(elem).attr('href').slice(1),
        elToScroll = $(`#${el}`),
        navHeight = $('.js-header').outerHeight(),
        gap = 20,
        time = 500,
        offsetTop = elToScroll.offset().top,
        totalScroll = offsetTop - navHeight - gap;

    $('body,html').animate({
        scrollTop: totalScroll
    }, time);

    return false;
}

moveElem();

function moveElem() {
    var blockfrom = $('.js-remove--from').html();
    $('.js-remove--to').html(blockfrom);
    return false;
}
