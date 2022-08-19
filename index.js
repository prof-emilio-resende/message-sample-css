var messages = [
    'Nova mensagem 1',
    'Nova mensagem 2',
    'Nova mensagem 3'
]

function nextMessage() {
    msg = messages.pop()
    messages.unshift([msg]);

    document.querySelector('div.letter-content')
        .innerHTML = msg;
}

window.onload = function() {
    document.querySelector('#next-message')
        .addEventListener("click", nextMessage);
}