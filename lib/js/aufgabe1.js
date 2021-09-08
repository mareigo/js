'use strict';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'lib/data/aufgabe1_data.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    showRandomImg(data); 
  }
};
xhr.send();

function showRandomImg(data) {
  var images = Object.keys(data);
  
  var key = rand(0, images.length - 1);
  
  var image = images[key];
  
  var imagedata = data[image];
  
  var imagename = imagedata.image;
  
  var name = imagedata.name;
  
  var text = imagedata.text;

  var out = document.getElementById('bg');
  out.setAttribute("src", 'lib/img/magic/landing_page/' + imagename);
  out.setAttribute("alt", name);
  out.setAttribute("title", text);
}