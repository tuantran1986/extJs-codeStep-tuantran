// CYDB - QUY TẮC đặt tên: "TÊN" = "ĐỊA_CHỈ_ĐƯỜNG_DẪN_ĐẾN_FILE_NÀY"
Ext.define('MyApp.view.main.ExtraPopUp', {
    
    // EXTEND = kế thừa thư viện    
    extend: 'Ext.grid.Panel',   // CYDB - KO ĂN CODE = extend: 'Ext.container.Container',

    // XTYPE = alias = export
    xtype: 'ExtraPopUp',

    // BUTTONS: khai báo CÁC NÚT
    buttons: [        
        {
            // NÚT - SHOW POPUP
            text: 'Show PopUp', // CHỮ HIỂN THỊ TRÊN BTN
            handler: function(){
                pop = Ext.create('MyApp.view.main.PopUp');  // CYDB - "TÊN" === "ĐỊA CHỈ"
                pop.show();
                console.log('run - handle SHOW POP');
            }
        }
    ],
})