$(document).ready(function () {
    loadCart();
    $("input[name='num']").blur(function (e) {
        const index = $(this).closest("tr").index();
        const quantity = $(this).val();
        
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

    function loadCart() {
  let cart = localStorage.getItem('cartLocalStorage');
  if (cart !== null) {
    cart = JSON.parse(cart);
    let total = 0;
    let cartItems = '';

    if (Array.isArray(cart)) {
      const existingProducts = [];

      cart.forEach((product) => {
        if (product && product.name) {
          const productName = product.name;
          const productPrice = product.price;
          const productImg = product.img;

          // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
          const existingProduct = existingProducts.find(
            (existingProduct) => existingProduct.name === productName
          );

          if (existingProduct) {
            // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
            existingProduct.quantity += 1;
          } else {
            // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới và đặt số lượng là 1
            existingProducts.push({
              name: productName,
              quantity: 1,
            });

            cartItems += `
              <table class="table" id="tb1">
                <tr class="header-content" style="font-weight: bold; background-color: rgb(201, 199, 199);">
                  <td><button class="remove-button">x</button></td>
                  <td><img src=".${productImg}" alt="" style="width: 160px;"></td>
                  <td>${productName}</td>
                  <td><input type="text" name="money" id="" value="${productPrice}$" readonly style="width:100px;"></td>
                </tr>
              </table>
            `;

            const totalPrice = productPrice * product.quantity;
            total += totalPrice;
            console.log(total);
            $("#total").val(total + '$');
          }
        }
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
