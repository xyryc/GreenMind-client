import PropTypes from "prop-types";
const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
          flex gap-2 items-center justify-center text-center
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          px-4
          w-full
          ${outline ? "bg-white" : "bg-lightBlue"}
          ${outline ? "border-[1px] border-colorPrimary" : "border-none"}
          ${small ? "text-sm" : "text-md"}
          ${small ? "py-1" : "py-3"}
          ${small ? "font-light" : "font-semibold"}
          ${small ? "border-[1px]" : "border-2"}
        `}
    >
      {Icon && (
        <Icon size={16} className={`${disabled ? "animate-spin" : ""}`} />
      )}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.elementType,
  type: PropTypes.string,
};

export default Button;
