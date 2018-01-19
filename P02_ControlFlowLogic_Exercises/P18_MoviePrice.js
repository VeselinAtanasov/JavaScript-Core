function ticketPrice(arr){
    let movieName=arr[0].toLowerCase();
    let day=arr[1].toLowerCase();
    let result="";

    switch(day){
        case "monday":
            if(movieName=="the godfather"){
                result=12;
            }else if(movieName=="Schindler's List".toLowerCase()){
                result=8.5;
            }else if(movieName=="Casablanca".toLowerCase()){
                result=8;
            }else if(movieName=="The Wizard of Oz".toLowerCase()){
                result=10;
            }else {
                result="error";
            }
            break;
        case "tuesday":
            if(movieName=="The Godfather".toLowerCase()){
                result=10;
            }else if(movieName=="Schindler's List".toLowerCase()){
                result=8.5;
            }else if(movieName=="Casablanca".toLowerCase()){
                result=8;
            }else if(movieName=="The Wizard of Oz".toLowerCase()){
                result=10;
            }else {
                result="error";
            }
            break;
        case "wednesday":
            if(movieName=="The Godfather".toLowerCase()){
                result=15;
            }else if(movieName=="Schindler's List".toLowerCase()){
                result=8.5;
            }else if(movieName=="Casablanca".toLowerCase()){
                result=8;
            }else if(movieName=="The Wizard of Oz".toLowerCase()){
                result=10;
            }else {
                result="error";
            }
            break;
        case "thursday":
            if(movieName=="The Godfather".toLowerCase()){
                result=12.5;
            }else if(movieName=="Schindler's List".toLowerCase()){
                result=8.5;
            }else if(movieName=="Casablanca".toLowerCase()){
                result=8;
            }else if(movieName=="The Wizard of Oz".toLowerCase()){
                result=10;
            }else {
                result="error";
            }
            break;
        case "friday":
            if(movieName=="The Godfather".toLowerCase()){
                result=15;
            }else if(movieName=="Schindler's List".toLowerCase()){
                result=8.5;
            }else if(movieName=="Casablanca".toLowerCase()){
                result=8;
            }else if(movieName=="The Wizard of Oz".toLowerCase()){
                result=10;
            }else {
                result="error";
            }
            break;
        case "saturday":
            if(movieName=="The Godfather".toLowerCase()){
                result=25;
            }else if(movieName=="Schindler's List".toLowerCase()){
                result=15;
            }else if(movieName=="Casablanca".toLowerCase()){
                result=10;
            }else if(movieName=="The Wizard of Oz".toLowerCase()){
                result=15;
            }else {
                result="error";
            }
            break;
        case "sunday":
            if(movieName=="The Godfather".toLowerCase()){
                result=30;
            }else if(movieName=="Schindler's List".toLowerCase()){
                result=15;
            }else if(movieName=="Casablanca".toLowerCase()){
                result=10;
            }else if(movieName=="The Wizard of Oz".toLowerCase()){
                result=15;
            }else {
                result="error";
            }
            break;
        default: result="error";
            break;
    }
    console.log(result);

}
