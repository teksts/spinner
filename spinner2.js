const frames = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let wait = 100;
for (const frame of frames) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, wait);
  wait += 200;
}