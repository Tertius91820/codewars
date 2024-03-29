class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({
  template: 'h:m:s'
  
});
//clock.start()

class ExtendedClock extends Clock {
  constructor(settings){
      super(settings)
      this.precision =(settings.precision == null)? 1000 : settings.precision
  }

  start(){
    this.render
    this.timer = setInterval(() => this.render(),
    this.precision);
  }
}

let lowResolutionCheck = new ExtendedClock({
  template: 'h:m:s' ,
  precision: 10000
});

lowResolutionCheck.start()



