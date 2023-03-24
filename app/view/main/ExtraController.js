Ext.define('MyApp.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',

    // CYDB - khi ALIAS: "controller.main": [có TIỀN TỐ "controller."] = "ĐỂ ĐÁNH DẤU = CONTROLLER"
    alias: 'controller.extra',

    // "VIẾT CONTROLLER"
    // 1. KHỞI TẠO = KHAI BÁO BỘ 3: "ELEMENT" + "EVENT" + "HANDLE FUNCTION"
    init: function(){
        console.log('tuantran - run - INIT CONTROLLER EXTRA');
        this.control({
            // # ID của CONTROLLER
            '#button-1-id' : {
                // TÊN SỰ KIỆN : "HÀM HANDLE SỰ KIỆN"
                click: 'handleOnClickButton'
            },
            // # ID của CONTROLLER
            '#button-2-id' : {
                // TÊN SỰ KIỆN : "HÀM HANDLE SỰ KIỆN"
                click: 'handleOnClickButton'
            }
        })
    },

    // 2. VIẾT HÀM "HANDLE FUNCTION"
    handleOnClickButton: function(){
        alert('tuantran - hello - CONTROLLER')
    }
})