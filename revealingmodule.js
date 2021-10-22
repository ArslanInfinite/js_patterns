// basic structure of a revealing module pattern 
// revealing module pattern returns an object literal that reveals or exposes the private functions or variables

const ItemCtrl = (function(){
    let data = []

    function add(item){
        data.push(item)
        console.log('Item added')
    }

    function get(id){
        return data.find(item => {
            return item.id === id
        })
    }
    // the return here is an object literal that exposes the private functions listed above
    return {
        add: add, 
        get: get
    }
})()

ItemCtrl.add({ id: 1, name: 'Food'})

console.log(ItemCtrl.get(1))