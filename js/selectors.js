// declare your functions here...
function paragraphSelector(){
 var pTags= $("p");
 
 pTags.forEach(function(p){
  return  p;
 });
}

function lastImageSelector(){
  var lastImg=$("div.pics img:last");
  return lastImg[1];
}

function ninja