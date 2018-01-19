function calendar(arr) {
    let day = arr[0];
    let month = arr[1];
    let year = arr[2];

    let calendar=new Date(year,month-1,day);
    let lastMonth=new Date(year,month-1,0);
    let oldDay = lastMonth.getDate()-(lastMonth.getDate()-day-1);

    console.log(calendar.getDay());

    //   let html="<table>\n";
 //   html+="  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
 //   html+='  <tr>';
 //   for(let i=0;i<7;i++){
 //   html+=`<td class=\"prev-month\">${oldDay+i}</td>`
 //   }
 //   html+="</tr>\n";
 // //  html+=`  <tr><td class=\"prev-month\">${oldDay}</td><td class=\"prev-month\">${oldDay+1}</td><td class=\"prev-month\">27</td><td class=\"prev-month\">28</td><td class=\"prev-month\">29</td><td class=\"prev-month\">30</td><td>1</td></tr>\n`;
 //
 //
 //   return html;
}

 calendar([24,
    12,
    2012
])