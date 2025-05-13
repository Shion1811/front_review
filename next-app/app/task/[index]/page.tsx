// "use client";

// // useは同期処理を実行するためのHooks
// import { use, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/button02";
// import { Task } from "@/types/task";

// type Props = {
//     // Promiseは非同期処理の結果を表す型
//     params: Promise<{
//         index: string; //urlの[index]
//     }>;
// };

// function Page({ params }: Props) {
//     // useを使用して非同期処理を実行し、結果を取得
//     // parseIntで文字列を数値に変換
//     const index = parseInt(use(params).index);
//     const router = useRouter();
//     const [task, setTask] = useState<Task>();
//     const [tasks, setTasks] = useState<Task[]>([]);

//     useEffect(() => {
//         // ローカルストレージからタスクを取得
//         const storedTasks = localStorage.getItem("tasks");

//         // タスクがある場合はタスクを設定
//         if (storedTasks) {
//             const parsedTasks = JSON.parse(storedTasks);
//             setTasks(parsedTasks); //全体のタスクを設定
//             setTask(parsedTasks[index]); //選択したタスクを設定
//         }
//     }, [index]);  //indexが変更されたら実行

//     // タスクがない場合は何も表示しない
//     if (!task) {
//         return;
//     }
    
//     return (
//         <div className="flex flex-col gap-8 items-center p-16">
//             <h1 className="text-4xl font-bold">タスク詳細</h1>

//             <div className="w-full flex flex-col gap-8 border rounded-2xl p-2">
//                 <div className="flex gap-2 border-b">
//                     <label className="font-bold">タスク名</label>
//                     <p>{task.title}</p>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <label className="font-bold border-b">内容</label>
//                     <p>{task.content}</p>
//                 </div>
//             </div>
                

//             <div className="w-full flex justify-between">
//                 <Button
//                     onClick={() => {
//                         router.push("/task");
//                     }}
//                 >
//                     戻る
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default Page;

"use client";

import {use, useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/taskButton";
import { Task } from "@/types/task";

// Modalコンポーネントをインポート
import { Modal } from "@/components/modal";

type Props = {
    params: Promise<{
        index: string;
    }>;
};

function Page({ params }: Props) {
    const index = parseInt(use(params).index);
    const router = useRouter();
    const [task, setTask] = useState<Task>();
    const [tasks, setTasks] = useState<Task[]>([]);

    // モーダルの状態を管理する
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");

        if (storedTasks) {
            const parsedTasks = JSON.parse(storedTasks);
            setTasks(parsedTasks);
            setTask(parsedTasks[index]);
        }
    }, [index]);

    if (!task) {
        return;
    }
    return(
        <div className="flex flex-col gap-8 items-center p-16">
            <h1 className="text-4xl font-bold"></h1>

            <div className="w-full flex flex-col gap-8 border rounded-2xl p-2">
                <div className="flex gap-2 border-b">
                    <label className="font-bold">タスク名</label>
                    <p>{task.title}</p>
                </div>

                <div className="flex flex-col gap-2">
                <label className="font-bold border-b">内容</label>
                <p>{task.content}</p>
                </div>
            </div>
            
            <div className="w-full flex justify-between">
                <Button
                    onClick={() => {
                        router.push("/task");
                    }}
                >
                    戻る
                </Button>

                {/* 編集ボタンと削除ボタン */}
                <div className="flex gap-2">
                    <Button
                        onClick={() => setIsOpen(true)}>編集</Button>
                        {/* 【重要】削除処理 */}
                        <Button
                            onClick={() => {
                                // filterでindex番目以外のタスクを取得
                                const newTasks = tasks.filter((_, i) => i !== index);
                                // localStorageに更新
                                localStorage.setItem("tasks", JSON.stringify(newTasks));

                                // タスク一覧ページに遷移
                                router.push("/task");
                            }}
                            
                        >
                            削除
                        </Button>
                </div>
            </div>
            {/* isOpenがtrueの場合はモーダルを表示 */}
            {isOpen && (
                // ModalコンポーネントのonCloseにモーダルを閉じる処理を渡す
                <Modal onClose={() => setIsOpen(false)}>
                    <form className="flex flex-col gap-4 text-black border-black">
                        {/* タスク名入力欄 */}
                        <div className="flex flex-col gap-2">
                            <label>タスク名</label>
                            <input 
                            className="border p-2 rounded-xl"
                            value={task.title}
                            onChange={(e) => setTask({...task, title: e.target.value})}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    setIsOpen(false);
                                }
                            }}
                             />
                        </div>

                        {/* タスク内容入力欄 */}
                        <div className="flex flex-col gap-2">
                            <label>内容</label>
                            <input
                            className="border p-2 rounded-xl"
                            value={task.content}
                            onChange={(e) => setTask({...task, content: e.target.value})}
                            />
                        </div>

                        {/* キャンセルボタンと更新ボタン */}
                        <div className="flex justify-end gap-4">
                            <Button onClick={() => setIsOpen(false)}>キャンセル</Button>
                            <Button
                            // 【重要】更新処理
                            onClick={() => {
                                // mapでindex番目のタスクのみ更新
                                const newTasks = tasks.map((t, i) => 
                                    i === index ? task : t
                                );
                            // localStorageを更新
                            localStorage.setItem("tasks", JSON.stringify(newTasks));

                            // タスク一覧ページに遷移
                            router.push("/task");
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    setIsOpen(false);
                                }
                            }}
                        >
                            更新

                        </Button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    );
}

export default Page;