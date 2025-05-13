import { useState, KeyboardEvent } from "react";
import { Task } from "@/types/task";
import { Button } from "@/components/taskButton";

type Props = {
  onAddTask: (task: Task) => void;
  onClose?: () => void;
};

export function TaskForm({ onAddTask, onClose }: Props) {
  const [newTask, setNewTask] = useState<Task>({ title: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.title.trim() === "") return;
    
    const taskToAdd = {
      title: newTask.title.trim(),
      content: newTask.content.trim(),
    };
    
    onAddTask(taskToAdd);
    setNewTask({ title: "", content: "" });
    
    // 状態の更新を待ってからモーダルを閉じる
    setTimeout(() => {
      onClose?.();
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <label className="font-bold">タスク名</label>
        <input
          type="text"
          className="border p-2 rounded-xl"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          placeholder="タスク名を入力"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">内容</label>
        <textarea
          className="border p-2 rounded-xl w-full min-h-[100px] resize-none block"
          value={newTask.content}
          onChange={(e) => setNewTask({ ...newTask, content: e.target.value })}
          placeholder="タスクの内容を入力"
          rows={4}
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button onClick={() => onClose?.()}>キャンセル</Button>
        <Button onClick={() => handleSubmit(new Event('submit') as any)}>タスクを追加</Button>
      </div>
    </form>
  );
} 