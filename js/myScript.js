
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
    topCassetteAC();
    
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
                                <p class='price'>${v.price}$</p>
                                
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


function topWindowAC() {
    let s = ''

    var a = dataProduct.filter(function(product) {
        return product.type_id === 'wac' && product.bestSeller === true;
      });
      
console.log(a);
    $.each(a, function (i, v) {

    s += ` <div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}">
                            <div class="img-product">
                                <img src="${v.img}" alt="">
                            </div>
                            <div class="detail-product">
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}$</p>
                                
                            </div>
                </div>`;
    })

    $('#top-windowAC-product').html(s)
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

function topCassetteAC() {
    let s = ''
    // var a1 = filterProduct('brand_id', 'tb', dataProduct)
    // var a2 = filterProduct('brand_id', 'lg', dataProduct)
    var r = filterProduct('type_id', 'cac', dataProduct)
    // var a4 = filterProduct('name', 'Máy lạnh LG Inverter 1.5 HP V13APFP', dataProduct)

    //console.log('Ban chay=', a3)//, dataProduct)
    $.each(r, function (i, v) {

    s += ` <div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}">
                            <div class="img-product">
                                <img src="${v.img}" alt="">
                            </div>
                            <div class="detail-product">
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}$</p>
                                
                            </div>
                </div>`;
    })

    $('#top-cassetteAC-product').html(s)
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


function LoadData(dataProduct) {

    let a = ''
    $.each(dataProduct, function (i, v) {
       
    a += `<div class="product" data-id="${v.id}" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}" data-machine_type="${v.machine_type}" data-cooling_capacity="${v.cooling_capacity}" data-effective_cooling_range="${v.effective_cooling_range}">
                            <div class="img-product">
                                <img src=".${v.img}" alt="">
                            </div>
                            <div class="detail-product">                         
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}$</p>
                                
                            </div>
                </div>`;
                console.log(v.cooling_capacity);
    })
    
    $('.list-all').html(a)
    $('.product').click(function () {
        var id = $(this).data('id');
        localStorage.setItem('id', id);
        window.location = 'product.html';
        var machine_type = $(this).data('machine_type');
        localStorage.setItem('machine_type', machine_type);
        window.location = 'product.html';
        
        var cooling_capacity = $(this).data('cooling_capacity');
        localStorage.setItem('cooling_capacity', cooling_capacity);
        var effective_cooling_range = $(this).data('effective_cooling_range');
        localStorage.setItem('effective_cooling_range', effective_cooling_range);
        var name = $(this).data('name');
        localStorage.setItem('name', name);
   
        var price = $(this).data('price');
        localStorage.setItem('price', price);
        window.location = 'product.html';
        console.log(cooling_capacity);
        var img = $(this).data('img');
        localStorage.setItem('img', img);
        window.location = 'product.html';
    });

}
function CAC(){
    let a = ''
    var t = filterProduct('type_id','cac', dataProduct)
    $.each(t, function (i, v) {
        console.log(v)
    a += `<div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}">
                            <div class="img-product">
                                <img src=".${v.img}" alt="">
                            </div>
                            <div class="detail-product">
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}$</p>
                                
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
function SAC(){
    let s = ''

    var a = filterProduct('type_id','sac', dataProduct)
console.log(a);
    $.each(a, function (i, v) {

    s += ` <div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}">
                            <div class="img-product">
                                <img src=".${v.img}" alt="">
                            </div>
                            <div class="detail-product">
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}$</p>
                                
                            </div>
                </div>`;
    })

    $('.list-all').html(s)
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
function WAC(){
    let s = ''

    var a = filterProduct('type_id','wac', dataProduct)
console.log(a);
    $.each(a, function (i, v) {

    s += ` <div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}">
                            <div class="img-product">
                                <img src=".${v.img}" alt="">
                            </div>
                            <div class="detail-product">
                                <p class='name-product'>${v.name}</p>
                                <p class='price'>${v.price}$</p>
                                
                            </div>
                </div>`;
    })

    $('.list-all').html(s)
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
    
    if (column == 'type_id') {
        return data.filter(item => item.type_id === value)
    }
    if (column == 'id')
        return data.filter(item => item.id == value)
}


function addToCart(id) {
    // Lấy thông tin sản phẩm dựa trên id
    let product = filterProduct('id', id, dataProduct);
  
    // Kiểm tra nếu đã có giỏ hàng trong localStorage
    let cart = localStorage.getItem('cartLocalStorage');
    if (cart !== null) {
      cart = JSON.parse(cart); // Chuyển đổi chuỗi thành đối tượng
      cart.push(product[0]); // Thêm sản phẩm vào giỏ hàng
    } else {
      cart = [product[0]]; // Tạo mới giỏ hàng và thêm sản phẩm
    }
  
    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cartLocalStorage', JSON.stringify(cart));
  
    // Thông báo thành công
    alert('Đã thêm sản phẩm vào giỏ hàng');
  }
  
