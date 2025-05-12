"use client";

function Page() {
    return(
        <button className="w-fit p-3 rounded border font-bold" onClick={() => {
            alert("ボタンが押されました")
            // alertはダイアログボックスが表示される関数
        }}>
            ボタン
        </button>
    )
}

export default Page;