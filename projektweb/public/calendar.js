import { Calendar } from '@fullcalendar/core';

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Zajęcia (WOLNE 20/20)',
                start: '2023-05-02T18:00:00', 
                end: '2023-05-02T20:00:00',
            },
            {
                title: 'Zajęcia (WOLNE 20/20)',
                start: '2023-05-04T20:00:00', 
                end: '2023-05-04T22:00:00',
            },
        ]
    });
    calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
  
    calendar.render();
  });
  