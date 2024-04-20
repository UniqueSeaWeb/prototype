/* コンポーネント：Counter */
if (document.getElementById('c_counter_time')) {
    const counter = document.getElementById('c_counter_time');
    const startBtn = document.getElementById('c_counter_startBtn');
    const clearBtn = document.getElementById('c_counter_clearBtn');
    let time = 0;
    // setInterval(function () {
    //     counter.innerText = 
    // }, 1000);
}

/* コンポーネント：button */
window.addEventListener('DOMContentLoaded', function () {
    if (document.getElementsByClassName('c_button')) {
        // ボタンが非活性の場合、タブ操作を無効化
        const btn = document.getElementsByClassName('c_button');
        for (let i = 0; i < btn.length; i++) {
            if (btn[i].classList.contains('c_button_disabled')) {
                btn[i].tabIndex = -1;
            }

            // フォーカス状態でEnter押下時
            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    this.click();
                }
            });
        }
    }
});

/* コンポーネント：Carousel */
if (document.getElementsByClassName('c_carousel')) {
    const carousel = document.getElementsByClassName('c_carousel');
    for (let i = 0; i < carousel.length; i++) {
        const dot = carousel[i].getElementsByClassName('c_carousel_dot');

        for (let j = 0; j < dot.length; j++) {
            dot[j].addEventListener('click', function () {
                if (!this.classList.contains('c_carousel_active')) {
                    const activeDot = this.parentElement.parentElement.getElementsByClassName('c_carousel_active')[0];
                    activeDot.classList.remove('c_carousel_active');
                    this.classList.add('c_carousel_active');
                }
            });
        }
    }
}

/* コンポーネント：Navigation */
if (document.getElementsByClassName('c_nav')) {
    // ナビゲーションが存在する場合
    // ナビゲーションの要素を取得
    const nav = document.getElementsByClassName('c_nav');

    for (let i = 0; i < nav.length; i++) {
        // バーエリア押下時の処理
        nav[i].getElementsByClassName('c_nav_barArea')[0].addEventListener('click', function () {
            // バーエリアを開く
            this.parentElement.classList.add('c_nav_open');
        });

        // メニューエリア押下時の処理
        nav[i].getElementsByClassName('c_nav_menuArea')[0].addEventListener('click', function () {
            // バーエリアを閉じる
            this.parentElement.classList.remove('c_nav_open');
        });
    }
}

/* コンポーネント：Dialog */
if (document.getElementsByClassName('c_dialog')) {
    // ダイアログが存在する場合
    // ダイアログを開く関数
    function showDialog(dialog) {
        dialog.show();
    }

    // ダイアログを閉じる関数
    function closeDialog(dialog) {
        dialog.close();
    }

    const dialog = document.getElementsByClassName('c_dialog');

    for (let i = 0; i < dialog.length; i++) {
        // ダイアログターゲット押下時の処理
        dialog[i].getElementsByClassName('c_dialog_target')[0].addEventListener('click', function () {
            if (dialog[i].getElementsByClassName('c_dialog_backGround')[0].open) {
                // ダイアログコンテンツを非表示
                closeDialog(dialog[i].getElementsByClassName('c_dialog_backGround')[0]);
            } else {
                // ダイアログコンテンツを表示
                showDialog(dialog[i].getElementsByClassName('c_dialog_backGround')[0]);
            }
        });

        // ×ボタン押下時の処理
        dialog[i].getElementsByClassName('c_dialog_closeIcon')[0].addEventListener('click', function () {
            // ダイアログコンテンツを非表示
            closeDialog(dialog[i].getElementsByClassName('c_dialog_backGround')[0]);
        });

        // ×ボタンEnter時の処理
        dialog[i].getElementsByClassName('c_dialog_closeIcon')[0].firstElementChild.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                this.parentElement.click();
            }
        });

        // ダイアログ押下時の処理
        dialog[i].getElementsByClassName('c_dialog_backGround')[0].addEventListener('click', function () {
            if (dialog[i].getElementsByClassName('c_dialog_backGround')[0].open) {
                // ダイアログコンテンツを非表示
                closeDialog(dialog[i].getElementsByClassName('c_dialog_backGround')[0]);
            } else {
                // ダイアログコンテンツを表示
                showDialog(dialog[i].getElementsByClassName('c_dialog_backGround')[0]);
            }
        });

        // コンテンツのクリックイベントを防止
        dialog[i].getElementsByClassName('c_dialog_contents')[0].addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
}

// 全角英数字を半角に変換する関数
function convertZenkakuIntoHankaku(str) {
    str = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
    return str;
}

// 半角英数字を全角に変換する関数
function convertHankakuIntoZenkaku(str) {
    str = str.replace(/[A-Za-z0-9]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
    return str;
}

// 任意の要素まで0.6秒かけてスクロールするアニメーション関数
function scrollToElement(element) {
    // 要素の位置を取得
    var targetY = element.getBoundingClientRect().top + window.pageYOffset;

    // アニメーション開始時間
    var startTime = Date.now();

    // アニメーションループ
    function animationLoop() {
        // 経過時間
        var elapsedTime = Date.now() - startTime;

        // スクロール位置を計算
        var scrollY = easeInOutCubic(elapsedTime, window.pageYOffset, targetY - window.pageYOffset, 600);

        // スクロール
        window.scrollTo(0, scrollY);

        // アニメーションが終了していない場合はループを継続
        if (elapsedTime < 600) {
            requestAnimationFrame(animationLoop);
        }
    };

    // アニメーション開始
    requestAnimationFrame(animationLoop);
}

// easing関数
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}