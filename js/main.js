var toDoList = new Vue({
    el: "#toDoList",
    data: {
        newToDo:"",
        toDo:[
            "Fare la spesa",
            "Studiare Vue.js",
            "Avviare la Start-Up"
        ],
        done: false
    },
    methods:{
        toDoDelete(index){
            this.toDo.splice(index, 1);
        },

        toDoAdd(){
            if(this.newToDo == ""){
                alert(`Attenzione, scrivi una 'To-Do' per aggiungerla alla lista!`);
            }else{
                this.toDo.push(this.newToDo);
                this.newToDo="";
            }
        },

        selectDeselect(index){
            console.log(index);
            if(this.done==false){
                this.done = true;
            }else{
                this.done = false;
            }
        }
    }
})