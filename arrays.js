let students = 'mubarak marvellous kehinde ekene ayodele franca'


const arrOfStds = students.split(' ')
//remove last member from an array
arrOfStds.pop()
arrOfStds.pop()

arrOfStds.shift()
//insert new elements at the start of an array
arrOfStds.unshift('Mubarak')
//insert new elements at the end of an array
arrOfStds.push('Ayodele')

let otherstudent = ['jonah', 'dami']
let otherstudent2 =['bene', 'amin']
//insert new elements to an array
arrOfStds.push(...otherstudent)

//insert new element at a particular index number / remove an element in the selected index number
arrOfStds.splice(2,0, 'ayere')
arrOfStds.splice(3,0, ...otherstudent2)
arrOfStds.splice(arrOfStds.indexOf('amin')+1,0, 'ayere', 'kehinde')
arrOfStds.find()


console.log(arrOfStds)