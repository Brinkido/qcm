$(domReady);



// ----AU CHARGEMENT DE LA PAGE----


function domReady(){

  var imajRandom = getRandomItem(illu);

  initScreen();

  $("#imaj").html("<img src=./images/"+ imajRandom +">");
  $("#rep1").click(clickRep1)
  $("#rep2").click(clickRep2)
  $("#rep3").click(clickRep3)
  $(".qsuiv").click(clickQSuiv)
  $(".ecran2").hide()
  // $(".reponses").css({
  //   "background-color":getRandomColor()
  // })

}


// ----MODIFIE ALEATOIREMENT LES PROPOSITIONS DE REPONSES----

function initScreen(){
  $("#question").html(getRandomItem(situations));
  var reponsesTemp = reponses.slice();
  $("#rep1").html(getRandomUniqItem(reponsesTemp));
  $("#rep2").html(getRandomUniqItem(reponsesTemp));
  $("#rep3").html(getRandomUniqItem(reponsesTemp));
}

// ----TABLEAU DES QUESTIONS (58)----

var situations =
["Vous manquez de coriandre", "On vous incite à réparer des volets", "Sébastien Chabal semble bougon","Le sol est de la lave","Une quiche ou du sable ?","On vous promet un ficello en échange de votre santé mentale","Tu veux du poulet ou pas ?","Quelle est la planète située entre Mars et Jupiter ?","Vous avez 12 ans et toutes vos dents","Ne répondez pas","Quelle est la différence entre la frite et beluga ?","Qui a gagné la guerre ?","Sans vouloir vous véxer,jusqu'ici, vos réponses sont complétement nulles","Votre mamie vous propose de la tarte","Avec ou sans les mains ?","Sur une échelle de 1 à 12 qui êtes vous ?","Sur qui pariez vous entre vous entre une miette et Rafael Nadal ?","Pour qui vous prenez vous ?","Retournez d'où vous venez pourriture","Ce questionnaire vous satisfait-il ?","Vous aimez le Rap Music ?","Vous passez du bon temps sur du gazon","Vos lacets sont défaits","Jeanne d’Arc prends feu et vous avez une gourde","C’est l’heure du repas","On vous propose d’être maire de Dijon","Tu tires ou tu pointes ?","Vraiment ? Comment ça s'est passé déjà ?","Quel est votre signe astrologique ?","Comment allez vous ?","Je peux vous poser une question ?","AAAAAAH","Votre voisin a oublié ses sandales chez vous","Vous voulez les règles de ce jeu ?","Qui a écrit les Misérables ?","Dans cette situation dois-je m'arrêter ?","Pour qui travaillez vous ?","Quelle est la meilleure méthode pour être riche ?","Un saltimbanque vous agresse","Tu peux me rendre mes gomettes ?","Le facteur ne veux plus vous adresser la parole","Non mais vous avez quel âge ?","Dîtes moi une phrase","Vous êtes le 1000ème visiteur,voulez vous un cadeau ?","Quels sont vos tarifs","Que pensez-vous du prénom Titouan ?","Un million, mais vous savez combien ça fait un million ?","Dans cette situation, qui a la priorité ?","Quel est votre métier ?","Courir, oui, mais comment ?","Tu veux du pain ?","À qui de droit ?","Comment est votre blanquette ?","Quel est votre animal totem ?","Quel est la réponse à la vie, l'univers et tout le reste ?","Quel est votre plus grand défaut ?","Quel votre plus grande passion ?","1+2=?"];

// ----TABLEAU DES REPONSES (86)----

var reponses =
["Je prends mes jambes à mon cou","Je n’ai pas les horaires de ce spectacle","Je refuse","A qui ai-je l’honneur ?","Oui","Non","Ah t’es là toi","J’appelle un ami","J’appelle un homard","J’accepte mais en hésitant 1h30","Je ne me permettrai pas","Sur ce je retourne là-bas","C’est la vie, je ne peux rien y faire","La soupe de courgette","La 2","On dit qu’on fait comme ça","Acetiltoutétan","Je ne peux que refuser","C’est un non, taille cosmique","Permet moi d’en douter","C’est vrai","J’avance de 3 cases","Un lombric","Le 12","AAAAAAAAAAH","Mais enfin je n'en ai pas envie","Un patin à roulette","Rafael Nadal","Une quiche","Du sable","Le taux de sel","La FRANCE","PluTHON","Je pioche une carte chance","Oui mais sans conservateur","Tu sais ce que j'en pense","Vous pouvez répeter la question ?","Le cochonnet","Je vais prendre le thon albacore","Sans doute","Je quitte le plateau","Vraiment ? Comment ça s'est passé déjà ?","Une baguette pas trop cuite, s'il vous plaît","Je suis perplexe","Joker","Je demande mon avocat","Victor Hugo","JAMAIS","Un boulanger","Je trie mes déchets","Laissez moi tranquille s'il vous plaît","J'utilise tranche-herbes","Drôle de manières","J'ai énormément de dettes","Un crayon 6B","Louis XV","Éternuer","Je m'en fiche pas mal","On peut plus continuer comme ça Éric","Je déménage au Pérou","Sans les mains","Qui vous a dit ça ?","Vrai","Je ne souhaite pas répondre","Pour moi, c'est Black Mirror","J'en mange mon chapeau","1000","Moi une phrase","ASPERGE (ou autres)","Ah !","La réponse","Je ne mange pas de ce pain là","Je m'emporte et frappe tout ce qui m'entoure","Ahou!","J'ai pas les mots","Je peux pas, je suis myope","Le Pain","Je m'en lave les mains","La blanquette est bonne","J'utilise la boule de feu","Vous m'enquiquinez","Je lance un dé d'agilité","Mi-figue, mi-raisin","J'entends bien","Le goudron","Je suis astigmate","Enfer et Damnations","Je veux bien un déca"]

