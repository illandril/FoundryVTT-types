type SocketKey = `${'module' | 'system'}.${string}`;

type Socket = {
  emit: <T extends object>(
    key: SocketKey,
    data: T,
  ) => Socket

  on: <T extends object>(
    key: SocketKey,
    callback: (data: T) => void,
  ) => Socket
};

export default Socket;
