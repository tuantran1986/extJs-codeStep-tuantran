Ext.define('MyApp.view.main.SearchForm', {
    extend: 'Ext.form.Panel',
    title: 'Form Tutorial',     // tiêu đề form

    // NỘI DUNG - FORM
    items: [
        // 1. KIỂU CHUỖI = "textfield"
        {
            xtype: 'textfield',         // kiểu chuỗi
            fieldLabel: 'First Name',
            name: 'firstName'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            name: 'lastName'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email'
        },
        // 2. KIỂU NGÀY THÁNG = "datefield"
        {
            xtype: 'datefield',         // kiểu ngày tháng
            fieldLabel: 'DOB',
            name: 'dob'
        },        
    ],

    // NÚT - SUBMIT FORM
    buttons: [
        {
            text: 'Submit me',
            handler: function(btn) {
                var data = this.up('form');
                console.log('FORM SEARCH - DATA = ', data);
                
                var valueDataForm = this.up('form').getForm().getValues();
                console.log('FORM SEARCH - VALUE DATA FORM = ', valueDataForm);
            }
        }
    ],
})