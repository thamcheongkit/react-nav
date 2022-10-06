import type { PropsWithChildren } from 'react';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export namespace Div {
  export interface Props
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
    active?: boolean;
  }
}

export function Div(props: PropsWithChildren<Div.Props>) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.active}
      timeout={200}
      classNames={props.className}
    >
      <div ref={nodeRef} {...props}>
        {props.children}
      </div>
    </CSSTransition>
  );
}
