import { PropsWithChildren, useEffect, useState } from 'react';
import { NavContext } from '../../context/nav.context';

export interface Config {
  arrowOffsetX?: number;
}

export function Group(props: PropsWithChildren<Config>) {
  const [id, setId] = useState<string | number>();
  const [active, setActive] = useState(false);
  const [activeRef, setActiveRef] = useState<HTMLDivElement>();
  const [midX, setMidX] = useState<number>();

  useEffect(() => {
    if (activeRef) {
      setMidX(
        activeRef.offsetLeft +
          activeRef.clientWidth / 2 -
          (props.arrowOffsetX ?? 0)
      );
    }
  }, [activeRef]);

  useEffect(() => {
    if (!active) setId(undefined);
  }, [active]);

  return (
    <NavContext.Provider
      value={{ id, setId, active, setActive, activeRef, setActiveRef, midX }}
    >
      <div className="react-nav-group">{props.children}</div>
    </NavContext.Provider>
  );
}
