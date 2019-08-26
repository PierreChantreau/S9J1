
// Fonctionnalité n°1 et n°1 bis

var buttonEl = document.querySelector('footer');
var click = 0;


buttonEl.addEventListener('click', function(){
  click += 1;
  buttonEl[0] = console.log("click numéro " + click)});


// Fonctionnalité n°2


let collapseElt = document.getElementById('navbarHeader');
let buttonMenu = document.getElementsByClassName('navbar-toggler');


buttonMenu[0].addEventListener('click', function (){
	collapseElt.classList.toggle('collapse');
});


// Fonctionnalité n°3


let cardElt = document.getElementsByClassName('card')[0];
console.log(cardElt);

let btnElt = cardElt.getElementsByClassName('btn')[1];
console.log(btnElt);

let textElt = cardElt.getElementsByClassName('card-text')[0];
console.log(textElt);

RougeEdit = function(){
textElt.style.color = '#FF0000';

};

btnElt.addEventListener('click',RougeEdit);



// Fonctionnalité n°4


var cardElt2 = document.getElementsByClassName('card')[1];
console.log(cardElt2);

var btnElt2 = cardElt2.getElementsByClassName('btn')[1];
console.log(btnElt2);

var textElt2 = cardElt2.getElementsByClassName('card-text')[0];
console.log(textElt2);

VertEdit = function(){
  if(textElt2.style.color ==='')
{textElt2.style.color = '#008000';}
  else{
    textElt2.style.color = ''
  }
};
// fonction Si permet de rendre le contenu vert et de le remettre en mode normal après
// vérifier écriture du if
btnElt2.addEventListener('click',VertEdit);




// Fonctionnalité 5


var navbar = document.getElementsByClassName('navbar')[0];

var stylesheet = document.styleSheets[0];

disableCss = function () {

	if (stylesheet.disabled === false) {
		stylesheet.disabled = true ;
}	else { stylesheet.disabled = false;

	}
};

navbar.addEventListener("dblclick", disableCss);








// Fonctionnalité 6

let cardElt3 = document.getElementsByClassName('card')[0];
console.log(cardElt3);

let btnViewElt = cardElt3.getElementsByClassName('btn')[0];
console.log(btnViewElt);

let textCardElt = cardElt3.getElementsByClassName('card-text')[0];
console.log(textCardElt);

let imgElt = cardElt3.getElementsByClassName('card-img-top')[0];
console.log(imgElt);

function change() {
	textCardElt.classList.toggle('collapse');

	if (imgElt.style.width === ''){
		imgElt.style.width = '20%';
	} else {
		imgElt.style.width = '';
	}
}

//pas compris pq est effectué sur ttes les cartes ?

btnViewElt.addEventListener("mouseover", change);
