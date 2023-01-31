var form = document.getElementById('addForm');
var productList = document.getElementById('products');

// Form submit event
form.addEventListener('submit', onSubmit);
// Delete event
productList.addEventListener('click', removeItem);

// Add item
function onSubmit(e){
  e.preventDefault();

  // Get input value
var newSellingPrice = document.querySelector('#sellingprice').value;
var newProductName = document.querySelector('#productname').value;
var newCategory = document.querySelector('#category').value;

//productRecords = JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[]

const productRecords = {
  "sellingprice":newSellingPrice,
  "productname":newProductName,
  "category":newCategory
}

//localStorage.setItem("products", JSON.stringify(productRecords));
axios.post("https://crudcrud.com/api/99a40fd8a2eb4bc4906cebe637638bde/AppointmentData", productRecords)
.then((response) => {
  console.log(response)
})
.catch((err) => {
  console.log(err)
})
// Create new li element
var li = document.createElement('li');
// Add class
li.className = 'list-group-product';

// Add text node with input value
li.appendChild(document.createTextNode(newSellingPrice));
li.appendChild(document.createTextNode(" " + "-" + " " + newProductName));
li.appendChild(document.createTextNode(" " + "-" + " " + newCategory));

axios.get("https://crudcrud.com/api/99a40fd8a2eb4bc4906cebe637638bde/AppointmentData")
.then((response) => {
  console.log(response.data)
})
.catch((err) => {
  console.log(err)
})
 // Create del & edit button element
 var deleteBtn = document.createElement('button');

 // Add classes to del & edit button
 deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

 // Append text node
 deleteBtn.appendChild(document.createTextNode('X'));

 // Append button to li
 li.appendChild(deleteBtn);

// Append li to list
productList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      axios.delete("https://crudcrud.com/api/99a40fd8a2eb4bc4906cebe637638bde/AppointmentData/63d4f35d07307e03e8c76826")
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
