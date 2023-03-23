/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    // 3. LUỒNG: APP - VIEW MAIN - MODEL MAIN
    // 3. KHAI BÁO - MODEL + CONTROLLER: không cần TIỀN TỐ 'viewmodel.main' ==> 'main'
    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            // CYDB 1 - BIND - để lấy dữ liệu từ - MAINMODEL, thông qua {}
            // ngoặc nhọn {} - là để LẤY GIÁ TRỊ BIẾN
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    // ITEMS = content nội dung :
    items: [{
        // 1.TAB - HOME
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        // TAP - HOME: có "XTYPE = ALIAS = EXPORT từ: MAINLIST"
        items: [{
            // SỬA NỘI DUNG = XTYPE = 'EXTRA'
            xtype: 'Extra'
            // xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        // 2. hiển thị nội dung = XTYPE
        // xtype: 'Extra',

        // 4. LUỒNG: APP - VIEW MAIN - MODEL MAIN
        // lấy VALUE của BIẾN trong MODEL ra dùng = toán tử {}
        bind: {
            html: '{loremIpsum}'
            // 1.EXTRA - không ăn code HTML
            // html: '{Extra}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
