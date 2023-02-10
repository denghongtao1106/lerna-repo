"use strict";

module.exports = fork;

function fork() {
  console.log("修改");
  return "Hello from fork";
}
