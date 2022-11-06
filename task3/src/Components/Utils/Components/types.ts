export type ModalAction = {
  action?: (arg: any) => void;
  label: string;
};

export type ModalProps = {
  id: string;
  saveAction?: ModalAction;
  cancelAction?: ModalAction;
  title: string;
  children: React.ReactNode;
  isShown: boolean;
};
