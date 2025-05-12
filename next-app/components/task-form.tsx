import { useState, KeyboardEvent } from "react";
import { Task } from "@/types/task";

type Props = {
  onAddTask: (task: Task) => void;
};

export function TaskForm({ onAddTask }: Props) {
  const [newTask, setNewTask] = useState<Task>({ title: "", content: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.title.trim() === "") return;
    
    onAddTask({
      title: newTask.title.trim(),
      content: newTask.content.trim(),
    });
    
    setNewTask({ title: "", content: "" });
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
          className="border p-2 rounded-xl"
          value={newTask.content}
          onChange={(e) => setNewTask({ ...newTask, content: e.target.value })}
          placeholder="タスクの内容を入力"
        />
      </div>
    </form>
  );
} 