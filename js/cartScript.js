$(document).ready(function () {
    loadCart();
    $("input[name='num']").blur(function (e) {
        const index = $(this).closest("tr").index();
        const quantity = $(this).val();
        updateQuantity(index, quantity);
    });

    $(".remove-button").click(function () {
        let index = $(this).closest("tr").index();
        removeFromCart(index);
    });

    $("#reset").click(function (e) {
        resetCart();
        loadCart();
    });

    function resetCart() {
        localStorage.removeItem('cartLocalStorage');
    }

    function removeFromCart(index) {
        let cart = localStorage.getItem('cartLocalStorage');
        if (cart !== null) {
            cart = JSON.parse(cart);
            if (Array.isArray(cart)) {
                const productName = cart[index].name;
                cart = cart.filter(product => product.name !== productName);
                localStorage.setItem('cartLocalStorage', JSON.stringify(cart));
                loadCart();
            }
        }
    }

    function updateQuantity(index, quantity) {
        let cart = localStorage.getItem('cartLocalStorage');
        if (cart !== null) {
            cart = JSON.parse(cart);
            if (Array.isArray(cart)) {
                cart[index].quantity = parseInt(quantity);
                localStorage.setItem('cartLocalStorage', JSON.stringify(cart));
                loadCart(); // Tải lại giỏ hàng sau khi cập nhật số lượng
            }
        }
    }

    function loadCart() {
        let cart = localStorage.getItem('cartLocalStorage');
        if (cart !== null) {
            cart = JSON.parse(cart);
            let total=0;
            let cartItems = '';

            if (Array.isArray(cart)) {
                const cartMap = new Map(); // Sử dụng Map để nhóm sản phẩm giống nhau

                cart.forEach((product) => {
                    if (product && product.name) {
                        const productName = product.name;
                        const productPrice = product.price;
                        const productImg = product.img;

                        if (cartMap.has(productName)) {
                            // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
                            const existingProduct = cartMap.get(productName);
                            existingProduct.quantity += 1;
                        } else {
                            // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
                            cartMap.set(productName, {
                                name: productName,
                                price: productPrice,
                                img: productImg,
                                quantity: 1,
                            });
                        }
                        
                    }
                });

                cartMap.forEach((product) => {
                    cartItems += `
                        <table class="table" id="tb1">
                            <tr class="header-content" style="font-weight: bold; background-color: rgb(201, 199, 199);">
                                <td><button class="remove-button">x</button></td>
                                <td><img src=".${product.img}" alt="" style="width: 160px;"></td>
                                <td>${product.name}</td>
                                <td><input type="number" name="num" id="" min="1" value="${product.quantity}" style="width: 40px;"></td>
                                <td><input type="text" name="money" id="" value="${product.price}$" readonly style="width:100px;"></td>
                            </tr>
                        </table>
                    `;
                    const totalPrice = product.price * product.quantity;
                    total += totalPrice;
                    console.log(total);
                    $("#total").val(total+'$');
                });
            }

            $(".cart-table").html(cartItems);

            // Attach event handlers for remove buttons

            // Hiển thị <div class="cart-table"> khi giỏ hàng rỗng
            if (cart.length === 0) {
                $(".cart-table").html(`
                    <img class="m-auto" src="../img/cart_empty.png" alt="">
                    <h3>Your Cart is Empty</h3>
                    <p><a href="../index.html">continue shopping</a></p>
                `);
            }
        } else {
            // Hiển thị <div class="cart-table"> khi giỏ hàng rỗng
            $(".cart-table").html(`
                <img class="m-auto" src="../img/cart_empty.png" alt="">
                <h3>Your Cart is Empty</h3>
                <p><a href="../index.html">continue shopping</a></p>
            `);
        }
    }
});
