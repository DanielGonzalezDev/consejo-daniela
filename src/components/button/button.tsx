interface Prop {
  classes?: string;
  to: string
}

export function ButtonLink({ classes, to }: Prop) {
  return (
    <a className={`button ${classes ? classes : ""}`} href={to} target="_blank">Conoce más</a>
  );

}

export function ButtonLink1({ classes, to }: Prop) {
  return (
    <a className={`button ${classes ? classes : ""}`} href={to} target="_blank">Vota Aquí</a>
  );

}
