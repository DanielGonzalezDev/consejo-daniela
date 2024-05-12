import { ArrowDown, ArrowUp } from "../icons";
import { ReactNode, useState } from "react";
import "./proposal.css";

export function Proposal({items}: {items: ReactNode[]}) {
  const [show, setShow] = useState<boolean>(false);

  function handleToggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <section className={"proposal"}>
      <button className={"proposal__btn"} onClick={handleToggleShow}>
        Propuestas {show ? <ArrowUp /> : <ArrowDown />}
      </button>
      {
        show ? 
        <article
          className={`proposal__content`}
        >
          <div className="proposal-list">
            {
              items.map(it => <div className="pt-1">{it}</div>)
            }
          </div>
        </article> : null
      }
    </section>
  );
}
