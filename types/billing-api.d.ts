export type Config = {
  apiKey?: string;
  sesssionKey?: string;
  organization?: string;
  host?: string;
};

export type ErrorMessage = {
  message: string;
  statusCode: number;
  data: {
    error: {
      message: string;
      type: string;
      param: string | null;
      code: string | null;
    };
  };
};

export type DataOrError<T> = ErrorMessage | T;
