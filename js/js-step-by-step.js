// ---------------------------------------------------
// -------------------- 1) Insérer du texte dans une DIV

document.getElementById('box-text').innerHTML = 'Salut à tous !';
/*
	• Le DOM n'a pas pu être analysé/parsé par le navigateur car la page n'a pas terminé son chargement
*/



// ------------------------------------------------------
// -------------------- 2) Attendre que le DOM soit loadé

document.addEventListener('DOMContentLoaded', domReady);

function domReady(){
	alert('Le DOM a bien été chargé');// On est sûr que le DOM est bien chargé
}



// -----------------------------------------------------
// -------------------- 3) Écrire un premier commentaire

document.addEventListener('DOMContentLoaded', domReady);

function domReady(){
	// Un premier commentaire comme ça

	/* ou comme ça
	si je veux écrire sur
	plusieurs lignes */
}


// ------------------------------------------------------
// -------------------- 4) Ajouter une classe à #box-text

document.addEventListener('DOMContentLoaded', domReady);

function domReady(){

	// On récupère un élément dans la page via son #ID puis on le modifie
	document.getElementById('box-text').innerHTML = 'Salut à tous !';
	document.getElementById('box-text').className = 'maClasse1';// il faut évidemment déclarer .maClasse1 dans le fichier CSS pour que ça fonctionne
}



// -----------------------------------------------------
// -------------------- 5) Faire la même chose en jQuery

$(domReady);

function domReady(){

	// En jQuery, le code est plus court donc plus facile pour s'y retrouver
	$('#box-text').html('Salut à tous !');
	$('#box-text').addClass('maClasse1');
}



// ------------------------------------------------------------------------------
// -------------------- 6) Exemple d'erreur de syntaxe, débugguer avec la console

$(domReady);

function domReady(){

	$('#box-text').htmll('Salut à tous !');
	$('#box-text').addClass('maClasse1');
}
// Ouvrir la console : Afficher > Options pour les dev > Console JS
// Message d'erreur apprait et nous indique la ligne qui pose problème.


// • Ce qu'on viens de voir, on pourrait très bien le faire en HTML / CSS, quel est l'intérêt de JS ?


// -----------------------------------------
// -------------------- 7) Exemple de bouton

$(domReady);

function domReady(){
	$('#box-text').html('Salut à tous !');
	$('#bt1').click(style1);
	$('#bt2').click(style2);

}
function style1(){
	$('#box-text').addClass('maClasse1');
}
function style2(){
	$('#box-text').addClass('maClasse2');
}
// Problème, la dernière classe écrase la première, il va falloir d'abord nettoyer les classes avant d'en ajouter une nouvelle



// --------------------------------------------
// -------------------- 8) Nettoyer les classes

$(domReady);

function domReady(){
	$('#box-text').html('Salut à tous !');
	$('#bt1').click(style1);
	$('#bt2').click(style2);

}
function style1(){
	$('#box-text').removeClass();// removeClass = supprimer toutes les classes sur un élément
	$('#box-text').addClass('maClasse1');
}
function style2(){
	$('#box-text').removeClass();
	$('#box-text').addClass('maClasse2');
}

// --------------------------------------------------
// -------------------- 9) Gérer les styles directement en jQuery

$(domReady);

function domReady(){
	$('#box-text').html('Salut à tous !');
	$('#bt1').click(style1);
	$('#bt2').click(style2);

}
function style1(){
	$('#box-text').removeAttr('style');
	$('#box-text').css({
		'font-family':'Georgia',
		'font-size':'40px',
		'color':'white',
		'text-shadow':'1px 1px 10px #000'
	});
}
function style2(){
	$('#box-text').removeAttr('style');
	$('#box-text').css({
		'font-family':'Times',
		'font-size':'20px',
		'color':'red'
	});	
}

// ---------------------------------------------------------------
// -------------------- 9) Gérer un style random avec une variable

$(domReady);

