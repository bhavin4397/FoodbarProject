function fun(event){
    event.preventDefault();
}

function checkTest(event){
    let data=event.target.value;
    console.log(data)
    
    let flag=checkEmail(data);
    let error=document.getElementById("error")
    if(!flag){
        error.innerText="Please enter valid email address"
    }else{
        error.innerText=""
    }
}

function checkData(event){
    event.preventDefault()
    let data=document.getElementById('floatingInput').value
    let flag=checkEmail(data)
    if(flag){
        window.location.href="Subcribe.html"
    }
    
}

function checkEmail(input){
    let pattern = /[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,}$/
    let flag=pattern.test(input);
    return flag
}