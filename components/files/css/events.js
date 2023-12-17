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