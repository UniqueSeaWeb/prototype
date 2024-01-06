/* サンプル（関数内変数定義） */
window.addEventListener('DOMContentLoaded', function () {
    const box = document.getElementById('box');
    const btn = document.getElementById('btn');
    let clickCnt = 0;

    btn.addEventListener('click', function () {
        clickCnt += 1;
        if (clickCnt == 1) {
            box.classList.add('boxOrange');
        } else if (clickCnt == 2) {
            box.classList.add('boxRed');
        } else if (clickCnt == 3) {
            box.classList.add('boxGreen');
        } else {
            box.classList.add('hiddenFlg');
        }
    });
});