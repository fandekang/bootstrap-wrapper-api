import 'bootstrap-tuoqun-theme/dist/css/bootstrap-tuoqun-theme.css';
import 'bootstrap-tuoqun-theme/dist/js/bootstrap-tuoqun-theme';
import '@assets/css/style.css';
import '@assets/css/common.css';
import toggleDiv from'@assets/js/toggleDiv';
import 'bootstrap-wrapper/packages/table';

const source = [{
    "ownname": "张三", "address": "南京市狮子桥", "phone": "123", "bank": "南京银行", "account": "account123"
}, {
    "ownname": "李四", "address": "南京市狮子桥", "phone": "123", "bank": "南京银行", "account": "account123"
}, {
    "ownname": "王五", "address": "南京市狮子桥", "phone": "123", "bank": "南京银行", "account": "account123"
}],
columns = [
    {
        field: 'ck'
    },
    {
        field: 'ownname',
        title: '名称',
        formatter: function (value) {
            if (value === '2') {
                return '1';
            }
            else {
                return '3';
            }
        }
    },
    {
        field: 'address',
        title: '地址'
    },
    {
        field: 'phone',
        title: '手机号',
        cellClick: function (value, trData, event, field) {
        }
    },
    {
        field: 'bank',
        title: '银行卡名称'
    },
    {
        field: 'account',
        title: '银行卡账号'
    }
]

$(document).ready(() => {
    $("#table-list").TableWrapper({
        source,
        columns,
    })
    // 显示隐藏代码
    toggleDiv()
})