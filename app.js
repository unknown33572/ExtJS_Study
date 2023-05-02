/*
Ext.onReady(function() {
    Ext.Msg.alert('Hello', 'World!');
    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 300,
        padding : 55,
        renderTo : Ext.getBody(),
        border : true,
        items : [{
            xtype : 'numberfield',
        }, {
            xtype : 'textfield',
        }, {
            xtype : 'button',
            text : 'Click Me!'
        }]
    });
    Ext.create("Ext.container.Viewport", {
        renderTo : Ext.getBody(),
        layout : 'border',
        border : true,
        items : [{
            xtype : 'panel',
            height : 300,
            flex : 1,
            border : true,
            region : 'north',
            title : '패널',
            items : [{
                xtype : 'panel',
                border : true,
                flex : 1,
                region : 'west',
            }, {
                xtype : 'panel',
                border : true,
                flex : 1,
                region : 'east',
            }]
        }, {
            xtype : 'panel',
            flex : 1,
            border : true,
            region : 'west',
            title : '패널2',
        }, {
            xtype : 'panel',
            flex : 1,
            border : true,
            region : 'east',
            title : '패널3',
        }, {
            xtype : 'panel',
            flex : 1,
            border : true,
            region : 'south',
            title : '패널4',
        }]
    });
});
*/


// Ext.onReady(function() {
//     Ext.create("Ext.container.Viewport", {
//         layout : 'fit',
//         border : true,
//         items : [{
//             xtype : 'panel',
//             title : '상위패널',
//             layout : 'absolute',
//             items : [{
//                 xtype : 'panel',
//                 title : '첫 번째 하위패널',
//                 width : 300,
//                 height : 300,
//                 x : 300,
//                 y : 600,
//                 border : true,
//             }, {
//                     xtype : 'panel',
//                     width : 300,
//                     height : 300,
//                     x : 150,
//                     y : 300,
//                     border : true,
//                     title : '두 번째 하위패널',
//             }]
//         }]
//     });
// });


// Ext.onReady(function() {
//     Ext.create("Ext.panel.Panel", {
//         width : 500,
//         height : 300,
//         title : '패널',
//         renderTo : Ext.getBody(),
//         layout : 'border',
//         items : [{
//             xtype : 'panel',
//             border : true,
//             flex : 1,
//             region : 'west',
//             title : '좌측입니다.',
//             split : true,
//             html : '<b>안녕하세요.</b>'
//         }, {
//             xtype : 'panel',
//             border : true,
//             flex : 2,
//             region : 'center',
//             layout : 'border',
//             items : [{
//                 xtype : 'panel',
//                 border : true,
//                 flex : 2,
//                 region : 'center',
//                 layout : 'center',
//                 items : [{
//                     xtype : 'button',
//                     text : '버튼',
//                     // handler : function() {
//                     //     Ext.Msg.alert('알림', '버튼을 눌렀습니다.');
//                     // }
//                     listeners : {
//                         click : function(btn) {
//                             alert('알림', '버튼을 눌렀습니다.');
//                         }
//                     }
//                 }]
//             }, {
//                 xtype : 'panel',
//                 border : true,
//                 flex : 1,
//                 region : 'south',
//                 split : true
//             }]
//         }]
//     });
// });


// Ext.onReady(function() {
//     Ext.create("Ext.container.Viewport", {
//         layout : 'border',
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'panel',
//             width : 150,
//             split : true,
//             region : 'west',
//             title : 'explorer'
//         }, {
//             xtype : 'panel',
//             flex : 1,
//             region : 'center',
//             title : 'test',
//             header : false,
//             layout : 'border',
//             items : [{
//                 xtype : 'panel',
//                 flex : 2,
//                 region : 'center',
//                 title : 'app'
//             }, {
//                 xtype : 'panel',
//                 flex : 1,
//                 split : true,
//                 region : 'south',
//                 title : 'servers'
//             }]
//         }]
//     });
// });


