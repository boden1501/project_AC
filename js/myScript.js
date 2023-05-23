
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
        $("#mainImage").fadeOut(200, function () {
            var src = slide.eq(n).attr('src');
            $(this).attr('src', src).fadeIn(200);
        });
    }

    LoadData();

});

function LoadData(){

    let s = ''
    $.each(dataProduct, function (k, v) {
        console.log(v)
        s += ` <div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}">
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
    $('.product').click(function() {

        var name = $(this).data('name');
        localStorage.setItem('name', name);
        window.location = './html/product.html';
        var price = $(this).data('price');
        localStorage.setItem('price', price);
        window.location = './html/product.html';

        var img = $(this).data('img');
        localStorage.setItem('img', img);
        window.location = './html/product.html';
      });
      
}