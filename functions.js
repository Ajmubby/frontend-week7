function sayHello(name, surname){
    // let name = 'Mubby'
    alert(`Good morning  ${name}, ${surname}`)
}
sayHello('Ade', 'tola')

function addMe(a,b){
    return(a + b)  
}
console.log(addMe (4,6))

//addition function
function text(){
   let a = prompt('give a number')
   let b = prompt('give another number')
   //below is to print the result as an int instead of string. You can also use rap it in a number....
    return (a*1) + (b-0)
}
console.log(text())

//getage
function age(){
    let year = prompt('what year were you born')
    // dateconstructor
    let age = new Date().getFullYear() - year
    return `You are ${age} years old`
}
 console.log(age())

//replace the first item and return the first item in uppercase
function capitalise(firstName){
    firstName= firstName.toLowerCase()
    return firstName.replace(firstName.charAt(0), firstName.charAt(0).toUpperCase())
}
console.log(capitalise('mubby'))

//Squareroot converted to 3 decimal
function squaroot(n){
    return Math.sqrt(n).toFixed(3)*1
}
console.log(squaroot(10))

//square
function square(n){
    return (n**2)
}
console.log(square(4))



