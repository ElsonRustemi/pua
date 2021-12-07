import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from 'src/app/services/eventservice.service';
import { FullCalendar, FullCalendarModule } from 'primeng/fullcalendar';
import { Calendar } from '@fullcalendar/core';
import frLocale from '@fullcalendar/core/locales/fr';
import itLocale from '@fullcalendar/core/locales/it';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import DateClicking from '@fullcalendar/interaction/interactions/DateClicking';
import DateSelecting from '@fullcalendar/interaction/interactions/DateSelecting';
import { title } from 'process';
import { DatePipe } from '@angular/common';
import { element } from 'protractor';
import { time } from 'console';


// interface IEvents {
//   id: number;
//   title: string;
//   date: string;
//   color: string;
// }


@Component({
  selector: 'app-frm-seduta-segr',
  templateUrl: './frm-seduta-segr.component.html',
  styleUrls: ['./frm-seduta-segr.component.css'],
  providers: [DatePipe]
})
export class FrmSedutaSegrComponent implements OnInit, AfterViewInit {

  date = new Date();
  date8: Date;

  maxEventsPerDay = 10;
  inBetweenEventPerDay = this.maxEventsPerDay - 1;
  minEventPerDay = this.maxEventsPerDay - 5;

  daysLimit = [];

  totalEventsPerday = 10;

  events = [];

  options: any;
  locale = [frLocale, itLocale];

  appointment = "";
  dateStart = "";
  dateEnd = "";
  id = "";
  eventId = "";

  dateFromCell = "";
  dateStartFromButton = "";

  displayAddAppointment: boolean;
  minimumDate = this.date;

  // changeEvent = false;
  eventTitleToBeChanged = "";
  updateEventModal = false;

  totalAmountOfEvents: boolean = false;
  disableDatesBeforeCurrentDate: boolean = false;


  display: boolean = false;

  isEdit: boolean = false;


  oldEventIndex;
  testEventTitle;
  // oldEventData;

  @ViewChild('calendar') calendar: FullCalendar;
  httpClient: any;

  constructor(private eventService: EventService, private fb: FormBuilder, private datePipe: DatePipe) { }


