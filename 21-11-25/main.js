const user = {name : "Juan"}

user.name = "Manolito"

console.log(user)


/*
No se puede modificar es inmutable "const"
const name = "Cachalote"

name = "Ramiro"

console.log(name)*/

const aviso = () => {
    console.log("Funcion flecha...")
} 

//aviso()

const Arreglo = ["a", "b", "c"]

let ver = Array.isArray(Arreglo)

//console.log(ver)
//console.log(Arreglo.length)

let incluye = Arreglo.includes("b")
