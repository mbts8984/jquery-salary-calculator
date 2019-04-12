console.log('in JS');

$(document).ready( handleReady );

employeeData = [];

function handleReady () {
    console.log('jQuery is on');   
    buttonClick();

}//end handleReady


 //get the action of clicking the submit button to trigger the addNewEmployee function
 function buttonClick() {
     $('#submitButton').on('click', addNewEmployee);
     //end buttonClick
 }

function addNewEmployee(){
    console.log('in addNewEmployee');
}

const newEmployeeObject = {
    
}