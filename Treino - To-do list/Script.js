var c = 0

function submit()
{
    var text = document.getElementById('listtext')
    var todo = document.getElementById('todo')

    c++

    todo.innerText += ` ${c}. ${text} `
}