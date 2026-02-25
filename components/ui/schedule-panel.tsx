type SchedulePanelProps = {
  day: string;
  time: string;
  note?: string;
};

export function SchedulePanel({ day, time, note }: SchedulePanelProps) {
  return (
    <div className="rounded-xl border border-[#D6A64A]/35 bg-[radial-gradient(circle_at_top,rgba(214,166,74,0.18),rgba(11,16,32,0.82)_55%)] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.4)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C46D]">
        Raid Schedule
      </p>
      <p className="mt-2 font-title text-3xl text-[#EAF0FF]">{day}</p>
      <p className="mt-1 text-xl font-semibold text-[#39B6FF]">{time}</p>
      {note ? <p className="mt-3 text-sm text-[#AAB4D6]">{note}</p> : null}
    </div>
  );
}
