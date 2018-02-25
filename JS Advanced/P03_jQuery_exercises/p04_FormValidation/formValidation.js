function validate() {
    let isChecked;
    let changeBtn = $('#company').on('change', changed);
    let submitBtn = $('#submit').on('click', clicked);

    //check submitBtn
    function clicked(event) {
        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
        let passwordPattern = /^[a-zA-Z0-9_]{5,15}$/;
        let emailPattern = /^.+@.*\..*$/;

        let username=$('input#username');
        let password=$('input#password');
        let rePassword=$('input#confirm-password');
        let email=$('input#email');
        let companyInfo;
        if(isChecked>0){
            companyInfo=$('input#companyNumber')
        }

        event.preventDefault();
        let first = checkUsername(usernamePattern,username);
        let second= checkPassword(passwordPattern,password,rePassword);
        let third =checkEmail(emailPattern,email);
        let checker=false;
        let fourth=false;
        if(isChecked>0){
            checker =true;
            companyInfo=$('input#companyNumber');
            fourth= checkCompanyInfo(companyInfo)
        }
        if(first && second && third){
            if(checker  && fourth){
                $('#valid').css('display','block');
            }else if(!checker){
                $('#valid').css('display','block');
            }


        }
        event.preventDefault()
    }

    //checkCompanyInfo
    function checkCompanyInfo (companyInfo){
        let value =Number(companyInfo.val());
        if(value>=1000  && value<=9999){
            companyInfo.css('border-color', 'none');
            return true;
        }else{
            companyInfo.css('border-color', 'red');
            return false;
        }
    }

    //checkEmail:
    function checkEmail(patt,email){
        if(patt.test(email.val())){
            email.css('border-color', 'none');
            return true;
        }else{
            email.css('border-color', 'red');
            return false;
        }
    }

    //checkPasswords;
    function checkPassword(patt, password, repossword){
        if(password.val()!==repossword.val()){
            password.css('border-color','red');
            repossword.css('border-color','red');
            return false;
        }else{
            if(patt.test(password.val())){
                password.css('border-color', 'none');
                repossword.css('border-color', 'none');
                return true;
            }else{
                password.css('border-color', 'red');
                repossword.css('border-color', 'red')
                return false;
            }
        }

    }

    //check username;
    function checkUsername(patt,username){
        if(patt.test(username.val())){
            username.css('border-color','none');
            return true;
        }else{
            username.css('border-color','red');
            return false ;
        }
    }
    //check the checkBox
    function changed() {
        isChecked = $('#company:checked').length
        let companyInfo = $('fieldset#companyInfo')
        if (isChecked > 0) {
            // companyInfo.show()
            companyInfo.css("display", "block")
        } else {
            companyInfo.css("display", "none")
            //  companyInfo.hide()
        }
    }
}
