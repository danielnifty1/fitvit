import { TimePicker } from "@syncfusion/ej2-vue-calendars";

const initCalender=()=>{
     const calendar = new VanillaCalendar('#calender', {
        actions: {
            changeToInput(e:any, HTMLInputElement:HTMLInputElement, dates:any[],) {
              if (dates[0]) {
                HTMLInputElement.value = dates[0];
                // if you want to hide the calendar after picking a date
                calendar.HTMLElement.classList.add('vanilla-calendar_hidden');
              } else {
                HTMLInputElement.value = '';
              }
            },
          },
          input: true,
        settings: {
            lang: 'en',
          
            range: {
                disablePast: true,
                disableWeekday: [0]
            }
        }
    });
    calendar.init()}
    export default initCalender
