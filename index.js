// oppgave 1
var tekst1 = "Hei hei "
var tekst2 = "Nicolai"

console.log(tekst1 + tekst2);
document.write(tekst1 + tekst2)

// Oppgave 2
var tall = 5
if (tall >= 0) {
    console.log("tallet er posistivt");
}
else{
    console.log("tallet er negativt");
}

// Oppgave 3
var tall1 = 7
var tall2 = 2
if (tall1 > tall2){
    console.log("tall1 er størst");
}
else if(tall1 == tall2){
    console.log("tall1 og tall2 har samme verdi");
}
else {
    console.log("tall2 er størst");
}
// Oppgave 4
var Tall1 = 3
var Tall2 = 5
var Tall3 = 8
if (Tall3 > Tall2 && Tall3 > Tall1) {
    console.log("tall3 er størst");
}
else if (Tall2 > Tall1 && Tall2 > Tall3) {
    console.log("tall2 er størst");
}
else {
    console.log("tall1 er størst");
}
// Oppgave 5
var karakter = 55
if (karakter >= 50 && karakter <= 100){
    console.log("eksamen er bestått");
}
else if (karakter < 0 || karakter > 100){
    console.log("karakter er ikke gyldig");
}
else {
    console.log("eksamen er ikke bestått");
}
// Oppgave 6
var ukeDag = 1
if (ukeDag == 1){
    console.log("Det er Mandag");
}
else if(ukeDag == 2){
    console.log("Det er Tirsdag");
}
else if(ukeDag == 3){
    console.log("Det er Onsdag");
}
else if(ukeDag == 4){
    console.log("Det er Torsdag");
}
else if(ukeDag == 5){
    console.log("Det er Fredag");
}
else if(ukeDag == 6){
    console.log("Det er Lørdag");
}
else if(ukeDag == 7){
    console.log("Det er Søndag");
}
else{
    console.log("Dette tallet er ugyldig");
}
// Oppgave 7
var celsius = 3
var fahrenheit = (celsius * 1.8 + 32)
console.log(fahrenheit);