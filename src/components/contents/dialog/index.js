import 'bootstrap-tuoqun-theme/dist/css/bootstrap-tuoqun-theme.css';
import 'bootstrap-tuoqun-theme/dist/js/bootstrap-tuoqun-theme';
import '@assets/css/style.css';
import '@assets/css/common.css';
import toggleDiv from '@assets/js/toggleDiv';
import 'bootstrap-wrapper/packages/dialog';


$(document).ready(() => {
    $.DialogWrapper({
        height: "200px",
        width: "300px",
        title: "对话框标题",
        content: "对话框内容",
        padding: "15px",
    });
    // 显示隐藏代码
    toggleDiv()
});