var b= [1, 2, null];
var a = [1, 2, 3, 4, 5, 6];
var d = b.filter(item => item!==null);
console.log(d);
var res = d.filter(items => !a.includes(items));
console.log(res)
if(res.length)
    console.log("Error")
else {
    for( let i = 0; i<a.length; i++){
        for( let j = 0; j<b.length; j++){
            if(a[i]===b[j])
                a[i]+=1;
            if(b[j]===null){
                a.push(b[j]);
                b.splice(j,1);
            }
        }
    }
}
console.log(a);