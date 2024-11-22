interface GasStation {
  id: number;
  name: string;
}

interface DayRowProps {
  day: string;
  dayIndex: number;
  currentDay: number;
  station: GasStation;
  priorityStation: GasStation;
}

export const DayRow = ({
  day,
  dayIndex,
  currentDay,
  station,
  priorityStation,
}: DayRowProps) => {
  const isCurrentDay = currentDay === dayIndex;

  const cellClass = isCurrentDay
    ? "bg-rp3-yellow text-rp3-blue px-4 py-2 rounded-md font-bold"
    : "bg-gray-200 px-4 py-2 rounded-md font-bold";

  const rowClass = isCurrentDay ? "bg-rp3-blue text-rp3-yellow font-bold" : "";

  return (
    <tr key={day} className={rowClass}>
      <th className="py-[15px] border-r border-b border-foreground">{day}</th>
      <td className="py-[15px] w-[220px] text-center border-r border-b border-foreground">
        <span className={cellClass}>{station.name}</span>
      </td>
      <td className="py-[15px] w-[220px] text-center border-b border-foreground">
        <span className={cellClass}>{priorityStation.name}</span>
      </td>
    </tr>
  );
};
