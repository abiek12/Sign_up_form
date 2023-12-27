let toggleBtn=document.querySelector(".toggle")
let passwordEl=document.getElementById("pwd")

toggleBtn.addEventListener("click",function(){
    if(passwordEl.type==="password"){
        passwordEl.type="text"
        toggleBtn.classList.toggle("showing")
    } else{
        passwordEl.type="password"
        toggleBtn.classList.toggle("showing")
    }
})

// $(document).ready(function(){
//     $("#signup-form").validate({
//         rules:{
//             userName:{
//                 required:true
//             },
//             email:{
//                 required:true,
//                 email:true
//             },
//             pwd1:{
//                 required:true,
//                 minlength:8
//             },
//             pwd2:{
//                 required:true,
//                 equalTo:"pwd1"
//             }
//         }
//     })

// })