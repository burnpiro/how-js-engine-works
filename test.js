function add(a, b){
    return a + b;
}

var sum = 0

for(var i=0; i<1000; i++) {
 sum = add(sum,1)
}