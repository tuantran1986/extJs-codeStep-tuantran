// CYDB - QUY TẮC đặt tên: "TÊN" = "ĐỊA_CHỈ_ĐƯỜNG_DẪN_ĐẾN_FILE_NÀY"
Ext.define('MyApp.view.main.Extra', {
    // EXTEND = kế thừa thư viện
    extend: 'Ext.container.Container',
    // extend: 'Ext.tab.Panel',
    
    // XTYPE = alias = export
    xtype: 'Extra',

    // ITEMS = CONTENT: nội dung
    items: [
        {
            // TITLE = tieu de
            title: 'Extra is HERE',
            // HTML = noidung
            html: 'DOM WILL BE HERE'
        }
    ]

})