var App = {
    data() {
        return {
            schet: 0,
            Familia: '',
            Name: '',
            notes: [],
            visible: true,
            knopka: true
        }
    },
    methods: {
        Schetchik1(event) {
            this.Familia=event.target.value
            this.schet=this.Familia.length+this.Name.length
            if (this.Familia!='' && this.Name!='') {
                this.knopka=false
            }
        },
        Schetchik2(event) {
            this.Name=event.target.value
            this.schet=this.Familia.length+this.Name.length
            if (this.Familia!='' && this.Name!='') {
                this.knopka=false
            }
        },
        AddNewNote() {
            if (this.Familia!='' && this.Name!='') {
                this.notes.push(ucFirst(this.Familia)+" "+ucFirst(this.Name))
                this.Familia=""
                this.Name=""
                this.schet=0
                this.visible=false
                this.knopka=true
            }
        }
    }
}
var app=Vue.createApp(App)
var i=0;
app.mount('#app')

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
