import React from "react";

const Button = ({
    text = "",
    type = "button",
    variant = "normal", // normal | back
    icon = null,
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`relative flex items-center justify-center rounded-xl text-black font-semibold text-lg
        bg-white border-2 border-orange-400 group overflow-hidden
        transition-all duration-500
        ${variant === "normal"
                    ? "w-48 h-14 px-6"
                    : text
                        ? "w-48 h-14 px-6"
                        : "w-14 h-14 px-0"
                }`}
        >
            {/* Icon */}
            {icon && (
                <span
                    className={`relative z-10 flex items-center justify-center transition-colors duration-300 ${text ? "mr-2 group-hover:text-white" : "text-black group-hover:text-white"
                        }`}
                >
                    {icon}
                </span>
            )}

            {/* Text */}
            {text && (
                <span
                    className={`relative z-10 transition-colors duration-300 group-hover:text-white`}
                >
                    {text}
                </span>
            )}

            {/* Overlay */}
            {variant === "normal" && (
                <span className="absolute inset-0 bg-orange-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            )}

            {variant === "back" && (
                <span className="absolute left-0 top-0 w-0 h-full bg-orange-400 rounded-xl group-hover:w-full transition-all duration-500 z-0"></span>
            )}
        </button>
    );
};

export default Button;
