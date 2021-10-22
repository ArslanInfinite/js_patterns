// creates interface for creating objects, but subclasses define what classes are instantiated
// often used to manage or maintain collections of objects that are different but have common characteristics

function memberFactory(){
    this.createMember = function(name, type){
        let member 

        if(type === 'simple'){
            member = new simpleMembership(name)
        } else if (type === 'standard') {
            member = new standardMembership(name)
        } else if (type === 'super') {
            member = new superMembership(name)
    }

    member.type = type
    member.define = function(){
        console.log(`${this.name} (${this.type}) ${this.cost}`)
    }

    return member
    }
}

// creating constructors for subclasses

const simpleMembership = function(name){
    this.name = name
    this.cost = '$5'
}

const standardMembership = function(name){
    this.name = name
    this.cost = '$15'
}

const superMembership = function(name){
    this.name = name
    this.cost = '$25'
}

const members = []
const factory = new memberFactory()

members.push(factory.createMember('Arslan', 'standard'))

console.log(members)