
var fs = require('fs')
var config = require('./config')

module.exports = function(){
  var filename = '/index.html'
  var htmlfile = fs.createReadStream(config.from + filename)
  var tofile = fs.createWriteStream(config.dest + filename)
  htmlfile.pipe(tofile)
}

