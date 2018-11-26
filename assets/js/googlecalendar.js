var calendar_id = CalendarApp.getCalendarById('Club Announcements');
var start_date = new Date();
var query = Calendar.Events.list(calendar_id, {timeMin: start_date.toISOString()});
var events = query.items;
