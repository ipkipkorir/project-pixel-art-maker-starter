// Select color input
// Select size input
var height;
var width;
var color;
 
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();  
    makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(n, m) 
{ 
  while(n > 0)
  {
      $('#pixelCanvas').append('<tr></tr>');
      for(var i = 1; i <= m; i++)
      {
        $('tr:last').append('<td></td>');
      }
   n--;
  }
 
 //Adding color to cells
 $('td').click(function addColor() {
 color = $('#colorPicker').val();
 if( $(this).attr('style')) {
  $(this).removeAttr('style');
 }
 else{
  $(this).attr('style', 'background-color:' + color);
 }
});
}
