function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    console.log(`${this.owner} loves ${this.name}`)
    return `${this.owner} loves ${this.name}`
}

const cat1 = new Cat("Cat 1", "Jimmy")
const cat2 = new Cat("Cat 2", "Jimmy")
const cat3 = new Cat("Cat 3", "Jimmy")
cat1.cuteStatement()

Cat.prototype.cuteStatement = function() {
    console.log(`Everyone loves ${this.name}`)
    return `Everyone loves ${this.name}`
}

cat1.cuteStatement()

Cat.prototype.meow = function() {
    console.log('Meow')
}

cat1.meow()
cat1.meow = function() {
    console.log('Woof')
}
cat1.meow()