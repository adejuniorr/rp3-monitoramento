"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type GasStation = {
  id: number;
  name: string;
  acronym: string;
};

interface ScheduleContextData {
  availableStations: GasStation[];
  updateAvailableStations: (newStations: GasStation[]) => void;
  priorityStations: GasStation[];
  updatePriorityStations: (newStations: GasStation[]) => void;
  isLoading: boolean;
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
    { id: 1, name: "Elefantinho", acronym: "PEL" },
    { id: 2, name: "Querubim", acronym: "PRJ" },
    { id: 3, name: "XPRES", acronym: "XPRES" },
  ]);
  const [priorityStations, setPriorityStations] = useState<GasStation[]>([
    { id: 1, name: "Rosa Flor", acronym: "PRF" },
    { id: 2, name: "Valente", acronym: "PV" },
    { id: 3, name: "Rei Davi", acronym: "PRD" },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAvailableStations = localStorage.getItem("availableStations");

    if (storedAvailableStations) {
      setAvailableStations(
        JSON.parse(localStorage.getItem("availableStations") || "")
      );
    } else {
      localStorage.setItem(
        "availableStations",
        JSON.stringify(availableStations)
      );
    }

    const storedPriorityStations = localStorage.getItem("priorityStations");

    if (storedPriorityStations) {
      setPriorityStations(
        JSON.parse(localStorage.getItem("priorityStations") || "")
      );
    } else {
      localStorage.setItem(
        "priorityStations",
        JSON.stringify(priorityStations)
      );
    }

    setIsLoading(false);
  }, []);

  const updateAvailableStations = (newAvailableStations: GasStation[]) => {
    localStorage.setItem(
      "availableStations",
      JSON.stringify(newAvailableStations)
    );
    setAvailableStations(newAvailableStations);
  };

  const updatePriorityStations = (newPriorityStations: GasStation[]) => {
    localStorage.setItem(
      "priorityStations",
      JSON.stringify(newPriorityStations)
    );
    setPriorityStations(newPriorityStations);
  };

  return (
    <ScheduleContext.Provider
      value={{
        availableStations,
        updateAvailableStations,
        priorityStations,
        updatePriorityStations,
        isLoading,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
