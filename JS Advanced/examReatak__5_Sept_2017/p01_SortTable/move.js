function sort(colIndex, descending) {

    let table = $('#products');
    let body = table.find('tbody');
    let rows = body.find('tr').toArray();


    rows.sort((row1, row2) => comparator(row1, row2));
    $(rows).each((i, e) => $(e).appendTo(body));

    function comparator(a, b) {
        let name1 = $(a).find('td:nth-child(1)').text();
        let name2 = $(b).find('td:nth-child(1)').text();
        let value1 =$(a).find('td:nth-child(2)').text();
        let value2 =$(b).find('td:nth-child(2)').text();


        if (!descending && colIndex === 0) {
            return name1.localeCompare(name2);
        } else if (descending && colIndex === 0) {
            return name2.localeCompare(name1);
        }else if(!descending && colIndex ===1){
            return Number(value1)- Number(value2);
        }else{
            return Number(value2)- Number(value1);
        }
    }
}