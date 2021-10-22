// Another aspect of the module pattern, a singleton object is an IIFE and can only return one instance of an object at at time. Multiple calls to the constructor will simply return one instance. Also has private and public references. 

// not used often because it gives a global point of access instead of embracing encapsulation

const Singleton = (function() {
    let instance

    function createInstance(){
        const object = new Object({ result: 'Object Instance'})
        return {
            object
        }
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance()
            }
            return instance
        }
    }
})()

const instanceA = Singleton.getInstance()
const instanceB = Singleton.getInstance()

// console.log(instanceA === instanceB)
// there can never be more than one instance, it will always be in and the same