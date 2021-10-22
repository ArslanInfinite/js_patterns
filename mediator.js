// Mediator is an interface between communicating between colleagues which are mediated objects

const user = function(name){
    this.name = name
    this.chatroom = null
}

const chatroom = function(chatroom){
    let users = {} // list of users
}