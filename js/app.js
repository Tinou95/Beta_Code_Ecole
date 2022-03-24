document.addEventListener("DOMContentLoaded", () =>{

    /* optimiser le chargement du js et créer un objet pour gérer les 3 fonctions 10/20 */

const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

let slideSuivante = () =>{
    items[count].classList.remove('active');

     count < nbSlide - 1 ? count++ : count = 0;

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


let slidePrecedente = ()=>{
    items[count].classList.remove('active');
    
    count > 0 ? count-- : count = nbSlide - 1;
    
    items[count].classList.add('active')
    
}
precedent.addEventListener('click', slidePrecedente)



let keyPress = (e) =>{
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
    
})
