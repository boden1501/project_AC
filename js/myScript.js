
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
       
    a += `<div class="product" data-id="${v.id}" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}" data-machine_type="${v.machine_type}" data-cooling_capacity="${v.cooling_capacity}" data-effective_cooling_range="${v.effective_cooling_range}" data-energy_saving_technology="${v.energy_saving_technology}" data-rapid_cooling="${v.rapid_cooling}" data-utilities="${v.utilities}" data-power_consumption="${v.power_consumption}" data-cooler="${v.cooler}" data-outdoor="${v.outdoor}">
                            
    
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
        var energy_saving_technology = $(this).data('energy_saving_technology');
        localStorage.setItem('energy_saving_technology', energy_saving_technology);
        window.location = 'product.html';
        var machine_type = $(this).data('machine_type');
        localStorage.setItem('machine_type', machine_type);
        window.location = 'product.html';
        var rapid_cooling = $(this).data('rapid_cooling');
        localStorage.setItem('rapid_cooling', rapid_cooling);
        var utilities = $(this).data('utilities');
        localStorage.setItem('utilities', utilities);
        var power_consumption = $(this).data('power_consumption');
        localStorage.setItem('power_consumption', power_consumption);
        var cooling_capacity = $(this).data('cooling_capacity');
        localStorage.setItem('cooling_capacity', cooling_capacity);
        var effective_cooling_range = $(this).data('effective_cooling_range');
        localStorage.setItem('effective_cooling_range', effective_cooling_range);
        var name = $(this).data('name');
        localStorage.setItem('name', name);
        var cooler = $(this).data('cooler');
        localStorage.setItem('cooler', cooler);
        var outdoor = $(this).data('outdoor');
        localStorage.setItem('outdoor', outdoor);
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
    a += `<div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}" data-machine_type="${v.machine_type}" data-cooling_capacity="${v.cooling_capacity}" data-effective_cooling_range="${v.effective_cooling_range}" data-energy_saving_technology="${v.energy_saving_technology}" data-rapid_cooling="${v.rapid_cooling}" data-utilities="${v.utilities}" data-power_consumption="${v.power_consumption}" data-cooler="${v.cooler}" data-outdoor="${v.outdoor}">
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

        var id = $(this).data('id');
        localStorage.setItem('id', id);
        window.location = 'product.html';
        var machine_type = $(this).data('machine_type');
        localStorage.setItem('machine_type', machine_type);
        window.location = 'product.html';
        var rapid_cooling = $(this).data('rapid_cooling');
        localStorage.setItem('rapid_cooling', rapid_cooling);
        var utilities = $(this).data('utilities');
        localStorage.setItem('utilities', utilities);
        var power_consumption = $(this).data('power_consumption');
        localStorage.setItem('power_consumption', power_consumption);
        var cooling_capacity = $(this).data('cooling_capacity');
        localStorage.setItem('cooling_capacity', cooling_capacity);
        var effective_cooling_range = $(this).data('effective_cooling_range');
        localStorage.setItem('effective_cooling_range', effective_cooling_range);
        var name = $(this).data('name');
        localStorage.setItem('name', name);
        var cooler = $(this).data('cooler');
        localStorage.setItem('cooler', cooler);
        var outdoor = $(this).data('outdoor');
        localStorage.setItem('outdoor', outdoor);
        var price = $(this).data('price');
        localStorage.setItem('price', price);
        window.location = 'product.html';
        console.log(cooling_capacity);
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

    s += ` <div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}" data-machine_type="${v.machine_type}" data-cooling_capacity="${v.cooling_capacity}" data-effective_cooling_range="${v.effective_cooling_range}" data-energy_saving_technology="${v.energy_saving_technology}" data-rapid_cooling="${v.rapid_cooling}" data-utilities="${v.utilities}" data-power_consumption="${v.power_consumption}" data-cooler="${v.cooler}" data-outdoor="${v.outdoor}">
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

        var id = $(this).data('id');
        localStorage.setItem('id', id);
        window.location = 'product.html';
        var machine_type = $(this).data('machine_type');
        localStorage.setItem('machine_type', machine_type);
        window.location = 'product.html';
        var rapid_cooling = $(this).data('rapid_cooling');
        localStorage.setItem('rapid_cooling', rapid_cooling);
        var utilities = $(this).data('utilities');
        localStorage.setItem('utilities', utilities);
        var power_consumption = $(this).data('power_consumption');
        localStorage.setItem('power_consumption', power_consumption);
        var cooling_capacity = $(this).data('cooling_capacity');
        localStorage.setItem('cooling_capacity', cooling_capacity);
        var effective_cooling_range = $(this).data('effective_cooling_range');
        localStorage.setItem('effective_cooling_range', effective_cooling_range);
        var name = $(this).data('name');
        localStorage.setItem('name', name);
        var cooler = $(this).data('cooler');
        localStorage.setItem('cooler', cooler);
        var outdoor = $(this).data('outdoor');
        localStorage.setItem('outdoor', outdoor);
        var price = $(this).data('price');
        localStorage.setItem('price', price);
        window.location = 'product.html';
        console.log(cooling_capacity);
        var img = $(this).data('img');
        localStorage.setItem('img', img);
        window.location = 'product.html';
    });
}
function WAC(){
    let s = ''

    var a = filterProduct('type_id','wac', dataProduct)
console.log(a);
    $.each(a, function (i, v) {

    s += ` <div class="product" data-name="${v.name}" data-img="${v.img}" data-price="${v.price}" data-machine_type="${v.machine_type}" data-cooling_capacity="${v.cooling_capacity}" data-effective_cooling_range="${v.effective_cooling_range}" data-energy_saving_technology="${v.energy_saving_technology}" data-rapid_cooling="${v.rapid_cooling}" data-utilities="${v.utilities}" data-power_consumption="${v.power_consumption}" data-cooler="${v.cooler}" data-outdoor="${v.outdoor}">
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

        var id = $(this).data('id');
        localStorage.setItem('id', id);
        window.location = 'product.html';
        var machine_type = $(this).data('machine_type');
        localStorage.setItem('machine_type', machine_type);
        window.location = 'product.html';
        var rapid_cooling = $(this).data('rapid_cooling');
        localStorage.setItem('rapid_cooling', rapid_cooling);
        var utilities = $(this).data('utilities');
        localStorage.setItem('utilities', utilities);
        var power_consumption = $(this).data('power_consumption');
        localStorage.setItem('power_consumption', power_consumption);
        var cooling_capacity = $(this).data('cooling_capacity');
        localStorage.setItem('cooling_capacity', cooling_capacity);
        var effective_cooling_range = $(this).data('effective_cooling_range');
        localStorage.setItem('effective_cooling_range', effective_cooling_range);
        var name = $(this).data('name');
        localStorage.setItem('name', name);
        var cooler = $(this).data('cooler');
        localStorage.setItem('cooler', cooler);
        var outdoor = $(this).data('outdoor');
        localStorage.setItem('outdoor', outdoor);
        var price = $(this).data('price');
        localStorage.setItem('price', price);
        window.location = 'product.html';
        console.log(cooling_capacity);
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
    
    if (column == 'type_id') {
        return data.filter(item => item.type_id === value)
    }
    if (column == 'id')
        return data.filter(item => item.id == value)
}

