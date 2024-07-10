

function registerData()
{
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const mob = document.getElementById("mobilePh").value;
    const em = document.getElementById("emailAd").value;
    const pass = document.getElementById("password").value;
    const cpass = document.getElementById("confirmPassword").value;
 
    if (pass !== cpass)
    {
        alert("Passwords don't match :(");
        return;
    }

    const atConnect = {
        fName: firstName,
        lName: lastName,
        mob: mobilePh,
        em: emailAd,
        pass: password
        
    };
    alert ("Creating new user account.....") 

}

function existingUser(){
    alert("Taking you to the Log in page.....")
}

