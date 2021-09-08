'use strict';

function handleClick(e) {
  e.preventDefault();
  emptyEl(document.getElementById('infotext'));
  var clickedEventName = e.target.parentElement.innerText;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'lib/data/aufgabe2_data.json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      showInfo(data[clickedEventName],clickedEventName);  
    }
  };
  xhr.send();
}  


function bindHandler() {
  var cards = document.getElementById('preview').getElementsByTagName('li');
  for (var card of cards) {
    card.addEventListener('click', handleClick);
  }
}

bindHandler();  


function showInfo(card,clickedEventName) {
  var info = document.getElementById('infotext');
  var cardname = clickedEventName;
  var image = card.imagename;

  var img = createEl('img');
  img.setAttribute('src', 'lib/img/magic/preview/' + image);
  img.setAttribute('alt', image.substr(0, (image.length - 4)));
  info.appendChild(img);

  var ul = createEl('ul');
  info.appendChild(ul);

  var li = createEl('li');
  ul.appendChild(li);

  var headline = createEl('h2',cardname);
  li.appendChild(headline);

  var li = createEl('li', 'ArtNr.: ' + card.artnum);
  ul.appendChild(li);
  var li = createEl('li', 'Farbe ' + card.color);
  ul.appendChild(li);
  var li = createEl('li', 'Rarität ' + card.rarity);
  ul.appendChild(li);
  var li = createEl('li', 'Edition ' + card.edition);
  ul.appendChild(li);
  var li = createEl('li', 'Zustand ' + card.condition);
  ul.appendChild(li);

  var li = createEl('li');
  ul.appendChild(li);
  var input = createEl('input');
  input.setAttribute('value', 1);
  input.setAttribute('type', 'text');
  li.appendChild(input);
  var btn = createEl('button', 'In den Warenkorb');
  li.appendChild(btn);

}