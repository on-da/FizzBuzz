

//gameStart関数の作成
function gameStart(){
    //上限値を生成
    let randomLimit=Math.floor(Math.random()*(100-1))+1;
    //空の配列を作成
    let fizzbuzzNumber=[];

//結果をHTMLに反映させる
let fizzbuzzResult=document.createElement("li");
fizzbuzzResult.innerHTML=fizzbuzzNumber.join("\n");

document.getElementById("results").appendChild(fizzbuzzResult);
    
        
   //for if文でFizzBuzzの処理開始
   for(let i=1;i<=randomLimit;i++){
       if(i%3==0 && i%5==00){
       console.log("fizzbuzz");
       }else if(i%3==0){
        console.log("fizz");    
       }else if(i%5==0){
        console.log("buzz");
       }else{
        console.log(i);
   }
};
    return fizzbuzzNumber;

};




    


