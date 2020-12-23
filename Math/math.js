function getRandom(){
    //Math.random() 함수 사용해보기
      let num=Math.random()*100;
       num= Math.ceil(num)*1000;
       document.querySelector("#amount").value=num;
    }
    function numbeComma(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    


window.onload=function(){
    document.querySelector("#setAmount").addEventListener("click",getRandom);

}