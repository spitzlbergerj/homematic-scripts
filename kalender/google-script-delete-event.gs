function doGet(request) {
  var answer = "sjj.3.2 deletetoday";
  answer = deleteEventToday(); 
  return ContentService.createTextOutput(answer);
}

function deleteEventToday() {
  var today = new Date();
  var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: 'raumname'});

  ContentService.createTextOutput(events.length);
  
  for(var i = 0; i < events.length;i++){
    ContentService.createTextOutput(events[i].getDescription());
    events[i].deleteEvent();
  }

  return events.length+" raumname events deleted";
}

