let students = 'mubarak marvellous kehinde ekene ayodele franca'

const arrOfStds = students.split(' ')
//remove last member from an array
arrOfStds.pop()
arrOfStds.pop()

arrOfStds.shift()
//add to the start of an array
arrOfStds.unshift('Mubarak')
//add to the end of an array
arrOfStds.push('Ayodele')

let otherstudent = ['jonah', 'dami']
let otherstudent2 =['bene', 'amin']
//add to an array
arrOfStds.push(...otherstudent)

//add to a particular index number
arrOfStds.splice(2,0, 'ayere')
arrOfStds.splice(3,0,...otherstudent2)
arrOfStds.splice(arrOfStds.indexOf('amin')+1,0, 'ayere', 'kehinde')


console.log(arrOfStds)