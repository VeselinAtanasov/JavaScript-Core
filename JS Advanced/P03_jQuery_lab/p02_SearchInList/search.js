
    function search(){
        let input = $('#searchText').val();
        let matched= $(`ul#towns li:contains(${input})`);
        matched.css('font-weight', 'bold');
        $(`ul#towns li:not(:contains(${input}))`).css('font-weight','')
        $('#result').text(`${matched.length} matches found.`)
    }
    // function search() {
    //     let searchText = $('#searchText').val();
    //     let matches = 0;
    //     $("#towns li").each((index, item) => {
    //         if (item.textContent.includes(searchText)) {
    //             $(item).css("font-weight", "bold");
    //             matches++;
    //         } else
    //             $(item).css("font-weight", "");
    //     });
    //     $('#result').text(matches + " matches found.");
    // }
