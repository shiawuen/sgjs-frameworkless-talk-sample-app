
var fs = require('fs')
var url = require('url')
var path = require('path')
var bs = require('browser-sync')
var config = require('./config')

var folder = path.join(process.cwd(), 'dist')

module.exports = function(){
  bs({
    files: [
      './dist/*.css',
      './dist/*.js',
      './dist/*.html'
    ],
    browser: 'chrome',
    server: {
      baseDir: config.dest,
      middleware: function(req, res, next){
        var loc = url.parse(req.url)
        var fname = loc.href.split(loc.search).join('')
        var exists = fs.existsSync(folder + fname)
        if (!exists && fname.indexOf('browser-sync-client') < 0)
          req.url = '/index.html'
        return next()
      }
    },
  })
}

