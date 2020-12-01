// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.
// Se volete potete partire dal layout base visto in classe
// https://bitbucket.org/booleancareers/lc-ex-slider-layout/downloads/



//essendo il ns file jquery caricato nell'head per prima cosa inseriamo un comando che attiverà le nostre azioni dopo il caricameto della pagina
//1 per prima cosa agiremo sulle icone frecce per scorrere le immagini avanti e dietro
//si nota che nel file html c'è una classe active che mostra la img visibile sulla pagina.
//qst classe deve andare avanti tra le 4 img del ns html.
$(document).ready(function() {

  var prev = $(".fa-angle-left");
  var next = $(".fa-angle-right");


  prev.click(function(){
    console.log("prev");
    prevSlide();
  })

  next.click(function() {
    console.log("next");
    (nextSlide());
  })

   function nextSlide(){
     var currentImage = $("img.active");
     currentImage.removeClass("active");
     currentImage.next("img").addClass("active");
     if (currentImage.hasClass("last")) {
        console.log("lastSlide");
        currentImage = $("img.first");
        currentImage.addClass("active");
     }
     var pallino = $(".nav > i.active");
     pallino.removeClass("active");
     pallino.next("i").addClass("active");
     if (pallino.hasClass("last")) {
        pallino = $("i.first");
        pallino.addClass("active");
     }
   }




   function prevSlide() {
     var currentImage = $("img.active");
     currentImage.removeClass("active");
     currentImage.prev("img").addClass("active");
     if (currentImage.hasClass("first")) {
        console.log("firstSlide");
        currentImage = $("img.last");
        currentImage.addClass("active");
     }
     var pallino = $(".nav > i.active");
     pallino.removeClass("active");
     pallino.prev("i").addClass("active");
     if (pallino.hasClass("first")) {
        pallino = $("i.last");
        pallino.addClass("active");
     }
   }



});








//   $(".fa-angle-right").click(function() {
//     // console log per vedere se la freccia risponde al click;
//     console.log("click");
//     // adesso dobbiamo vedere su cosa deve andare ad agire il click;
//     if ($("div img").hasClass("first")) {
//       $("div img.active").removeClass("active").next().addClass("active");
//     } else if ($("div img").hasClass("last")) {
//       $("div.images .first").addClass("active");
//     }
//
//
//
//
//     $("div i.active").removeClass("active").next().addClass("active");
//
//   });
//
//   $(".fa-angle-left").click(function() {
//     // verifichiamo il bottone di reverse;
//     console.log("clickrev");
//     $("div img.active").removeClass("active").prev().addClass("active");
//     $("div i.active").removeClass("active").prev ().addClass("active");
//
//   });
//
//
