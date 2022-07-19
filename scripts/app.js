// TODO => EVENTS
// TODO => MOUSE EVENTS [CLICK, MOUSEDOWN, MOUSEUP, MOUSEMOVE, MOUSEOUT, MOUSEOVER]
// TODO => FORM EVENTS [CHANGE, FOCUS, BLUR, SUBMIT, RESET]
// TODO => KEYBOARD EVENTS [KEYDOWN, KEYUP, KEYPRESS, INPUT]
// TODO => DOM EVENTS [LOAD, UNLOAD, ABORT, ERROR, SELECT, RESIZE, SCROLL, HASHCHANGE, FORMCHANGE, MESSAGE]
let todos = [];

const todo = _getById('todo');
const addTodo = _getById('add-todo');
const todoList = _getById('todo-list');
const deleteAllSelected = _getById('delete-all-selected');
const ckeckAllTodo = _getById('ckeck-all-todo');

const messageBox = _getById('message-box');
const selectedTodoCount = _getById('selected-todo-count');

todo.addEventListener('focus', (e) => {
    _render(messageBox, '');
 })

addTodo.addEventListener('click', () => { 
    if (todo.value.trim() !== '') {
        const $ = {
            text: todo.value,
            id: uid()
        }
        const $$ = {
            status: 'success',
            message: '✅ Todo added successfully!'
        }
        _insertHtml(todoList, 'beforeend', $todo($));
        _render(messageBox, $alert($$));
        chackCheckAllTodoBtn()
        todo.value = '';
    } else {
        const $ = {
            status: 'danger',
            message: '❌ Please enter a todo! minimum 1 characters'
        }
        _render(messageBox, $alert($));
    }  
})

deleteAllSelected.addEventListener('click', () => { 
    if (confirm('Are you sure you want to delete?')) {
        _sqAll('.form-check-input:checked').forEach((checkbox) => {
             _getById(checkbox.value).remove();
        })
        _render(selectedTodoCount, _sqAll('.form-check-input:checked').length);
        checkRemovaAllButton()
        chackCheckAllTodoBtn()
    }
})

ckeckAllTodo.addEventListener('click', () => { 
    _sqAll('.form-check-input').forEach((checkbox) => {
        checkbox.checked = true;
        _getById(checkbox.value).classList.add('bg-primary', 'text-white');
    })
    checkRemovaAllButton()
    ckeckAllTodo.disabled = true;

})

const deleteTodo = (e) => {
    if (confirm('Are you sure you want to delete this todo?')) {
        _getById(e.target.dataset.deletedId).remove();
        checkRemovaAllButton()
        chackCheckAllTodoBtn()
        _render(selectedTodoCount, _sqAll('.form-check-input:checked').length);
    }
}

const editTodo = (e) => {
    const editableTodo = _getById(e.target.dataset.editId);
    editableTodo.querySelector('.todo-text').setAttribute('contenteditable', 'true')
    editableTodo.querySelector('.todo-text').focus()
    editableTodo.querySelector('.save-btn').classList.remove('d-none')
}

const saveTodo = (e) => {
    e.target.classList.add('d-none')
    const editableTodo = _getById(e.target.dataset.saveId);
    editableTodo.querySelector('.todo-text').setAttribute('contenteditable', 'false')
    editableTodo.querySelector('.todo-text').blur()
}

const checkRemovaAllButton = () => { 
    if (_sqAll('.form-check-input:checked').length) deleteAllSelected.disabled = false;
    else deleteAllSelected.disabled = true;
}

const chackCheckAllTodoBtn = () => {
    if (_sqAll('.form-check-input:checked').length === _sqAll('.form-check-input').length) {
        ckeckAllTodo.disabled = true;
    } else {
        ckeckAllTodo.disabled = false;
    }
}

const changeSelected = (e) => {
    if (e.target.checked) _getById(e.target.value).classList.add('bg-primary', 'text-white');
    else _getById(e.target.value).classList.remove('bg-primary', 'text-white');
    _render(selectedTodoCount, _sqAll('.form-check-input:checked').length);
    checkRemovaAllButton()
    chackCheckAllTodoBtn()
}

