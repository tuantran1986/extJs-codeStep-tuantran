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
    store: {
        // CYDB - khi IMPORT = lấy vào "KHÔNG CẦN TIỀN TỐ = store."
        type: 'extraGrid'   // 'extraGrid' = viết tắt của 'store.extraGrid'
    },
    
    // CẤU HÌNH CỘT: "TEXT = TÊN CỘT" ; "DATAINDEX = TÊN BIẾN CỦA CỘT" ; "FLEX = CHIA ĐỘ RỘNG CỘT"
        // "flex: 1" ==> chia cột 1/6.
        // "flex: 3" ==> chia cột 3/6.
        // "flex: 2" ==> chia cột 2/6.
    columns: [
        {text: 'Name', dataIndex:'name', flex: 1},
        {text: 'Email', dataIndex:'email', flex: 3},
        {text: 'Phone', dataIndex:'phone', flex: 2},
    ]
})