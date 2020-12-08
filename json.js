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
('https://apify.com/covid-19', function(err, data) {
  let taulukko = `<table width="100%" style="border=1px solid black">`

const historia = data.map(function(paiva)){
taulukko = taulukko + `<tr><td>${paiva.confirmed.Cases}</td></tr>`;

};

taulukko = taulukko + `</table>`;
});

    if (err != null) {
        console.error(err);
    } else {
      console.log(´${data.infected}´);
    }
});