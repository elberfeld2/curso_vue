const app = new Vue({
    el:'#app',
    data:{
        titulo:'Frutas',
        frutas:[
            {nombre:'Pera',cantidad:0},
            {nombre:'Platano',cantidad:0},
            {nombre:'Manzana',cantidad:0}
        ],
        nuevaFruta:'',
        total:0
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta,
                cantidad:0
            })
            this.nuevaFruta = ""
        }
    },
    computed:{
        sumarFrutas(){
            return this.frutas.reduce((acc,i)=>acc+i.cantidad,0)
        }
    }
})