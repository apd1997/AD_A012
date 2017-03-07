function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

 
  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
   else{
      var title1 = 
      document
        .querySelector("#title1")
        .textContent;
    title += "";
    document
        .querySelector("h1")
        .textContent = title;
  }
}
