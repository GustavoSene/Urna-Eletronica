var numbers = document.getElementsByClassName("numbers");
let n1 = document.getElementById("emptyNumber1");
let n2 = document.getElementById("emptyNumber2");
let n3 = document.getElementById("emptyNumber3");
let n4 = document.getElementById("emptyNumber4");

let name = document.getElementById("emptyName");
let foto = document.getElementById("foto");
let partido = document.getElementById("partido");

let corrigir = document.getElementById("corrigir")

var votos = {Jair: 0, Lula: 0, Ciro: 0, Daciolo: 0, Nulo: 0};

let tela = document.getElementById("screen")

let texto = document.getElementById("textoFinal")

let infos = document.getElementsByClassName("info")

let screen2 = document.getElementById("tela2")


function numeros(a) {


  if (n1.innerHTML == "") {
    n1.innerHTML = a;
  } else if (n1.innerHTML != ""  && n2.innerHTML == "") {
    n2.innerHTML = a;
  } else if (n1.innerHTML != ""  && n2.innerHTML != "" && n3.innerHTML == "") {
    n3.innerHTML = a;
  } else if (n1.innerHTML != ""  && n2.innerHTML != "" && n3.innerHTML != "" && n4.innerHTML == "") {
    n4.innerHTML = a;
  } 

  if (n1.innerHTML == 1 && n2.innerHTML == 2 && n3.innerHTML == 3 && n4.innerHTML == 4) {reconhecerCandidato(1)}

  else if (n1.innerHTML == 8 && n2.innerHTML == 5 && n3.innerHTML == 4 && n4.innerHTML == 7) {reconhecerCandidato(2)}

  else if (n1.innerHTML == 9 && n2.innerHTML == 7 && n3.innerHTML == 9 && n4.innerHTML == 8) {reconhecerCandidato(3)}

  else if (n1.innerHTML == 5 && n2.innerHTML == 7 && n3.innerHTML == 6 && n4.innerHTML == 1) {reconhecerCandidato(4)}

  else if (n1.innerHTML == "0" && n2.innerHTML == "0" && n3.innerHTML == "0" && n4.innerHTML == "0") {reconhecerCandidato(5)} 


}

function reconhecerCandidato(n) {

switch(n) {

case 1: 

name.innerHTML = "Jair Bolsonaro"
foto.innerHTML = "<img src='/assets/bolsonaro.png' width = '250px' height ='220px'>" 
partido.innerHTML = "PL"

break;

case 2: 

name.innerHTML = "Lula"
foto.innerHTML = "<img src='/assets/lula.jpg' width = '200px' height ='200px'>" 
partido.innerHTML = "PT"

break;

case 3: 

name.innerHTML = "Ciro Gomes"
foto.innerHTML = "<img src='/assets/cirog.jpg' width = '250px' height ='220px'>" 
partido.innerHTML = "PDT"

break;

case 4: 

name.innerHTML = "Cabo Daciolo"
foto.innerHTML = "<img src='/assets/daciolo.jpg' width = '250px' height ='180px'>" 
partido.innerHTML = "PT"

break;

case 5: 

name.innerHTML = "Nulo"
foto.innerHTML = "<img src='/assets/anonimo.jpg' width = '220px' height ='200px'>" 
partido.innerHTML = "Sem partido"


break;

}



}

function correção() {

n1.innerHTML = "";
n2.innerHTML = "";
n3.innerHTML = "";
n4.innerHTML = ""; 

name.innerHTML = ""
foto.innerHTML = "" 
partido.innerHTML = ""


}

function branco() {

n1.innerHTML = "0";
n2.innerHTML = "0";
n3.innerHTML = "0";
n4.innerHTML = "0";

reconhecerCandidato(5);



}
 
function votar() {


if (name.innerHTML == "Jair Bolsonaro") {

    votos.Jair++;

}

if (name.innerHTML == "Lula") {

    votos.Lula++;

}

if (name.innerHTML == "Ciro Gomes") {

    votos.Ciro++;

}

if (name.innerHTML == "Cabo Daciolo") {

    votos.Daciolo++;

}

if (name.innerHTML == "Nulo") {

    votos.Nulo++;

}

if (name.innerHTML != "Jair Bolsonaro" && name.innerHTML != "Lula" 
&& name.innerHTML != "Ciro Gomes" && name.innerHTML != "Cabo Daciolo"
&& name.innerHTML != "Nulo"  ) {

alert("Candidato Inválido")

} else {

screen2.style.opacity = "0";
texto.style.display = "block";

setTimeout(restart,3000); }


}

function result() {

alert("                                      Contagem de votos \n\r" + 
"Jair Bolsonaro: " + votos.Jair + "\r\n" + "Luiz Inácio: " + votos.Lula + "\r\n" + "Ciro Gomes: " 
+ votos.Ciro + "\r\n" + "Cabo Daciolo: " + votos.Daciolo + "\r\n" + "Votos nulos: " + votos.Nulo + "\r\n" + "o novo presidente é: " );

}

function restart() {

correção();

texto.style.display = "none";

screen2.style.opacity = "1";




}