$(function () {
    let taskTitle = $('#taskTitle')
    let taskDescription = $('#taskDescription')
    let taskDue = $('#taskDue')
    let taskStatus = $('#taskStatus')
    let taskPriority = $('#taskPriority')

    $('#btnTaskAdd').click(function () {

        addTask(
            taskTitle.val(),
            taskDescription.val(),
            taskDue.val(),
            taskStatus.val(),
            taskPriority.val(),
            function (addedTask) {
                window.alert("Task Created")
                location.reload(true)
            }
        )

    })

})

// by default tomorrow date in due box 

var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var tomday = tomorrow.getDate();
var tommonth = tomorrow.getMonth() + 1;
var tomyear = tomorrow.getFullYear();
if(tomday<10){
    tomday='0'+tomday
} 
if(tommonth<10){
    tommonth='0'+tommonth
} 
tomorrow = tomyear+'-'+tommonth+'-'+tomday;
$('#taskDue').attr('value', tomorrow);