type NotifyOptions = {
  permanent?: boolean;
  localize?: boolean;
  console?: boolean;
};

declare global {
  class Notifications extends Application {
    info(message: string, options?: NotifyOptions): number;
    warn(message: string, options?: NotifyOptions): number;
    error(message: string, options?: NotifyOptions): number;
  }
}

export type {};
