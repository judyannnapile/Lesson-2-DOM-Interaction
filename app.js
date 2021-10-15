const app = Vue.createApp({
data(){
    return{
        num1:'',
        num2:'',
        name:'Judy Ann Napile',
        age:22,
    };
},
methods:{
    setName(Data){
        this.name=Data.target.value;
    },
    after5(num){
        const totalage=this.age+num
        return totalage
    },
    myfav(num1,num2){
        const randomnum = Math.random
        (num1,num2)
        return randomnum
    }

}

});
app.mount('#Data');