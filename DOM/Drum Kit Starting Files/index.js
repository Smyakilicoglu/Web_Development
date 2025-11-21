// burada da sözlük var var kisi = {adi: "Sümeyra", soyadi: "Kılıçoğlu"};
//bunları koddan almak içinse kisi.adi , kisi.soyadi şeklinde nokta ile alınır.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// BU OLMADAN KOOOOOOOOODDDDDDDD ÇALIŞMADIIIIIIIIII!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
for (var i=0;i< numberOfDrumButtons ;i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // this.style.color = "white";  basıldığında renk dseğiştirmesini sağlar.
    var anahtar = this.innerHTML;
    tuslar(anahtar);
    tuscagirma(anahtar);
});
}

//tuşa basma işlemi çağırıldıgğında keypress devreye girer.
document.addEventListener("keypress", function(event) {
    tuslar(event.key);
    tuscagirma(event.key);
});

function tuslar(key) {
    switch (key) {
        case 'w':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case 's':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        default: console.log(key);
    }
}

function tuscagirma(mevcutanahtar) {
    var aktifbuton = document.querySelector("." + mevcutanahtar);
    aktifbuton.classList.add("pressed"); // koda şeffaflık ve gölge veriyo hangisini basıldığı belli olsun diye.
    //bu kodla cssin içinde girdik ve cssde değişiklik yapmak için bu kodu kullnırız.
    setTimeout(function() {
        aktifbuton.classList.remove("pressed");
    }, 100);
    // setTimeout şeffaflığı açık kalma süresi ve sonra kapatmak için bu kullanılır.
}