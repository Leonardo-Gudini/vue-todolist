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
        toDoDelete(index){
            console.log(index)
            this.toDo.splice(index, 1);
        },

        toDoAdd(){
            this.toDo.push(this.newToDo);
        }
    }
})