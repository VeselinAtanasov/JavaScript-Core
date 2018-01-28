
function extractUserName(arr) {
    'uses strict'
    let users=[];

    for (let key in arr) {
        let email=arr[key].split("@");
        let username=email[0];
        let domains=email[1].split(".");
        let result=username+".";
        for (let key in domains) {
            result+=domains[key][0];
        }
        users.push(result);

    }

    console.log(users.join((", ")));
}
extractUserName(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])