"use strict"
const process = require("node:process");
if (process.send) {
  console.log("Dad is here")
  process.send("Hello dad !")
} else {
  console.log("Dad is gone")
}
const path = process.cwd();
process.on('message', (msg) => {
  console.log('CHILD got message: ', msg)
})
console.log('path: ', path);