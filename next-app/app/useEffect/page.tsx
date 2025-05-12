"use client";
// useEffectをインポート
import { useEffect, useState } from "react";

function Page() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    // useEffect(関数、依存配列);
    // 依存配列に指定した変数が更新されると、関数が実行される
    // 依存配列が空の場合は、初回のみ実行される
    useEffect(() => {
        setCount(text.length);
    }, [text]);

    return(
        <div>
            <input
                className="p-2 rounded-xl border"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <p>入力値: {text}</p>
            {/* 文字数を表示 */}
            <p>文字数: {count}</p>
        </div>
    )
}

export default Page;