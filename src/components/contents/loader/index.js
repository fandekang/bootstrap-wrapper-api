import 'bootstrap-tuoqun-theme/dist/css/bootstrap-tuoqun-theme.css';
import 'bootstrap-tuoqun-theme/dist/js/bootstrap-tuoqun-theme';
import '@assets/css/style.css';
import '@assets/css/common.css';
import toggleDiv from '@assets/js/toggleDiv';
import 'bootstrap-wrapper/packages/loader';
$(document).ready(() => {
    $.LoaderWrapper()
    // 显示隐藏代码
    toggleDiv()
})