function domReady(){
	$('#box-text').html('Salut à tous !');
	$('#bt1').click(style1);
	$('#bt2').click(style2);
	$('#bt3').click(styleRandom);
}
function style1(){
	$('#box-text').removeAttr('style');
	$('#box-text').css({
		'font-family':'Georgia',
		'font-size':'40px',
		'color':'white',
		'text-shadow':'1px 1px 10px #000'
	});
}
function style2(){
	$('#box-text').removeAttr('style');
	$('#box-text').css({
		'font-family':'Times',
		'font-size':'20px',
		'color':'red'
	});	
}
function styleRandom(){

	var size = Math.random()*100;

	$('#box-text').removeAttr('style');
	$('#box-text').css({
		'font-size':size+'px',
	});	
}


// ---------------------------------------------------
// -------------------- 10) Insérer notre propre texte

$(domReady);

function domReady(){
	$('#bt1').click(style1);
	$('#bt2').click(style2);
	$('#bt3').click(styleRandom);
}
function style1(){
	$('#box-text').removeAttr('style');
	$('#box-text').html('Je suis le style 1');
	$('#box-text').css({
		'font-family':'Georgia',
		'font-size':'40px',
		'color':'white',
		'text-shadow':'1px 1px 10px #000'
	});
}
function style2(){
	$('#box-text').removeAttr('style');
	$('#box-text').html('Je suis le style 2 mieux que le 1');
	$('#box-text').css({
		'font-family':'Times',
		'font-size':'20px',
		'color':'red'
	});	
}
function styleRandom(){

	var size = Math.floor(Math.random()*100);

	var listePhrase = ['hello', 'comment ça va ?', 'trop bien', 'super'];
	var item = Math.floor(Math.random()*4);
	var phrase = listePhrase[item];
	$('#box-text').html(phrase);

	$('#box-text').removeAttr('style');
	$('#box-text').css({
		'font-size':size+'px'
	});	
	$('#container').css({'background-color':getRandomColor()})
}



// ---------------------------------------------------
// -------------------- 11) Se préparer des fonctions prêtes à l'emploi

function getRandomNumber(min, max, unit) {
	unit = unit || '';
	return Math.round(Math.random()*(max-min)+min)+unit;// Renvoi un nombre aléatoire entier contenu ente min et max
}
function getRandomItem(array){
	return array[Math.floor(Math.random()*array.length)];// Renvoi un élément au pif contenu dans un array
}
function getRandomBool(){
	return Math.random() >= 0.5;// Renvoi true ou false
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;// Renvoi une couleure hexadécimal aléatoire
}
function getRandomRGBA() {
	return getRandomNumber(0,255)+','+getRandomNumber(0,255)+','+getRandomNumber(0,255)+','+getRandomNumber(0,100)/100;
}
function getRandomBackground(){

	if(getRandomBool()){
		var color = getRandomColor();
		return 'linear-gradient('+color+','+color+')';
	}else{
		if(getRandomBool()){
			return 'radial-gradient(circle,'+getRandomColor()+','+getRandomColor()+')';
		}else{
			if(getRandomBool()){
				return 'linear-gradient('+getRandomColor()+','+getRandomColor()+')';
			}else{
				return 'linear-gradient(to left,'+getRandomColor()+','+getRandomColor()+')';
			}
		}
	}
}




// ------------------------------------------------
// -------------------- Loader une image sur Flickr

function getFlickrImage(_array){
	_array = _array || ['incredibox'];
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: getRandomItem(_array),
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
            $('#container').css('background-image', "url('" + image_src + "')");
       }
	);
}


// ------------------------------------------------
// -------------------- Lire un texte par le navigateur

function speak(_message) {
	var msg = new SpeechSynthesisUtterance(_message)
	var voices = window.speechSynthesis.getVoices()
	msg.rate = 1.2;
	msg.voice = voices[0]
	window.speechSynthesis.speak(msg)
}
