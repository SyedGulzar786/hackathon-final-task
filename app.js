var sample = ["bat", "tap", "cat","tab", "pat"];
var star = "";
var store = "";
for(var i = 0; i < sample.length; i++ ){
    star += sample.splice(i,1)
    // console.log("first",sample , star, sample.indexOf(star),i)
    star = star.split('')
    for(var j = 0; j < sample.length; j++ ){
            store = sample[j]
            store = store.split('')

console.log(star,store)
store = store.join('')
}
star = star.join('')
sample.splice(i,0,star)
star = ""
// console.log("second",sample)
        }
        
       
    
// rough work:

// var text = ["app"]
// var text = ["bat", "tap", "cat","tab", "pat"];
// for(var i = 0 ; i < text.length; i++){
//     console.log(text.slice(1,2))
// }
// // console.log(text);

// // 0,1 \ 1,2

// sbse pehle hmmein do values nikaal ni hongi take hm aikse dusri mattch krwaskeihn thhrough nested loop
// yhan do value arhi hain aik star me aur dusri store me
// star me aik aik krke specific values ko turn by turn nikaal kr unhe store krawaya jarha hai through !! sample.splice(i,1) !!
// store me aik aik krke specific values ko turn by turn nikaal kr unhe store krawaya jarha hai through !! sample[j] !!
// phr split ki mdd se un specific values ko aik array me convert kya jarha hai take hm dono ko through nested loop chechhk krwaskein


 