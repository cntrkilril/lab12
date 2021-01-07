var App = {
    data() {
        return {
            schet: 0,
            Familia: '',
            Name: '',
            notes: [],
            visible: true
        }
    },
    methods: {
        Schetchik1(event) {
            this.Familia=event.target.value
            this.schet=this.Familia.length+this.Name.length
        },
        Schetchik2(event) {
            this.Name=event.target.value
            this.schet=this.Familia.length+this.Name.length
        },
        AddNewNote() {
            this.notes.push(this.Familia+" "+this.Name)
            this.Familia=" "
            this.Name=" "
            this.schet=0
            this.visible=false
        }
    }
}
var app=Vue.createApp(App)
var i=0;
app.mount('#app')