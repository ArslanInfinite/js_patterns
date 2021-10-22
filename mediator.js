// Mediator is an interface between communicating between colleagues which are mediated objects

const User = function(name){
    this.name = name
    this.chatroom = null
}

// the idea is to have users interact with one another or the entire chatroom
User.prototype = {
    send: function(message, recipient){
        // "this" pertains to the user
        this.chatroom.send(message, this, recipient)
    }, 
    receive: function(message, sender){
        console.log(`${sender.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function(chatroom){
    let users = {} // list of users

    return {
        // registering to join the chatroom
        register: function(user){
            // assigning user to list of users
            users[user.name] = user
            // user's chatroom is set to "this" current chatroom, chatroom was null by default but now it is the user's chatroom
            user.chatroom = this
        }, 
        send: function(message, sender, recipient) {
            if(recipient){
                // if there is a designated recipient, it will be a direct message
                recipient.receive(message, sender)
            } else {
                // to send to all users, loop through users list
                for(key in users) {
                    if(users[key] !== sender){
                        users[key].receive(message, sender)
                    }
                }
            }
        }
    }
}

const arslan = new User('Arslan')
const tony = new User('Tony')
const steve = new User('Steve')

const chatroom = new Chatroom()

chatroom.register(arslan)
chatroom.register(tony)
chatroom.register(steve)

// arslan.send('Hello Tony', tony)
// tony.send('Hello Arslan', arslan)
// steve.send('Assemble')