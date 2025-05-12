// // Task型をインポート
// import { Task } from "@/types/task";

// // 引数の型を定義
// type Props = {
//     tasks: Task[];
// };

// // Tableコンポーネントを定義
// export function Table({tasks}: Props){
//     return(
//         <table className="w-full [&_td]:p-2 [&_td]:border">
//             <thead>
//                 <tr>
//                     <th>タイトル</th>
//                     <th className="w-2/3">内容</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {/*渡されたtasksを回してテーブルを列に作成する */}
//                 {tasks.map((task, index) => (
//                     <tr key={index}>
//                         <td>{task.title}</td>
//                         <td>{task.content}</td>
//                     </tr>
//                 ))}
//             </tbody>
//             <tbody>
                
//             </tbody>
//         </table>
//     )
// }

// useRouterをインポート
import { useRouter } from "next/navigation";
// Buttonコンポーネントをインポート
import { Button } from "@/components/taskButton";
import { Task } from "@/.next/types/task";
import { table } from "console";

type Props = {
    tasks: Task[];
};

export function Table({tasks}: Props) {
    // ルーターを取得
    const router = useRouter();

    return (
        <table className="w-full [&_td]:p-2 [&_td]:border">
            <thead>
                <tr>
                    <td>タイトル</td>
                    <td className="w-2/3">内容</td>
                    {/* ボタンのための列を追加 */}
                    <td className="w-20"></td>
                </tr>
            </thead>
            <tbody>
                {/* 渡されたtasksを回してテーブルの行を作成する */}
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.content}</td>
                        <td>
                            <Button
                                onClick={() => {
                                    // 詳細ページに遷移する処理
                                    router.push(`/task/${index}`);
                                }}
                            >
                                詳細
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}