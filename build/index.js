
var co = require('co')
var fs = require('mz/fs')
var config = require('./config')

co(function *(){
  if (config.prod) yield require('./clean')()
  try { yield fs.mkdir(config.dest) } catch(e){}
  require('./html')()
  require('./scripts')()
  require('./styles')()
  if (!config.prod) {
    require('./watch')()
    require('./server')()
  }
})()

