document.getElementById('registerBtn').addEventListener('click', function(){
    if (!document.getElementById('Username').value){
        alert("Username harus diisi");
    } else if (!document.getElementById('Password').value){
        alert("Password harus diisi");
    } else if (document.getElementById('Password').value != document.getElementById('ConfirmationPassword').value){
        alert("Confirm password harus sama dengan password");
    } else if (!document.getElementById('FullName').value){
        alert("Fullname harus diisi");
    } else if(!document.getElementById('selectGender').value){
        alert("Gender harus diisi");
    } else if(!document.getElementById('Email').value){
        alert("Email harus diisi");
    } else if(!(document.getElementById('Email').value).includes("@") || !(document.getElementById('Email').value).endsWith(".com")){
        alert("Format email salah");
    } else if(document.getElementById('Age').value < 18){
        alert("Umur minimal 18 tahun");
    } else if (!document.getElementById('checkbox').checked){
        alert("anda harus setuju dengan terms and condition untuk melanjutkan")
    } else {
        alert("Success");
    }
});