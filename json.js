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

    if (err != null) {
        console.error(err);
    } else {
      console.log(´${data.infected}´);
    }
});