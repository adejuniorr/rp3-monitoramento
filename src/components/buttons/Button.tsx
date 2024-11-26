interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

export const Button = ({
  onClick,
  disabled,
  type = "button",
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="px-[16px] py-[12px] rounded-[8px] text-rp3-blue font-bold bg-rp3-yellow -translate-y-1 shadow-border-b shadow-rp3-blue border-rp3-blue active:translate-y-0 active:shadow-none disabled:opacity-80 disabled:pointer-events-none disabled:select-none transition-all duration-200"
    >
      {children}
    </button>
  );
};
