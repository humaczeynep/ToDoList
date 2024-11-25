const { createApp } = Vue

createApp({
    data() {
        return {
            title: "Just do it.",
            newTask: '',
            todos: [],
            bgColor : "white"
        }
    },
    methods: {
        addNew: function () {
            console.log("addNew");
            this.todos.push({ task: this.newTask, status: false });
            this.newTask = '';
            this.saveTasks();
        },
        changeStatus: function (todo) {
            todo.status = !todo.status;
            this.saveTasks();
        },
        removeTask: function (index) {
            this.todos.splice(index, 1);
            this.saveTasks();
        },
        saveTasks: function () {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        loadTasks: function () {
            const localTodos = localStorage.getItem('todos');
            if (localTodos) {
                this.todos = JSON.parse(localTodos);
            }
        },
        changeContainerBgColor : function(color){
            console.log(color);
            this.bgColor = color;
            document.body.style.backgroundColor = color;
        }
    },
    mounted() {
        this.loadTasks();
        console.log("mounted");
    },
   


}).mount("#to-do");

