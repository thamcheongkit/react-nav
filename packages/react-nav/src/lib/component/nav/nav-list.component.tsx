import { PropsWithChildren } from 'react';

export function List(props: PropsWithChildren) {
  return <div className="react-nav-list">{props.children}</div>;
}
