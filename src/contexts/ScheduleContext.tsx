"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type GasStation = {
  id: number;
  name: string;
  acronym: string;
};

interface ScheduleContextData {
  availableStations: GasStation[];
  setAvailableStations: React.Dispatch<React.SetStateAction<GasStation[]>>;
  priorityStations: GasStation[];
  setPriorityStations: React.Dispatch<React.SetStateAction<GasStation[]>>;
}

const ScheduleContext = createContext<ScheduleContextData | null>(null);

export const useScheduleContext = () => {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error(
      "useScheduleContext deve ser usado dentro de um ScheduleProvider"
    );
  }
  return context;
};

export const ScheduleProvider = ({ children }: { children: ReactNode }) => {
  const [availableStations, setAvailableStations] = useState<GasStation[]>([
    {
      id: 1,
      name: "Elefantinho",
      acronym: "PEL",
    },
    {
      id: 2,
      name: "Querubim",
      acronym: "PRJ",
    },
    {
      id: 3,
      name: "XPRES",
      acronym: "XPRES",
    },
  ]);
  const [priorityStations, setPriorityStations] = useState<GasStation[]>([
    {
      id: 1,
      name: "Rosa Flor",
      acronym: "PRF",
    },
    {
      id: 2,
      name: "Valente",
      acronym: "PV",
    },
  ]);

  return (
    <ScheduleContext.Provider
      value={{
        availableStations,
        setAvailableStations,
        priorityStations,
        setPriorityStations,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
