async function getdata(){
    const data=await fetch("http://localhost:3000/wybierz")
    json=await data.json()
}
getdata()

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

const usun=document.createElement("button")
usun.innerHTML="usuń zadanie"
usun.setAttribute("onclick","usuwanie")
zadanie.appendChild(usun)


document.getElementById("body").appendChild(zadanie)
}

function usuwanie(){
    document.getElementById("zad").innerHTML=""
}