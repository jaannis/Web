var app = new Vue({
    el: "#app",
    data: {
        shopping_list:[
        {
            name:"Apples",
            completed: false,
        }
        {
            name:"Bred",
            completed: false,
        }
        {
            name:"Bananazzzz",
            completed: false,
        },
    ],
    new_item_title: '',
    },
    methods: {
        addNewItem: function(){
            var newItem= {
                name: this.new_item_title,
                completed: false,
            };
        }
    }
})