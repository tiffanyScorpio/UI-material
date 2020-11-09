



var App = new Vue({
    el: "#app",
    data: {
        fontFamilyArr: []
    },
    created() {
    },
    mounted() {
        this.initFontFamily()
    },
    methods: {
        clickFontItem(font) {
            let checked = $("#font_checkbox_" + font).get(0).checked
            $("#font_checkbox_" + font).attr("checked", !checked)
        },
        initFontFamily() {
            //  { remark: "", name: "",status: "" },
            // status: "common":表示常用
            this.fontFamilyArr = [
                { remark: "黑体", name: "SimHei" },
                { remark: "新宋体", name: "NSimSun" },
                { remark: "仿宋", name: "FangSong" },
                { remark: "隶书", name: "LiSu" },
                { remark: "楷体", name: "KaiTi" },
                { remark: "幼圆", name: "YouYuan", zh: true },
                { remark: "微软雅黑", name: "Microsoft YaHei", zh: true, en: true, num: true },
                { remark: "华文琥珀", name: "STHupo", zh: true, en: true, num: true },
                { remark: "华文彩云", name: "STCaiyun" },
                { remark: "华文楷体", name: "STKaiti" },
                { remark: "华文隶书", name: "STLiti" },
                { remark: "华文细黑", name: "STXihei" },
                { remark: "华文行楷", name: "STXingkai" },
                { remark: "华文新魏", name: "STXinwei" },
                { remark: "方正姚体", name: "FZYaoti" },
                { remark: "方正舒体", name: "FZShuTi" },

                { remark: "", name: "Arial" },
                { remark: "", name: "Brush Script MT" },
                // { remark: "", name: "Copperplate" },
                { remark: "", name: "Consolas" },
                { remark: "", name: "Courier" },
                { remark: "", name: "Courier New" },
                { remark: "无衬线", name: "Csans-serif" },
                { remark: "", name: "fantasy", zh: true, en: true, num: true },
                { remark: "", name: "Futura", zh: true, en: true, num: true },
                { remark: "", name: "Georgia", num: true },
                { remark: "", name: "Lucida Console" },
                { remark: "", name: "Lucida Sans Typewriter" },
                { remark: "等宽", name: "Monospace" },
                { remark: "", name: "Palatino" },
                { remark: "", name: "Papyrus" },
                { remark: "", name: "Rockwell" },
                { remark: "衬线", name: "Serif" },
                { remark: "", name: "Tahoma" },
                { remark: "", name: "Times New Roman" },
                { remark: "", name: "Uisive" },
                { remark: "", name: "Verdana" },
                { remark: "", name: "Digital1", num: true },
                { remark: "", name: "Digital2", num: true },
                { remark: "", name: "PingFang", en: true, },
            ]
        }
    }
})

