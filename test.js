function sayHi(name){
    var message = "Hi " + name + "!"
    console.log(message)
}

function add(a, b){
    return a;
}

var sum = 0

for(var i=0; i<100000; i++) {
 sum = add(1,1)
}
sayHi("Sparkle", sum)
