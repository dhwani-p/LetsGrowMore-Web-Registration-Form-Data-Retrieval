var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["pname"] = document.getElementById("pname").value;
    formData["pmail"] = document.getElementById("pmail").value;
    formData["age"] = document.getElementById("age").value;
    formData["female"] = document.getElementById("female").value;
   formData["male"] = document.getElementById("male").value;
    formData["sh"] = document.getElementById("sh").value;
    formData["sc"] = document.getElementById("sc").value;
    formData["sj"] = document.getElementById("sj").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.pname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.pmail;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.age;
   cell4 = newRow.insertCell(3);
   if(document.getElementById('female').checked)
	cell4.innerHTML = data.female;
    else if(document.getElementById('male').checked)
    cell4.innerHTML=data.male;
    cell5 = newRow.insertCell(4);
    var checkboxes = document.getElementsByName('s');
    var result = "";
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
        result += checkboxes[i].value+"  ";
         }
     }
    cell5.innerHTML=result;
}

