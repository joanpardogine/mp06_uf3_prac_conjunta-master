'use strict'

let hospital = null;
// var pacients = [];

//import MetgeJs from "./classes/Metge.js";
//import { Metge } from "./classes/Metge.js";

// debugger;
let metge1 = new Metge("Jaume","Estivill","12345678A","Pediatria");
console.log("metge1 = "  + metge1);
//window.localStorage.setItem('metge1', JSON.stringify(metge1));



/* Creació de una matriu (Array) anomenada llistaMalalties i incialitzada amb totes les malalties obtingudes de la
** web de l'Hospital de la Vall d'Hebron https://hospital.vallhebron.com/ca/que-podem-fer-tu/malalties/llista-de-malalties */
var llistaMalalties =['Alzheimer','Anells vasculars','Atrèsia pulmonar amb comunicació intraventricular',
                      'Bacteria Gonorrea','Cadena de ADN','Canal auriculoventricular','Canal auriculoventricular parcial',
                      'Càncer','Càncer de mama','Cardiopatia familiar','Coartació de l’aorta i hipoplàsia de l’arc aòrtic',
                      'Comunicació interventricular (CIV)','Diabetis','Diftèria',
                      'Displàsia de maluc en l’adolescent i l’adult jove','Doble sortida del ventricle dret',
                      'Drenatge venós anòmal pulmonar total ','Ebola','Èczema','Epidermòlisi ampul·lar','Epilèpsia',
                      'Esclerosi múltiple','Esofagitis eosinofílica ','Espina bífida Vall dHebron','Estenosi aòrtica ',
                      'Fibromiàlgia','Glòbuls vermells','Grip','Hemofília','Herpes simple','Hipertensió arterial pulmonar',
                      'Ictus','Infecció per virus del Zika','Intestí irritable','Lesionats medul·lars complexos',
                      'Lesions valvulars: anomalia d’Ebstein','Lesions valvulars: anomalies congènites de la vàlvula mitral',
                      'Lesions valvulars: estenosi pulmonar','Lupus','Ma tremolosa amb distonia','Malaltia celíaca',
                      'Malaltia de Chagas','Malaltia del Crohn','Malalties metabòliques hereditàries',
                      'Malalties neuromusculars i malalties rares','Malatia de Parkinson','Meningitis',
                      'Miastènia gravis','Migranya','Mostra de sang amb sífilis','Neuroblastoma en la infància',
                      'Neurocirurgia pediàtrica complexa','Osteoporosi','Osteosarcoma en infants','Pacient amb al·lèrgia',
                      'Pacient amb cervicàlgia','Pacient amb dermatitis atòpica','Pacient amb diarrea',
                      'Pacient amb escoliosi idiopàtica','Pacient amb refredat comú','Persistència del conducte arteriós',
                      'Psoriasi','Reconstrucció complexa de la superfície ocular','Restrenyiment',
                      'Sarcoma d’Ewing en els infants','Senyals de l’infart de miocardi','Sèpsia','Síndrome d’Asperger',
                      'Síndrome de la hipoplàsia de cavitats esquerres','Síndromes de la fallada medul·lar congènita',
                      'Tetralogia de Fallot','Tractament d’infeccions osteoarticulars resistents',
                      'Transposició de grans artèries ','Trastorn Obsessiu Compulsiu (TOC)',
                      'Tumor extraocular en la infància (Rabdomiosarcoma)',
                      'Tumor intraocular en la infància (Retinoblastoma)','Tumors d’òrbita','Ventricle únic',
                      'Virus del papil·loma humà (VPH)'];

var eleBtn_GestHospital = document.getElementById("btn_GestHospital");
var eleBtn_GestPacients = document.getElementById("btn_GestPacients");
var eleBtn_GestMalalties = document.getElementById("btn_GestMalalties");
var eleBtn_GestMetges = document.getElementById("btn_GestMetges");

var eleID_h1TitolHospital = document.getElementById("h1TitolHospital");


