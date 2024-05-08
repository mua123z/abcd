document.addEventListener("DOMContentLoaded", function(){
    //hàm cập nhaatk kí tự
    function a(){
        const text= document.getElementById("user-input").value
        const slkt =text.length;
        document.getElementById("slkt").innerHTML=slkt
    }
    document.getElementById("user-input").addEventListener("input", a)

    //hàm xóa kí tự
    function xoa(){
        const inputText =document.getElementById("user-input").value
        const li = document.createElement("li");
        li.textContent = inputText
        document.getElementById("in").appendChild(li)
        document.getElementById("user-input").value="";
        a();
    }
    document.getElementById("clear").addEventListener("click", xoa)
})

