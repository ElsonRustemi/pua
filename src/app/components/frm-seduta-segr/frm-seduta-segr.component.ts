import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from 'src/app/services/eventservice.service';
import { FullCalendar } from 'primeng/fullcalendar';
import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'app-frm-seduta-segr',
  templateUrl: './frm-seduta-segr.component.html',
  styleUrls: ['./frm-seduta-segr.component.css']
})
export class FrmSedutaSegrComponent implements OnInit {

  events: any[];

  options: any;

  @ViewChild('calendar') private calendar: FullCalendar;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {

    this.eventService.getEvents().then(events => {this.events = events;});

        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: '2017-02-01',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true
        };


  }

}
