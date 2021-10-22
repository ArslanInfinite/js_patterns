// basic structure of the module pattern

// IIFE

// (function(){
//     // declaring private variables and functions here

//     return {
//     // public variables and functions declared here
//     }
// })()

// standard module pattern 

const UICtrl = (function(){
    let text = 'Module Pattern'

    const changeText = function(){
        const element = document.querySelector('h1')
        element.textContent = text
    }
  
    // this is the breakoff point; anything above this is private, anything below in the return function is public, the return function has access to everything above it
    return {
        // variables here use colon instead of equal sign
        callChangeText: function(){
            changeText()
        }
    }
})()

UICtrl.callChangeText()