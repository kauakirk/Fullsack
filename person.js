class Person{
    constructor(name){
        this.name = name ;
    }
    sayMyName(name){
        return `my name is ${this.name}!`;
    }
}

module.exports = {
    Person,
}