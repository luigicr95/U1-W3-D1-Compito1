//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = "criceto";
var PetPreferito = "coniglio";

var $pet = "giraffa";
console.log($pet);
var _pet = "leone";
console.log(_pet);
/*var _pet2 = "pantera";
document.write(_pet2);*/

document.getElementById("giraffe-pic").innerHTML = $pet;
document.getElementById("hamster").innerHTML = petPreferito;
document.getElementById("rabbit").innerHTML = PetPreferito;

function changeColor(newColor) {
  const elem = (document.getElementById("giraffe").style.backgroundColor =
    newColor);
}

function changeImage() {
  console.log(document.getElementById("giraffe").src);
  if (
    document.getElementById("giraffe").src ===
    "http://127.0.0.1:5500/giraffa.jpg"
  ) {
    document.getElementById("giraffe").src = "./pantera.jpg";
  } else {
    document.getElementById("giraffe").src = "./giraffa.jpg";
  }
}
//var 12 = 'numero';
