const Main = {
  
  tasks: [],

  init: function () {
    this.cacheSelectors()
    this.bindEvents()
    this.getStoraged()
    this.buildTasks()
  },

  cacheSelectors: function () {
    this.$checkButtons = document.querySelectorAll('.check')
    this.$inputTask = document.querySelector('#inputTask')
    this.$list = document.querySelector('#list')
    this.$removeButtons = document.querySelectorAll('.remove')
  },

  bindEvents: function () {
    const self = this

    this.$checkButtons.forEach(function(button){
      button.onclick = self.Events.checkButton_click.bind(self)
    })

    this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

    this.$removeButtons.forEach(function(button) {
      button.onclick = self.Events.removeButton_click.bind(self)
    })
  },

  getStoraged: function() {
    const tasks = localStorage.getItem('tasks')
    if(tasks) {
      this.tasks = JSON.parse(tasks)
    } else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  },

  getTaskHtml: function(task, isDone) {
    return `
    <li class="${isDone ? 'done' : ''}" data-task="${task}">
      <div class="check"></div>
      <label class="task">${task}</label>
      <button class="remove" ></button>
    </li>
    `
  },

  insertHTML: function(element, htmlString) {
    element.innerHTML += htmlString

    this.cacheSelectors()
    this.bindEvents()
  },

  buildTasks: function() {
    let html = ''

    this.tasks.forEach(item => html += this.getTaskHtml(item.task, item.isDone))

    this.insertHTML(this.$list, html)
  },

  Events: {
    checkButton_click: function (e) {
      const li = e.target.parentElement
      const value = li.dataset['task']
      const isDone = li.classList.contains('done')

      const newTasksState = this.tasks.map(item => {
        if (item.task === value) {
          item.isDone = !isDone
        }

        return item
      })

      localStorage.setItem('tasks', JSON.stringify(newTasksState))

      !isDone ? li.classList.add('done') : li.classList.remove('done')    
    },

    inputTask_keypress: function(e) {
      const key = e.key
      const value = e.target.value

      
      if(key === 'Enter') {
        const taskHtml = this.getTaskHtml(value, false)

        this.insertHTML(this.$list, taskHtml)

        e.target.value = ''

        const savedTasks = JSON.parse(localStorage.getItem('tasks'))

        const obj = 
        [
          ...savedTasks,
          {task: value, isDone: false}
        ]

        this.tasks = obj
        localStorage.setItem('tasks', JSON.stringify(obj))
      }
    },

    removeButton_click: function(e) {
      const li = e.target.parentElement
      const value = li.dataset['task']
      
      const newTasks = this.tasks.filter(item => item.task !== value)
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      this.tasks = newTasks

      li.classList.add('removed')

      setTimeout(function() {
        li.classList.add('hidden')
      }, 250)
    }
  },
}

Main.init()