
var page = require('page')
var event = require('lib/event-hub')
var store = require('lib/todo-store')
var TodoApp = require('section/todo')
var app = new TodoApp({ data: {
  items: store,
  showing: 'all'
} })

page('/', navigate)
page('/:showing', navigate)
page()

function navigate(ctx){
  var showing = ctx.params.showing || 'all'
  app.set('showing', showing)
  event.emit('navigate')
}

event.on('todo:markalldone', function(yes){
  var showing = app.get('showing')
  var items = app.get('items')
  if ('active' == showing)
    items = items.filter(function(d){ return !d.completed })
  if ('completed' == showing)
    items = items.filter(function(d){ return d.completed })
  items.forEach(function(_, index){
    var keypath = 'items.' + index + '.completed'
    app.set(keypath, yes)
  })
})

