var toDoList = new Vue({
    el: "#toDoList",
    data: {
        newToDo:"",
        toDo:[
            {
                "text": "Fare la spesa",
                "done": false
            },
            {
                "text": "Studiare Vue.js",
                "done": false
            },
            {
                "text": "Avviare la Start-Up",
                "done": false
            }
        ],
    },
    methods:{
        toDoDelete(index){
            this.toDo.splice(index, 1);
        },

        toDoAdd(){

            const toDo ={
                "text": this.newToDo,
                "done": false
            }

            if(this.newToDo == ""){
                alert(`Attenzione, scrivi una 'To-Do' per aggiungerla alla lista!`);
            }else{
                this.toDo.push(toDo);
                this.newToDo="";
            }
        },

        selectDeselect(index){
            console.log(index);
            if(this.toDo[index].done === false){
                this.toDo[index].done = true;
            }else{
                this.toDo[index].done = false;
            }
        }
    }
});