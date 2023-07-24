import { MouseEventHandler } from "react";

const Button = ({ title, leftIcon, rightIcon, handleClick, submitting, type, bgColor, textColor }) => (
    <button
        type={'button'}
        disabled={false}
        className={`flexCenter gap-3 px-4 py-3 
        ${'text-white'} 
        ${'bg-black/50 bg-primary-purple'} rounded-xl text-sm font-medium max-md:w-full`}
        onClick={handleClick}
    >
        {leftIcon && <img src={leftIcon} width={14} height={14} alt="left icon" />}
        {title}
        {rightIcon && <img src={rightIcon} width={14} height={14} alt="right icon" />}
    </button>
)

export default Button;