$(document).ready(function () {

    LoadData(dataProduct);
    $("#sortby").change(function (e) {
        var selectedValue = $(this).val();
        $(this).find('option[value="SELECT"]').remove();
        if (selectedValue === 'high') {
            dataProduct.sort((a, b) => a.price - b.price)
            LoadData(dataProduct);
        }
        else if (selectedValue === 'low') {
            dataProduct.sort((a, b) => b.price - a.price)
            console.log(dataProduct)
            LoadData(dataProduct);
        }
        else if (selectedValue === 'A-Z') {
            dataProduct.sort((a, b) => a.name.localeCompare(b.name))
            LoadData(dataProduct);
        } else if (selectedValue === 'Z-A') {
            dataProduct.sort((a, b) => b.name.localeCompare(a.name))
            LoadData(dataProduct);
        }


    });
    $("input[name='price_filter']").change(function (e) {
        var selectedValues = [];
        $("input[name='price_filter']:checked").each(function () {
            selectedValues.push($(this).val());
        });

        // console.log("Selected values: " + selectedValues);

        // Kiểm tra nếu không có checkbox nào được chọn
        if (selectedValues.length === 0) {
            // Hiển thị tất cả sản phẩm
            LoadData(dataProduct);
            return;
        }

        // Lọc sản phẩm dựa trên giá tiền đã chọn
        var filteredProducts = dataProduct.filter(function (dataProduct) {
            var price = parseFloat(dataProduct.price);
            for (var i = 0; i < selectedValues.length; i++) {
                // console.log(selectedValues[i]);
                var range = selectedValues[i].split("-");
                var minPrice = parseFloat(range[0]);
                var maxPrice = parseFloat(range[1]);
                if (price >= minPrice && price <= maxPrice) {
                    return true;
                }
            }
            return false;
        });

        // Hiển thị sản phẩm đã lọc
        LoadData(filteredProducts);
    });




});
  
