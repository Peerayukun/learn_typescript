class Human{
    name:string
    lastname:string
    age:number

    greating(){
        return "Hello I am "+this.name+" "+this.lastname+", "+this.age.toString()
    }
}

var h = new Human
h.name = "peem"
h.lastname = "pain"
h.age = 23
console.log(h.greating())