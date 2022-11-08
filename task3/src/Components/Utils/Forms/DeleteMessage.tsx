import React from "react";
import { Modal } from "../Components/Modal";
import { ModalAction } from "../Components/types";

export type DeleteMessageProps = {
  isShown: boolean;
  message: string;
  ok: (arg: any) => void;
  cancel: () => void;
};

export const DeleteMessage: React.FunctionComponent<DeleteMessageProps> = (
  props: DeleteMessageProps
) => {
  const ok: ModalAction = {
    label: "OK",
    action: props.ok,
  };
  const cancel: ModalAction = {
    label: "CANCEL",
    action: props.cancel,
  };

  return (
    <Modal
      id="deleteModal"
      isShown={props.isShown}
      title="Delete Movie"
      saveAction={ok}
      cancelAction={cancel}
      children={props.message}
    />
  );
};
