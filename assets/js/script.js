
// =====Formvaladation=====

function btnClick(){
    let btn
    var Name=document.getElementById("name").value.trim()
    var mail=document.getElementById("email").value.trim()
    var Phone=document.getElementById('phone').value.trim()
    var message=document.getElementById("message").value.trim()

    if(Name===""||mail===""||Phone===""||message==="")
    {
        alert("Please fill all fields")
        btn=false
    }else if(!/^([a-zA-Z0-9\_.]+)@([a-zA-Z0-9]+).([a-z]+).([a-z]+)?$/.test(mail)){
        alert("Please re-check at email")
        btn=false
     }else if(!/^\d+$/.test(Phone)){
        alert("Please enter your phone number correctly")
        btn=false
     }

    return btn;

}
