const app = Vue.createApp({
data(){
    return{
            user:'',
            user1:false,
            user2:false,
            enable:true,
            color:'',
            keycolor:'',

    };
},

methods:{
    input(event){
        this.user=event.target.value;
        if (this.user === 'user1'){
            this.user1= !this.user1
        }else if (this.user === 'user2'){
            this.user2= !this.user2
        }else {
            this.user1=''
            this.user2=''
        }
    },
    toggleParagraph(){
        this.enable = !this.enable
    },
    PickColor(event){
        this.color=event.target.value;
        if(this.color==='green'){
            this.keycolor=this.color
        } 
        else  if(this.color==='black'){
            this.keycolor=this.color
        }
         else if(this.color==='blue'){
            this.keycolor=this.color
        }else{
            this.keycolor=''
        }
    }
}

});
app.mount('#Styling');