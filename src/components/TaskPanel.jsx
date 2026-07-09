import { useState } from "react";
import { LuCheck } from "react-icons/lu";

const INITIAL_TASKS = [
  { id: 1, label: "Approve pending leave request", due: "Today", done: false },
  { id: 2, label: "Review Q3 payroll adjustments", due: "Today", done: false },
  { id: 3, label: "Shortlist candidates — Product Designer", due: "Tomorrow", done: false },
  { id: 4, label: "Sign off on new hire onboarding kit", due: "Jul 11", done: true },
];

export default function TaskPanel() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const toggle = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div className="rounded-xl2 border border-line-200 bg-base-0 p-6 shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-[17px] italic text-ink-900">My tasks</h3>
        <span className="rounded-full bg-base-50 px-2.5 py-1 font-mono text-[11px] text-ink-600">
          {remaining} open
        </span>
      </div>

      <ul className="flex flex-col gap-1">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              onClick={() => toggle(task.id)}
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors duration-200 hover:bg-base-50"
            >
              <span
                className={[
                  "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border transition-all duration-200 ease-premium",
                  task.done ? "border-teal-500 bg-teal-500" : "border-line-300 bg-base-0",
                ].join(" ")}
              >
                {task.done && <LuCheck size={12} className="text-base-0" />}
              </span>
              <span className="flex-1">
                <p className={["text-[13px] leading-snug", task.done ? "text-ink-400 line-through" : "text-ink-900"].join(" ")}>
                  {task.label}
                </p>
              </span>
              <span className="font-mono text-[10.5px] text-ink-400">{task.due}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
