// Select color input
// Select size input
var height;
var width;
var color;
 
$('sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('inputHeight').val();
    width = $('inputWeight').val();  
    makeGrid(height, width);
});
$('td').click(function addColor() 
              {
 var color = $('colorPicker').val();
 if(color.attr('style'))
 {
  color.removeAtrr('style');
 }
 else{
  color.attr('style', 'background-color:' + color);
 }
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
