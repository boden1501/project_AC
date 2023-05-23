
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


        $("#mainImage").fadeOut(200, function () {
            var src = slide.eq(n).attr('src');
            $(this).attr('src', src).fadeIn(200);
        });
    }


    let s = ''
    $.each(dataProduct, function (k, v) {
        console.log(v)
        s += ` <div class="product">
                            <div class="img-product">
                                <img src="${v.img}" alt="">
                            </div>
                            <div class="detail-product">
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}</p>
                            </div>
                </div>`;
    })
    $('#top-product').html(s)

});

