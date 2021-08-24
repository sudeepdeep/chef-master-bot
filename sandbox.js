const message = document.querySelector('form');
const usertext = document.querySelector('.usertext');
const user = document.querySelector('.user');
const chattext = document.querySelector('.chattext')
const chatheading = document.querySelector('.chatheading');




const APP_ID = "790ce370";
const APP_key = "55d3194c4890b23fa1f23f5b66f30e95";
let ingre = ""
const itemcard = (stri, url, itemlogo, heading) => {
    stri.forEach(elem => {
        ingre +=elem.text;
        ingre += ", "
    })

    chattext.classList.remove('d-none');
    let head = `<h3>${heading}</h3> <br> <img src = "${itemlogo}" > <br> <p>Ingredients: ${ingre}</p><br><a href = "${url}" target = "_blank">see more..</a>`;

    chatheading.innerHTML += head; 

}


const display = (text) => {
    user.classList.remove('d-none');
    let html = `<p>${text}</p>`;
    usertext.innerHTML += html;

    const baseURL = `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_key}`;
    const response =  fetch(baseURL).then(data => {
    return data.json();
    }).then(datum => {
    const ingredients = datum.hits[0].recipe.ingredients;
    const url = datum.hits[0].recipe.url;
    const heading = datum.hits[0].recipe.label;
    const itemlogo = datum.hits[0].recipe.image;
    message.message.value = ""
    itemcard(ingredients, url, itemlogo, heading);

}).catch(err => {
    console.log(err);
})
   
}


message.addEventListener('submit', e => {
    e.preventDefault();
    let itemtext = message.message.value;
    display(itemtext.toLowerCase());
    message.message.value = ""

})




