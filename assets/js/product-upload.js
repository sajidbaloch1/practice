let products = JSON.parse(localStorage.getItem("Products")) || [];
let index = products.length;

function imageUpload() {
  let productName = document.getElementById("productName").value;
  let productPrice = document.getElementById("productPrice").value;
  let productImage = document.getElementById("productFile").files[0];
  index++;
  getProducts(productImage, index, productName, productPrice);
  window.location.reload;
  restetInputs();
}
function getProducts(productImage, index, productName, productPrice) {
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    products.push({
      id: index,
      productName: productName,
      productPrice: productPrice,
      productImage: dataURL,
    });
    localStorage.setItem("Products", JSON.stringify(products));
  };
  reader.readAsDataURL(productImage);
}
function restetInputs() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productFile").files[0] = "";
}
console.log(index);
