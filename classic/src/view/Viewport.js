Ext.define('MyApp.view.Viewport', {
    // VỊ TRÍ đặt file ĐÚNG : 'MyApp.view.Viewport'
    // VỊ TRÍ đặt file SAI  : 'MyApp.view.main.Viewport'
    extend: 'Ext.container.Viewport',    
    id: 'viewport',                         // ID : là duy nhất
    items: [
        {
            // ĐỊNH VỊ = POSITION = REGION : north, south, west, east (tren - duoi - phai - trai)
            region: 'north',
            html: '<h1>Header Part</h1>'    // nội dung HTML
        },
        {
            // ĐỊNH VỊ = POSITION = REGION : north, south, west, east (tren - duoi - phai - trai)
            region: 'center',
            xtype:'tabpanel',               // nội dung IMPORT = XTYPE = ALIAS
            activeTab: 0,                   // TAP hiện tại
            itemId: 'viewport-target'       // ITEM_ID : là duy nhất
        },
        {
            // ĐỊNH VỊ = POSITION = REGION : north, south, west, east (tren - duoi - phai - trai)
            region: 'south',
            html: '<h1>Footer Part</h1>'
        }
    ]
})