var eleID_inputNomHospital = document.getElementById("inputNomHospital");
var eleID_divPacients = document.getElementById("divPacients");
var eleID_divGestio = document.getElementById("divGestio");


var eleID_divPresentacio = document.getElementById("divPresentacio");
var eleID_divHospital = document.getElementById("divHospital");
var eleID_barra_missatges = document.getElementById("barra_missatges");
var eleID_a_text_missatge = document.getElementById("text_barra_missatges");

const etCapMalaltia = "capMalaltia";
function mostraGestioHospital(){
  eleID_divPresentacio.classList.toggle("d-none");
  eleID_divHospital.classList.toggle("d-none");
  eleBtn_GestHospital.disabled = true;
}


function comprovaNoEstaBuit(objRebut){
    /*
  objRebut.validationMessage: "Please fill in this field."
  objRebut.tagName: "INPUT"
  objRebut.tagName: "SELECT"
  
  */
 debugger;
 objRebut.validationMessage = "Si us plau, omple aquest camp!";
  var tipusObjecte = objRebut.tagName;
  var textAbans = "No pots deixar el camp <b>";
  var textDespres = "</b> en blanc!";
  //debugger;
  if ((objRebut.value=="") || (objRebut.value==etCapMalaltia)) {
    mostraMissatge(textAbans + objRebut.name + textDespres);
    objRebut.classList.add("is-invalid");
  } else {
    objRebut.classList.remove("is-invalid");
    objRebut.classList.add("is-valid");
  }



//   switch (tipusObjecte) {
//     case "INPUT":
//         if (objRebut.value=="") {
//           // alert("No pots deixar aquest cap en blanc!");
//           //mostraMissatge("No pots deixar aquest cap en blanc!");
//           mostraMissatge("No pots deixar el camp " + objRebut.name + " en blanc!");
//           objRebut.classList.add("is-invalid");
//         } else {
//           objRebut.classList.remove("is-invalid");
//           objRebut.classList.add("is-valid");
//         }
//         break;
//         case "SELECT":
// //          alert("Id = " + objRebut.id);
//           if (objRebut.value==etCapMalaltia) {
//             debugger;
//             mostraMissatge(textAbans + objRebut.name + textDespres);
//             //mostraMissatge("No pots deixar aquest cap en blanc!");
//             //alert("No pots deixar aquest cap en blanc!");
//             objRebut.classList.add("is-invalid");
//           } else {
//             objRebut.classList.remove("is-invalid");
//             objRebut.classList.add("is-valid");
//           }
//         break;
        
//         default:
//           alert("falta opció al case!");
//         break;
//     }  // end switch
}

function espera(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}


function mostraMissatge(missatge){
  eleID_barra_missatges.title=="";
  eleID_barra_missatges.classList.toggle("d-none");
  eleID_a_text_missatge.innerHTML = missatge;
  eleID_barra_missatges.hidden=true;
  espera(3000);  // 3 seconds in milliseconds
  eleID_barra_missatges.hidden=false;
}


 
// function validaQueNoEsBuit(cadenaAValidar) {
//   //var x, text;
//   // Get the value of the input field with id="numb"
//   //x = document.getElementById("numb").value;

//   // If x is Not a Number or less than one or greater than 10
//   if (cadenaAValidar=="") {
//     alert("és buit!");
//   } 
// }

// function validaQueEsNombre() {
//   var x, text;
//   var min, max;
//   min = 1;
//   max = 10;
//   // Get the value of the input field with id="numb"
//   x = document.getElementById("numb").value;

//   // If x is Not a Number or less than one or greater than 10
//   if (isNaN(x)) {
//     text = "Input not valid";
    
//     document.getElementById("numb").style.border = "2px solid red";
//   } else {
//   	if  (x < min && x > max) {
//         text = "Input OK";
//     } else {
//     	if (x == ""){
//     		text = "Input empty";
//         } else {
//         	text = "Input NOK";
//         }
//     }
//   }
  
  

