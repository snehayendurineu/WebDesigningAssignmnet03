var header = document.createElement("h3");

header.innerHTML = "Sneha Yenduri (002859637)";
header.style.color = 'orange';
header.style.marginLeft = "250px";

document.body.insertBefore(header, document.body.firstChild);

document.getElementById("button").style.backgroundColor = 'grey';
document.getElementById("button").style.border = '2px solid grey';

table = document.getElementById("myTable");

rows = document.getElementsByTagName("tr");

var headedit = document.createElement("th");
headedit.innerHTML="EDIT";
rows[0].appendChild(headedit);


for(let i=0; i<rows.length; i++){
  if(i==0){
    var lastPrevCol = rows[i].lastElementChild.previousElementSibling;
    lastPrevCol.style.display='none';
    var lastCol = rows[i].lastElementChild;
    lastCol.style.display='none';
  }
  if(i%2!=0){
    var lastCol = document.createElement("td");
    lastCol.innerHTML='<button onclick="editRow(this)">Edit</button>';
    lastCol.style.display='none';
    rows[i].appendChild(lastCol);
    var lastPrevCol = rows[i].lastElementChild.previousElementSibling;
    lastPrevCol.innerHTML='<button onclick="deleteRow(this)">Delete</button>';
    lastPrevCol.style.display='none';
  }
}

for(let i=2; i<rows.length; i++){
  if(i%2==0){
    rows[i].style.display='none';
  }
}

var counter=0;

function onCheckBoxClick(checkbox){
  selectedRow = checkbox.parentElement.parentElement;
  if(checkbox.checked==true){
    selectedRow.style.backgroundColor = 'yellow';
    document.getElementById("button").style.backgroundColor = 'orange';
    document.getElementById("button").style.border='2px solid orange';
    rows[0].lastElementChild.previousElementSibling.style.display='';
    rows[0].lastElementChild.style.display='';
    selectedRow.lastElementChild.style.display = '';
    selectedRow.lastElementChild.previousElementSibling.style.display = '';
    counter++;
  }else{
    selectedRow.style.backgroundColor = '#fff';
    selectedRow.lastElementChild.style.display = 'none';
    selectedRow.lastElementChild.previousElementSibling.style.display = 'none';
    counter--;
    if(counter==0){
      document.getElementById("button").style.backgroundColor = 'grey';
      document.getElementById("button").style.border = '2px solid grey';
      rows[0].lastElementChild.previousElementSibling.style.display='none';
      rows[0].lastElementChild.style.display='none';
    }
  }
}

function toggleDetails(dropdown){
  var selectedRow = dropdown.parentElement.parentElement;
  
  var nextElement = selectedRow.nextElementSibling;

  var dropDownData = nextElement.childNodes[0];

  if(nextElement.style.display == "none" && dropDownData.style.display == "none"){
    nextElement.style.display = '';
    dropDownData.style.display = '';
  } 
  else{
    nextElement.style.display = 'none';
    dropDownData.style.display = 'none';
  }
}
lastIndex=3;
budget = 25647;
function addNewStudent(){
  try{
    var tdata = document.getElementById("myTable");

    var trnode = document.createElement('tr');

    var tdCheckBoxNode = document.createElement('td');
    tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onCheckBoxClick(this)" /><br /><br /><img src="down.png" width="25px" onclick="toggleDetails(this)"/>';

    var tdStudentNode = document.createElement('td');
    tdStudentNode.innerHTML = 'Student '+(parseInt(lastIndex)+1);

    var tdTeacherNode = document.createElement('td');
    tdTeacherNode.innerHTML = 'Teacher '+(parseInt(lastIndex)+1);

    var tdApproved = document.createElement('td');
    tdApproved.innerHTML = 'Approved';

    var tdSemester = document.createElement('td');
    tdSemester.innerHTML = 'Fall';

    var tdTA = document.createElement('td');
    tdTA.innerHTML = 'TA';
    var tdBudget = document.createElement('td');
    tdBudget.innerHTML = budget;
    var tdPercentage = document.createElement('td');
    tdPercentage.innerHTML = '100%';

    var deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
    deleteBtn.style.display = 'none';

    var editBtn = document.createElement('td');
    editBtn.innerHTML = '<button onclick="editRow(this)">Edit</button>';
    editBtn.style.display = 'none';

    var trnodeDropDown = document.createElement('tr');
    trnodeDropDown.className = 'dropDownTextArea';
    trnodeDropDown.style.display = 'none';

    var tdDetails = document.createElement('td');
    tdDetails.colSpan = '8';
    tdDetails.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br />'
    
    trnode.appendChild(tdCheckBoxNode);
    trnode.appendChild(tdStudentNode);
    trnode.appendChild(tdTeacherNode);
    trnode.appendChild(tdApproved);
    trnode.appendChild(tdSemester);
    trnode.appendChild(tdTA);
    trnode.appendChild(tdBudget);
    trnode.appendChild(tdPercentage);
    trnode.appendChild(deleteBtn);
    trnode.appendChild(editBtn);

    tdata.appendChild(trnode);

    trnodeDropDown.appendChild(tdDetails);
    tdata.appendChild(trnodeDropDown);

    lastIndex++;
    budget+=100;

    alert(tdStudentNode.innerHTML + " Record added successfully");

}catch(error){
    alert("Error : "+error.message);
}
}

function editRow(editBtn){
  var selectedRow = editBtn.parentElement.parentElement;
  var studentName = selectedRow.getElementsByTagName('td')[1].textContent;
  var display = "STUDENT: "+studentName+
    ", ADVISOR:"+selectedRow.getElementsByTagName('td')[2].textContent+
    ", AWARD:"+selectedRow.getElementsByTagName('td')[3].textContent+
    ", SEMESTER:"+selectedRow.getElementsByTagName('td')[4].textContent+
    ", TYPE:"+selectedRow.getElementsByTagName('td')[5].textContent+
    ", BUDGET:"+selectedRow.getElementsByTagName('td')[6].textContent+
    ", PERCENTAGE:"+selectedRow.getElementsByTagName('td')[7].textContent;

  var updatedDetails = window.prompt("Edit details of "+studentName,display);

  if (updatedDetails !== null) {
      alert(studentName + ' data updated successfully');
  }
}

function deleteRow(dltBtn){
  var selectedRow = dltBtn.parentElement.parentElement;
  var index = selectedRow.rowIndex;

  var studentName = selectedRow.getElementsByTagName('td')[1];
  console.log(studentName);

  document.getElementById("myTable").deleteRow(index);
  document.getElementById("myTable").deleteRow(index);
  counter--;
  if(counter==0){
    document.getElementById("button").style.backgroundColor = 'grey';
    document.getElementById("button").style.border = '2px solid grey';
    rows[0].lastElementChild.previousElementSibling.style.display='none';
    rows[0].lastElementChild.style.display='none';
  }

  alert(studentName.textContent +" Record deleted successfully");
}

//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");