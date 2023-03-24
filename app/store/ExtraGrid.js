// đặt tên = "ĐỊA CHỈ"
Ext.define('MyApp.store.ExtraGrid', {
    extend: 'Ext.data.Store',   // kế thừa từ STORE

    // CYDB - EXPORT = xuất ra "ĐỦ TIỀN TỐ = store."
    alias: 'store.extraGrid',   // ALIAS = XTYPE = EXPORT = xuất ra "ĐỦ TIỀN TỐ = store."

    // dữ liệu - DATA.ITEMS ==> CYDB: phải khai báo "DATA-ITEMS" vào "ROOT-PROPERTY"
    data: {
        items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
            { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
            { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
            { name: 'tuantran',   email: "tuantran@enterprise.com",    phone: "666-333-3333" },
            { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    // PROXY:
    proxy: {
        type: 'memory',             // loại 
        reader: {
            type: 'json',           // kiểu dữ liệu
            rootProperty: 'items'   // CYDB: phải khai báo "DATA-ITEMS" vào "ROOT-PROPERTY"
        }
    }
})