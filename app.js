const app = Vue.createApp({
data(){
    return{
        name:'',
        name1:'',
    };
},
methods:{
    submitform(){
        alert( 'I will pass this Semester');
    },
    myoutput(){
        this.enterText = this.name;
    },
    myoutput1(Event){
        this.name1=Event.target.value;
    },
    enterText(Event){
        this.name=Event.target.value;
    }
}

});
app.mount('#Event');