// // Observer patterns alows for subscription or unsubscription from events or functionality

// function EventObserver(){
//     this.observers = []
// }

// EventObserver.prototype = {
//     subscribe: function(fn){
//         this.observers.push(fn)
//         console.log(`You are now subscribed to ${fn.name}`)
//     },
//     unsubscribe: function(fn){
//         // filter out from the list whatever matches the callback function.
//         // if there is not match, the callback stays on the list
//         // filter returns a new list and reassigns the list of observers
//         this.observers = this.observers.filter(function(item){
//             if(item !== fn){
//                 return item
//             }
//         })
//         console.log(`You are now unsubscribed from ${fn.name}`)
//     }, 
//     fire: function(){
//         this.observers.forEach(function(item) {
//             item.call()
//         })
//     }
// }

// const click = new EventObserver()

// // Event Listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//     click.subscribe(getCurMilliseconds)
//   });
  
//   document.querySelector('.unsub-ms').addEventListener('click', function() {
//     click.unsubscribe(getCurMilliseconds)
//   });
  
//   document.querySelector('.sub-s').addEventListener('click', function() {
//     click.subscribe(getCurSeconds)
//   });
  
//   document.querySelector('.unsub-s').addEventListener('click', function() {
//     click.unsubscribe(getCurSeconds)
//   });
  
//   document.querySelector('.fire').addEventListener('click', function() {
//     click.fire()
//   });
  
//   // Event Handlers

//   const getCurMilliseconds = function() {
//     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
//   }

//   const getCurSeconds = function() {
//     console.log(`Current Seconds: ${new Date().getSeconds()}`);
//   }