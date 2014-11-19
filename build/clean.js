
var fs = require('mz/fs')
var rimraf = require('rimraf')
var config = require('./config')

module.exports = function *(){
  try { rimraf.sync(config.dest) } catch(e) {}
  yield fs.mkdir(config.dest)
}

