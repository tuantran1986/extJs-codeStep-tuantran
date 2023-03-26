// CYDB - QUY TẮC đặt tên: "TÊN" = "ĐỊA_CHỈ_ĐƯỜNG_DẪN_ĐẾN_FILE_NÀY"
Ext.define('MyApp.view.main.ExtraGrid', {
    // EXTEND = kế thừa thư viện
    extend: 'Ext.grid.Panel',
    xtype: 'extraGrid',
    title: 'grid people',
    height: 300,
    width: 400,

    // 1.DỮ LIỆU - BẢNG (STORE - FIXED)
            // store: [
            //     { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
            //     { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
            //     { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
            //     { name: 'tuantran',   email: "tuantran@enterprise.com",    phone: "666-333-3333" },
            //     { nameMiss: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
            // ],
    // 2.DỮ LIỆU - BẢNG (STORE ĐỘNG - LẤY TỪ STORE VỀ)
            // store: {
            //     // CYDB - khi IMPORT = lấy vào "KHÔNG CẦN TIỀN TỐ = store."
            //     type: 'extraGrid'   // 'extraGrid' = viết tắt của 'store.extraGrid'
            // },
    // 3.DỮ LIỆU - BẢNG (STORE ĐỘNG : "call API => BACKEND trả về" => lưu vào STORE => đẩy vào VIEW )
    store: {
        // CYDB - khi IMPORT = lấy vào "KHÔNG CẦN TIỀN TỐ = store."
        type: 'extraGridAPI'   // 'extraGridAPI' = viết tắt của 'store.extraGridAPI'
    },
    
    // CẤU HÌNH CỘT: "TEXT = TÊN CỘT" ; "DATAINDEX = TÊN BIẾN CỦA CỘT" ; "FLEX = CHIA ĐỘ RỘNG CỘT"
        // "flex: 1" ==> chia cột 1/6.
        // "flex: 3" ==> chia cột 3/6.
        // "flex: 2" ==> chia cột 2/6.
    columns: [
        {
            text: 'Name', dataIndex:'name', flex: 1,
            // chức năng FILTER: 1 thêm "filter" - vào cột NAME

            // 1.lọc theo "CHUỖI"
                filter: {
                    type: 'string',
                },
            // 2.lọc theo "LIST OPTIONS"
                // filter: {     
                //     type: 'list',              
                //     options: ['tuantran','thu', 'quocAnh']
                // },
            // 3.lọc theo "NUMBER"
                // filter: {     
                //     type: 'number'
                // }
        },
        // 
        {text: 'Email', dataIndex:'email', flex: 3},
        {text: 'Phone', dataIndex:'phone', flex: 2},
        {text: 'Website', dataIndex:'website', flex: 2},
    ],
    // chức năng FILTER: 2 cấu hình PLUGINS
    plugins: 'gridfilters',

    // ID = duy nhất
    id: 'Extra_Grid_ID',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel'
    },

    // MẢNG CÁC NÚT - TRÊN GIAO DIỆN:
    buttons: [
        // NÚT 1 : SELECT ALL = "CHỌN TẤT CẢ"
        {
            text: 'SELECT ALL',
            handler: function(){
                // lấy ELEMENT = "ID" : Ext.getCmp('ID') = Ext.getCmp('Extra_Grid_ID')
                // getSelectionModel()  : chế độ CHỌN
                    // selectAll()          : chọn "TẤT CẢ"
                Ext.getCmp('Extra_Grid_ID').getSelectionModel().selectAll();
            }
        },
        // NÚT 2 : REMOVE ALL = DESELECT ALL = "BỎ CHỌN TẤT CẢ"
        {
            text: 'REMOVE ALL',
            handler: function(){
                // lấy ELEMENT = "ID" : Ext.getCmp('ID') = Ext.getCmp('Extra_Grid_ID')
                // getSelectionModel()  : chế độ CHỌN
                    // deselectAll()        : BỎ chọn "TẤT CẢ"
                Ext.getCmp('Extra_Grid_ID').getSelectionModel().deselectAll();
            }
        },
        // NÚT 3 : GET SELECT DATA = "lấy dữ liệu đc TÍCH CHỌN"
        {
            text: 'GET SELECTED DATA',
            handler: function(){
                // lấy ELEMENT = "ID" : Ext.getCmp('ID') = Ext.getCmp('Extra_Grid_ID')
                // getSelectionModel()  : chế độ CHỌN
                    // getSelection()       : chọn "TẤT CẢ"
                var rowSelected = Ext.getCmp('Extra_Grid_ID').getSelectionModel().getSelection();
                console.log('EXTRA GRID - rowSelected = ', rowSelected);
            }
        }
    ]
})