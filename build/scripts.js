
var fs = require('fs')
var browserify = require('browserify')
var ractify = require('ractify')
var uglifyify = require('uglifyify')
var config = require('./config')

var filename = config.dest + '/index.js'

module.exports = function(){
  var bundler = browserify(config.from + '/index.js', { debug : !config.prod })
    .transform(ractify)

  if (config.prod)
    bundler.transform({ global: true }, uglifyify)

  bundler
    .bundle(function(err, buf){
      if (err) return error.call(this, err)
      fs.writeFile(filename, buf, noop)
    })
}

function error(err){
  console.error(err.message)
  console.error(err.stack)
  console.error(err)
  this.emit('end')
}

function noop(){}

