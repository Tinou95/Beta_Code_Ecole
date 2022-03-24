document.addEventListener("DOMContentLoaded", () =>{


const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;


let objectSlider =({
    
    slidePrecedente () {
        items[count].classList.remove('active');
        count > 0 ? count-- : count = nbSlide - 1;   
        items[count].classList.add('active')

        console.log(count);      
    },
    slideSuivante () {
        items[count].classList.remove('active');
        count < nbSlide - 1 ? count++ : count = 0;
        items[count].classList.add('active')

        console.log(count);
        
    },
    keyPress (e) {
            if(e.keyCode === 37){
                objectSlider.slidePrecedente();
            } else if(e.keyCode === 39){
                objectSlider.slideSuivante ();
            }
        }
})


precedent.addEventListener('click', objectSlider.slidePrecedente);
suivant.addEventListener('click', objectSlider.slideSuivante);
document.addEventListener('keydown', objectSlider.keyPress);
    
})
