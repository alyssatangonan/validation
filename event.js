function validate(){
    var type= document.getElementById('type').value;
    var title= document.getElementById('title').value;
    var date=document.getElementById('date').value;
    var to=document.getElementById('to').value;
    var post=document.getElementById('post').value;
    
    if(type==""&&title==""&&date==""&&to==""&&post==""){
        alert("All fields required")
        return false;
    }else if (type==""){
        alert("Please Enter Event Type")
        return false;
    }else if (title==""){
        alert("Please Enter Title")
        return false;
    }else if (date==""){
        alert("Please Enter Event Date")
        return false;
    }else if (to==""){
        alert("Please Enter Event Date")
        return false;
    }else if (post==""){
        alert("Please Enter Posting Date")
        return false;
    }else if(date>to||date>post||to>post){
        alert("Invalid Date")
        return false;
    }else{
       alert("You have successfully submitted your entry!")
        return true;
    }
}

