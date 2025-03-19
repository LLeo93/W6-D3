const container = document.getElementById('container');
// const shoppingCart = document.querySelector("#shopping-cart");

let outerBooks = [];
//  let shoppingCartList = JSON.parse(localStorage.getItem("shoppingCart")) || [];

window.onload = () => {
  loadBooks();
  createCard();
  // loadShoppingCart()
};

const loadBooks = () => {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then((resp) => resp.json())
    .then((books) => {
      // using books right away here
      createCard(books);
      // Saving a reference for later use, without needing to fetch again
      outerBooks = books;
    })
    .catch((err) => console.error(err.message));
};

function createCard(books) {
  books.forEach((book) => {
    container.innerHTML += `  
            <div class="col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3 shadow-sm ">
            <div>
              <div class="card d-flex flex-column" >
                <img src="${book.img}" class="card-img-top" style="height:350px" alt="${book.title}" />
                <div class="card-body d-flex flex-column text-center" style="height:250px">
                  <h6 class="card-title mb-0" style="font-size:15px">${book.title}</h6>
                   <div class="mt-auto">
                  <p class="card-text m-0 text-white bg-dark rounded-circle" style="font-size:10px">
                  ${book.category}
                  </p>
                  <P>${book.price}€</p>
                 <div class="mt-auto">
                  <a href="#" class="btn btn-success mt-1" style="font-size:10px">ADD TO CART</a>
                  <a href="#" class="btn btn-danger mt-1" style="font-size:10px">REMOVE</a>
                  </div>
                  </div>
                </div>
              </div>
              </div>
            </div>`;
  });
}
