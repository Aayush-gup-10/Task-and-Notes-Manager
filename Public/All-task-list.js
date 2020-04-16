$(function () {

    let taskList = $('#task-list')

    fetchTasks(function (tasks) {
        taskList.empty()
        for (task of tasks) {
            taskList.append(createTask(task))
        }
    })

})


