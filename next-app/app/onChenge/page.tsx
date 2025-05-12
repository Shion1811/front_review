"use client";

function Page() {
    return(
        <input className="p-2 rounded-xl border"
        // onChangeは入力時に実行される処理
        // onChange={(e) => {
        //     alert(e.target.valueo);
            // e.target.valueは入力された値
        // }}
        onChange={(e) => {
            setTimeout(() => {
                if (e.target.value === "ハローワールド") {
                    alert("実行ーー");
                } else if (e.target.value.length >= 10) {
                    alert("打って欲しい内容を入力してください");
                }
            }, 2000); // 2秒後に実行
        }}
        />
        // イベントハンドラーのアラート？がクリックされた時に処理を書きたい
    );
}

export default Page;