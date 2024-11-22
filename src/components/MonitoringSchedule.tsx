"use client";
import { useState } from "react";
import stationsData from "../data/stations-data.json";
import { DayRow } from "./monitoring-schedule/DayRow";
import { THeader } from "./monitoring-schedule/THeader";
import { TableActions } from "./monitoring-schedule/TableActions";

export type GasStation = {
  id: number;
  name: string;
  acronym: string;
};

export const MonitoringSchedule = () => {
  const days = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];
  const [stations, setStations] = useState<GasStation[]>(
    stationsData.available.map(({ id, name, acronym }) => ({
      id,
      name,
      acronym,
    }))
  );

  /**
   * Alguns postos apresentam sistema de câmeras que permite
   * um monitoramento acelerado, via download (até 64x) ou 
   * assistido a partir do DVR de cada posto (até 8x) de
   * maneira remota.
   */
  const [priorityStations, setPriorityStations] = useState<GasStation[]>(
    stationsData.priority.map(({ id, name, acronym }) => ({
      id,
      name,
      acronym,
    }))
  );

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
