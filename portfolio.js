 document.querySelector('.tausta').addEventListener('click', e =>{​​

 e.preventDefault();

 const teema = document.querySelector('input[name="theme"]:checked').value;

 if(teema == 'tumma'){​​

 document.body.style.background = 'black';

 }​​

 else{​​

 document.body.style.background = 'white';

 }​​



}​​)