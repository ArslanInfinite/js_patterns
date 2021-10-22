const PageState = function(){
    let currentState = new homeState(this)

    this.initialize = function(){
        this.change(new homeState)
    }

    this.change = function(state){
        currentState = state
    }
}

