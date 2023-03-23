// CYDB - QUY TẮC đặt tên: "TÊN" = "ĐỊA_CHỈ_ĐƯỜNG_DẪN_ĐẾN_FILE_NÀY"
Ext.define('MyApp.view.main.Extra', {
    // EXTEND = kế thừa thư viện
    extend: 'Ext.container.Container',
    // extend: 'Ext.tab.Panel',
    
    // 4.KHAI BÁO - sử dụng MODEL = MAIN
    // CYDB - "KHÔNG CÓ TIỀN TỐ = 'viewmodel.main'
    viewModel: 'main',

    // XTYPE = alias = export
    xtype: 'Extra',

    // ITEMS = CONTENT: nội dung
    items: [
        {
            title: 'Users',
            iconCls: 'fa-user',
            // 5. SỬ DỤNG - VALUE của BIẾN "loremIpsum" - trong MODEL (main)
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]

})