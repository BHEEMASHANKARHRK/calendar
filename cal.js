
var $ = function (id) {
    return document.getElementById(id);
 };

window.onload = function () {
 
  $('create').onclick = myCalendar;
  $('reset').onclick = clearCalendar;
  };
function myCalendar(){

	var year = $('year').value
	
	var month = $('month').value
	
	new Calendar("cal", year, month);
}
function Calendar(id, year, month) {
 
  var elem = $('cal')
  var mon = month - 1  
  
  var d = new Date(year, mon)
  
  var table = ['<table><tr>']

  for (var i=0; i<d.getDay(); i++) {
    table.push('<td></td>')
  }
  
  while(d.getMonth() == mon) {
    table.push('<td>'+d.getDate()+'</td>')
	
    if (d.getDay() % 7 == 6) {   
      table.push('</tr><tr>')
    }
	
     d.setDate(d.getDate()+1)  
  }
  
  
  for (var i=d.getDay(); i<7; i++) {
    table.push('<td></td>')
  }
  
  table.push('</tr></table>')
  
 
  elem.innerHTML = table.join('\n')
}

function clearCalendar(){

		$('year').value='';
	
	$('month').value='';
	
	
	$('cal').innerHTML='';
}


