document.addEventListener("DOMContentLoaded",
  function (event) {
    
    document.querySelector("button")
      .addEventListener("click", function () {
        
     
        $ajaxUtils
          .sendGetRequest("m3.json", 
            function (res) {
              for (i in res.number)
              if (res.numbers[i].num1=num1) {
                message += res.numbers[i].name;
              }
              else {
                message += " data does not exist";
              }

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);


