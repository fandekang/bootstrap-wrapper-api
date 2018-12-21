import 'bootstrap-tuoqun-theme/dist/css/bootstrap-tuoqun-theme.css';
import 'bootstrap-tuoqun-theme/dist/js/bootstrap-tuoqun-theme';
import '@assets/css/style.css';
import '@assets/css/common.css';
import toggleDiv from '@assets/js/toggleDiv';
import menu from '@layout/menu.html';
import 'bootstrap-wrapper/packages/menu';

$(document).ready(() => {
    $('#menu-list').html(menu)
    $("#menu-list ul").MenuWrapper({
        source: [{
            iconCls: 'glyphicon glyphicon-cloud', text: '菜单1', url: 'aa', attributes: { url: 'www.c.com' }
        }, {
            iconCls: 'glyphicon glyphicon-cloud', text: '菜单2', attributes: { url: 'www.c.com' }, children: [
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: '菜单2-1', attributes: { url: 'www.c.com' }
                },
                {
                    iconCls: 'glyphicon glyphicon-cloud', text: '菜单2-2', attributes: { url: 'www.c.com' }
                }, {
                    iconCls: 'glyphicon glyphicon-cloud', text: '菜单2-3', attributes: { url: 'www.c.com' }
                }, {
                    iconCls: 'glyphicon glyphicon-cloud', text: '菜单2-4', attributes: { url: 'www.c.com' }
                },
            ]
        }],
        onLeafClick($item, remote, attrs) {
            $('#main #content iframe').attr('src', attrs.url)
        }
    })
    // 显示隐藏代码
    toggleDiv()

});