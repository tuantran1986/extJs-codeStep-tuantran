/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // HÀM - CHẠY
    // launch: function() {
    //     // lấy VIEWPORT - CYDB quy tắc "BỎ TIỀN TỐ" = "GIẢN LƯỢC TÊN" = 'MyApp.view.Viewport' ==> 'viewport'
    //     viewport = Ext.getCmp('viewport');
    //     target = viewport.down('#viewport-target');
    //     view = Ext.create('MyApp.view.main.Main');
    //     target.add(view);
    // },

    // 1.CYDB - MAINVIEW = "view chính"
    // The name of the initial view to create = MAINVIEW
    // mainView: 'MyApp.view.main.Extra',

    // The name of the initial view to create = MAINVIEW
    mainView: 'MyApp.view.main.ExtraPopUp',

    // MAINVIEW = "view chính" = "EXTRA GRID"
    // mainView: 'MyApp.view.main.ExtraGrid',

    // MAINVIEW = "view chính" = "EXTRA GRID"
    // mainView: 'MyApp.view.main.SearchForm',

    // 1. LUỒNG: APP - VIEW MAIN - MODEL MAIN
    // mainView: 'MyApp.view.main.Main',
    

    // BẬT - tính năng tự động TẠO-VIEWPORT
    // autoCreateViewport: true
});
