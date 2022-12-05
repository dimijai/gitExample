var form = document.getElementById('addForm');
var userList = document.getElementById('users');

// Form submit event
form.addEventListener('submit', onSubmit);

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
userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

userRecords.push({
  "name":newUserName,
  "email":newUserId,
  "phone":newUserPhone,
  "date":newUserDate,
  "time":newUserTime
})

localStorage.setItem("users", JSON.stringify(userRecords))?localStorage.setItem("users", JSON.stringify(userRecords)):[]


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

  // Append li to list
  userList.appendChild(li);
}
