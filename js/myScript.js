
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

    
    topProduct();
   
});
function topProduct() {
    let s = ''
    // var a1 = filterProduct('brand_id', 'tb', dataProduct)
    // var a2 = filterProduct('brand_id', 'lg', dataProduct)
    var a3 = filterProduct('bestSeller', true, dataProduct)
    // var a4 = filterProduct('name', 'Máy lạnh LG Inverter 1.5 HP V13APFP', dataProduct)

    //console.log('Ban chay=', a3)//, dataProduct)
    $.each(a3, function (i, v) {

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
    $('.product').click(function () {

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
function LoadData() {

    let a = ''
    $.each(dataProduct, function (i, v) {
        console.log(v)
    a += `<div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}">
                            <div class="img-product">
                                <img src=".${v.img}" alt="">
                            </div>
                            <div class="detail-product">
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}</p>
                                
                            </div>
                </div>`;
    })

    $('.list-all').html(a)
    $('.product').click(function () {

        var name = $(this).data('name');
        localStorage.setItem('name', name);
        window.location = 'product.html';
        var price = $(this).data('price');
        localStorage.setItem('price', price);
        window.location = 'product.html';

        var img = $(this).data('img');
        localStorage.setItem('img', img);
        window.location = 'product.html';
    });

}
function filterProduct(column, value, data) {
    if (column == 'brand_id') {
        return data.filter(item => item.brand_id == value)
    }

    if (column == 'name') {
        return data.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) != -1)
    }

    if (column == 'bestSeller') {
        return data.filter(item => item.bestSeller === true)
    }

    if (column == 'isNew') {
        return data.filter(item => item.isNew === value)
    }
    if (column == 'id')
        return data.filter(item => item.id == value)
}


function sortBy(column, type, data) {
    if (column == 'brand_id') {
        return data.sort((a, b) => a.brand_id - b.brand_id)
    }

    if (column == 'name') {
        return data.sort(data.sort((a, b) => a.name - b.name))
    }

    if (column == 'price') {
        if (type === 'inc') data.sort((a, b) => a.price - b.price)
        else data.sort((a, b) => b.price - a.price)
    }
}