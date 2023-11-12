/* ログイン認証 */
function checkInput() {
    // IDとパスワードの入力値を取得
    const loginId = document.getElementById('lal_loginId').value;
    const loginPw = document.getElementById('lal_loginPw').value;
    const errNotification = document.getElementById('lal_errNotification');

    if (loginId.trim().length == 0) {
        // 入力されたIDが空白またはスペースのみの場合
        // エラーノーティフィケーションを表示
        errNotification.classList.remove('lal_notification_hidden');
        if (loginPw.trim().length == 0) {
            // 入力されたパスワードが空白またはスペースのみの場合
            // エラー文言を表示
            errNotification.lastElementChild.firstElementChild.innerText = 'IDとパスワードを入力してください。';
            return false;
        } else {
            // エラー文言を表示
            errNotification.lastElementChild.firstElementChild.innerText = 'IDを入力してください。';
            return false;
        }
    } else {
        if (loginPw.trim().length == 0) {
            // 入力されたパスワードが空白またはスペースのみの場合
            // エラーノーティフィケーションを表示
            errNotification.classList.remove('lal_notification_hidden');
            // エラー文言を表示
            errNotification.lastElementChild.firstElementChild.innerText = 'パスワードを入力してください。';
            return false;
        } else {
            // IDとパスワードの両方が入力されている場合
            // エラーノーティフィケーションを非表示
            errNotification.classList.add('lal_notification_hidden');
            // エラー文言を非表示
            errNotification.lastElementChild.firstElementChild.innerText = '';
            return true;
        }
    }
}

const loginBtn = document.getElementById('lal_loginBtn');
loginBtn.addEventListener('click', function () {
    // ボタンを非活性化
    this.disabled = true;

    if (!checkInput()) {
        // ボタンを活性化
        this.disabled = false;
    }

    // location.href = './home.html';
});