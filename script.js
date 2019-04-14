console.log('in JS');

$(document).ready( handleReady );

let employeeData = []; //array that stores newEmployeeObject inside it for global reference
let totalAnnualSalaries = 0; // setting global numeric variable to calculate across multiple functions

//making sure jQuery is on and running the needed funtions for when the page is loaded
function handleReady () {
    console.log('jQuery is on');   
    buttonClick();

}//end handleReady


 //get the action of clicking the submit button to trigger the addNewEmployee function
 function buttonClick() {
     $('#submitButton').on('click', addNewEmployee);
     //end buttonClick
 }

 // function grabbing input information from the fields and pushing them into the newEmployeeObject array. 
function addNewEmployee(){
    console.log('in addNewEmployee');
    const newEmployeeObject = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        employeeID: $('#employeeIdInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }
    employeeData.push(newEmployeeObject);
    $('#firstNameInput').val(''),
    $('#lastNameInput').val(''),
    $('#employeeIdInput').val(''),
    $('#titleInput').val(''),
    $('#annualSalaryInput').val('')
    displayObject();
}
// clear input values


function displayObject(){
    //$('#tBody').append(`
    let newObject = employeeData[employeeData.length-1];
    //append new employee data into employeeData array and display in the table
    $('#tBody').append(`    
        <tr>
            <td>${newObject.firstName}</td>
            <td>${newObject.lastName}</td>
            <td>${newObject.employeeID}</td>
            <td>${newObject.title}</td>
            <td>${newObject.annualSalary}</td>
        </tr>    
        `)
}


