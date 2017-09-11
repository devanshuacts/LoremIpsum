    
function wrdcnt(){ 
    var paragph1 = document.getElementById("para1")
    var paragph2 = document.getElementById("para2")
    var count1 = 0
    var count2 = 0
    var output1 = document.getElementById("out1")
    var output2 = document.getElementById("out2")    
    count1 = count1 + paragph1.innerText.split(" ").length
    count2 = count2 + paragph2.innerText.split(" ").length   
    output1.innerText = count1
    output2.innerText = count2

    //document.getElementById('out1').textContent = "10"
}