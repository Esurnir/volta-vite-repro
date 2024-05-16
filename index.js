"use strict"
const process = require("node:process")
const childProcess = require("node:child_process")
const path = require("node:path")

const execPath = "C:\\Program Files\\Volta\\node.EXE"
const mod = "worker.js"

const childPath = path.resolve(process.cwd(), mod)
const child = childProcess.fork(childPath, {
  //execPath,
  env: {
    ...process.env
  },
  stdio: "overlapped"
})

let scriptOutput = ""
child.on("message", msg => {
  console.log('PARENT got message: ', msg)
  child.send('parent -> child')
})
child.stdout?.on('data', function(data) {
  //Here is where the output goes

  console.log('stdout: ' + data);

  data=data.toString();
  scriptOutput+=data;
});
child.on("exit", () => console.log("Child exited", "output", scriptOutput));
