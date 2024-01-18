import { buttonVariants } from '@/components/button/button.styles';
import { renderIcon } from '@/components/button/button.utils';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { ReactNode } from 'react';

export interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {renderIcon({ icon })}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
