
$(document).ready(function() {
    $("h1").css("color", "blue");
    console.log($("h1").css("font-size")); // console'da 32px olarak h1'i gösterdi.
    $("h1").css("font-size", "3rem");
    $("h1").text("<em>hey</em>"); //sadece içinde bulundurduğu yazıyı koda yazar 
    $("button").html("<em>hey</em>"); // html kodu olarak çalışır.
    $("a").attr("href", "https://www.yahoo.com"); // kodda bulunun şeyi attr ile değiştirmeyi sağlar img de de geçerli.
    $("h1").click(function() {
        $("h1").css("color", "red"); //KESİNLİKLE KARANLIK MODU BU ŞEKİLDE YAPIYO OLABİLİRLEEEEEERRRRRR!!!!!!!!
    });
    $("button").click(function() {
        $("h1").css("color", "purple"); //Alttaki kodun kısa versiyonu.
    })
    $("input").keydown(function(event) {
        $("h1").text(event.key);    //yorum satırına ne yazdığımı h1de gösterir. hepsini enter falan olarak.
    });
    $("h1").on("mouseover", function() {
        $("h1").css("color", "#000"); //fare yazının üstünden geçtiğinde yazı renk değiştirecek çok değişken var sadece bir örnek.
    });
    /*$("h1").before("<button>hello</button>");
    $("button").on("click" , function() {
        $("h1").slideToggle(); //toggle kaybeder butona basılınca tekrar gelir. hide ile kaybolur geri gelmesi için h1i gizleyecek show(); ile geri gelir.
    //fadeOut yapıldığında yavaş yavaş opak olarak kaybolur. FadeIn geri getirir.
    //fadeToggle aynı şekilde gider ve gelir opak halde yavaş şekilde.
    //slideUp slideDown slideToggle aşağıdan yukarı gidiş yokarıdan aşağı geliş.
    });  
    $("h1").before("<button>hello</button>");
    $("button").on("click" , function() {
        $("h1").animate({margin: "20%"}); //buraya cssmiş gibi ne yazarsan sana onu yapıyo. animasyon...
    });*/

    $("h1").before("<button>hello</button>");
    $("button").on("click" , function() {
        $("h1").slideUp().slideDown().animate({margin: "20%", opacity: 0.5}); //buraya cssmiş gibi ne yazarsan sana onu yapıyo. animasyon...
    //hepsini sırayla yapar 
    });

});


/* buraya yazılacak olan kod uzun versiyonudur.
for(var i=0; i<5;i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
};


//
before yukarı 
after aşağı
prepend  öne
append  arkaya
neyi seçip bunları yazdıysanız yazdığınız şekilde html koduyla... koda bir şey eklersiniz.

 */
