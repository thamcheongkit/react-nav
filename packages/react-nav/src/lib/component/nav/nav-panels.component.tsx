import { PropsWithChildren, useCallback } from 'react';
import { useContext } from 'react';
import { NavContext } from '../../context/nav.context';
import { Div } from './div';

export function Panels(props: PropsWithChildren) {
  const { setActive, active, midX } = useContext(NavContext);

  const enter = useCallback(() => {
    setActive(true);
  }, []);

  const leave = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <>
      <Div
        active={active}
        className="react-nav-panels-arrow"
        style={{ left: midX }}
      />
      <Div
        active={active}
        className="react-nav-panels"
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        {props.children}
      </Div>
    </>
  );
}
