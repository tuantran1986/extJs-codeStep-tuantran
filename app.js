/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // 1.CYDB - MAINVIEW = "view chính"
    // The name of the initial view to create = MAINVIEW
    mainView: 'MyApp.view.main.Extra'

    // 1. LUỒNG: APP - VIEW MAIN - MODEL MAIN
    // mainView: 'MyApp.view.main.Main',
    
});
