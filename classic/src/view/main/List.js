/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    // XTYPE = ALIAS = EXPORT:  "XTYPE = MAINLIST"
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        // CYDB 3 - LẮNG NGHE SỰ KIỆN "SELECT" - gọi HANDLE trong CONTROLLER "MAIN"
        select: 'onItemSelected'
    }
});
