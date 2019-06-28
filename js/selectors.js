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

function ninjaBabySelector(){
  var ninjaBaby = $("img[src='https://s3.amazonaws.com/after-school-assets/baby-ninja.gif']");
  return ninjaBaby;
}

function  divSelector(){
  var div = $("div.pics");
  return div;
}

function 