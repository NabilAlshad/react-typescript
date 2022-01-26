export interface IStatus {
  status: "loading" | "success" | "danger";
}

export interface IButton {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string | number
  ) => void;
}

export type IpersonList = {
  first: string;
  last: string;
};
export type Iinput = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
