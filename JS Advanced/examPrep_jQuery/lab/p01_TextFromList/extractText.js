
function extractText() {
    let allLis=$('#items').find('li');
  //  $('#result').append(allLis.toArray().map(e => e.textContent).join(', '));
    let res =[];
    allLis.each((index,element) => res.push(element.textContent ))
    $('#result').append(res.join(', '))

}