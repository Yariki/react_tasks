import React from "react";
import { KebabItem } from "./KebabItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export type KebabItemValues = {
  label: string;
  click: (arg: any) => void;
};

export type KebabProps = {
  items: KebabItemValues[];
};

export const Kebab: React.FC<KebabProps> = (props: KebabProps) => {
  const [active, setActive] = React.useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const itemClick = (callback: (arg: any) => void) => {
    toggleActive();
    // @ts-ignore
    callback();
  };

  return (
    <div className={active ? "dropdown is-active" : "dropdown"}>
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={toggleActive}
        >
          <span className="icon is-small">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {props.items.map((item, index) => (
            <KebabItem
              label={item.label}
              onclick={() => itemClick(item.click)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
