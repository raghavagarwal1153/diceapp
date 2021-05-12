
var total = 0;
var arr=["11.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
var arr1=arr.map(Number);

function mydice() {
    if(total<=100)
    {
    var num = getrand();
    total += num;
    console.log("total=" + total);
    document.getElementById("total").innerHTML = total+"";
    document.getElementById("btn").disabled = true;
    document.getElementById("btn2").disabled=false;
    document.getElementById("you").src=arr[num-1];
}
    
    else 
    alert("exit");
}

var total1 = 0;
function mydice2() {

    if(total<=100){

    var num1 = getrand();
    total1 += num1;
    console.log("total1=" + total1);
    document.getElementById("total1").innerHTML = total1+"";
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn").disabled = false;
    document.getElementById("you1").src=arr[num1-1];}
    else
    alert("exit");
}
function getrand() {
    return Math.floor(Math.random() * 6) + 1;

}