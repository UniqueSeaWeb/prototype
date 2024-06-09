/* サンプル（Vibration） */
import * as Vibrate from 'vibrate';

window.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('sp_btn');
    const btn2 = document.getElementById('sp_btn2');
    
    btn.addEventListener('click', function () {
        Vibrate.simpleTop();
    });

    btn2.addEventListener('click', function () {
        window.navigator.vibrate(200);
    });
});