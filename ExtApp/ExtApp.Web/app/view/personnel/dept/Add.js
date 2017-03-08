﻿
// ---------------- 组织机构添加 ------------------

Ext.define('App.view.personnel.dept.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.deptadd',

    requires: [
        'Ext.ux.TreePicker',
        'App.view.personnel.dept.AddController'
    ],

    controller: 'deptadd',

    title: '添加机构',
    layout: 'fit',
    modal: true,
    iconCls: 'Applicationsidetree',

    items: {
        xtype: 'form',
        border: false,
        layout: 'form',
        defaults: {
            margin: 10
        },
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 50
        },
        items: [{
            xtype: 'treepicker',
            name: 'PID',
            fieldLabel: '<span style="color:red;">*</span>上级',
            editable: false,
            allowBlank: false,
            displayField: 'text',
            value: '',
            store: Ext.create('Ext.data.TreeStore', {
                fields: ['id', 'text'],
                root: {
                    text: '天朝部门',
                    expanded: true,
                    children: [{
                        text: '部门一'
                    }, {
                        text: '部门二'
                    }]
                }
            })
        }, {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: '<span style="color:red;">*</span>名称',
            allowBlank: false
        }, {
            xtype: 'combo',
            store: [[
                0, '机构'
            ], [
                1, '区域'
            ]],
            name: 'TypeID',
            fieldLabel: '<span style="color:red;">*</span>类型',
            editable: false,
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'HeadID',
            fieldLabel: '<span style="color:red;">*</span>负责人'
        }, {
            xtype: 'numberfield',
            name: 'Layer',
            fieldLabel: '排序',
            allowBlank: false,
            value: 0
        }, {
            xtype: 'combo',
            store: [[
                0, '启用'
            ], [
                -1, '禁用'
            ]],
            name: 'Status',
            value: 0,
            editable: false,
            fieldLabel: '状态'
        }, {
            xtype: 'textarea',
            name: 'Comment',
            fieldLabel: '备注'
        }]
    },
    buttons: [{
        text: '保存',
        iconCls: 'Accept',
        handler: 'onSaveClick'
    }, {
        text: '取消',
        iconCls: 'Cancel',
        handler: 'onCancelClick'
    }]
});
