var form = document.getElementById('addForm');
var userList = document.getElementById('users');

// Form submit event
form.addEventListener('submit', onSubmit);
// Delete event
userList.addEventListener('click', removeItem);
// edit event
userList.addEventListener('click', editItem);

// Add item
function onSubmit(e){
  e.preventDefault();

  // Get input value
var newUserName = document.getElementById('name').value;
var newUserId = document.getElementById('email').value;
var newUserPhone = document.getElementById('phone').value;
var newUserDate = document.getElementById('date').value;
var newUserTime = document.getElementById('time').value;

let userRecords = new Array();
//userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

userRecords.push({
  "name":newUserName,
  "email":newUserId,
  "phone":newUserPhone,
  "date":newUserDate,
  "time":newUserTime
})
axios.get("https://crudcrud.com/api/3b2956800571463ba8b5fb97d9547316/AppointmentData", userRecords)
.then((Response) => {
  console.log(Response.data)
})
.catch((err) => {
  document.body.innerHTML = document.body.innerHTML +  "Something went wrong"
  console.log(err)
})
//localStorage.setItem("users", JSON.stringify(userRecords))?localStorage.setItem("users", JSON.stringify(userRecords)):[]


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-user';

  // Add text node with input value
  li.appendChild(document.createTextNode(newUserName));
  li.appendChild(document.createTextNode(" " + "-" + " " + newUserId));
  li.appendChild(document.createTextNode(" " + "-" + " " + newUserPhone));
  li.appendChild(document.createTextNode(" " + "-" + " " + newUserDate));
  li.appendChild(document.createTextNode(" " + "-" + " " + newUserTime));

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
  userList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        userList.removeChild(li);
      }
    }
  }

  // Edit item
  function editItem(e){
    var li = e.target.parentElement;
    userList.removeChild(li);
    document.getElementById('addForm').value;
  }
