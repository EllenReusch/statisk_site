fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#product-cardTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("p").textContent = product.price;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);
  //
  //appende
  document.querySelector("main").appendChild(copy);
}

/*
<div class="product-card ">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp" alt="Produkt Billede">
      <h2>Leggins</h2>
      <p>Pris: 600kr</p>
      <a href="produkt.html" class="product-link">Se Produkt</a>
    </div>
    */

/*

 "id": 1525,
    "gender": "Unisex",
    "category": "Accessories",
    "subcategory": "Bags",
    "articletype": "Backpacks",
    "season": "Fall",
    "productionyear": 2010,
    "usagetype": "Casual",
    "productdisplayname": "Deck Navy Blue Backpack",
    "price": 1299,
    "discount": 55,
    "brandname": "Puma",
    "soldout": 0
    */
