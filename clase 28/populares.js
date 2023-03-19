window.onload = function(){
  fetch(url, {
    method : "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type":"application/json"
    }
  })
  fetch("https://api.giphy.com/v1/gifs/trending?api_key=wzULyxfloI8nofhFnJA7cNU9kCtS8G9I&limit=25&rating=g")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(informacion){
      console.log(informacion.data);

      for (let i=0; i<informacion.data.length;i++){
        let gif = "<p>" + informacion.data[i].title + "</p>";
        gif += "<img src=" + informacion.data[i].images.original.url; 
        document.querySelector("ul").innerHTML += "<li>"+ gif + "</li>"
      }
    })
    .catch(function (e){
      alert("Error, intente mas tarde");
    })

}