function crearHospital() {
  
  var nom = document.getElementById("inputNomHospital").value.toString();
  var maximPacients = parseInt(document.getElementById("maximPacientsHospital").value);
/*
  if (nom !== "" && maximPacients > 0) {
    */
      eleID_h1TitolHospital.innerHTML="<h2>Gestió de l'hospital</h2>" + 
          "<h1><b>" + nom + "</b></h1>";
      hospital = new Hospital(nom, maximPacients);
      eleID_divHospital.classList.toggle("d-none");
      var cadenaFilaPacient_1,cadenaFilaPacient_2,cadenaFilaPacient_3;
   /* Creació de tres cadenes cadenaFilaPacient_1, cadenaFilaPacient_2 i cadenaFilaPacient_3
   ** per faciliar la creació dels <div class="row"> que es crea per a cada pacient.
   ** posteriorment afegeiré un objecte llisa desplegable, que l'ompliré amb tots els elements
   ** de la matriu que acabo de crear llistaMalalties
   ** */
   var objSelect;
   
   
   
   
   /*
<select id="malaltiaPacient   <--- cadenaFilaPacient_1
0
">
    <option value="CapMalaltia">------ Escull un malaltia ------</option>  <-- etCapMalaltia = "capMalaltia"
    <option value="malatia0">Alzheimer</option>
    <option value="malatia1">Anells vasculars'</option>
    ....
    <option value="malatia52">Virus del papil·loma humà (VPH)'</option>
</select>
   */
   
   
   objSelect='<option value="'+ etCapMalaltia +'">------ Escull un malaltia ------</option>';
    for (var indexMalaltia=0; indexMalaltia<llistaMalalties.length; indexMalaltia++) {
        objSelect+='<option value="' + 
                    indexMalaltia.toString() +
                    '">' + 
                    llistaMalalties[indexMalaltia] + 
                    '</option>';  
    }
    objSelect+='</select>';
  

    // onfocus="myFunction(this.id)"

    /*.addEventListener('click',function(){
      alert("aqui estic");
    })
    */
    cadenaFilaPacient_1 =   '<div class="row">' +
                            ' <!-- INICI <div class="col mb-3"> --> '+
                            ' <div class="col mb-3">' +
                            '<label for="nomPacient" class="font-weight-bold"> Nom: </label>' +
                            '<input type="text" name="Nom"  title="Introdueix el nom del pacient."' +
                            ' required id="';

      cadenaFilaPacient_onBlur = '" onBlur="comprovaNoEstaBuit(';                       
      
      cadenaFilaPacient_2 = ')" class="form-control" required minlength="1" maxlength="100" />' +
                            '  </div> <!-- FINAL <div class="col mb-3"> -->' +
                            '  <div class="col mb-3">' +
                            '    <label for="malaltia" class="font-weight-bold">Malaltia: </label>' +
                            '    <select name="Malaltia" title="Introdueix la malaltia del pacient." id="';

      cadenaFilaPacient_onChangeThis = '" onChange="comprovaNoEstaBuit(this.id)';
      cadenaFilaPacient_onChange = '" onChange="comprovaNoEstaBuit(';
      cadenaFilaPacient_2_5= ' id="malaltiaPacient';

      cadenaFilaPacient_2_4 = ')"  id="malaltiaPacient';
      cadenaFilaPacient_3 = '  </div> <!-- <div class="col mb-3"> -->' +
                            '</div> <!-- <div class="row"> -->';
     
      for (var pacient = 0; pacient < maximPacients; pacient++) {
          var et_campSelMalPacient = "campSelectMalatia" + pacient.toString();  // <-- campSelectMalatia + #pacient
          var et_nomPacient = "nomPacient" + pacient.toString();                // <-- nomPacient        + #pacient

        document.getElementById("dadesPacient").innerHTML += ( '' +
            cadenaFilaPacient_1 + et_nomPacient + 
            cadenaFilaPacient_onBlur + et_nomPacient +
            cadenaFilaPacient_2 + et_campSelMalPacient +
            cadenaFilaPacient_onBlur + et_campSelMalPacient +
            // cadenaFilaPacient_onChangeThis +
            cadenaFilaPacient_2_4 +
            pacient.toString() + 
            '" class="form-control" required="" minlength="1" maxlength="100">' +
            objSelect +
            cadenaFilaPacient_3);
      }
      //alert(document.getElementById("dadesPacient").innerHTML);
      eleID_divPacients.classList.toggle("d-none");
      /*
  } else {
    //barra_missatges
    // eleID_barra_missatges.classList.toggle("d-none");
    if (nom !== "") {
      mostraMissatge("Cal que entris un nombre al camp màxim pacients!");
        // eleID_a_text_missatge.innerText = "Cal que entris un nombre al camp màxim pacients!";
    } else if(maximPacients > 0){  
      mostraMissatge("Cal que entris un nom al camp Hospital!");
    } else {
      mostraMissatge("Cal que entris un nom al camp Hospital i un nombre al camp màxim pacients!");
    }
    alert("hola1212");
    if (document.getElementById('campSelectMalatia').value == etCapMalaltia) {
      alert("value = " + elementACanviar.value);
    }
    
    // alert('borderColor es= ' + elementACanviar.style.borderColor);
    //elementACanviar.style.borderColor = "lightblue";
    //alert("hola");
  

  }
 */
}

