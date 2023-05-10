export type Callback = (error: Error | null, result?: any) => void;

export interface FormProps {
  inputs: Record<string, string>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>, data: Record<string, string>) => void;
  children?: React.ReactNode;
}

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface LogInFormValues {
  username: string;
  password: string;
}

export interface LogInProps {
  setLoginValues: (values: LogInFormValues) => void;
}
export interface NavBarItem {
  id: number,
  name: string
}

export interface NavBarProps {
  navBarData: NavBarItem[]  //TODO: array
  setCurType?: void
}

export interface ResponseBoxProps {
  responses: object,
  curQuestion: number,
  setResponses: React.Dispatch<React.SetStateAction<object>>,
  next: Callback
}

export interface DashboardProps {
  questions: object,
  setQuestions: React.Dispatch<React.SetStateAction<object>>,
  curQuestion: number,
  setCurQuestion: React.Dispatch<React.SetStateAction<number>>,
  responses: object,
  setResponses: React.Dispatch<React.SetStateAction<object>>,
}

export interface QuestionResponseCardProps {
  question: string,
  response: string,
  type: string
}
export interface SignUpProps {
  setLoginValues: (values: SignUpFormValues) => void;
}

export interface QuestionBoxProps {
  question: string,
  num: number,
  answered: boolean
}