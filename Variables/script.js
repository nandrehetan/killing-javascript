let wc='welcome message'
console.log(wc)

let a=5
let b=6
let c=a+b
console.log(c)

c=b+2
console.log(c)

let cnt=0
// // if(document.onclick('#b1')){
// //     cnt+=1
// // }
// document.querySelector('#b2').innerHTML='You have clicked button '+ cnt +' times'

document.querySelector('#b1').addEventListener('click', () => {
    cnt += 1; 
    document.querySelector('#b2').innerHTML = `You have clicked button ${cnt} times`;
});
