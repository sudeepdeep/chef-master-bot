const message = document.querySelector('form');
const usertext = document.querySelector('.usertext');
const user = document.querySelector('.user');
const result = document.querySelector('.resulttext');
const chattext = document.querySelector('.chattext');


const chatdisplay = (itemname, ingridients, process) => {
    chattext.classList.remove('d-none');
    let res = `<p>ItemName: ${itemname}<br> Ingridients: ${ingridients}<br> Process: ${process} </p>`

    result.innerHTML += res;
}

const chatreply = (text) => {
   fetch('data.json').then(data => {
    // let datum = JSON.stringify(data);
    return data.json();
   }).then(datum => {
       datum.forEach(element => {
        if(element.itemname === text){
            chatdisplay(element.itemname, element.ingridients, element.process);
        }
       });
   }).catch(err => {console.log(err)})
}


const display = (text) => {
    user.classList.remove('d-none');
    let html = `<p>${text}</p>`;
    usertext.innerHTML += html;
    chatreply(text);
}



message.addEventListener('submit', e =>{
    e.preventDefault();
    display(message.message.value);
    message.message.value = ""
    // console.log(message.message.value);
})
