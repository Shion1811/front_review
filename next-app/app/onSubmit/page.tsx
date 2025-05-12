"use client";

function Page() {
    return(
        <form
        // onsumitは送信時に実行される処理
            onSubmit={() => {
                alert("送信しました");
            }}
        >
        <label htmlFor="name">名前</label>
        <input className="p-1 rounded-xl border" name="name" />
        <button className="p-1 rounded-xl border">送信</button>
        </form>
    )
}
// 入力後の処理を書きたい
export default Page;