function ingressarPacients() {
debugger;
  var nom = "";
  var malaltia = "";

  for (var pacient = 0; pacient < hospital.maximPacients; pacient++) {
    nom = document.getElementById("nomPacient" + pacient.toString()).value.toString();
    malaltia = document.getElementById("malaltia" + pacient.toString()).value.toString();

    if (nom !== "" && malaltia !== "") {
      if (hospital !== null) {
          hospital.ingressarPacient(new Pacient(nom, malaltia));
      }
    }
  }

  if (hospital !== null && (hospital.pacientsIngressats.length <= hospital.maximPacients)) {
    eleID_divPacients.classList.toggle("d-none");
    
    // document.getElementById("nomHospitalGestio").innerHTML = hospital.nomHospital;

    for (var pacient = 0; pacient < hospital.pacientsIngressats.length; pacient++) {
      document.getElementById("dadesGestio").innerHTML += ('<div class="row" id="dadesGestioPacient' + pacient.toString() + '">' +
        '<div class="col mb-3">' +
          '<label for="nomPacientGestio" class="font-weight-bold">Nom: </label>   <p id="nomPacientGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].nom  + '</p>' +
        '</div>' +
        '<div class="col mb-3">' +
          '<label for="malaltia" class="font-weight-bold">Malaltia: </label>  <p id="malaltiaGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].malaltia  + '</p>' +
        '</div>' +
        '<div class="col mb-3">' +
          '<button class="btn btn-success" onClick="gestioDonarDalta(' + pacient + ')">Donar d\'alta</button> <button class="btn btn-danger" onClick="gestioMorir(' + pacient + ')">Morir</button>' +
        '<div class="col mb-3">' +
      '</div>');
    }
    eleID_divGestio.classList.toggle("d-none");
    // document.getElementById("divGestio").classList.remove("d-none");
  }
}

function gestioDonarDalta(llitPacient) {
  hospital.donarDaltaPacient(llitPacient);
  document.getElementById("dadesGestioPacient" + llitPacient.toString()).remove();

  if (totsLlitsBuits())
  dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nom + ' no té cap pacient ingressat en aquests moments.</p>' +
  '<div class="text-center">' +
    '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
  '</div>');
}

function gestioMorir(llitPacient) {
  hospital.morirPacient(llitPacient);
  document.getElementById("dadesGestioPacient" + llitPacient.toString()).remove();

  if (totsLlitsBuits())
    dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nom + ' no té cap pacient ingressat en aquests moments.</p>' +
    '<div class="text-center">' +
      '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
    '</div>');
}

function totsLlitsBuits() {
  var llitsBuits = true;
  var llit = 0;

  while(llitsBuits && llit < hospital.pacientsIngressats.length) {
    llitsBuits = Object.keys(hospital.pacientsIngressats[llit]).length === 0;
    llit++;
  }

  return llitsBuits;
}
