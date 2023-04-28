Ext.onReady(function() {
    Ext.Msg.alert('Hello', 'World!');
    Ext.create("Ext.panel.Panel", {
        width : 300,
        height : 200,
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
        layout : "border",
        border : true,
        items : [{
            xtype : 'panel',
            region : 'north',
            title : '패널',
        }, {
            xtype : 'panel',
            region : 'center',
            title : '패널2',
        }]
    });
});