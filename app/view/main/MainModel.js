/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    // 2.1. LUỒNG: APP - VIEW MAIN - MODEL MAIN : khai báo "tên MODEL"
    // alias = XTYPE = EXPORT: xuất ra tên 'viewmodel.main' = CYDB = KHÔNG PHẢI "main"
    // CYDB - khi ALIAS: "viewmodel.main" có TIỀN TỐ "viewmodel." = "ĐỂ ĐÁNH DẤU = MODEL"
    alias: 'viewmodel.main',

    // 2.2. khai báo "biến"
    data: {
        // CYDB 1 - VIEW lấy dữ liệu từ MAINMODEL thông qua BIND
        name: 'TUANTRAN-MyApp',
        // name: 'MyApp',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    //TODO - add data, formulas and/or methods to support your view
});
