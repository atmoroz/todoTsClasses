export interface ITasks {
  id: string;
  text: string;
  isComplited?: boolean;
}
export interface IState {
  tasks: ITasks[];
}
