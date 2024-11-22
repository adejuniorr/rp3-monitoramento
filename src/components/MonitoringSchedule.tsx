"use client";
import { useState } from "react";
import { DayRow } from "./monitoring-schedule/DayRow";
import { THeader } from "./monitoring-schedule/THeader";
import { TableActions } from "./monitoring-schedule/TableActions";

export type GasStation = {
  id: number;
  name: string;
};

export const MonitoringSchedule = () => {
  const days = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];
  const [stations, setStations] = useState<GasStation[]>([
    {
      id: 1,
      name: "Elefantinho",
    },
    {
      id: 2,
      name: "Querubim",
    },
    /* {
      id: 3,
      name: "Rei Davi",
    },
    {
      id: 1,
      name: "Rosa Flor",
    },
    {
      id: 2,
      name: "Valente",
    }, */
    {
      id: 6,
      name: "XPRES",
    },
  ]);

  /**
   * Alguns postos apresentam sistema de câmeras que permite
   * um download rápido o bastante para ser monitorado ao fim
   * do dia. Por isso terão prioridade de monitoramento no
   * cronograma.
   */
  const [priorityStations, setPriorityStations] = useState<GasStation[]>([
    {
      id: 1,
      name: "Rosa Flor",
    },
    {
      id: 2,
      name: "Valente",
    },
  ]);

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const currentDay: number = new Date().getDay() - 1;

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
              station={stations[dayIndex % stations.length]}
              priorityStation={
                priorityStations[dayIndex % priorityStations.length]
              }
            />
          ))}
          <TableActions
            handleEditClick={() => console.log("Editando")}
            handleMoveUpClick={() => console.log("Movendo para cima")}
            handleMoveDownClick={() => console.log("Movendo para baixo")}
            isTooltipVisible={isTooltipVisible}
            openTooltip={() => setIsTooltipVisible(true)}
            closeTooltip={() => setIsTooltipVisible(false)}
          />
        </tbody>
      </table>
    </div>
  );
};
