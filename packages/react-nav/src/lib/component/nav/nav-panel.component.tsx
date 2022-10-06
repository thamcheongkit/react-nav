import { PropsWithChildren, useEffect } from 'react';
import { useContext } from 'react';
import { NavContext } from '../../context/nav.context';
import { classnames } from '../../util/classnames';

export namespace Panel {
  export interface Props {
    navId: ID;
  }
}

export function Panel(props: PropsWithChildren<Panel.Props>) {
  const { id } = useContext(NavContext);
  useEffect(() => {
    console.log(
      classnames('react-nav-panel', {
        'react-nav-panel-left': id !== undefined && props.navId < id,
        'react-nav-panel-right': id !== undefined && props.navId > id,
      })
    );
  }, [id]);
  return (
    <div
      className={classnames('react-nav-panel', {
        'react-nav-panel-left': id !== undefined && props.navId < id,
        'react-nav-panel-right': id !== undefined && props.navId > id,
      })}
    >
      {props.children}
    </div>
  );
}
