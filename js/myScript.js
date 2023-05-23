
$(document).ready(function () {
    var slideIndex = 0;
    var slide = $("#banner-hide img");
    $(".prev").click(function () {
        console.log(slide.length);
        slideIndex--;
        console.log(slideIndex);
        if (slideIndex < 0) {
            slideIndex = slide.length - 1;
        }
        showSlide(slideIndex);
    });

    $(".next").click(function () {
        slideIndex++;
        if (slideIndex >= slide.length) {
            slideIndex = 0;
        }
        console.log(slideIndex);
        showSlide(slideIndex);
    });
    function showSlide(n) {

        // var slides = $(`#banner-hide img:nth(${slideIndex})`).attr('src');
        // $("#mainImage").attr('src', slides);
        // $("#mainImage").addClass("active"); // Add 'active' class to the image
        // setTimeout(function () {
        //     $("#mainImage").removeClass("active"); // Remove 'active' class after the transition
        // }, 10);


        $("#mainImage").fadeOut(200, function() {
            var src = slide.eq(n).attr('src');
            $(this).attr('src', src).fadeIn(200);
        });
    }
});

