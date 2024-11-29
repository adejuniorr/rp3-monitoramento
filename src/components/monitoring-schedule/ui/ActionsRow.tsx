"use client";
import { useState } from "react";
import { useStations } from "@/contexts/StationsContext";
import { Button } from "../../buttons/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

export const ActionsRow = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const {
    availableStations,
    updateAvailableStations,
    priorityStations,
    updatePriorityStations,
  } = useStations();

  const editTable = () => setIsEditing(!isEditing);
  const openTooltip = () => setIsTooltipVisible(true);
  const closeTooltip = () => setIsTooltipVisible(false);

  const moveUpTableRows = () => {
    const firstOfAvailableStations = availableStations.shift();
    const firstOfPriorityStations = priorityStations.shift();

    if (firstOfAvailableStations && firstOfPriorityStations) {
      availableStations.push(firstOfAvailableStations);
      updateAvailableStations([...availableStations]);
      priorityStations.push(firstOfPriorityStations);
      updatePriorityStations([...priorityStations]);
    }
  };

  const moveDownTableRows = () => {
    const lastOfAvailableStations = availableStations.pop();
    const lastOfPriorityStations = priorityStations.pop();

    if (lastOfAvailableStations && lastOfPriorityStations) {
      availableStations.unshift(lastOfAvailableStations);
      updateAvailableStations([...availableStations]);
      priorityStations.unshift(lastOfPriorityStations);
      updatePriorityStations([...priorityStations]);
    }
  };

  return (
    <tr className="h-[75px]">
      <th className="border-r border-gray-200 dark:border-gray-500 opacity-0 select-none">
        .
      </th>
      <td className="text-center relative">
        <span
          className={`${
            isEditing ? "-translate-x-[40px]" : "translate-x-[180px]"
          } absolute top-[15px] transition-all duration-1000 z-10`}
        >
          <Button onClick={editTable}>{isEditing ? "Salvar" : "Editar"}</Button>
        </span>
      </td>
      <td
        className={`${
          isEditing ? "opacity-100" : "opacity-0 pointer-events-none"
        } flex gap-2 items-center justify-center h-full transition-all duration-1000`}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
      >
        <Button
          type="button"
          title="Rotacionar para cima"
          onClick={() => {
            moveUpTableRows();
            closeTooltip();
          }}
        >
          <FaArrowUp />
        </Button>
        <Button
          type="button"
          title="Rotacionar para baixo"
          onClick={() => {
            moveDownTableRows();
            closeTooltip();
          }}
        >
          <FaArrowDown />
        </Button>
      </td>
      {isTooltipVisible && (
        <td
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
          className="absolute md:left-[560px] md:top-[355px] left-[410px] top-[420px] z-20 text-center font-bold w-[160px] bg-rp3-blue px-2 py-1"
        >
          <small className="text-white">Clique para alterar a ordem</small>
          <span className="absolute md:-left-[14px] md:top-[20px] left-[72px] -top-[12px] md:-rotate-90 text-rp3-blue">
            <IoTriangle />
          </span>
        </td>
      )}
    </tr>
  );
};
