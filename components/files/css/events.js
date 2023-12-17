/* コンポーネント：menu */
if (document.getElementsByClassName('c_menu')) {
    const menu = document.getElementsByClassName('c_menu');
    for (let i = 0; i < menu.length; i++) {
        menu[i].lastElementChild.addEventListener('click', function () {
            if (this.parentElement.classList.contains('c_menu_close')) {
                this.parentElement.classList.remove('c_menu_close');
                this.parentElement.classList.add('c_menu_open');
            } else {
                this.parentElement.classList.remove('c_menu_open');
                this.parentElement.classList.add('c_menu_close');
            }
        });
    }
}

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
            if (this.parentElement.classList.contains('c_nav_open')) {
                // 既に開いている場合
                // バーエリアを閉じる
                this.parentElement.classList.remove('c_nav_open');
            } else {
                // 閉じている場合
                // バーエリアを開く
                this.parentElement.classList.add('c_nav_open');
            }
        });
    }
}