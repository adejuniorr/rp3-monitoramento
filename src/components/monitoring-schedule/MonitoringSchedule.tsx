import { TableHeader } from "./ui/TableHeader";
import { DayRow } from "./ui/DayRow";
import { ActionsRow } from "./ui/ActionsRow";
import { BussinessDay } from "@/types/types";

export const MonitoringSchedule = () => {
  const days:BussinessDay[] = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];

  return (
    <div className="relative rounded-[16px] border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-black shadow-md shadow-gray-300 dark:shadow-none">
      <table className="w-[600px] h-[400px] overflow-hidden text-base">
        <TableHeader />
        <tbody>
          {days.map((day, index) => (
            <DayRow key={day} dayName={day} dayIndex={index} />
          ))}
          <ActionsRow />
        </tbody>
      </table>
    </div>
  );
};
