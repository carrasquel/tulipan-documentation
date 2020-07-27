new Tulipan({
    el: '#demo2-pdf',
    data: {
      todos: [
        { text: 'Clean the room!' },
        { text: 'Take out trash!' },
        { text: 'Buy groceries' }
      ],
      display: ""
    },
    ready: function(){
        this.display = "none";
    }
  })