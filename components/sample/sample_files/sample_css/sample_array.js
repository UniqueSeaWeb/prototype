/* サンプル（Array） */
window.addEventListener('DOMContentLoaded', function () {
    // 要素を取得
    const digit = document.getElementById('sp_digit'); // 桁数入力欄
    const errArea = document.getElementById('sp_errArea'); // エラーエリア
    const generateBtn = document.getElementById('sp_generateBtn'); // 配列を生成ボタン
    const cardArea = document.getElementById('sp_cardArea'); // カードエリア
    const cardList = document.getElementById('sp_cardList'); // カードリスト
    const ascBtn = document.getElementById('sp_ascBtn'); // 昇順ボタン
    const descBtn = document.getElementById('sp_descBtn'); // 降順ボタン
    const reloadBtn = document.getElementById('sp_reloadBtn'); // リロードボタン

    let cardNumArray = [];

    // 入力チェック
    function checkErr() {
        if (digit.value.match(/^(?:[0-9]{1,2}|[０-９]{1,2})$/)) {
            errArea.classList.add('sp_hidden');
        } else {
            errArea.classList.remove('sp_hidden');
        }
    }

    digit.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            // エラーチェック
            checkErr();

            if (errArea.classList.contains('sp_hidden')) {
                this.blur();
                generateBtn.click();
            }
        }
    });

    // 配列を生成ボタン押下時の処理
    generateBtn.addEventListener('click', function () {
        // エラーチェック
        checkErr();

        if (errArea.classList.contains('sp_hidden')) {
            if (cardList.children.length != 0) {
                cardList.innerHTML = '';
                cardNumArray.splice(0);
            }

            // 桁数入力欄の入力値を取得
            let digitNum = digit.value;
            // 全角英数字を半角に変換
            digitNum = convertZenkakuIntoHankaku(digitNum);
            // ゼロサプレス
            digit.value = parseInt(digitNum);

            for (let i = 0; i < digitNum; i++) {
                let li = document.createElement('li');
                let card = document.createElement('div');
                card.classList.add('sp_card');
                let p = document.createElement('p');
                p.classList.add('c_typo_headerM', 'c_typo_BLK01', 'c_typo_center');
                p.innerText = Math.floor(Math.random() * 10);
                card.appendChild(p);
                li.appendChild(card);
                cardList.appendChild(li);
                cardNumArray.push(Math.floor(Math.random() * 10));
            }
            // カードエリアを表示
            cardArea.classList.remove('sp_hidden');
            // 配列を生成ボタン外枠までスクロール
            scrollToElement(generateBtn.parentElement);
        }
    });

    ascBtn.addEventListener('click', function () {
        const ackArray = cardNumArray.toSorted();
        for (let i = 0; i < cardList.children.length; i++) {
            cardList.children.item(i).firstElementChild.firstElementChild.innerText = ackArray[i];
        }
    });

    descBtn.addEventListener('click', function () {
        const descArray = cardNumArray.toSorted().toReversed();
        for (let i = 0; i < cardList.children.length; i++) {
            cardList.children.item(i).firstElementChild.firstElementChild.innerText = descArray[i];
        }
    });

    reloadBtn.addEventListener('click', function () {
        for (let i = 0; i < cardList.children.length; i++) {
            cardList.children.item(i).firstElementChild.firstElementChild.innerText = cardNumArray[i];
        }
    });
});