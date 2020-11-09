
var App = new Vue({
    el: "#app",
    data: {
        colorArr: []
    },
    computed: {
        setColorItemStyle() {
            return (color) => {
                return {
                    backgroundColor: "#" + color,
                    width: "100px",
                    height: "50px",
                    borderRadius: "5px"
                }
            };
        },
    },
    created() {
    },
    mounted() {
        this.initColor()
    },
    methods: {
        initColor() {
            this.colorArr = [
                { spec: "红色", list: ['B31216', 'C23531', 'd81e06'] },
                { spec: "橙色", list: ['ffa800', 'FE7D00'] },
                { spec: "黄色", list: ['FFFF00', 'F9CB14', 'f4ea2a'] },
                { spec: "绿色", list: ['23FABB', '006C5A', '00B050', '01DDB9', '1afa29'] },
                { spec: "蓝色", list: ['239DFA', '73DFFF', '004DA7', '0250c5', '21D4FD', '1296db'] },
                { spec: "紫色", list: ['5C4DE0', 'B721FF'] },
                { spec: "粉红色", list: ['CF00CF'] },
                { spec: "灰色", list: ['15314F', '909399', '1D2549', '2F4554'] },
            ]
        }
    }
})