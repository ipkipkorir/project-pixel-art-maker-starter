// Select color input
// Select size input
var height = $('inputHeight').val();
var width = $('inputWeight').val();  
var color = $('colorPicker').val();
 
$('sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(n, m) 
{ 
  while(var i = 1; i <= n; i++)
  {
      $('#pixelCanvas').append('<tr></tr>');
      for(var j = 1; j <= m; j++)
      {
        $('tr:last').append('<td></td>');
      }
  }
}