// ----TABLEAU DES RESULTATS (48)----

var resultats =
["Vous avez gagné","C'est la meilleure réponse de l'histoire (bravo)","Vous ne pouvez pas, il y a Patrick Sauce qui fait un moule frite","Jamais deux sans trois","Non mais vous vous prenez pour qui ?","C'est sans foi ni loi, mais soit","L'habit ne fait pas le moine","En effet c'est exact","C'est complétement faux","Vous êtes officiellement géographe", "Vous ne pouvez pas, il y a Michel Leeb qui peint avec de la feta en diagonale","Vous êtes officiellement DJ","J'aurai pas fait comme ça","J'ai rarement vu une réponse aussi peu cohérente","Recalé","Vous ne serez jamais sorcier","Vous êtes peu perspicace, pour un géographe","Avec la pièce jointe c'est mieux","Vous avez obtenu votre permis de chasse","Attendez Anatole, revenez !","Vraiment ? Comment ça s'est passé déjà ?","Vous êtes adopté","Vous piochez une carte Caisse de Communauté","Attention, priorité à gauche","Tu sais ce qu’il te reste à faire","Vous progressez","C'est un bon début","Qui l'eut cru ?","J'allais le dire","Excellent cardio, pour un chien","Vous devriez avoir honte","Enfin, ne cliquez pas aussi fort","Uno","La médaille de bronze est pour vous","Vous avez une angoisse sociale","Votre oncle est mélomane","Vous avez obtenu votre diplôme de menuisier","Tenez, voici 1000 euros","Vous gagnez le premier lot du bingo de Andrieux en Poitou","Victoire du FC Lorient","Un manchot décède sous vos coups acharnés","Qu'est ce qui vous fait dire ça ?","L'erreur du joueur français","Vous remportez le marathon","Vous êtes schizophrène","Tel chien, tel maître","Vous gagnez un dico","Vous partez à Lourdes","Vous êtes astigmate","Non","Allez passe l'asticot"]

// ----TABLEAU DES DESCRIPTIONS DU SCORE (29)----

var scoore =
["Température","Taux de Radiations","Votre Puissance","Votre taille","Votre Poids","Taux de Criminalité à Poitiers","Population de Ajaccio","Taux de Sel","Votre valeur en bourse","Fortune de Dany Boon(en Yens)","Nombre de Gauchers en Alsace","Nombre de page de votre autobiographie","Pince à Linges vendues en 2016","Probabilité de rencontrer votre chien demain","Circonférence de Neptune","En pourcent","Fréquence de votre respiration","Nombre de fruits et légumes par jour","Votre âge","Vous avez Bac +","Votre QI","Votre salaire (en K)","En kilogrammes","En degrés Fahrenheit","En décimètres","En noeuds","Votre vitesse maximale","Votre consommation hebdomadaire de la tarte","Votre débit de parole"]

// ----TABLEAU DES IMAGES POUR LES QUESTIONS (46)----

var illu = ["tripes2.jpg","chabal.jpg","coriandre.jpg","stock1.jpg","stock2.jpg","stock3.jpg","trip.png","tripes.jpg","volet.jpg","stock4.jpg","stock5.jpg","stock6.jpg","stock7.jpg","stock8.jpg","stock9.jpg","pikachu.png","bebebiere.jpg","bob.jpg","meme1.jpg","hulk.jpg","mustache.jpg","pikachu.png","stock10.jpg","bobross.jpg","pedalo.jpg","meandthebois.jpg","amiajoke.jpg","michael.jpg","michael3.png","nicocage.jpg","dwight.jpg","dauphin.jpg","angry.jpg","voisin.jpg","facteur.jpg","plumber.jpg","spiderman.jpg","crabman.png","barrique.jpg","pain.jpg","kingkong.jpg","rambo.jpg","peur.jpg","flaque.jpg","poker.jpg","castor.jpg"]

// ----TABLEAU DES IMAGES POUR LES RESULTATS (25)----

