//関数作成
function gameStart(){
//入力要素の取得
    let inputFizzBuzz=document.getElementById("inputFizzBuzz");
    
    //FizzBuzzの処理　3で割り切れるFizz 5で割り切れるBuzz 3と5で割り切れるFizzBuzz
    
    for(let i=1;i<=inputFizzBuzz;i++){
    if(i/3===0){
        console.log("Fizz!");
    }else if(i/5===0){
        console.log("Buzz!");
    }else if(i/15===0){
        console.log("FizzBuzz!");
    }else{
        console.log(i);
    } 
    }

    let FizzBuzz=document.createElement("li");
    FizzBuzz.innerHTML=gameStart().value

    document.getElementById("result").appendChild(FizzBuzz);


}

    
    


