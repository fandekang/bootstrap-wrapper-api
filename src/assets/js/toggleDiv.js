export default function toggleDiv() {
    let textStatus = true
    $('#codeDiv').on('click', () => {
        $('.codeArea').toggleClass('show')
        textStatus = !textStatus
        if (!textStatus) {
            $('.showDivSpan span').html('隐藏代码')
        } else {
            $('.showDivSpan span').html('显示代码')
        }
    })
}