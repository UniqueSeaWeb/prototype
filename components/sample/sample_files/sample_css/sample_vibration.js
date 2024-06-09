/* サンプル（Vibration） */
import * as Vibrate from 'vibrate';

window.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('sp_btn');

    btn.addEventListener('click', function () {
        Vibrate.simpleTop();
    });
});