// Ext.onReady(function() {
//     Ext.create("Ext.container.Viewport", {
//         layout : 'border',
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'panel',
//             height : 100,
//             header : false,
//             region : 'north',
//             items : [{
//                 xtype : 'toolbar',
//                 items : [{
//                     xtype : 'button',
//                     text : '버튼1',
//                     menu : [{
//                         text : '새 문서',
//                         iconCls : 'x-fa fa-file'
//                     }, {
//                         text : '메뉴2'
//                     }, {
//                         text : '메뉴3'
//                     }]
//                 }, {
//                     xtype : 'button',
//                     text : '버튼2'
//                 }, {
//                     xtype : 'button',
//                     text : '버튼3'
//                 }, {
//                     xtype : 'segmentedbutton',
//                     items : [{
//                         xtype : 'button',
//                         text : '버튼4'
//                     }, {
//                         xtype : 'button',
//                         text : '버튼5'
//                     }, {
//                         xtype : 'button',
//                         text : '버튼6'
//                     }]
//                 }]
//             }, {
//                 xtype : 'toolbar',
//                 items : [{
//                     xtype : 'button',
//                     iconCls : 'x-fa fa-plus'
//                 }, {
//                     xtype : 'button',
//                     iconCls : 'x-fa fa-minus'
//                 }, {
//                     xtype : 'button',
//                     iconCls : 'x-fa fa-play',
//                     scale : 'small'
//                 }, {
//                     xtype : 'button',
//                     iconCls : 'x-fa fa-pause',
//                     scale : 'medium'
//                 }, {
//                     xtype : 'button',
//                     iconCls : 'x-fa fa-stop',
//                     scale : 'large'
//                 }]
//             }]
//         }]
//     });
// });


// Ext.onReady(function() {
    // Ext.Msg.alert('알림', '안녕하세요.');
    // Ext.Msg.confirm('확인', '정말로 삭제하시겠습니까?', function(btn) {
    //     if(btn == 'yes') {
    //         Ext.Msg.alert('알림', '삭제되었습니다.');
    //     } else {
    //         Ext.Msg.alert('알림', '삭제가 취소되었습니다.');
    //     }
    // });
    // Ext.toast({
    //     html : '안녕하세요.',
    //     align : 'b'
    // });
//     Ext.MessageBox.show({
//         title : '상단제목',
//         msg : '중앙내용',
//         icon : Ext.MessageBox.QUESTION,
//         buttons : Ext.MessageBox.YESNO,
//         fn : function(btn) {
//             if(btn == 'yes') {
//                 Ext.Msg.alert('알림', 'yes를 눌렀습니다.');
//             } else {
//                 Ext.Msg.alert('알림', 'no를 눌렀습니다.');
//             }
//         }
//     });
// });


// Ext.onReady(function() {
//     Ext.create("Ext.panel.Panel",{
//         border : true,
//         width : 500,
//         height : 500,
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'button',
//             text : '패널버튼',
//             handler : function(btn) {
//                 var win = Ext.create("Ext.window.Window",{
//                     width : 300,
//                     height : 300,
//                     title : 'window title',
//                     items : [{
//                         xtype : 'button',
//                         text : '윈도우버튼'
//                         }],
//                         maximizable : true,
//                         modal : true
//                     });
//                 win.show();
//                 }
//             }]
//     });
//     Ext.create("Ext.window.Window",{
//         width : 300,
//         height : 300,
//         autoShow : true,
//         title : '윈도우',
//         items : [{
//             xtype : 'button',
//             text : '버튼'
//         }]
//     })
// });


// Ext.onReady(function() {
//     Ext.create("Ext.tab.Panel",{
//         width : 500,
//         height : 500,
//         renderTo : Ext.getBody(),
//         tabPosition : 'left',
//         items : [{
//             xtype : 'panel',
//             title : '탭1',
//             items : [{
//                 xtype : 'button',
//                 text : '버튼1'
//             }]
//         }, {
//             xtype : 'panel',
//             title : '탭2',
//             items : [{
//                 xtype : 'button',
//                 text : '버튼2'
//             }]
//         }, {
//             xtype : 'panel',
//             title : '탭3',
//             items : [{
//                 xtype : 'button',
//                 text : '버튼3'
//             }]
//         }]
//     });
// });


// Ext.onReady(function() {
//     Ext.create("Ext.panel.Panel",{
//         width : 500,
//         height : 500,
//         title : '폼필드 알아보기',
//         renderTo : Ext.getBody(),
//         items : [{
//             xtype : 'textfield',
//             allowBlank : false,
//             emptyText : '이름을 입력하세요.'
//         }, {
//             xtype : 'textfield',
//             inputType : 'password',
//             allowBlank : false,
//             emptyText : '비밀번호를 입력하세요.'
//         }]
//     });
// });


