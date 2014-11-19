
var event = require('lib/event-hub')
var store = JSON.parse(localStorage.getItem('todos')) || []

module.exports = store

event.on('todo:add', function(task){
  store.push({
    text: task,
    completed: false
  })
  this.emit('todo:save')
})

event.on('todo:save', function(index, state){
  var json = JSON.stringify(store)
  localStorage.setItem('todos', json)
})

event.on('todo:remove', function(index){
  store.splice(index, 1)
  this.emit('todo:save')
})

