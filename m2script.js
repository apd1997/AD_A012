document.addEventListener("DOMContentLoaded",
  function (event) {
    
    
    document.querySelector("button")
      .addEventListener("click", function () {
    var name =
   document.getElementById("Name").value; 
   
   document
    .getElementById("content")
    .innerHTML = message;
  
        $ajaxUtils
          .sendGetRequest("data.json", 
            function (res) {
              if (res.Name=="Akash Dhanesha") {
                message += res.m1;
                message+=res.m2;
              }
              else {
                message += res.m3;
                message += res.m4;
              }
              
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
