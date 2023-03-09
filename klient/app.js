async function getdata(){
    const data=await fetch("http://localhost:3000/wybierz")
    json=await data.json()
    console.log(json)
    baza()
}
getdata()

function baza(){
    for(var i=0;i<=json.length-1;i++){
    zadanie=document.createElement("div")
    zadanie.setAttribute("id","zad")
    zadanie.style.height="200px"
    zadanie.style.width="200px"
zadanie.style.border="1px solid black"
const nazwa=document.createElement("h1")
nazwa.innerHTML=json[i].nazwa
zadanie.appendChild(nazwa)

const wykon=document.createElement("h1")
wykon.innerHTML=json[i].wykon
zadanie.appendChild(wykon)

const termin=document.createElement("h1")
termin.innerHTML=json[i].termin
zadanie.appendChild(termin)

document.getElementById("gora").appendChild(zadanie)
}
}



function dodaj(){
    zadanie=document.createElement("div")
    zadanie.setAttribute("id","zad")
    zadanie.style.height="200px"
    zadanie.style.width="200px"
zadanie.style.border="1px solid black"
const nazwa=document.createElement("h1")
nazwa.innerHTML=document.getElementById("nazwa").value
zadanie.appendChild(nazwa)

const wykon=document.createElement("h1")
wykon.innerHTML=document.getElementById("wykon").value
zadanie.appendChild(wykon)

const termin=document.createElement("h1")
termin.innerHTML=document.getElementById("termin").value
zadanie.appendChild(termin)


document.getElementById("gora").appendChild(zadanie)
}