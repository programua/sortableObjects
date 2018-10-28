'use strict';

var i = 0;
var j = 0;
var ins = new Vue ({
    el: '.main-div',
    data: {
        leftItems: [
            {message: 0},          
        ],
        rightItems: [
            {message: 0}
        ]
    },
    methods: {
        click: function(button){
        if(button==="left"){
            i +=  1;
            this.leftItems.unshift({'message': i});
        }else if(button==="right"){
            j +=  1;
            this.rightItems.unshift({'message': j});
        }
    }}
});