"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { GasStation } from "@/types/types";

type StationsContextProps = {
  isLoading: boolean;
  availableStations: GasStation[];
  updateAvailableStations: (newStations: GasStation[]) => void;
  priorityStations: GasStation[];
  updatePriorityStations: (newStations: GasStation[]) => void;
}

const StationsContext = createContext<StationsContextProps | null>(null);

export const useStations = () => {
  const context = useContext(StationsContext);
  if (!context) {
    throw new Error(
      "useStations deve ser usado dentro de um StationsProvider"
    );
  }
  return context;
};

export const StationsProvider = ({ children }: { children: ReactNode }) => {
  /* const [availableStations, setAvailableStations] = useState<GasStation[]>([
    { id: 1, name: "Elefantinho", acronym: "PEL" },
    { id: 2, name: "Querubim", acronym: "PRJ" },
    { id: 3, name: "XPRES", acronym: "XPRES" },
  ]);
  const [priorityStations, setPriorityStations] = useState<GasStation[]>([
    { id: 1, name: "Rosa Flor", acronym: "PRF" },
    { id: 2, name: "Valente", acronym: "PV" },
    { id: 3, name: "Rei Davi", acronym: "PRD" },
  ]); */
  const [availableStations, setAvailableStations] = useState<GasStation[]>([
    { id: 1, name: "Salvador", acronym: "PEL" },
    { id: 2, name: "São Paulo", acronym: "PRJ" },
    { id: 3, name: "Rio Branco", acronym: "XPRES" },
  ]);
  const [priorityStations, setPriorityStations] = useState<GasStation[]>([
    { id: 1, name: "Fortaleza", acronym: "PRF" },
    { id: 2, name: "Maceió", acronym: "PV" },
    { id: 3, name: "Cuiabá", acronym: "PRD" },
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
    <StationsContext.Provider
      value={{
        isLoading,
        availableStations,
        updateAvailableStations,
        priorityStations,
        updatePriorityStations,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
};
