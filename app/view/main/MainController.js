/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // CONTROLLER - khai báo METHOD
    onItemSelected: function (sender, record) {
                                                            // CYDB 2 - SU DUNG - method
        Ext.Msg.confirm('Confirm', 'Are you sure TUANTRAN?', 'onConfirm', this);
    },

    // CYDB 3 - khai báo method HANDLE trong CONTROLLER "MAIN"
    // CYDB 2 - khai báo - method
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
            alert('OK - CONFIRM')
        }
    }
});
