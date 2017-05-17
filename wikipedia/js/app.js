$(document).ready(function() {
  $.ajax({
    url:
    "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=rome",
    dataType: "jsonp",
    success: function(response) {
       console.log(response);
     },
   error: function () {
    alert("Error retrieving search results, please refresh the page");
   }
  });
  function showResponse(response) {
    
  }
});
