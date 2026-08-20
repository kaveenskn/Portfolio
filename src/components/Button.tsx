interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full cursor-pointer transition-all duration-300 border-none outline-none hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-primary text-white shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:bg-primary-hover hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)]",
    secondary: "bg-transparent text-textMain glass-badge hover:bg-white/5 hover:border-textMuted"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
