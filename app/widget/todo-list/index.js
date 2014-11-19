
var Ractive = require('ractive/ractive.runtime')
var event = require('lib/event-hub')

module.exports = Ractive.extend({
  isolated: true,
  template: require('./index.ract').template,
  components: {
    todoitem: require('widget/todo-item')
  },
  onconstruct: onconstruct,
  oncomplete: oncomplete
})

function oncomplete(){
  this.on('change', function(changes){
    if ('undefined' == typeof changes.markalldone) return
    event.emit('todo:markalldone', changes.markalldone)
  })
}

function onconstruct(opts){
  opts.data = opts.data || {}
  opts.data.shouldShow = shouldShow
}

function shouldShow(todo){
  var showing = this.get('showing')

  if ('all' == showing) return true
  if ('active' == showing && !todo.completed) return true
  if ('completed' == showing && todo.completed) return true

  return false
}
