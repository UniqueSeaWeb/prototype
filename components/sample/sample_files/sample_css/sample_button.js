/* サンプル（Button） */
document.getElementById('c_button02_input').addEventListener('change', function () {
    // アップロードされたファイルのファイルオブジェクトを取得
    const file = this.files[0];

    // 画像名を表示
    document.getElementById('uploadImgName').innerText = file.name;

    // ファイルの種類が画像であることを確認
    if (file.type.match(/image\/.*/)) {

        // ファイルのバイナリデータを取得
        const data = file.slice();

        // FileReaderオブジェクトを作成
        const reader = new FileReader();

        // FileReaderオブジェクトのonloadイベントにイベントハンドラを登録
        reader.addEventListener("load", function () {
            // 画像データをimgタグのsrc属性に設定
            document.getElementById('uploadImg').src = reader.result;
        });

        // FileReaderオブジェクトにバイナリデータを読み込む
        reader.readAsDataURL(data);
    }
});

const releaseMemoryLeaksBtn = document.getElementById('releaseMemoryLeaksBtn');
releaseMemoryLeaksBtn.addEventListener('click', function () {
    URL.revokeObjectURL();
});