var illuresult =
["yes.png","pingu.jpg","michael2.jpg","jim.png","yees.png","victory.jpg","grumpy.jpg","angrynpc.jpg","non.png","oui.jpg","facepalm.jpg","sourire.jpg","colere.jpg","permis.jpg","diplome.jpg","podium.jpg","Dewie.jpg","Hal.jpg","clinton.jpg","nerd.png","earl.jpg","fete.jpg","explo.gif","mindblown.jpg","office.gif"]


// ----EVENEMENT AU CLICK DU CHOIX 1----

function clickRep1(){
  var scoreRan = getRandomNumber(0,1000);  // ---CHOISIS UN CHIFFRE DE 1 à 1000 pour le SCORE---

  $(".ecran1").hide() //--- PASSAGE à L'ÉCRAN 2
  $(".ecran2").show()

  $(".result").html(getRandomItem(resultats)) // --- CHOISIS UNE PHRASE POUR LE RESULTAT

  var imajRandomRes = getRandomItem(illuresult);  // --- CHOISIS UNE IMAGE POUR LE RESULTAT
  $("#imajres").html("<img src=./images/"+ imajRandomRes +">");

  $(".score").html(scoreRan) // --- CHOISIS UN NOMBRE POUR LE SCORE

  $(".score").css({  // --- CHOISIS UNE TAILLE POUR LA BARRE DE SCORE
    "width":scoreRan
  })

  $("#textScore").html(getRandomItem(scoore)) // --- CHOISIS UNE PHRASE POUR LE SCORE

  // $(".ecran2").css({
  //   "background-color":getRandomColor(red,green)
  // })


}


// ----EVENEMENT AU CLICK DU CHOIX 2----

function clickRep2(){

  var scoreRan = getRandomNumber(0,1000); // ---CHOISIS UN CHIFFRE DE 1 à 1000 pour le SCORE---

  $(".ecran1").hide() //--- PASSAGE à L'ÉCRAN 2
  $(".ecran2").show()

  $(".score").html(scoreRan)   // --- CHOISIS UN NOMBRE POUR LE SCORE

  $(".result").html(getRandomItem(resultats)) // --- CHOISIS UNE PHRASE POUR LE RESULTAT

  var imajRandomRes = getRandomItem(illuresult);  // --- CHOISIS UNE IMAGE POUR LE RESULTAT
  $("#imajres").html("<img src=./images/"+ imajRandomRes +">");

  $(".score").css({   // --- CHOISIS UNE TAILLE POUR LA BARRE DE SCORE
    "width":scoreRan
  })

  $("#textScore").html(getRandomItem(scoore))   // --- CHOISIS UNE PHRASE POUR LE SCORE

}


// ----EVENEMENT AU CLICK DU CHOIX 3----

function clickRep3(){

  var scoreRan = getRandomNumber(0,1000);  // ---CHOISIS UN CHIFFRE DE 1 à 1000 pour le SCORE---

  $(".ecran1").hide()  //--- PASSAGE à L'ÉCRAN 2
  $(".ecran2").show()

  $(".score").html(scoreRan)  // --- CHOISIS UN NOMBRE POUR LE SCORE

  $(".result").html(getRandomItem(resultats))  // --- CHOISIS UNE PHRASE POUR LE RESULTAT

  var imajRandomRes = getRandomItem(illuresult);  // --- CHOISIS UNE IMAGE POUR LE RESULTAT
  $("#imajres").html("<img src=./images/"+ imajRandomRes +">");

  $(".score").css({   // --- CHOISIS UNE TAILLE POUR LA BARRE DE SCORE
    "width":scoreRan
  })

  $("#textScore").html(getRandomItem(scoore))  // --- CHOISIS UNE PHRASE POUR LE SCORE


}

// ----EVENEMENT AU CLICK DE "QUESTION SUIVANTE"----

function clickQSuiv(){

  $(".ecran2").hide() //--- PASSAGE à L'ÉCRAN 1
  $(".ecran1").show()

  initScreen(); // ----CHOISIS UNE PHRASE POUR LES REPONSES

  var imajRandom = getRandomItem(illu); // --- CHOISIS UNE IMAGE POUR LA QUESTION
  $("#imaj").html("<img src=./images/"+ imajRandom +">");
  // $(".reponses").css({
  //   "background-color":getRandomColor()
  // })
}


// ----DIVERS FONCTIONS----

function getRandomItem(array){
	return array[Math.floor(Math.random()*array.length)];// Renvoi un élément au pif contenu dans un array
}
function getRandomUniqItem(array){
  var index = Math.floor(Math.random()*array.length)
	return array.splice(index, 1);// Renvoi un élément au pif contenu dans un array
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
  return color;// Renvoi une couleure hexadécimal aléatoire
}

function getRandomNumber(min, max, unit) {
	unit = unit || '';
	return Math.round(Math.random()*(max-min)+min)+unit;// Renvoi un nombre aléatoire entier contenu ente min et max
}
