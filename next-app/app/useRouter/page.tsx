"use client";
// useRouterをインポート
import { useRouter } from "next/navigation";

function Page(){
    // ルーターを取得
    const router = useRouter();

    return(
        <button
            className="p-2 rounded-xl border"
            onClick={() => {
                // ルーター.push("パス")dえページ遷移
                router.push("/top")
            }}
            >
                トップページ
            </button>
    )
}

export default Page;