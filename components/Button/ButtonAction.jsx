function ButtonAction({ children, isPrimary = false }) {
  return (
    <button
      className={`flex-1 rounded-lg border p-[10px] text-sm font-semibold md:text-base ${isPrimary ? "border-white text-white" : "border-primary text-primary"}`}
    >
      {children}
    </button>
  );
}

export default ButtonAction;
