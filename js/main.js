var toDoList = new Vue({
    el: "#toDoList",
    data: {
        newToDo:"",
        toDo:[
            "Fare la spesa",
            "Studiare Vue.js",
            "Avviare la Start-Up"
        ]
    },
    methods:{
        toDoDelete(){
            toDo.splice(0,1)
        },
    }
})