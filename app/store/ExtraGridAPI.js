Ext.define('MyApp.store.ExtraGridAPI', {
    extend: 'Ext.data.Store',

    // ALIAS = XTYPE = EXPORT: phải có TIỀN TỐ = "STORE."
    alias: 'store.extraGridAPI',    // khi gọi để dùng - chỉ cần "extraGridAPI"

    // // "STORE" - khai  báo chức năng "FILTER từ BACKEND"
    // itemId: 'extraGridAPI',
    // remoteFilter: true,             // khai báo "BACKEND FILTER" = FILTER REMOTE
    // storeId: 'extraGridAPI',

    // PHÂN TRANG = PAGINATION:
    pageSize: 4,            // đặt PAGE_SIZE: 4
    // pageSize: 2,            // đặt PAGE_SIZE: 2

    proxy: {
        type: 'ajax',                       // call api = AJAX
        url: 'http://localhost:3000/users'  // URL = BACKEND
    },

    // TỰ ĐỘNG LOAD
    autoLoad: true
})