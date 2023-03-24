// CYDB - QUY TẮC đặt tên: "TÊN" = "ĐỊA_CHỈ_ĐƯỜNG_DẪN_ĐẾN_FILE_NÀY"
Ext.define('MyApp.view.main.Extra', {
    // EXTEND = kế thừa thư viện
    extend: 'Ext.container.Container',
    // extend: 'Ext.tab.Panel',
    
    // 4.KHAI BÁO - sử dụng MODEL = MAIN
    // CYDB - ["KHÔNG CÓ TIỀN TỐ = 'viewmodel.main']
    viewModel: 'main',              // viết tắt của: 'viewmodel.main'

    // BƯỚC-1.KHAI BÁO - sử dụng CONTROLLER = EXTRA
    // CYDB - ["KHÔNG CÓ TIỀN TỐ = 'viewController.extra']
    controller: 'extra',            // viết tắt của: 'viewController.extra'

    // XTYPE = alias = export
    xtype: 'Extra',

    // ITEMS = CONTENT: nội dung
    items: [
        // {
        //     title: 'Users',
        //     iconCls: 'fa-user',
        //     // 5. SỬ DỤNG - VALUE của BIẾN "loremIpsum" - trong MODEL (main)
        //     bind: {
        //         html: '{name}'
        //         // html: '{loremIpsum}'
        //     }
        // }
        {
            title: 'Extra View',
            html: 'DOM WILL BE HERE'
        },
        // BƯỚC-2. ELEMENT - xử lý sự kiện - gọi CONTROLLER
        {
            name: 'button-click-1',             // tên biến
            xtype: 'button',                    // loại component
            text: 'Button 1 - Call Controller', // CHỮ HIỂN THỊ TRÊN BTN
            itemId: 'button-1-id',              // ID của ELEMENT - truy cập = "#"
        },
        {
            name: 'button-click-2',             // tên biến
            xtype: 'button',                    // loại component
            text: 'Button 2 - Call Controller', // CHỮ HIỂN THỊ TRÊN BTN
            itemId: 'button-2-id',              // ID của ELEMENT - truy cập = "#"
        }
    ]

})