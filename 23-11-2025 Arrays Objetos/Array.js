import jsonObj from "./datos.js"

const Personas = [
    {nombre: "A", edad:"23"},
    {nombre: "B", edad:"45"},
    {nombre: "C", edad:"21"},
    {nombre: "D", edad:"13"},
    {nombre: "E", edad:"31"}
]

const Forof = () => {
    for (const item of Personas) {
    console.log(item.nombre, item.edad)
}
} 

const For = () => {
    for ( let i = 0; i < Personas.length; i++ ) {
    console.log(Personas[i])
}
}

const Foreach = () => {
    Personas.forEach( elem => {
    console.log( elem );
});
}

//Foreach()

const TransformaEnJson = () => {
    let jsonObj = JSON.stringify(Personas)
    return jsonObj
}

//console.log(TransformaEnJson())

const TransformarObjenJson = () => {
    let nuevoObj = TransformaEnJson()
    let Obj = JSON.parse(nuevoObj)
    return Obj
}

//console.log(TransformarObjenJson())

//--- Desde aca trabajamos con el json de datos.js
const trans = () => {
    const objeto = JSON.parse(jsonObj)
    return objeto
}

const AgregarUsuario = (item) => {
    //Lo hacemos asi poruqe si hacemos console en el push, este nos mostrara 
    //la extension del array.
    let traidoArray = trans()
    traidoArray.push(item)
    return traidoArray
}
//console.log(trans())
console.log(AgregarUsuario({nombre:"chola", edad:"67"}))