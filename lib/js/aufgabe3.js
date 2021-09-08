'use strict';

function handleClick(e) {
  e.preventDefault();
  emptyEl(document.getElementById('right'));

  var clickedEventName = e.target.parentElement.innerText;
  var cards = document.getElementById('auswahl').getElementsByTagName('a'); //=> HTMLCollection[{},{},...,{}]
  var index = Array.from(cards).indexOf(this);

  var active = this.children[1];
  var elements = document.querySelector(".active");

  if (elements !==null) {
    elements.classList.remove("active");
  } active.classList.add('active');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'lib/data/aufgabe3_data.json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);

      showInfo(data[index],clickedEventName);  
    }
  };
  xhr.send();
}  

function bindHandler() {
  var cards = document.getElementById('auswahl').getElementsByTagName('a');
  for (var card of cards) {
    card.addEventListener('click', handleClick);
  }
}

bindHandler();


function showInfo(deck,clickedEventName) {
  var info = document.getElementById('right');
  var deckname = clickedEventName;
  var image = deck.Bild;
  var cards = deck.Karten;

  var h2 = createEl('h2', deckname);
  info.appendChild(h2);

  var img = createEl('img');
  img.setAttribute('src', 'lib/img/magic/deck_ansicht/' + image.src);
  img.setAttribute('alt', image.alt);
  img.setAttribute('title', image.title);
  info.appendChild(img);

  var h3 = createEl('h3', 'Karten');
  info.appendChild(h3);

  var ul = createEl('ul');
  ul.setAttribute('id', 'karten');
  info.appendChild(ul);

  for (var i= 0; i < cards.length; i++){
    var li = createEl('li', cards[i]);
    ul.appendChild(li);  
  }

  var p = createEl('p', 'Kaufen ');
  info.appendChild(p);
  
  var a = createEl('a', deckname);
  a.setAttribute('href', deck.Link);
  p.appendChild(a);
}