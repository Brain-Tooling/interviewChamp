export interface FormProps {
  inputs: Record<string, string>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>, data: Record<string, string>) => void;
  children?: React.ReactNode;
}

export interface NavBarItem {
  id: number,
  name: string
}

export interface NavBarProps {
  navBarData: NavBarItem[]  //TODO: array
}

export interface ResponseBoxProps {
  responses: object,
  curQuestion: number,
  setResponses: React.Dispatch<React.SetStateAction<object>>
}

export interface DashboardProps {
  questions: object,
  setQuestions: React.Dispatch<React.SetStateAction<object>>,
  curQuestion: number,
  setCurQuestion: React.Dispatch<React.SetStateAction<number>>,
  responses: object,
  setResponses: React.Dispatch<React.SetStateAction<object>>,
}