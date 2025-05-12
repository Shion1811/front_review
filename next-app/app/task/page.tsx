// "use client";

// import { useEffect, useState } from "react";
// import { Task } from "@/types/task";
// import { Table } from "@/components/table";
// import { TaskForm } from "@/components/task-form";

// export default function TaskPage() {
//     const [tasks, setTasks] = useState<Task[]>([]);

//     useEffect(() => {
//         // ローカルストレージからタスクを取得
//         const storedTasks = localStorage.getItem("tasks");
//         if (storedTasks) {
//             setTasks(JSON.parse(storedTasks));
//         }
//     }, []);

//     const handleAddTask = (newTask: Task) => {
//         const updatedTasks = [...tasks, newTask];
//         setTasks(updatedTasks);
//         localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//     };

//     return (
//         <div className="flex flex-col gap-8 items-center p-16">
//             <h1 className="text-4xl font-bold">タスク一覧</h1>
//             <div className="w-full max-w-2xl">
//                 <TaskForm onAddTask={handleAddTask} />
//             </div>
//             <Table tasks={tasks} />
//         </div>
//     );
// }


"use client";

import { useEffect, useState } from "react";
// Buttonコンポーネントをインポート
import { Button } from "@/components/taskButton";
// モーダルコンポーネントをインポート
import { Modal } from "@/components/modal";
import { Table } from "@/components/table";
import { Task } from "@/types/task";
import { title } from "process";

function Page() {
    // タスクの初期値を空にする
    const [tasks, setTasks] = useState<Task[]>([]);
    // モーダルの状態を確認する
    const [isOpen, setIsOpen] = useState(false);
    // 新しいタスクを管理する
    const [newTask, setNewTask] = useState<Task>({
        title: "",
        content: "",
    });

    // ローカルストレージからタスクを取得する処理
    useEffect(() => {
        // ローカルストレージからタスクを取得
        const tasks = localStorage.getItem("tasks");
        // タスクがある場合はタスクを設定
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
    }, []);

    // タスクをローカルストレージに保存する処理
    useEffect(() => {
        if (tasks.length > 0) {
            // タスクがある場合はローカルストレージに保存
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {
            // タスクがない場合はローカルストレージから削除
            localStorage.removeItem("tasks");
        }
    }, [tasks]); //tasksが変更されたら実行

    return (
        <div className="flex flex-col gap-8 items-center p-16">
            <h1 className="text-4xl font-bold">タスク一覧</h1>

            {/* モーダルを表示するボタン */}
            <div className="w-full flex justify-end">
                <Button onClick={() => setIsOpen(true)}>タスクを追加</Button>
            </div>

             <Table tasks={tasks} />

             {/* isOpenがtrueの場合はモーダルを表示 */}
             {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <form className="flex flex-col gap-4 text-black border-black"
                     onSubmit={(e) => {
                        e.preventDefault();
                        setTasks([...tasks, newTask]);
                        setIsOpen(false);
                        setNewTask({ title: "", content: "" 

                        });
                        <input
                            type="text"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    
                                }
                            }}
                        />
                        
                    }}
                    >
                        <div className="flex flex-col gap-2">
                            <label>タスク名</label>
                            <input
                            className="border p-2 rounded-xl"
                                type="text"
                                value={newTask.title}
                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>タスク内容</label>
                        </div>

                        {/* キャンセルボタンと追加ボタン */}
                        <div className="flex justify-end gap-4">
                            <Button onClick={() => setIsOpen(false)}>キャンセル</Button>
                            <Button
                                // 【重要】追加処理
                                onClick={() => {
                                    setTasks([...tasks, newTask]); //タスクの追加
                                    setIsOpen(false); //モーダルを閉じる
                                    setNewTask({ title: "", content: "" }); //新しいタスクを初期化
                                }}
                            >
                                追加
                            </Button>
                        </div>
                    </form>
                </Modal>
             )}
        </div>

    )
}

export default Page;