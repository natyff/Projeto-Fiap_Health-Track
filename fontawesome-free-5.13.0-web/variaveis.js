const paragrafos = document.querySelectorAll('p');

console.log(paragrafos);

function soma(a,b) {
    return a + b; 
}

const req = () => {
    fetch('https://api.thecatapi.com/v1/images/search').then( responde => {
        console.log(responde.text());
    })
}

req();