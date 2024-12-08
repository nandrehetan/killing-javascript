function hetu(age){
    console.log(`Your age is ${age}`)
}

let age=21
hetu(age)
age=15
hetu(age)
age=76
hetu(age)

function isodd( n){
    if(n%2==0){
        console.log(n+' is even')
    }else{
        console.log(n+' is odd')
    }
}
isodd(56)
isodd(75)

function larger(num1,num2){
    if(num1>num2){
        console.log(num1+' is larger than '+num2)
    }else{
        console.log(num2+' is larger than '+num1)
    }
}
larger(4,5)
larger(7,6)
