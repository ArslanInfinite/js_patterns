// creates interface for creating objects, but subclasses define what classes are instantiated
// often used to manage or maintain collections of objects that are different but have common characteristics

function memberFactory(){
    this.createMember = function(name, type){
        let member 

        if(type === 'simple'){
            member = new SimpleMembership(name)
        } else if (type === 'standard') {
            member = new StandardMembership(name)
        } else if (type === 'super') {
            member = new SuperMembership(name)
    }

    member.type = type
    member.define = function(){
        console.log(`${this.name} (${this.type}) ${this.cost}`)
    }
    
    return member
    }
}