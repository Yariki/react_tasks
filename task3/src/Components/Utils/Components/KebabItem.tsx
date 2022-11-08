import React from "react";

export type KebabItemProps = {
  label: string;
  onclick?: (arg: any) => void;
};

export const KebabItem: React.FC<KebabItemProps> = (props: KebabItemProps) => {
  return (
    <a href="#" className="dropdown-item" onClick={props.onclick}>
      {props.label}
    </a>
  );
};
