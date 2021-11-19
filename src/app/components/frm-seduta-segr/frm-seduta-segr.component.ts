import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from 'src/app/services/eventservice.service';
import { FullCalendar } from 'primeng/fullcalendar';
import { Calendar } from '@fullcalendar/core';
import frLocale from '@fullcalendar/core/locales/fr';
import itLocale from '@fullcalendar/core/locales/it';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import DateClicking from '@fullcalendar/interaction/interactions/DateClicking';
import DateSelecting from '@fullcalendar/interaction/interactions/DateSelecting';
import { title } from 'process';

// export interface IHash {
//   [date: string] : string;
// } 


@Component({
  selector: 'app-frm-seduta-segr',
  templateUrl: './frm-seduta-segr.component.html',
  styleUrls: ['./frm-seduta-segr.component.css']
})
export class FrmSedutaSegrComponent implements OnInit {

  date = new Date();

  events = [];

  options: any;
  locale = [frLocale, itLocale];

  appointment = "";
  dateStart = "";
  dateEnd = "";

  dateStartFromButton = "";

  displayAddAppointment: boolean;


  display: boolean = false;

  @ViewChild('calendar') private calendar: FullCalendar;
  httpClient: any;

  constructor(private eventService: EventService, private fb: FormBuilder) { }


  ngOnInit(): void {

    this.events = [...this.events, 
    // { title: 'event 1', start: '2021-11-16', end: '2021-11-18', color: ''},
    { title: 'event 2', date: '2021-11-16T14:30:00+00:00', color: '' },
    { title: 'event 3', date: '2021-11-16T15:30:00+00:00', color: '' },
    { title: 'event 4', date: '2021-11-16T16:30:00+00:00', color: '' },
    { title: 'event 2', date: '2021-11-17T14:30:00+00:00', color: '' },
    { title: 'event 3', date: '2021-11-17T15:30:00+00:00', color: '' },
    { title: 'event 4', date: '2021-11-17T16:30:00+00:00', color: '' },

    { title: 'event 2', date: '2021-11-20T14:30:00+00:00', color: '' },
    { title: 'event 3', date: '2021-11-20T15:30:00+00:00', color: '' },
    { title: 'event 4', date: '2021-11-20T16:30:00+00:00', color: '' },
    ]

    // this.events.map((event) => {
    //   let totalDate = new Date(event.date);
    //   console.log(totalDate);
      
      
    //   let totalNumberOfDates = event.length;
    //   console.log(totalNumberOfDates);
      
    //   event['color'] = totalNumberOfDates > 0 &&  totalNumberOfDates <= 5 ? 'red' : (totalNumberOfDates > 5 && totalNumberOfDates <= 8 ? 'yellow' : 'blue');

    // })


    let datesWithEventOnThem = this.events.map((event) => {
      let dateEvents = new Date(event.date).getDate();
      

      console.log(dateEvents);
      

      // event['color'] = dateEvents > 0 &&  dateEvents <= 5 ? 'red' : (dateEvents > 5 && dateEvents <= 8 ? 'yellow' : 'blue');


      // dateEvents.push()
      return dateEvents;      
    })

    const counts = {};
    datesWithEventOnThem.forEach(function(x) {counts[x] = (counts[x] || 0) + 1; });
    // const counts = {};
    // this.events.forEach(function(x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts);

    console.log(datesWithEventOnThem);


    
    
    

      let numberOfEventsPerDay = this.events.map((event) => {
      // let allEventDates = new Date(event.date);

        let eventTitles = event.title;
        return eventTitles;


      // return allEventDates
      // console.log(allEventDates);

      
      
      // let totalNumberOfDates = event.length;
      // console.log(totalNumberOfDates);
      
      // event['color'] = totalNumberOfDates > 0 &&  totalNumberOfDates <= 5 ? 'red' : (totalNumberOfDates > 5 && totalNumberOfDates <= 8 ? 'yellow' : 'blue');

    })

    console.log(numberOfEventsPerDay);
    



    // this.events[this.dateStart].map((event) => {
    //   let allDates = new Date(event.date)
    //   console.log(event);
      
    // })

    console.log(this.events);

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      locale: itLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'addAppointmentButton'
      },
      eventLimit: true,
      views: {
        timeGrid: {
          eventLimit: 3,
          dayMaxEventRows: 5
        }
      },
      dateClick: (e) => {
        
        this.display = true;
        this.dateStart = e.dateStr;
        this.dateEnd = e.dateStr;

        // let sameEventsDate = e.date;

        // console.log(sameEventsDate.length);
        
        console.log(e.date);
      },
      getEventsPerDate: (e) => {

        // if(this.events.length > 3) {
        //   e.color = 'red'
        // }

        // console.log(e.this.events);
        
      
      },
      customButtons: {
        addAppointmentButton: {
          text: 'Nuovo Appuntamento',
          click: this.addButtonAppoitnment.bind(this)
        }
      },

      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true
    };

  }



  colorEvents (view) {

    let events = this.events;
    let dates = {};

    events.forEach(function(ev, index) {
      let startDateStr = ev.date.format("YYYY-MM-DD");
      dates[startDateStr] = (dates[startDateStr] + 1 || 1);
    });

    console.log(dates);

    for (var dt in dates) {
      if(dates[dt] > 1){
        
      }
    }
  }





  addButtonAppoitnment() {
    this.displayAddAppointment = !this.displayAddAppointment;
    this.events = [...this.events, {
      title: this.appointment,
      date: this.dateStartFromButton
    }]

    return this.appointment = "", this.dateStartFromButton = "";

  }

  addAppointment() {
    this.events = [...this.events, {
      title: this.appointment,
      date: this.dateStart,
    }]

    console.log(this.events);

    // console.log(this.events.map((event) => { event.events, event.date }));

    return this.appointment = "", this.display = false;

  }


  cancelAppointment() {
    this.displayAddAppointment = false;
    this.display = false;
  }

}
