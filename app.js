var sample = ["bat", "tap", "cat","tab", "pat",];
var star = "";
var store = "";
var count = 0;
var output = [];
for(var i = 0; i < sample.length; i++ ){
    star += sample.splice(i,1)
    star = star.split('')
    // console.log("first",sample , star, sample.indexOf(star),i)
    for(var j = 0; j < sample.length; j++ ){
            store = sample[j]
            store = store.split('')
// main function
for(var k = 0; k < star.length; k++){
      for(var l = 0; l < store.length; l++){
            // console.log(star[k],k,store[l],l,counting)
           if(star[k] == store[l]){
                 count++
           } 
      }
}
if(count == star.length){
      output.push([star.join(""),store.join("")])
// console.log(true,star,store,count)
}
count = 0;
// console.log(star,i,store,j)
store = store.join('')
}
star = star.join('')
sample.splice(i,0,star)
star = ""
// console.log("second",sample)
}
console.log(output)