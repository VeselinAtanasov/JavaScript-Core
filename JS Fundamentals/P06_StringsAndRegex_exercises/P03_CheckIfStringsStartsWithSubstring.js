
function isStartsWith(mainString,subString){
    "use strict";
    let pattern= new RegExp("^"+subString);

    return pattern.test(mainString);

}