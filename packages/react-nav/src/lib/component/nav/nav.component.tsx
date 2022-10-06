import { PropsWithChildren, useCallback, useRef } from 'react';
import { useContext } from 'react';
import { NavContext } from '../../context/nav.context';

export namespace Nav {
  export interface Props {
    navId: ID;
  }
}

export function Nav(props: PropsWithChildren<Nav.Props>) {
  const { setId, setActiveRef, setActive } = useContext(NavContext);
  const ref = useRef<HTMLDivElement>(null);

  const enter = useCallback(() => {
    setId(props.navId);
    setActive(true);
    if (ref.current) setActiveRef(ref.current);
  }, []);

  const leave = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <div
      ref={ref}
      className="react-nav-nav"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {props.children}
    </div>
  );
}
