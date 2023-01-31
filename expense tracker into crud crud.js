var form = document.getElementById('addForm');
var expenseList = document.getElementById('expenses');

// Form submit event
form.addEventListener('submit', onSubmit);
// Delete event
expenseList.addEventListener('click', removeItem);
// edit event
expenseList.addEventListener('click', editItem);

// Add item
function onSubmit(e){
  e.preventDefault();

  // Get input value
var newExpenseAmount = document.querySelector('#expenseamount').value;
var newDescription = document.querySelector('#description').value;
var newCategory = document.querySelector('#category').value;

//expenseRecords = JSON.parse(localStorage.getItem("expenses"))?JSON.parse(localStorage.getItem("expenses")):[]

const expenseRecords = {
  "expenseamount":newExpenseAmount,
  "description":newDescription,
  "category":newCategory
}

//localStorage.setItem("expenses", JSON.stringify(expenseRecords));
axios.post("https://crudcrud.com/api/99a40fd8a2eb4bc4906cebe637638bde/AppointmentData", expenseRecords)
.then((response) => {
  console.log(response)
})
.catch((err) => {
  console.log(err)
})
// Create new li element
var li = document.createElement('li');
// Add class
li.className = 'list-group-expense';

// Add text node with input value
li.appendChild(document.createTextNode(newExpenseAmount));
li.appendChild(document.createTextNode(" " + "-" + " " + newDescription));
li.appendChild(document.createTextNode(" " + "-" + " " + newCategory));

axios.get("https://crudcrud.com/api/99a40fd8a2eb4bc4906cebe637638bde/AppointmentData")
.then((response) => {
  console.log(response)
})
.catch((err) => {
  console.log(err)
})
 // Create del & edit button element
 var deleteBtn = document.createElement('button');
 var editBtn = document.createElement('button');

 // Add classes to del & edit button
 deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 editBtn.className = 'btn btn-sm float-right editBtn';

 // Append text node
 deleteBtn.appendChild(document.createTextNode('X'));
 editBtn.appendChild(document.createTextNode('EDIT'));

 // Append button to li
 li.appendChild(deleteBtn);
 li.appendChild(editBtn);

// Append li to list
expenseList.appendChild(li);
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

// Edit item
function editItem(e){
  if(e.target.classList.contains('editBtn')){
    axios.put("https://crudcrud.com/api/99a40fd8a2eb4bc4906cebe637638bde/AppointmentData/63d4f35d07307e03e8c76826")
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}