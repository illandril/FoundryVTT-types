import type * as socketIo from 'socket.io';

declare global {
  namespace io {
    const Socket: typeof socketIo.Socket;
  }
}
