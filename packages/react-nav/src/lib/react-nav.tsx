import styles from './react-nav.module.css';

/* eslint-disable-next-line */
export interface ReactNavProps {}

export function ReactNav(props: ReactNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactNav!</h1>
    </div>
  );
}

export default ReactNav;
