
<p><b>Note:</b> The element will not take up any space when the display property set to "none".</p>



<script>

 function myFunction() {​​

 var x = document.getElementById("myDIV");

 if (x.style.display === "none") {​​

 x.style.display = "block";

 }​​ else {​​

 x.style.display = "none";

 }​​

 }​​





 document.querySelector('.teemanappi').addEventListener('click', e =>{​​

 e.preventDefault();

 const teema = document.querySelector('input[name="theme"]:checked').value;

 if(teema == 'tumma'){​​

 document.body.style.background = 'black';

 }​​

 else{​​

 document.body.style.background = 'white';

 }​​



}​​)

 </script>



</body>

 </html>