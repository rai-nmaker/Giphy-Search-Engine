/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;

   var url = "http://api.giphy.com/v1/gifs/search?q=\"" + input + "\"&api_key=dc6zaTOxFJmzC";

   var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  //Clear Images
  var container = document.querySelector(".js-container");
    container.innerHTML = "";
//  console.log(data);
  pushToDOM(data);

});
});


//  pushToDOM(url);



document.querySelector(".js-userinput").addEventListener('keyup',function(e){

   var input = document.querySelector("input").value;

   var url = "http://api.giphy.com/v1/gifs/search?q=\"" + input + "\"&api_key=dc6zaTOxFJmzC";

   var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  // console.log(data);
  if(e.which === 13) {
    pushToDOM(data);
    
  }
});
});
  // if the key ENTER is pressed...
  

/* 2. do the data stuff with the API */

//  var input = document.querySelector("input").value;

  // var url = "http://api.giphy.com/v1/gifs/search?q=\"" + input + "\"&api_key=dc6zaTOxFJmzC";
// var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request







/* 3. Show me the GIFs */
function pushToDOM(input) {

  var response = JSON.parse(input);

  var imageUrls = response.data;

  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;

    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

  });

}

// ClearImages
