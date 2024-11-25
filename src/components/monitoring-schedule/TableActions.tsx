import { useState } from "react";
import { Button } from "../buttons/Button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

interface TableActionsProps {
  editTable: () => void;
  moveUpTableRows: () => void;
  moveDownTableRows: () => void;
}

export const TableActions = ({
  editTable,
  moveUpTableRows,
  moveDownTableRows,
}: TableActionsProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const openTooltip = () => setIsTooltipVisible(true);
  const closeTooltip = () => setIsTooltipVisible(false);

  return (
    <tr>
      <th className="py-[15px] border-r border-foreground text-background">
        .
      </th>
      <td className="py-[15px] text-center">
        <Button onClick={editTable}>Editar</Button>
      </td>
      <td
        className="flex gap-2 items-center justify-center h-full"
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
      >
        <Button
          onClick={() => {
            moveUpTableRows();
            closeTooltip();
          }}
        >
          <FaArrowUp />
        </Button>
        <Button
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
