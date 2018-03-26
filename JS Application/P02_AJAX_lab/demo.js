
//AJAX syntax:

function useAJAX() {
    let request = {
        url: "https://test.bg",
        method: 'GET',
        success: displayFunction,
        error: errorFunction
    };
        $.ajax(request);

   function displayFunction () {
       console.log("Display")
   }

   function errorFunction() {
       console.log("Error")
   }
}
