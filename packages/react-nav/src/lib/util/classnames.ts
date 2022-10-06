type KeyVal = Record<string, boolean>;
type ClassName = string | KeyVal;

export function classnames(...classnames: ClassName[]) {
  return classnames
    .flatMap((each) => {
      if (typeof each === 'string') return each;
      else
        return Object.entries(each)
          .filter(([key, val]) => val)
          .map(([classname]) => classname);
    })
    .join(' ');
}
