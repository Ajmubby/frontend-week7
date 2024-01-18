function addFive(score) {
    let finalScore = 0
    if (score >= 5 && score <= 69 && score % 5 >=3){
        finalScore = score + 5
    }

    else{
        finalScore = score
    }

    return finalScore

}


function methodTwo(score){
    let scoreStr = String(score)
    let finalScore = 0
    if ((scoreStr[1]=='8' || scoreStr[1]=='9') && score < 70 && score > 37){
        finalScore = score + 5
    }
    else{
        finalScore = score
    }

    return finalScore
}




function result(english, math){
    let avg = (english + math)/2
    let status =''

    if (avg >= 50) {
        status = `congratulations! Your Score is ${avg.toFixed(1)} meaning you passed`
    }

    else{
        status = `Sorry, Your score is ${avg.toFixed(1)} therefore not good enough, Try again`
    }

    return status

}

function grade(score){
    let gradval =''
    if (score >= 70){
        gradval = 'A'
    }
    else if (score >= 60){
        gradval = 'B'
        
    }
    else if (score >= 50){
        gradval = 'c'
    }
    else if (score >= 40){
        gradval =  'P'
    }
    else {
        gradval = 'FF'
    }

    return gradval
}

