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

export type FilterOptions = {
  value: string;
  label: string;
  checked: boolean;
};

export type SortOption = {
  sortBy: string | undefined;
  order: string | "asc" | "desc" | undefined;
};
