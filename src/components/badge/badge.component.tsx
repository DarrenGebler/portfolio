import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { badgeVariants } from './badge.styles';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};
