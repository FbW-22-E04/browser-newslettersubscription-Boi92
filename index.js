/* const body = document.querySelector('body')
const form = document.querySelector('form')
const openPopup = document.querySelector('.popup')
const closePopup = document.querySelector('.closeForm')

 window.addEventListener('mousemove', (e) => 
    {
        if(e.screenY > 10){
            form.style.visibility = 'visible'
            
        }
    }

) 

 */



const popup = document.querySelector(".form");
const closeForm = document.querySelector(".closeForm");


document.addEventListener("mousemove", (e) => {
  
  if (e.screenY > 10) {
    popup.style.visibility = "visible";
  } 
}
);


closeForm.addEventListener("click", (e) => {
    popup.style.display = "none";
  });
  