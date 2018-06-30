// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var height = $('inputHeight').val();
  var width = $('inputWeight').val();
  
  while(var i = 1; i <= height; i++)
  {
      $('table').append('<tr></tr>');
      
      for(var j = 1; j <= width; j++)
      {
        $('tr:last').append('<td></td>');
      }
  }
  
  // Your code goes here!

}
