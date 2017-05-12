class Timer {
  constructor() {

  }
  let lastTime = null;
  let accumulator = 0;
  const step = 1/60;
          this._frameCallback = (millis) => {
              if (lastTime) {
                accumulator += (millis - lastTime) / 1000;
                while(accumulator > step) {
                  //do whatever you want here, like update
                  accumulator -= step;
                }
                // draw here for example
              }
          };
}
