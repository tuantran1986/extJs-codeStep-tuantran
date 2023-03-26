// ĐỊNH NGHĨA - "PopUp" : tên trùng địa chỉ
Ext.define('MyApp.view.main.PopUp', {
    // kế thừa từ WINDOW
    extend: 'Ext.window.Window',

    // KÍCH THƯỚC
    height: 200,
    width: 400,
    layout: 'fit',

    // NỘI DUNG
    items: {
        xtype: 'grid',                      // GRID
        border: false,                      // BỎ VIỀN
        columns: [{ header: 'Name'}, { header: 'Email'}],      // CẤU HÌNH 2 CỘT = "Name + Email"
        store: []                           // DATA
    }
})