const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = doucment.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append =(message, position)=>{

    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add('position');
    messageContainer.append(messageElement);

}

const name = prompt("Enter your name to join");
socket.emit('new-user-joined', ruhi);
socket.on('user-joined',data =>{
    append(`${ruhi} join the chat`, 'right')

})
socket.on('receive',data=>{
    append(`${data.message}: $ {data.user}`, 'left')
})