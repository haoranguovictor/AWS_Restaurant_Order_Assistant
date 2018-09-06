function ArrayIndexOf(arr, element) {
     for (var i = 0; i < arr.length; i++) {
         if (arr[i] == element) {
             return i;
         }
     }
     return -1;
 }
function GetTds() {
     var tbl = document.getElementById("tblMain");
     var tds = tbl.getElementsByTagName("td");
     return tds;
 }
function InitEvent() {
    var tds=GetTds();
    for (var i = 0; i < tds.length; i++) {
        var td = tds[i];
        td.onmouseover = TdOnclick;
        td.onclick = FinalScore;
        td.style.cursor = "pointer";
     }
 }
function TdOnclick() {
     var tds = GetTds();
     var index = ArrayIndexOf(tds, this);
     for (var i = 0; i <=index; i++) {
         var td = tds[i];
         td.innerHTML = "&#9733";
     }
     for (var j = index + 1; j < tds.length; j++) {
         var td = tds[j];
         td.innerHTML = "&#9734";
     }
 }
function FinalScore(){
     var tds = GetTds();
     var index = ArrayIndexOf(tds, this);
     var score = index + 1;
     $('#score').empty();
     $("#score").append(score);
     alert("We've received your stars!");
}