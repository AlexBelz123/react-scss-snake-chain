import React, { FC } from 'react';
import clsx from 'clsx';
import './index.scss';

export type TDestinationLeft = 'left' | 'top-left' | 'bottom-left';
export type TDestinationRight = 'right' | 'top-right' | 'bottom-right';

export type TDestination = TDestinationLeft | TDestinationRight;

interface LineGeneratorProps {
  children: React.ReactNode;
  destLeft: TDestinationLeft | null;
  destRight: TDestinationRight | null;
  className: any;
}

const LineGenerator: FC<LineGeneratorProps> = ({
  destLeft,
  destRight,
  className,
  children,
}) => {
  return (
    <div className={clsx('wrapper', destLeft, destRight, className)}>
      {children}
    </div>
  );
};

export default LineGenerator;
