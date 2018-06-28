function add (a,b){
return (a+b);
}
function multiply (a,b){
var count = 0;
    for(i=0; i<a; i++){
count = add(count,b);
}
return (count);
}
