"use client";
// useStateをインポート
import { useState } from "react";

function Page() {
    // const [変数名, 関数名] = useState(初期値);
    // 初期値が変数に入る
    const [text, setText] = useState("")
    const [displayText, setDisplayText] = useState("")

    return(
        <div>
            <input className="p-3 rounded-xl border"
            onChange={(e) => {
                // useState(値)のようにすると、変数の値を変更することができる
                setText(e.target.value)
            }}
                />
            <button
                className="ml-2 p-2 bg-blue-500 text-white rounded"
                onClick={() => {
                    // ボタンがクリックされた時にdisplayTextにtextの値を入れる
                    setDisplayText(text)
                }}
            >
                 OK
            </button>
            {/* ボタンがクリックされた時に、displayTextの値を表示 */}
            <p>入力値: {displayText}</p>
        </div>
    )
}

export default Page;