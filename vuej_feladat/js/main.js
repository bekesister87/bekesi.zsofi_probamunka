new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
      items: ['Olvasás', 'Modosítás', 'Mindkető', 'Egyiksem'],  
      states: ['Cég 1', 'Cég 2'], 
    dialog: false,
    search: '',
      headers: [
        {
          text: 'Alkalmazottak jogosultságai Sorszám',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        { text: 'Név', value: 'name' },
        { text: 'Jogosultsag', value: 'permission' },
        { text: 'Életkor', value: 'age' },
        { text: 'Regisztrált időpont', value: 'register_date' },
        { text: 'Munkahely', value: 'work' },
        { text: 'Modosítás', value: 'action', sortable: false },
      ],
      demousers: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        permission: 0,
        age: 0,
        register_date: 0,
        work: 0,
      },
      defaultItem: {
        name: '',
        permission: 0,
        age: 0,
        register_date: 0,
        work: 0,
      },
    }),
  
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Új felhasználó hozzáadása' : 'Szerkesztés'
      },
    },
  
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
  
   
  
    created () {
      this.initialize()
    },
  
    methods: {
      initialize () {
        this.demousers = [
          {
            id:1,
            name: 'László',
            permission:'Mindkettő',
            age: '25',
            register_date: "2019-01-31 06:45:51.557Z",
            work: "Cég1"
          },
          {
            id:2,
            name: 'Péter',
            permission:'Olvasás',
            age: '44',
            register_date: "2015-03-12 06:42:51.345Z",
            work: "Cég2"
          },
          {
            id:3,
            name: 'Zénó',
            permission:'Olvasás',
            age: '25',
            register_date: "2019.11.05",
            work: "Cég2"
          },
          {
            id:4,
            name: 'Zakariás',
            permission:'Mindkettő',
            age: '88',
            register_date: "2000-01-12 12:44:55.111Z",
            work: "Cég1"
          },
          {
            id:5,
            name: 'Emma',
            permission:'Olvasás',
            age: '25',
            register_date: "2014-06-16 12:12:34.557Z",
            work: "Cég1"
          },
          {
            id:6,
            name: 'Jenő',
            permission:'Modosítás/Írás',
            age: '55',
            register_date: "2013-11-12 10:23:51",
            work: "Cég1"
          },
          {
            id:7,
            name: 'Mira',
            permission:'Egyiksem',
            age: '55',
            register_date: "22019-09-23 12:23:51.557Z",
            work: "Cég1"
          },
          {
            id:8,
            name: 'János',
            permission:'Olvasás',
            age: '32',
            register_date: "2013-10-12 10:22:51.557Z",
            work: "Cég2"
          },
          {
            id:9,
            name: 'István',
            permission:'Modosítás',
            age: '52',
            register_date: "2012-09-12 10:22:51.557Z",
            work: "Cég1"
          },
          {
            id:10,
            name: 'Kriszta',
            permission:'Egyiksem',
            age: '55',
            register_date: "2013-09-12 10:22:51.557Z",
            work: "Cég1"
          },
        ]
      },
  
      editItem (item) {
        this.editedIndex = this.demousers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
  
      deleteItem (item) {
        const index = this.demousers.indexOf(item)
        confirm('Biztosan ki akarja törölni a felhasználót?') && this.demousers.splice(index, 1)
      },
  
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
  
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.demousers[this.editedIndex], this.editedItem)
        } else {
          this.demousers.push(this.editedItem)
        }
        this.close()
      },
    },
  })