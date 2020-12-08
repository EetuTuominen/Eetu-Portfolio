var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {
    
      var status = xhr.status;

      if (status == 200) {
          callback(null, xhr.reponse);
      } else {
          callback(status);
      }
  };

  xhr.send();
};

getJSON
('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data) {
let taulukko = `<table width="100%" style="border=1px solid black">`

const historia = data.map(function(paiva){
    taulukko = taulukko + `<tr><td>${paiva.confirmedCases}</td></tr>`;
 if(paiva.confirmedCases != undefined){
 }
   else if(paiva.testedCases != undefined){
   }
else{
  taulukko = taulukko + `<tr><td>Ei dataa</td></tr>`;
};
taulukko = taulukko + `</table>`;
});
document.body.innerHTML = taulukko

    if (err != null) {
        console.error(err);
    } else {
      console.log(´${paiva.infected}´);
    }
});