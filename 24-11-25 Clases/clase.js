class Animal {
    constructor(name, dodo) {
    this.name = name;
    this.do = dodo
    }
    mensaje() {
        return console.log("Un "+this.name+" "+this.do)
    }
}

const patito = new Animal("patito", "vuela")

console.log(patito)
patito.mensaje()
//console.log(patito.mensaje())