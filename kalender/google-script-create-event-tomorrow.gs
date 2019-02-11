function doGet(request) {
  var answer = "sjj.3.2 addtomorrow";
  answer = createAllDayEventTomorrow(); 
  return ContentService.createTextOutput(answer);
}

function createAllDayEventTomorrow() {
  var now = new Date();
  var response = CalendarApp.getDefaultCalendar().createAllDayEvent('raumname', new Date(now.getTime()+(1000*60*60*24)));
}
