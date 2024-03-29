import { DefaultTheme } from 'styled-components';

export interface ButtonTheme extends DefaultTheme {
    variant: ButtonVariant;
    size: ButtonSize;
    color: ButtonColour | string;
    isDisabled: boolean;
    fixedWidth?: boolean;
}

export enum ButtonVariant {
    PRIMARY = 'default',
    SECONDARY = 'secondary',
    GHOST = 'ghost',
    ROUND = 'ROUND',
    LINK = 'link',
}

export enum ButtonSize {
    SMALL = 'sm',
    NORMAL = 'default',
    LARGE = 'lg',
}

export enum ButtonColour {
    PRIMARY = 'PRIMARY',
}
