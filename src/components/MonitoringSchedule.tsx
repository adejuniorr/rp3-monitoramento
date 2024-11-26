"use client";
import { DayRow } from "./monitoring-schedule/DayRow";
import { THeader } from "./monitoring-schedule/THeader";
import { TableActions } from "./monitoring-schedule/TableActions";
import { useScheduleContext } from "@/contexts/ScheduleContext";

export type GasStation = {
  id: number;
  name: string;
  acronym: string;
};

export const MonitoringSchedule = () => {
  const days = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];
  const currentDay: number = new Date().getDay() - 1;

  const {
    availableStations,
    setAvailableStations,
    priorityStations,
    setPriorityStations,
  } = useScheduleContext();

  const handleMoveUpTableRows = () => {
    const firstOfAvailableStations = availableStations.shift();
    const firstOfPriorityStations = priorityStations.shift();

    if (firstOfAvailableStations && firstOfPriorityStations) {
      availableStations.push(firstOfAvailableStations);
      setAvailableStations([...availableStations]);
      priorityStations.push(firstOfPriorityStations);
      setPriorityStations([...priorityStations]);
    }
  };

  const handleMoveDownTableRows = () => {
    const lastOfAvailableStations = availableStations.pop();
    const lastOfPriorityStations = priorityStations.pop();

    if (lastOfAvailableStations && lastOfPriorityStations) {
      availableStations.unshift(lastOfAvailableStations);
      setAvailableStations([...availableStations]);
      priorityStations.unshift(lastOfPriorityStations);
      setPriorityStations([...priorityStations]);
    }
  };

  return (
    <div className="relative rounded-[16px] border border-foreground bg-background">
      <table className="w-[600px] h-[400px] overflow-hidden text-base">
        <THeader />
        <tbody>
          {days.map((day, dayIndex) => (
            <DayRow
              key={day}
              day={day}
              dayIndex={dayIndex}
              currentDay={currentDay}
              station={availableStations[dayIndex % availableStations.length]}
              priorityStation={
                priorityStations[dayIndex % priorityStations.length]
              }
            />
          ))}
          <TableActions
            moveUpTableRows={handleMoveUpTableRows}
            moveDownTableRows={handleMoveDownTableRows}
          />
        </tbody>
      </table>
    </div>
  );
};
