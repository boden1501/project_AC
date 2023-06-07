
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
    let total = 0;
    if (this.cart.length === 0) {
      t = `<div id="cart-table">
      <img class="m-auto" src="../img/cart_empty.png" alt="">
      <h3>Your Cart is Empty</h3>
      <p><a href="../index.html">continue shopping</a></p>

  </div>`;
    } else {
      $.each(this.cart, function (k, v) {
        let money = v.qty * v.price;
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
        total += money;
      });
    }

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
