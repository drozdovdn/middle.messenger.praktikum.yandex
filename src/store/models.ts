export type UserProps = {
  first_name: any;
  id: number;
  login: string;
  phone: string;
  avatar?: string;
  display_name?: string;
  email: string;
  second_name: string;
};

export type LastMessageProps = {
  user: {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
  };
  time: string;
  content: string;
};

export type ChatProps = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: LastMessageProps | null;
  title: string;
  unread_count: number;
};

export type DataSocketProps = {
  id: number;
  avatar: string | null;
  title: string;
  token: string;
};

export type StoreProps = {
  auth?: boolean;
  chat?: {
    data_list: Record<string, ChatProps>;
    data_socket: DataSocketProps;
  };
  user?: UserProps;
  messages?: [];
};
