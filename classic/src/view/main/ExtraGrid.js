// CYDB - QUY TẮC đặt tên: "TÊN" = "ĐỊA_CHỈ_ĐƯỜNG_DẪN_ĐẾN_FILE_NÀY"
Ext.define('MyApp.view.main.ExtraGrid', {
    // EXTEND = kế thừa thư viện
    extend: 'Ext.grid.Panel',
    xtype: 'extraGrid',
    title: 'grid people',
    height: 300,
    width: 400,
    // DỮ LIỆU - BẢNG
    store: [

    ],
    // CẤU HÌNH CỘT: "TEXT = TÊN CỘT" ; "DATAINDEX = TÊN BIẾN CỦA CỘT"
    columns: [
        {text: 'Name', dataIndex:'name'},
        {text: 'Email', dataIndex:'email'},
        {text: 'Phone', dataIndex:'phone'},
    ]
})