// Select color input
// Select size input
  var color = $('colorPicker').val();
  var height = $('inputHeight').val();
  var width = $('inputWeight').val();
  
// When size is submitted by the user, call makeGrid()
$('sizePicker').submit();

function makeGrid() {

  while(var i = 1; i <= height; i++)
  {
      $('#pixelCanvas').append('<tr></tr>');
      for(var j = 1; j <= width; j++)
      {
        $('tr:last').append('<td></td>');
      }
  }
  
  // Your code goes here!
}
