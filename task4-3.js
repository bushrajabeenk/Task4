var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
var cityname, capital, flag;
request.onload = function() {
        var data = JSON.parse(this.response);
        var newdata = data.forEach(function(e){
          cityname = e.name;
          capital = e.capital;
          flag = e.flag;
          console.log(cityname, capital, flag);
        });
            
      
      var request2 = new XMLHttpRequest();
      var url =  "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=bb29024b3306194e6f8cd4f9965abffe"
      request2.open('GET',url,true);
      request2.send(cityname);
      request2.onload = function() {
        var data2 = JSON.parse(this.response);
        console.log(data2);
      }
      var request3 = new XMLHttpRequest();
      var url =  "http://api.openweathermap.org/data/2.5/weather?q="+capital+"&appid=bb29024b3306194e6f8cd4f9965abffe"
      request3.open('GET',url,true);
      request3.send(capital);
      request3.onload = function() {
        var data3 = JSON.parse(this.response);
        console.log(data3);
      }
      var request4 = new XMLHttpRequest();
      var url =  "http://api.openweathermap.org/data/2.5/weather?q="+flag+"&appid=bb29024b3306194e6f8cd4f9965abffe"
      request4.open('GET',url,true);
      request4.send(flag);
      request4.onload = function() {
        var data4 = JSON.parse(this.response);
        console.log(data4);
      }
}
















