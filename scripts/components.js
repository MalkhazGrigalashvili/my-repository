const $alert = (_) => {
    return `<div class="alert alert-${_.status}" role="alert">
                ${_.message}
            </div>`
}

const $button = (_) => {
    return `<button type="button" class="btn btn-${_.type}">${_.text}</button>`
}

const $fruit = (_) => {
    return `<button type="button" class="btn btn-${_.type} fruits" data-fruit="${_.name}">${_.icon}</button>`
}

const $todo = (_) => { 
    return `<li class="list-group-item d-flex align-items-center" id="${_.id}">
            <span class="todo-text flex-grow-1">${_.text}</span>
            <span class="todo-tools d-flex align-items-center">
              <input class="form-check-input mx-2" type="checkbox" value="${_.id}" onchange="changeSelected(event)"/>
              <button class="btn btn-success save-btn d-none" data-save-id="${_.id}" onclick="saveTodo(event)">
                <i class="fa-solid fa-floppy-disk"></i>
              </button>
              <button class="btn btn-info" data-edit-id="${_.id}" onclick="editTodo(event)">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger" data-deleted-id="${_.id}" onclick="deleteTodo(event)">
                <i class="fa-solid fa-trash-can fa-lg"></i>
              </button>
            </span>
        </li>`
}