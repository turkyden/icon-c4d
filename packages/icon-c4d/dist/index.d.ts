import React from 'react';
interface IconProps {
    src: string;
    size?: number;
    interval?: number;
}
interface RetrunProps {
    onMouseOver: (e: any) => void;
    onMouseOut: (e: any) => void;
    style: React.CSSProperties;
}
export declare function useIcon({ src, size, interval }: IconProps): RetrunProps;
export default function Icon(iconProps: IconProps): JSX.Element;
export {};
