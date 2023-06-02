let markNote = ['Dime', 'Stussy', 'Accer', 'Asus', 'Lenovo', 'Apple', ]

let NoteApp = {
    data() {
        return {
            hover:false,
            hoverNumber:-1,
            nameArr:['Футболки', 'Штани', 'Худі', 'Світшот', 'Головні убори'],
            notebookArr:[
                {   name: 'Футболки', 
                    brend: 'Dime',
                    material: '100% Cotton',
                    src: 'brands/TSHIRT_SU23_ADBLOCK_WHITE_600x600.png',
                    price: '2100',
                    size:'S, M'
                },
                {   name: 'Футболки', 
                brend: 'Dime',
                material: '100% Cotton',
                src: 'brands/TSHIRT_SU23_SPLASH_WHITE_600x600.png',
                price: '1900',
                size:'S, M, L, XL'
            },
            {   name: 'Футболки', 
            brend: 'Dime',
            material: '100% Cotton',
            src: 'brands/TSHIRT_SU23_SMALLLOGO_BLACK_600x600.png',
            price: '1700',
            size:'S, M, L, XL'
           },
           {   name: 'Футболки', 
           brend: 'Dime',
           material: '100% Cotton',
           src: 'brands/TSHIRT_SU23_XENO_GREENLAKE_600x600.png',
           price: '2000',
           size:'M, L'
          },
          {   name: 'Футболки', 
           brend: 'Stussy',
           material: '100% Cotton',
           src: 'brands/stussytee1.jpg',
           price: '2500',
           size:'S, M, L, Xl, XXL (oversized fit)'
          },

          {   name: 'Футболки', 
          brend: 'Stussy',
          material: '100% Cotton',
          src: 'brands/stussytee2.jpg',
          price: '2200',
          size:'S, M, L, XL(oversized fit)'
         },







         {   name: 'Футболки', 
         brend: 'Polar Skate co',
         material: '100% Cotton',
         src: 'brands/polartee1.jpg',
         price: '1900',
         size:'S, M, L, XL'
        },

        {   name: 'Футболки', 
        brend: 'Polar Skate co',
        material: '100% Cotton',
        src: 'brands/polartee2.jpg',
        price: '2100',
        size:'L, XL'
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



       {   name: 'Штани', 
       brend: 'Dime Jeans Dark Blue',
       material: 'Denim',
       src: 'brands/dimepants1.jpg',
       price: '4300',
       size:'S, M, L, Xl'
      },

      {   name: 'Штани', 
      brend: 'Dime Jeans Light Blue',
      material: 'Denim',
      src: 'brands/dimepants2.jpg',
      price: '4300',
      size:'S, M, L, Xl'
     },


     {   name: 'Штани', 
     brend: 'Dime Jeans Black',
     material: 'Denim',
     src: 'brands/dimepants3.jpg',
     price: '4600',
     size:'S, M, L, Xl'
    },

    {   name: 'Штани', 
    brend: 'Dime Classic Navy Blue',
    material: '100% Cotton',
    src: 'brands/dimepants4.jpg',
    price: '3300',
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

     {   name: 'Худі', 
     brend: 'Stussy',
     material: '100% Cotton',
     src: 'brands/stussyhoodie1.jpg',
     price: '4200',
     size:'S,M, L, Xl'
    },

    {   name: 'Худі', 
    brend: 'Stussy',
    material: '100% Cotton',
    src: 'brands/stussyhoodie2.jpg',
    price: '3800',
    size:'S, M, L, Xl'
   },






























   {   name: 'Світшот', 
   brend: 'Stussy',
   material: '100% Cotton',
   src: 'brands/stussysweat1.jpg',
   price: '3800',
   size:'S, M, L, Xl'
  },


  {   name: 'Світшот', 
   brend: 'Stussy x Nike',
   material: '100% Cotton',
   src: 'brands/stussysweat2.jpg',
   price: '3300',
   size:'S, M, L, Xl'
  },

  {   name: 'Світшот', 
  brend: 'Stussy',
  material: '100% Cotton',
  src: 'brands/stussysweat4.jpg',
  price: '2500',
  size:'S, M, L, Xl'
 },

 {   name: 'Світшот', 
 brend: 'Stussy',
 material: '100% Cotton',
 src: 'brands/stussysweat3.jpg',
 price: '3600',
 size:'S, M, L, Xl'
},


{   name: 'Світшот', 
 brend: 'Dime',
 material: '100% Cotton',
 src: 'brands/dimesweat1.jpg',
 price: '2600',
 size:'S, M, L, Xl'
},

{   name: 'Світшот', 
 brend: 'Dime',
 material: '100% Cotton',
 src: 'brands/dimesweat2.jpg',
 price: '3200',
 size:'S, M, L, Xl'
},

{   name: 'Світшот', 
 brend: 'Dime',
 material: '100% Cotton',
 src: 'brands/dimesweat3.jpg',
 price: '3100',
 size:'S, M, L, Xl'
},

{   name: 'Світшот', 
 brend: 'Dime',
 material: '100% Cotton',
 src: 'brands/dimesweat4.jpg',
 price: '3600',
 size:'S, M, L, Xl'
},


{   name: 'Світшот', 
 brend: 'Fucking Awesome Fa',
 material: '100% Cotton',
 src: 'brands/fasweat1.jpg',
 price: '2600',
 size:'S, M, L, Xl'
},

{   name: 'Світшот', 
 brend: 'Fucking Awesome Fa',
 material: '100% Cotton',
 src: 'brands/fasweat2.jpg',
 price: '2800',
 size:'S, M, L, Xl'
},

{   name: 'Світшот', 
 brend: 'Fucking Awesome Fa',
 material: '100% Cotton',
 src: 'brands/fasweat4.jpg',
 price: '3000',
 size:'S, M, L, Xl'
},

{   name: 'Світшот', 
 brend: 'Fucking Awesome Fa',
 material: '100% Cotton',
 src: 'brands/fasweat3.jpg',
 price: '3800',
 size:'S, M, L, Xl'
},



{   name: 'Головні убори', 
 brend: 'Sicko Born From Pain',
 material: 'Cotton',
 src: 'brands/sickocap1.jpg',
 price: '1200',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Sicko Born From Pain',
 material: 'Cotton',
 src: 'brands/sickocap2.jpg',
 price: '1300',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Sicko Born From Pain',
 material: 'Cotton',
 src: 'brands/sickocap3.jpg',
 price: '1300',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Sicko Born From Pain',
 material: 'Cotton',
 src: 'brands/sickocap4.jpg',
 price: '1300',
 size:'One Size'
},


{   name: 'Головні убори', 
 brend: 'Carhartt',
 material: 'Cotton',
 src: 'brands/carharttcap1.jpg',
 price: '800',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Carhartt',
 material: 'Cotton',
 src: 'brands/carharttcap2.jpg',
 price: '1200',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Carhartt',
 material: 'Cotton',
 src: 'brands/carharttcap3.jpg',
 price: '1100',
 size:'One Size'
},


{   name: 'Головні убори', 
 brend: 'Carhartt',
 material: 'Cotton',
 src: 'brands/carharttcap4.jpg',
 price: '1000',
 size:'One Size'
},


{   name: 'Головні убори', 
 brend: 'Supreme',
 material: 'Cotton',
 src: 'brands/supremecap1.jpg',
 price: '2300',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Supreme',
 material: 'Cotton',
 src: 'brands/supremecap2.jpg',
 price: '2300',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Supreme',
 material: 'Cotton',
 src: 'brands/supremecap3.jpg',
 price: '2300',
 size:'One Size'
},

{   name: 'Головні убори', 
 brend: 'Supreme',
 material: 'Cotton',
 src: 'brands/supremecap4.jpg',
 price: '2300',
 size:'One Size'
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
