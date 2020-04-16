$(function () {

    let taskList = $('#task-list')

    fetchTasks(function (tasks) {
        taskList.empty()
        for (task of tasks) {
            taskList.append(createTaskRow(task))
        }
    })

})

function createTaskRow(task) {
    return $(`
        <tr>
        <td><button class="btn btn-secondary" data-toggle="modal" data-target="#notes" onclick="getnotes(${task.id})"> +</button></td>
        <td> ${task.title} </td>
        <td> ${task.description} </td>
        <td> ${task.status} </td>
        <td> ${task.priority} </td>      
        <td> ${task.due} </td>
        <td> <button id="updateTask" class="btn btn-secondary" data-toggle="modal" data-target="#updateForm" onclick="openUpdateForm(${task.id})" class="btn btn-secondary">Edit</button> </td>
        </tr>
    `
    )
}

