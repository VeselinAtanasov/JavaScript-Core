function fillFormImproved(username, email, phone, data) {
    function rpl(match, group1) { //
        //console.log(arguments) // checking taht all params are passed to this function, despite the fact that are not passed directly to the function
        // and the order of the params in arguments are always the same -> first is the match and after that are all groups
        // usually the whole set of params is : rpl(match, p1,p2,index,text) ->  the whole match, all defined groups , index, and the whole text
        switch (group1) {
            case "!":
                return username;
            case"@":
                return email;
            case"+":
                return phone;
        }
    }


        data = data.replace(/<([!@+])[a-zA-Z]+([!@+])>/g, rpl); //here when we calling the function we are not passing the params reason:
                                                                //in this case function replace takes all params from the regex and sends them to the rpl function ,
                                                                // that's why it is not needed to pass params
        console.log(data);

}

fillFormImproved('pit', 'pit@pit.com', '032746',
    'I am <!user!>, my email is <@email@>, my phone is <+p+>.')