

let number = [ 12,9,15,3,10]

console.log(number)

function assending (value){
        let x ;
        let y ;
    for(var i= 0;i<value.length;i++){

        for(var j = i+1; j<value.length;j++){
            
            if(value[i]>value[j]){
                x = value[j]
                y = value[i]
                value[i]=x
                value[j]=y
            }
        }
        
    }

    return value
    
}

console.log(assending(number))