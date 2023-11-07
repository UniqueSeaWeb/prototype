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
    setInterval(function () {
        counter.innerText = 
    }, 1000);
}