import { createContext } from 'react';

export namespace NavContext {
  export interface NavContext {
    active: boolean;
    id?: ID;

    setId: (id?: ID) => void;
    setActive: (active: boolean) => void;

    activeRef?: HTMLDivElement;
    setActiveRef: (el: HTMLDivElement) => void;

    midX?: number;
  }
}

const defaultValue: NavContext.NavContext = {
  active: false,
  setId: () => {},
  setActive: () => {},
  setActiveRef: () => {},
};

export const NavContext = createContext<NavContext.NavContext>(defaultValue);
NavContext.displayName = 'NavContext';
