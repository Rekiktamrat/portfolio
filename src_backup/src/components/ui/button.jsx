import * as React from "react";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    
    return (
      <Comp
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };