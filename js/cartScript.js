// $(document).ready(function () {
//     loadCart();
//     $("input[name='num']").blur(function (e) {
//         const index = $(this).closest("tr").index();
//         const quantity = $(this).val();

//     });

//     $(".remove-button").click(function () {
//         let index = $(this).closest("tr").index();
//         removeFromCart(index);
//     });

//     $("#reset").click(function (e) {
//         resetCart();
//         loadCart();
//     });

//     function resetCart() {
//         localStorage.removeItem('cartLocalStorage');
//     }

//     function removeFromCart(index) {
//         let cart = localStorage.getItem('cartLocalStorage');
//         if (cart !== null) {
//             cart = JSON.parse(cart);
//             if (Array.isArray(cart)) {
//                 const productName = cart[index].name;
//                 cart = cart.filter(product => product.name !== productName);
//                 localStorage.setItem('cartLocalStorage', JSON.stringify(cart));
//                 loadCart();
//             }
//         }
//     }

//     function loadCart() {
//         let cart = localStorage.getItem('cartLocalStorage');
//         if (cart !== null) {
//           cart = JSON.parse(cart);
//           let total = 0;
//           let cartItems = '';

//           if (Array.isArray(cart)) {
//             const existingProducts = [];

//             cart.forEach((product) => {
//               if (product && product.name) {
//                 const productName = product.name;
//                 const productPrice = product.price;
//                 const productImg = product.img;
//                 const productQuantity = product.quantity || 1;

//                 // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
//                 const productId = product.id;
//                 const existingProductIndex = existingProducts.findIndex(
//                   (existingProduct) => existingProduct.id === productId
//                 );

//                 if (existingProductIndex !== -1) {
//                   // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên
//                   existingProducts[existingProductIndex].quantity += productQuantity;
//                   console.log('Increased quantity:', existingProducts[existingProductIndex].quantity);
//                 } else {
//                   // Sản phẩm chưa tồn tại trong giỏ hàng, thêm mới và đặt số lượng là 1
//                   existingProducts.push({
//                     id: productId,
//                     quantity: productQuantity,
//                   });
//                 }

//                 cartItems += `
//                   <table class="table" id="tb1">
//                     <tr class="header-content" style="font-weight: bold; background-color: rgb(201, 199, 199);">
//                       <td><button class="remove-button">x</button></td>
//                       <td><img src=".${productImg}" alt="" style="width: 160px;"></td>
//                       <td>${productName}</td>
//                       <td><input type="number" name="num" id="" min="1" value="${productQuantity}" style="width: 40px;"></td>
//                       <td><input type="text" name="money" id="" value="${productPrice}$" readonly style="width:100px;"></td>
//                     </tr>
//                   </table>
//                 `;

//                 const totalPrice = productPrice * productQuantity;
//                 total += totalPrice;
//                 console.log('Total:', total);
//                 $("#total").val(total + '$');
//               }
//             });
//           }

//           $(".cart-table").html(cartItems);

//           // Attach event handlers for remove buttons

//           // Hiển thị <div class="cart-table"> khi giỏ hàng rỗng
//           if (cart.length === 0) {
//             $(".cart-table").html(`
//               <img class="m-auto" src="../img/cart_empty.png" alt="">
//               <h3>Your Cart is Empty</h3>
//               <p><a href="../index.html">continue shopping</a></p>
//             `);
//           }
//         } else {
//           // Hiển thị <div class="cart-table"> khi giỏ hàng rỗng
//           $(".cart-table").html(`
//             <img class="m-auto" src="../img/cart_empty.png" alt="">
//             <h3>Your Cart is Empty</h3>
//             <p><a href="../index.html">continue shopping</a></p>
//           `);
//         }
//       }





// });
class Cart {
  constructor() {

    this.loadCartFromLocalStorage()
  }
  loadCartFromLocalStorage() {
    let cart = localStorage.getItem('cart')
    return cart ? this.cart = JSON.parse(cart) : this.cart = []
  }
  showCart(id) {
    let t = ''
    let total=0;
    $.each(this.cart, function (k, v) {
      let money = v.qty * v.price
                      t += `
                        <table class="table" id="tb1">
                          <tr class="header-content" style="font-weight: bold; background-color: rgb(201, 199, 199);">
                            <td><button class="remove-button" onclick='removeFromCart("${v.id}") ' >x</button></td>
                            <td><img src=".${v.img}" alt="" style="width: 160px;"></td>
                            <td>${v.name}</td>
                            <td><input type="number" name="num" id="" min="1" value="${v.qty}" style="width: 50px;" onchange='updateCart("${v.id}", this.value)'></td>
                            <td><input type="text" name="money" id="" value="${money}$" readonly style="width:100px;"></td>
                          </tr>
                        </table>
                      `;
      total+=money;
    })
    $(id).html(t)
    $("#total").val(total);
  }
  // //tra ve so luong cac item trong cart
  // totalItem() {
  //   const getSum = (total, x) => total + parseInt(x.qty);
  //   return this.cart.reduce(getSum, 0);

  // }
  findById(id) {  //cart.map(x=>x.id).findIndex(id)
    var pos = this.cart.findIndex(i => i.id == id);
    return pos;
  }
  add2Cart(pro_id, qty) {
    // console.log(ma, qty);
    let n = this.findById(pro_id)
    console.log('dong 34', n, this.cart)
    if (n > -1) {
      this.cart[n].qty += qty
    }
    else {
      //let item = product.filter(x=>x.id==pro_id);//find
      // const {id, name, img, price}=item[0]
      let item = dataProduct.find(x => x.id == pro_id)
      if (item) {
        item.qty = qty;
        //Object.assign(obj, { val: 42 }); 
        this.cart.push(item)
      }
    }
    this.save2LocalStorage()
    // console.log(n, this.cart)
  }
  updateCart(pro_id, qty) {
    let n = this.findById(pro_id)
    if (qty > 0) {
      if (n >= 0) {
        this.cart[n].qty = qty
        console.log('update id', pro_id, qty);
      }
    }
    else {
      this.cart.splice(n, 1);//xoa mang vi tri n, 1 phan tu
      console.log('delete id', pro_id, qty);
    }
    this.save2LocalStorage()
    console.log(pro_id, qty, n);
    this.showCart('#cart-table')
  }
  removeFromCart(pro_id) {
    let n = this.findById(pro_id)
    this.cart.splice(n, 1)
    console.log('da xoa ptu ', pro_id);
    this.save2LocalStorage()

    this.showCart('#cart-table')
  }
  save2LocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart))
    // $('#cartTotal').html('('+cart.totalItem() +')')
  }
  remove(id) {
    this.cart = this.cart.filter(x => x.id != id)
  }

}
