funtion touchNumberButton() {
    $("#phoneNumber").val(this.value);
}

$(document).ready(function(){
    //버튼의 이벤트 핸들러를 등록한다.
    $(".btnNumber").click(touchNumberButton);
});