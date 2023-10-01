/* アイコン移動 */
if (document.getElementById('c_moveIcon')) {
    // アイコン要素の取得
    const icon = document.getElementById('c_moveIcon_icon');

    // 初期時の座標
    const defaultX = icon.getBoundingClientRect().left;
    const defaultY = icon.getBoundingClientRect().top;
    // 移動開始時の座標
    let startX;
    let startY;
    // 移動中の座標
    let moveX;
    let moveY;

    // タッチ開始時
    icon.addEventListener('touchstart', function (e) {
        // 端末のデフォルト動作をキャンセル
        e.preventDefault();

        // タッチ開始時の座標を取得
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    });

    // タッチ中
    icon.addEventListener('touchmove', function (e) {
        // 端末のデフォルト動作をキャンセル
        e.preventDefault();

        // タッチ中の座標を取得
        moveX = e.changedTouches[0].pageX;
        moveY = e.changedTouches[0].pageY;

        // アイコンの座標を設定
        icon.style.top = `${moveY - defaultY - (icon.getBoundingClientRect().bottom - icon.getBoundingClientRect().top) / 2}px`;
        icon.style.left = `${moveX - defaultX - (icon.getBoundingClientRect().right - icon.getBoundingClientRect().left) / 2}px`;
    });
}