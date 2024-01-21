function nest(score){
    let gradval =''
    if (score <= 100){
    
        if (score >= 70){
            gradval = 'A'
        }
        else if (score >= 60){
            gradval = 'B'
            
        }
        else if (score >= 50){
            gradval = 'C'
        }
        else if (score >= 40){
            gradval =  'P'
        }
        else {
            gradval = 'FF'
        }
    }
    else{
        gradval = 'Invalid score'
    }
    return gradval

    
}

