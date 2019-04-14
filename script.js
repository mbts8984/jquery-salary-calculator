console.log('in JS');

$(document).ready( handleReady );

let employeeData = []; //array that stores newEmployeeObject inside it for global reference
let totalAnnualSalaries = 0; // setting global numeric variable to calculate across multiple functions

//making sure jQuery is on and running the needed funtions for when the page is loaded
function handleReady () {
    console.log('jQuery is on');   
    buttonClick();
    $('#tBody').on('click', '.deleteButton', deleteButtonClick);
}//end handleReady


 //get the action of clicking the submit button to trigger the addNewEmployee function
 function buttonClick() {
     $('#submitButton').on('click', addNewEmployee);
     //end buttonClick
 }

 //delete button click event function
 function deleteButtonClick() {
     console.log('in deleteButtonClick');
     $(this).parent().parent().remove();
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
    } // clear input values and push newEmployeeObject into employeeData array
    employeeData.push(newEmployeeObject);
    $('#firstNameInput').val(''),
    $('#lastNameInput').val(''),
    $('#employeeIdInput').val(''),
    $('#titleInput').val(''),
    $('#annualSalaryInput').val('')
    displayObject();
}

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
            <td><button class = "deleteButton">Delete Employee</button></td>
        </tr> `);
    totalAnnualSalaries += parseFloat(newObject.annualSalary);
    console.log(totalAnnualSalaries);
    //run updateDOM function
    updateDom();
} //end displayInputs function

function updateDom() {
    let el = $('#totalMonthlyOut');
    //empty totalMonthlyOut
    el.empty();
    //append in updated monthly total
    let monthlyCosts = totalAnnualSalaries / 12;
    $('#totalMonthlyOut').append(`<div>Total Monthly:${monthlyCosts}</div>`);
    if (monthlyCosts > 20000) {
        $('#totalMonthlyOut').addClass('highlight');
    } //end if statement
} // end updateDom function
