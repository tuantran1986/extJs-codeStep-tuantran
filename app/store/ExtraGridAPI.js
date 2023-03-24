Ext.define('MyApp.store.ExtraGridAPI', {
    extend: 'Ext.data.Store',

    // ALIAS = XTYPE = EXPORT: phải có TIỀN TỐ = "STORE."
    alias: 'store.extraGridAPI',    // khi gọi để dùng - chỉ cần "extraGridAPI"

    proxy: {
        type: 'ajax',                       // call api = AJAX
        url: 'http://localhost:3000/users'  // URL = BACKEND
    },

    // TỰ ĐỘNG LOAD
    autoLoad: true
})