"use client";
import { useStations } from "@/contexts/StationsContext";
import { isCurrentDay } from "@/functions/isCurrentDay";
import { BussinessDay } from "@/types/types";

type DayRowProps = {
  dayName: BussinessDay;
  dayIndex: number;
}

export const DayRow = ({
  dayName,
  dayIndex,
}: DayRowProps) => {
  const matchCurrentDay = isCurrentDay(dayIndex);
  const { isLoading, availableStations, priorityStations } = useStations();

  const cellClass = matchCurrentDay
    ? "bg-rp3-yellow text-rp3-blue px-4 py-2 rounded-md font-bold"
    : "bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md font-bold";

  const rowClass = matchCurrentDay ? "bg-rp3-blue text-rp3-yellow font-bold" : "";

  return (
    <>
      {isLoading ? (
        <tr key={dayIndex} className={rowClass}>
          <th className="py-[15px] border-r border-b border-gray-200 dark:border-gray-600">
            {dayName}
          </th>
          <td className="py-[15px] w-[220px] text-center border-r border-b border-gray-200 dark:border-gray-600">
            <span className={cellClass}>Carregando...</span>
          </td>
          <td className="py-[15px] w-[220px] text-center border-b border-gray-200 dark:border-gray-600">
            <span className={cellClass}>Carregando...</span>
          </td>
        </tr>
      ) : (
        <tr key={dayIndex} className={rowClass}>
          <th className="py-[15px] border-r border-b border-gray-200 dark:border-gray-600">
            {dayName}
          </th>
          <td className="py-[15px] w-[220px] text-center border-r border-b border-gray-200 dark:border-gray-600">
            <span className={cellClass}>{availableStations[dayIndex % availableStations.length].name}</span>
          </td>
          <td className="py-[15px] w-[220px] text-center border-b border-gray-200 dark:border-gray-600">
            <span className={cellClass}>{priorityStations[dayIndex % priorityStations.length].name}</span>
          </td>
        </tr>
      )}
    </>
  );
};
