var app = new Vue({
    el: "#app",
    data: {
        shopping_list: [
            {
                name: "Apples",
                completed: false,
            },
            {
                name: "Bred",
                completed: true,
            },
            {
                name: "Banannazzzz",
                completed: false,
            },
        ],
        new_item_title: '',
    },
    methods: {
        addNewItem: function(){
            var newItem = {
                name: this.new_item_title,
                completed: false,
            };
            this.shopping_list.push(newItem);
            this.new_item_title = '';
        }
    }
});