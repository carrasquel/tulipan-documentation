new Tulipan({
    el: '#demo2-pdf',
    data: {
      todos: [
        { text: 'Clean the room!' },
        { text: 'Take out trash!' },
        { text: 'Buy groceries' }
      ],
      visible: "visible"
    },
    ready: function(){
        this.visible = "hidden";
    }
  })