  ngOnInit(): void {


    this.events = [...this.events,
    // { title: 'event 1', start: '2021-11-16', end: '2021-11-18', color: ''},
    // {date: this.date, display: 'background', overlap: false, color: '#ff9f89'},
    {id: "1", title: 'event 1', date: '2021-12-08T14:30:00+00:00', color: '' },
    {id: "2", title: 'event 2', date: '2021-12-08T15:30:00+00:00', color: '' },
    {id: "3", title: 'event 3', date: '2021-12-08T16:30:00+00:00', color: '' },
    {id: "4", title: 'event 4', date: '2021-12-08T14:30:00+00:00', color: '' },
    {id: "5", title: 'event 5', date: '2021-12-08T15:30:00+00:00', color: '' },
    {id: "6", title: 'event 6', date: '2021-12-08T16:30:00+00:00', color: '' },
    {id: "7", title: 'event 7', date: '2021-12-08T14:30:00+00:00', color: '' },
    {id: "8", title: 'event 8', date: '2021-12-08T15:30:00+00:00', color: '' },
    {id: "9", title: 'event 9', date: '2021-12-08T16:30:00+00:00', color: '' },
    {id: "10", title: 'event 10', date: '2021-12-08T16:30:00+00:00', color: '' },
    {id: "11", title: 'event 11', date: '2021-12-17T14:30:00+00:00', color: '' },
    {id: "12", title: 'event 12', date: '2021-12-17T15:30:00+00:00', color: '' },
    {id: "13", title: 'event 13', date: '2021-12-17T14:30:00+00:00', color: '' },
    {id: "14", title: 'event 14', date: '2021-12-17T15:30:00+00:00', color: '' },
    {id: "15", title: 'event 15', date: '2021-12-17T14:30:00+00:00', color: '' },
    {id: "16", title: 'event 16', date: '2021-12-17T15:30:00+00:00', color: '' },
    {id: "17", title: 'event 17', date: '2021-12-17T14:30:00+00:00', color: '' },
    {id: "18", title: 'event 18', date: '2021-12-20T14:30:00+00:00', color: '' },
    {id: "19", title: 'event 19', date: '2021-12-20T15:30:00+00:00', color: '' },
    {id: "20", title: 'event 20', date: '2021-12-20T16:30:00+00:00', color: '' },
    {id: "21", title: 'event 21', date: '2021-12-20T15:30:00+00:00', color: '' },
    {id: "22", title: 'event 22', date: '2021-12-20T16:30:00+00:00', color: '' },


    ]


    this.daysToDisable();

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      locale: itLocale,
      header: {
        left: 'prev,next, legend',
        center: 'title',
        right: 'addAppointmentButton'
      },
      // timeZone: 'Europe/Paris',
      slotLabelFormat: { hour: 'numeric', minute: '2-digit', omitZeroMinute: false, hour12: false },
      initialDate: this.dateStart,
      eventLimit: true,
      views: {
        timeGrid: {
          // eventLimit: 3,
          dayMaxEventRows: 5
        }
      },
      eventTimeFormat: { // like '14:30:00'
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
        // timeZoneName: 'short'
      },
      dateClick: (e) => {

        let start = this.datePipe.transform(e.dateStr, 'yyyy-MM-dd');
        let today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.dateFromCell = e.date;
        console.log(e);


        if (start < today) {
          // alert('Cannot add appointment to this date.');
          this.disableDatesBeforeCurrentDate = true;
        } else {
          this.display = true;
          // this.id = e.findIndex();
          this.dateStart = e.dateStr;
          this.dateEnd = e.dateStr;
        }

      },
      // eventRender: function(date, cell) {
      // },
      eventClick: (event, element, eventClickInfo) => {

        console.log(event.event.title);
        console.log(event.event.id);
        console.log(event);


        this.testEventTitle = event.event.title;

        let eventId = event.event.id;

        this.eventId = event.event.id;

        let eventTitle = event.event.title;

        // let calEvent = eventClickInfo.event;
        // console.log(calEvent);

        // if(event.title) {
        //   console.log(title);
        // }
        this.updateEventModal = true;

        // console.log(this.calendar.events[4].title);
        console.log(event);

        // console.log(typeof event);

        // event.title = true;
        // this.eventTitleToBeChanged = event.title;

      //   let indexOfEvents = [];

      //   let events = this.events;

      // console.log(events.findIndex(event));

      // console.log(indexOfEvents);
      // console.log(event.title);



        // events.forEach((index) => {
        //   console.log(index);
        // })

        // console.log(events);

        this.eventTitleToBeChanged = event.event.title

        // ('updateEvent', event)

        let getEvent = this.events.filter(el => el.id === event.event.id)
        console.log(getEvent);


        // const oldEvent = this.events.findIndex( e => e.id === event.event.id);
        this.oldEventIndex = this.events.findIndex( e => e.id === event.event.id);
        // this.oldEventData = this.events[this.oldEventIndex];


        // const oldEvent = this.events.findIndex( e => e.id === event.event.id);


      },
      eventAfterAllRender: this.colorEvents(),
      customButtons: {
        addAppointmentButton: {
          text: 'Nuovo Appuntamento',
          click: this.addButtonAppoitnment.bind(this)
        },
      },
      eventColor: '#378006',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true
    };

  }


  colorEvents() {

    let events = this.events;

    let dates = {};

    events.forEach((ev, index) => {
      let startDateStr = this.datePipe.transform(ev.date, 'yyyy-MM-dd');

      // console.log(startDateStr);

      dates[startDateStr] = (dates[startDateStr] + 1 || 1);
    });

    this.events = this.events.map(el => {
      let checkDate = this.datePipe.transform(el.date, 'yyyy-MM-dd');

      for (let dt in dates) {
        if (checkDate === dt) {
          if (dates[dt] >= this.maxEventsPerDay) {
            el['color'] = '#FF5349';
          } else if (dates[dt] < this.maxEventsPerDay && dates[dt] > this.minEventPerDay) {
            el['color'] = '#FFBF00';
          } else if (dates[dt] < this.minEventPerDay) {
            el['color'] = '#378006';
          }
        }
      }
      return el;
    })

  }



  daysToDisable() {
    let events = this.events;
    // console.log(events);

    let dates = {};

    events.forEach((ev, index) => {
      let startDateStr = this.datePipe.transform(ev.date, 'yyyy-MM-dd');
      // console.log(startDateStr);
      dates[startDateStr] = (dates[startDateStr] + 1 || 1);
    });

    for (let dt in dates) {

      if (dates[dt] === 10)
        this.daysLimit.push(new Date(dt));
    }

  }

  // FF5349 color:red
  // 35A4FB color:blue
  // FFBF00 color:yellow

  addButtonAppoitnment() {
    let daysLimitBool = false;


    let start = this.datePipe.transform(this.dateStartFromButton, 'yyyy-MM-dd');
    let today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    let newButtonId = this.events.slice(-1)[0].id;


    // let test = this.events[this.events.length - 1];
    // console.log(test);

    this.displayAddAppointment = !this.displayAddAppointment;

    // if (start < today) {
    //   alert('Cannot add appointment to this date.');
    // } else {
    //   this.events = [...this.events, {
    //     id: newButtonId + 1,
    //     title: this.appointment,
    //     date: this.dateStartFromButton
    //   }]
    // }

    // let daysLimitBool = false;
    console.log(this.dateStartFromButton);


    this.daysLimit.map(el => {
      let testDate = this.datePipe.transform(el, "yyyy-MM-dd");
      console.log(testDate);

      if (start === testDate) {
        daysLimitBool = true;
      }
    })


    if (daysLimitBool) {
      // alert("Reached total amount of events. Please select another date.");
      this.totalAmountOfEvents = true;
    } else {
      this.events = [...this.events, {
        id: newButtonId + 1,
        title: this.appointment,
        date: this.dateStartFromButton
      }]
      this.daysToDisable();
    }


    return this.appointment = "", this.dateStartFromButton = "", this.colorEvents();

  }

  addAppointment() {

    // this.dateFromCell = this.dateStart + this.dateEnd;

    let daysLimitBool = false;

    let newId = this.events.slice(-1)[0].id;
    console.log(newId);

    // console.log(newId);


    this.daysLimit.map(el => {
      let testDate = this.datePipe.transform(el, "yyyy-MM-dd");
      if (this.dateStart === testDate) {
        daysLimitBool = true;
      }
    })


    if (daysLimitBool) {
      // alert("Reached total amount of events. Please select another date.");
      this.totalAmountOfEvents = true;
    } else {
      this.events = [...this.events, {
        id: newId + 1,
        title: this.appointment,
        date: this.dateFromCell,
        // date: this.dateStart,
        // dateEnd: this.dateEnd,
        // allDay: false,
        // time: this.date8,
        // allDay: false
      }]
      this.daysToDisable();
    }

    console.log(this.events);


    return this.appointment = "", this.display = false, this.colorEvents();

  }


  updateEvent() {

    console.log(this.oldEventIndex + 1);

    // this.oldEventData

      this.events[this.oldEventIndex].title = this.eventTitleToBeChanged;
      this.events = [...this.events];


      return this.updateEventModal = false;

  }

  cancelAppointment() {
    this.displayAddAppointment = false;
    this.display = false;
    this.updateEventModal = false;
  }

  ngAfterViewInit() {
    // ...
  }

}
