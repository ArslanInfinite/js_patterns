// Observer patterns alows for subscription or unsubscription from events or functionality

function EventObserver(){
    this.observers = []
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn)
        console.log(`You are now subscribed to ${fn.name}`)
    },
    unsubscribe: function(fn){
        // filter out from the list whatever matches the callback function.
        // if there is not match, the callback stays on the list
        // filter returns a new list and reassigns the list of observers
        this.observers = this.observers.filter(function(){
            if(item !== fn){
                return item
            }
        })
        console.log(`You are now unsubscribed from ${fn.name}`)
    }, 
    fire: function(){
        this.observers.forEach(function(item) {
            item.call()
        })
    }
}

