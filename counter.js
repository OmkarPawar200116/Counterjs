let number = 0

function negative(){
    number -= 1
    document.querySelector('.num').textContent = number
    console.log(number);
    if(number<0){
        document.querySelector('.num').style.color = "red"
    }else if(number == 0){
        document.querySelector('.num').style.color = "black"
    }
}

function positive(){
    number += 1
    document.querySelector('.num').textContent = number
    console.log(number);
    if(number>0){
        document.querySelector('.num').style.color = "green"
    }else if(number == 0){
        document.querySelector('.num').style.color = "black"
    }
}

function reset(){
    number = 0
    document.querySelector('.num').textContent = number
    document.querySelector('.num').style.color = "black"
    console.log(number);
    
}


