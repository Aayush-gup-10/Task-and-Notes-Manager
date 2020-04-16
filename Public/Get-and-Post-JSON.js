function fetchTasks (done) {
    $.get('/tasks', function (data) {
        done(data)
    })
}

function getTaskById (id,done) {
    $.get('/tasks/'+id, function (data) {
        done(data)
    })
}

function addTask (title, description, due, status, priority, done) {
    $.post('/tasks', {
        title: title,
        description : description,
        due : due,
        status : status,
        priority : priority
    }, function (data) {
        done(data)
    })
}

function updateTask (id,title, description, due, status, priority, done) {
    $.ajax({
        url: '/tasks/'+id,
        type: 'PUT',
        data: {
            title: title,
            description : description,
            due : due,
            status : status,
            priority : priority
        },
        success: function (data) {
            done(data)
        }
     })
}

function createTask (task) {
    return $(`
        <tr>
        <td><button onclick="getTaskforTaskCard(${task.id});openTaskCard()"> +</button></td>
        <td> ${task.title} </td>
        <td> ${task.status} </td>
        <td> ${task.priority} </td>
        <td> ${task.description} </td>
        <td> ${task.due} </td>
        <td> <button id="updateTask" onclick="openUpdateForm(${task.id})" class="btn btn-secondary">Edit</button> </td>
        </tr>
    `
    )
}
