
var Stack = (function(){

    function Stack() {
        this.items = [];
    }
    
    Stack.prototype.push = function(e){
        this.items.push(e);
    }
    
    Stack.prototype.pop = function(){
        return this.item.pop();
    }
    
    Stack.prototype.last = function() {
        return this.items[this.items.length - 1];
    }
    
    Stack.prototype.isEmpty = function() {
        return this.items.length === 0;
    }
    
    Stack.prototype.size = function() {
        return this.items.length;
    }
    
    Stack.prototype.clear = function() {
        this.items = [];
    }

    return Stack;
})()

var s = new Stack();
s.push(1);
s.push(2);

console.log(s.size());