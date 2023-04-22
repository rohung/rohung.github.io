const about = document.getElementById('about');
const body = document.getElementById('body');
const container = document.getElementById('container');
const workHeading = document.getElementById('workHeading');
const form = document.getElementById('form');
const contactMeHeading = document.getElementById('contactMeHeading');

if(document.getElementById('darkMode')){
    document.getElementById('darkMode').addEventListener('change', e =>{
        if (e.target.checked){
            body.style.backgroundColor = 'black';
            container.style.backgroundColor = 'black'
            about.style.color = 'white';
            form.style.color = 'white';
            workHeading.style.color = 'white';
            contactMeHeading.style.color = 'white';
            
        } else {
            container.style.backgroundColor = 'white';
            body.style.backgroundColor = 'white';
            about.style.color = 'black';
            form.style.color = 'black';
            workHeading.style.color = 'black';
            contactMeHeading.style.color = 'black';
        }
    });
}

form.addEventListener('submit', (e) =>{
   e.preventDefault();
   let inputEmail = document.getElementById('inputEmail').value.trim();
   let inputName = document.getElementById('inputName').value.trim();
   if(typeof inputName && typeof inputEmail === 'string' ){
     alert('Thank you for your submission');
   }
});