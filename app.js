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


Ext.onReady(function() {
    Ext.create("Ext.container.Viewport", {
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel',
            title : '상위패널',
            layout : 'card',
            items : [{
                xtype : 'panel',
                title : '첫 번째 하위패널',
                width : 300,
                height : 300,
                x : 300,
                y : 600,
                border : true,
            }, {
                    xtype : 'panel',
                    width : 300,
                    height : 300,
                    x : 150,
                    y : 300,
                    border : true,
                    title : '두 번째 하위패널',
            }]
        }]
    });
});