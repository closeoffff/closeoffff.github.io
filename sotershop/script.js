let markNote = ['Dime', 'HP', 'Accer', 'Asus', 'Lenovo', 'Apple', ]

let NoteApp = {
    data() {
        return {
            hover:false,
            hoverNumber:-1,
            nameArr:['Футболки', 'Штани', 'Худі', 'Світшот', 'Головні убори', 'Сумки'],
            notebookArr:[
                {   name: 'Футболки', 
                    brend: 'Dime',
                    material: '100% Cotton',
                    src: 'brands/TSHIRT_SU23_ADBLOCK_WHITE_600x600.png',
                    price: '2100',
                    size:'s, m'
                },
                {   name: 'Футболки', 
                brend: 'Dime',
                material: '100% Cotton',
                src: 'brands/TSHIRT_SU23_SPLASH_WHITE_600x600.png',
                price: '1900',
                size:'s, m, l, xl'
            },
            {   name: 'Футболки', 
            brend: 'Dime',
            material: '100% Cotton',
            src: 'brands/TSHIRT_SU23_SMALLLOGO_BLACK_600x600.png',
            price: '1700',
            size:'s, m, l, xl'
           },
           {   name: 'Футболки', 
           brend: 'Dime',
           material: '100% Cotton',
           src: 'brands/TSHIRT_SU23_XENO_GREENLAKE_600x600.png',
           price: '2000',
           size:'m, l'
          },
          {   name: 'Футболки', 
           brend: 'Stussy',
           material: '100% Cotton',
           src: 'brands/stussytee1.jpg',
           price: '2500',
           size:'s, m, l, xl, xxl (oversized fit)'
          },

          {   name: 'Футболки', 
          brend: 'Stussy',
          material: '100% Cotton',
          src: 'brands/stussytee2.jpg',
          price: '2200',
          size:'s, m, l, xl(oversized fit)'
         },







         {   name: 'Футболки', 
         brend: 'Polar Skate co',
         material: '100% Cotton',
         src: 'brands/polartee1.jpg',
         price: '1900',
         size:'s, m, l, xl'
        },

        {   name: 'Футболки', 
        brend: 'Polar Skate co',
        material: '100% Cotton',
        src: 'brands/polartee2.jpg',
        price: '2100',
        size:'l, xl'
       },

































              
            
     











          {   name: 'Штани', 
          brend: 'Polar skate Co 93! Light Blue',
          material: 'Denim',
          src: 'brands/polar93lghtblu.png',
          price: '5100',
          size:'S, M, L, Xl'
         },

         {   name: 'Штани', 
         brend: 'Polar skate Co 93! Washed Black',
         material: 'Denim',
         src: 'brands/93wshdblk.png',
         price: '5100',
         size:'S, M, L, Xl'
        },

        {   name: 'Штани', 
         brend: 'Polar skate Co 93! Dark Blue',
         material: 'Denim',
         src: 'brands/93drkblu.png',
         price: '5100',
         size:'S, M, L, Xl'
        },

        {   name: 'Штани', 
        brend: 'Polar skate Co 93! Work Light Blue',
        material: 'Denim',
        src: 'brands/Polar-Skate-Co-SP23-93-Work-Pants-Ice-Blue-1_grande.png',
        price: '5300',
        size:'S, M, L, Xl'
       },


























       {   name: 'Худі', 
       brend: 'Dime',
       material: '100% Cotton',
       src: 'brands/dimehoodie1.jpg',
       price: '3200',
       size:'S, M, L, Xl'
      },


      {   name: 'Худі', 
       brend: 'Dime',
       material: '100% Cotton',
       src: 'brands/dimehoodie2.jpg',
       price: '2900',
       size:'S, M, L, Xl'
      },

      {   name: 'Худі', 
       brend: 'Dime',
       material: '100% Cotton',
       src: 'brands/dimehoodie3.jpg',
       price: '2700',
       size:'S, M, L, Xl'
      },


      {   name: 'Худі', 
      brend: 'Fucking awesome FA',
      material: '100% Cotton',
      src: 'brands/fahoodie1.jpg',
      price: '3400',
      size:'M, L, Xl'
     },

     {   name: 'Худі', 
      brend: 'Fucking awesome FA',
      material: '100% Cotton',
      src: 'brands/fahoodie2.jpg',
      price: '2400',
      size:'M, L, Xl'
     },


     {   name: 'Худі', 
      brend: 'Fucking awesome FA',
      material: '100% Cotton',
      src: 'brands/fahoodie3.jpg',
      price: '3100',
      size:'M, L, Xl'
     },





















             {   name: 'Asus', 
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb'
                },
                {  name: 'Lenovo', 
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb'
                },
                {  name: 'Lenovo', 
                model: 'Inspirion2',
                procesor: 'i3',
                memory: '500Gb'
                },
                {  name: 'Lenovo', 
                model: 'Inspirion3',
                procesor: 'i3',
                memory: '500Gb'
                },
                {  name: 'Lenovo', 
                    model: 'Inspirion4',
                    procesor: 'i3',
                    memory: '500Gb'
                },
                {  name: 'Lenovo', 
                model: 'Inspirion5',
                procesor: 'i3',
                memory: '500Gb'
                },
                {  name: 'Lenovo', 
                model: 'Inspirion6',
                procesor: 'i3',
                memory: '500Gb'
                },
                {  name: 'Lenovo', 
                model: 'Inspirion4',
                procesor: 'i3',
                memory: '500Gb'
            },
            {  name: 'Lenovo', 
            model: 'Inspirion5',
            procesor: 'i3',
            memory: '500Gb'
            },
            {  name: 'Lenovo', 
            model: 'Inspirion6',
            procesor: 'i3',
            memory: '500Gb'
            },
                {   name: 'Apple', 
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb'
                },
                {   name: 'Apple', 
                    model: 'Inspirion2',
                    procesor: 'i3',
                    memory: '500Gb'
                }
                
            ],
            chooseName: markNote[0],
            chooseIndex:0,
            chooseNotebooks:[],
            search: "",
        }
    },
    methods: {
        showNotebook(index){
            this.chooseNotebooks.length = 0;
            this.chooseName = this.nameArr[index];
            for (elem of this.notebookArr){
                if (elem.name == this.chooseName){
                    this.chooseNotebooks.push(elem);
                }
            }
        },
        searchFunction(){

        },
        myFilter() {
            let searchString = this.search;
            if (!searchString) {
                return this.chooseNotebooks;
            }
            searchString = searchString.trim().toLowerCase();
            
            this.chooseNotebooks.length = 0;
            return this.notebookArr.filter(item => {
                if ((item.name.toLowerCase().indexOf(searchString) !== -1) || (item.model.toLowerCase().indexOf(searchString) !== -1)) {
                    // return item;
                   this.chooseNotebooks.push(item);
                    return this.chooseNotebooks;
                }
            })
        }
    },
    mounted() {
        this.showNotebook(0)
    },

}

Vue.createApp(NoteApp).mount('#container')