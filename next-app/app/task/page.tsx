"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/taskButton";
import { Modal } from "@/components/modal";
import { Table } from "@/components/table";
import { Task } from "@/types/task";
import { TaskForm } from "@/components/task-form";

function Page() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {
            localStorage.removeItem("tasks");
        }
    }, [tasks]);

    const handleAddTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="flex flex-col gap-8 items-center p-16">
            <h1 className="text-4xl font-bold">タスク一覧</h1>

            <div className="w-full flex justify-end">
                <Button onClick={() => setIsOpen(true)}>タスクを追加</Button>
            </div>

            <Table tasks={tasks} />

            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <TaskForm onAddTask={handleAddTask} onClose={() => setIsOpen(false)} />
                </Modal>
            )}
        </div>
    );
}

export default Page;