const socket = io('http://localhost:8000');

const form = document.querySelectorAll('#sendMsg');
const msg = document.querySelectorAll('#message');
const chatArea = document.querySelectorAll('.chatArea');
const name = prompt('Enter your Name ');
 form.addEventListener('submit',(e)=>{
   e.preventDefault();
  const message = message.value;
  append(`You : ${message}`,'right');
  socket.emit('send',message);
  message.value='';
 })
const append =(message, position)=>{
  const messageElement = document.createElement('div');
  messageElement.innerText=message;
  messageElement.classList.add('message');
  messageElement.classList.add(position);
  message.append(messageElement);
  
}
socket.emit('new-user-joined',name);

socket.on('user-joined',name =>{
  append(`${name} joined chat`,'right');
})

socket.on('receive',data=>{
  append(`${data.name}:${data.message}`,'left');
})
