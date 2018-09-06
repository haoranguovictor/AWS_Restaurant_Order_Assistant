$(function(){
  /***************************************quantity 1********************************/
  var inputNum1 = $("#input-num1").attr("value");
  var numChange1 = parseInt(inputNum1);
  $("#num-add1").bind("click",function(){
    if ( 1 <= numChange1 && numChange1 < 99 ) { //99表示剩余数量
        $(this).removeClass("disabled");
        $("#num-reduce1").removeClass("disabled").addClass("pressed");
        numChange1 = numChange1 + 1;
        $("#input-num1").attr("value",numChange1);
      }
      else if (numChange1 >= 99 ) {
        $(this).addClass("disabled").removeClass("pressed");
      }
  });
  $("#num-reduce1").bind("click",function(){
    if ( 1 < numChange1 && numChange1 <= 99 ) {
        $(this).removeClass("disabled").addClass("pressed");
        $("#num-add1").removeClass("disabled").addClass("pressed");
        numChange1 = numChange1 - 1;
        $("#input-num1").attr("value",numChange1);
      }
      else if ( numChange1 <= 1 ) {
          $(this).removeClass("pressed").addClass("disabled");
      }
  });
  /******************************************Quantity 2**********************************/
  var inputNum2 = $("#input-num2").attr("value");
  var numChange2 = parseInt(inputNum2);
  $("#num-add2").bind("click",function(){
    if ( 1 <= numChange2 && numChange2 < 99 ) { //99表示剩余数量
        $(this).removeClass("disabled");
        $("#num-reduce2").removeClass("disabled").addClass("pressed");
        numChange2 = numChange2 + 1;
        $("#input-num2").attr("value",numChange2);
      }
      else if (numChange2 >= 99 ) {
        $(this).addClass("disabled").removeClass("pressed");
      }
  });
  $("#num-reduce2").bind("click",function(){
    if ( 1 < numChange2 && numChange2 <= 99 ) {
        $(this).removeClass("disabled").addClass("pressed");
        $("#num-add2").removeClass("disabled").addClass("pressed");
        numChange2 = numChange2 - 1;
        $("#input-num2").attr("value",numChange2);
      }
      else if ( numChange2 <= 1 ) {
          $(this).removeClass("pressed").addClass("disabled");
      }
  });
  /******************************************Quantity 3**********************************/
  var inputNum3 = $("#input-num3").attr("value");
  var numChange3 = parseInt(inputNum3);
  $("#num-add3").bind("click",function(){
    console.log(numChange3);
    if ( 1 <= numChange3 && numChange3 < 99 ) { //99表示剩余数量
        $(this).removeClass("disabled");
        $("#num-reduce3").removeClass("disabled").addClass("pressed");
        numChange3 = numChange3 + 1;
        $("#input-num3").attr("value",numChange3);
      }
      else if (numChange3 >= 99 ) {
        $(this).addClass("disabled").removeClass("pressed");
      }
  });
  $("#num-reduce3").bind("click",function(){
    console.log("reduce3");
    if ( 1 < numChange3 && numChange3 <= 99 ) {
        $(this).removeClass("disabled").addClass("pressed");
        $("#num-add3").removeClass("disabled").addClass("pressed");
        numChange3 = numChange3 - 1;
        $("#input-num3").attr("value",numChange3);
      }
      else if ( numChange3 <= 1 ) {
          $(this).removeClass("pressed").addClass("disabled");
      }
  });
   /******************************************Quantity 4**********************************/
 var inputNum4 = $("#input-num4").attr("value");
  var numChange4 = parseInt(inputNum4);
  $("#num-add4").bind("click",function(){
    if ( 1 <= numChange4 && numChange4 < 99 ) { //99表示剩余数量
        $(this).removeClass("disabled");
        $("#num-reduce4").removeClass("disabled").addClass("pressed");
        numChange4= numChange4 + 1;
        $("#input-num4").attr("value",numChange4);
      }
      else if (numChange4 >= 99 ) {
        $(this).addClass("disabled").removeClass("pressed");
      }
  });
  $("#num-reduce4").bind("click",function(){
    if ( 1 < numChange4 && numChange4 <= 99 ) {
        $(this).removeClass("disabled").addClass("pressed");
        $("#num-add4").removeClass("disabled").addClass("pressed");
        numChange4 = numChange4 - 1;
        $("#input-num4").attr("value",numChange4);
      }
      else if ( numChange4 <= 1 ) {
          $(this).removeClass("pressed").addClass("disabled");
      }
  });
/******************************************Quantity 5**********************************/
  var inputNum5 = $("#input-num5").attr("value");
  var numChange5 = parseInt(inputNum5);
  $("#num-add5").bind("click",function(){
    if ( 1 <= numChange5 && numChange5 < 99 ) { //99表示剩余数量
        $(this).removeClass("disabled");
        $("#num-reduce5").removeClass("disabled").addClass("pressed");
        numChange5= numChange5 + 1;
        $("#input-num5").attr("value",numChange5);
      }
      else if (numChange5 >= 99 ) {
        $(this).addClass("disabled").removeClass("pressed");
      }
  });
  $("#num-reduce5").bind("click",function(){
    if ( 1 < numChange5 && numChange5 <= 99 ) {
        $(this).removeClass("disabled").addClass("pressed");
        $("#num-add5").removeClass("disabled").addClass("pressed");
        numChange5 = numChange5 - 1;
        $("#input-num5").attr("value",numChange5);
      }
      else if ( numChange5 <= 1 ) {
          $(this).removeClass("pressed").addClass("disabled");
      }
  });
   /******************************************Quantity 6**********************************/
  var inputNum6 = $("#input-num6").attr("value");
  var numChange6 = parseInt(inputNum6);
  $("#num-add6").bind("click",function(){
    if ( 1 <= numChange6 && numChange6 < 99 ) { //99表示剩余数量
        $(this).removeClass("disabled");
        $("#num-reduce6").removeClass("disabled").addClass("pressed");
        numChange6= numChange6 + 1;
        $("#input-num6").attr("value",numChange6);
      }
      else if (numChange6 >= 99 ) {
        $(this).addClass("disabled").removeClass("pressed");
      }
  });
  $("#num-reduce6").bind("click",function(){
    if ( 1 < numChange6 && numChange6 <= 99 ) {
        $(this).removeClass("disabled").addClass("pressed");
        $("#num-add6").removeClass("disabled").addClass("pressed");
        numChange6 = numChange6 - 1;
        $("#input-num6").attr("value",numChange6);
      }
      else if ( numChange6 <= 1 ) {
          $(this).removeClass("pressed").addClass("disabled");
      }
  });
});