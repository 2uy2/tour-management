// slider tour detail
var imagesThumb = new Swiper(".imagesThumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var imagesMain = new Swiper(".imagesMain", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: imagesThumb,
  },
});
// end slider tour detail
// alert add to success
const alertAddCartSuccess = () => {
  const elementAlert = document.querySelector("[alert-add-cart-success]");
  if (elementAlert) {
    elementAlert.classList.remove("alert-hidden");
    setTimeout(() => {
      elementAlert.classList.add("alert-hidden");
    }, 3000)
    const closeAlert = elementAlert.querySelector("[close-alert]");
    closeAlert.addEventListener("click", () => {
      elementAlert.classList.add("alert-hidden");
    })
  }

}
// end alert add to sucess
// cart
const cart = localStorage.getItem("cart");
if (!cart) {
  localStorage.setItem("cart", JSON.stringify([])); //chuyển dạng mảng thành dạng chuỗi
}
//hiênt thị thêm số lượng vào mini cart
const showMiniCart = () => {
  const miniCart = document.querySelector("[mini-cart]");
  if (miniCart) {
    const cart = JSON.parse(localStorage.getItem("cart"));;
    const totalQuantity = cart.reduce((sum, item) =>
      sum + item.quantity, 0)
    miniCart.innerHTML = totalQuantity;
  }

}
showMiniCart();
const formAddToCart = document.querySelector("[form-add-to-cart]");
if (formAddToCart) {
  formAddToCart.addEventListener("submit", (event) => {
    event.preventDefault(); //không bị nhảy trang
    const quantity = parseInt(formAddToCart.quantity.value)
    const tourId = parseInt(formAddToCart.getAttribute("tour-id"));
    if (quantity > 0 && tourId) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const indexExistTour = cart.findIndex(item => item.tourId == tourId);
      if (indexExistTour == -1) {
        cart.push({
          tourId: tourId,
          quantity: quantity
        });
      } else {
        cart[indexExistTour].quantity = cart[indexExistTour].quantity + quantity
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    }
    alertAddCartSuccess();
    showMiniCart()
  })
}
// end cart

// Xóa sản phẩm trong giỏ hàng
const deleteItemInCart = () => {
  const listButtonDelete = document.querySelectorAll("[btn-delete]");
  if (listButtonDelete.length > 0) {
    listButtonDelete.forEach(button => {
      button.addEventListener("click", () => {
        const tourId = button.getAttribute("btn-delete");
        const cart = JSON.parse(localStorage.getItem("cart"));
        const newCart = cart.filter(item => item.tourId != tourId); //tạo mảng mới thoả điều kiện item.tourId != tourId
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.location.reload();
      })
    })
  }
}
// Hết Xóa sản phẩm trong giỏ hàng

// Cập nhật số lượng sản phẩm trong giỏ hàng
const updateQuantityItemInCart = () => {
  const listInputQuantity = document.querySelectorAll("input[name='quantity']");
  if (listInputQuantity.length > 0) {
    listInputQuantity.forEach(input => {
      input.addEventListener("change", () => {
        const tourId = parseInt(input.getAttribute("item-id"));
        const quantity = parseInt(input.value);

        if (tourId && quantity > 0) {
          const cart = JSON.parse(localStorage.getItem("cart"));
          const itemUpdate = cart.find(item => item.tourId == tourId);
          if (itemUpdate) {
            itemUpdate.quantity = quantity; //tham chiếu đến cart, nên cart thay đổi theo
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.reload();
          }
        }
      })
    })
  }
}
// Hết Cập nhật số lượng sản phẩm trong giỏ hàng

// vẽ tour vào giỏ hàng

const tableCart = document.querySelector("[table-cart]");
if (tableCart) {
  fetch("/cart/list-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" //Nói với server: "Dữ liệu tôi gửi lên là JSON"
      },
      body: localStorage.getItem("cart") //đây là dữ liệu gửi lên (là localstorage tên cart)
    })
    .then(res => res.json())
    .then(data => {
      const htmlArray = data.tours.map((item, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>
            <img src="${item.image}" alt="${item.title}" width="80px" />
          </td>
          <td>
            <a href="/tours/detail/${item.slug}">${item.title}</a>
          </td>
          <td>
            ${item.price.toLocaleString()}đ
          </td>
          <td>
            <input type="number" name="quantity" value="${item.quantity}" min="1" item-id="${item.tourId}" style="width: 60px;" />
          </td>
          <td>
            ${item.total.toLocaleString()}đ
          </td>
          <td>
            <button class="btn btn-sm btn-danger" btn-delete="${item.tourId}">Xóa</button>
          </td>
        </tr>
      `);

      const tbody = tableCart.querySelector("tbody");
      tbody.innerHTML = htmlArray.join("");

      const totalPrice = document.querySelector("[total-price]");
      totalPrice.innerHTML = data.total.toLocaleString(); //toLocaleString() là hàm để có thể dấu chấm ở số cho dễ nhìn
      deleteItemInCart();
      updateQuantityItemInCart();
    })
}
// Hết Vẽ tour vào giỏ hàng
// Đặt tour
const formOrder = document.querySelector("[form-order]");
if (formOrder) {
  formOrder.addEventListener("submit", (event) => {
    event.preventDefault();
    const dataFinal = {
      info: {
        fullName: event.target.fullName.value,
        phone: event.target.phone.value,
        note: event.target.note.value
      },
      cart: JSON.parse(localStorage.getItem("cart"))
    };

    fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataFinal)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  })
}
// Hết Đặt tour