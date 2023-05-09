export interface FormProps {
  inputs: Record<string, string>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>, data: Record<string, string>) => void;
  children?: React.ReactNode;
}

export interface otherProps