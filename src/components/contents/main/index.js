import 'bootstrap-tuoqun-theme/dist/css/bootstrap-tuoqun-theme.css';
import 'bootstrap-tuoqun-theme/dist/js/bootstrap-tuoqun-theme';
import '@assets/css/style.css';
import menu from '@layout/menu.html';
import navbar from '@layout/navbar.html';
import 'bootstrap-wrapper/packages/menu';

$(document).ready(() => {
    $("#menu").html(menu);
    $("#navbar").html(navbar);
    $("#menu ul").MenuWrapper({
        source: [
            {
                iconCls: 'glyphicon glyphicon-cloud', text: '概述', url: 'aa', attributes: { url: 'overview.html' }
            },
            {
            iconCls: 'glyphicon glyphicon-cloud', text: '组件', attributes: { url: 'www.c.com' }, children: [
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: 'menu', attributes: { url: 'menu.html' }
                },
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: 'table', attributes: { url: 'table.html' }
                }, 
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: 'loader', attributes: { url: 'loader.html' }
                }, 
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: 'confirm', attributes: { url: 'confirm.html' } 
                },
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: 'dialog', attributes: { url: 'dialog.html' }
                }, 
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: 'step', attributes: { url: 'step.html' }
                }, 
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: 'tip', attributes: { url: 'tip.html' }
                }, 
            ]
        }],
        onLeafClick($item, remote, attrs) {
            $('#main #content iframe').attr('src', attrs.url)
        }
    });
});