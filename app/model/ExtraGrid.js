Ext.define('MyApp.model.ExtraGrid', {
    extend: 'Ext.data.Model',
    // extend: 'MyApp.model.Base',

    alias: 'model.ExtraGrid',   // phải có TIỀN TỐ ==> đánh dấu - nó là MODEL.
    // ALIAS = XTYPE = EXPORT ==> phải có TIỀN TỐ = "model.ExtraGrid"

    // khai báo CÁC TRƯỜNG DỮ LIỆU - KIỂU DỮ LIỆU
    fields: [
        { name: 'name', type: 'string'},
        // { name: 'name', type: 'int'},    // TEST = "NAN"
        { email: 'email', type: 'string'},
        { phone: 'phone', type: 'string'}
    ]
})