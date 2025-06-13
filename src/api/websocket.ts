import { io, Socket } from 'socket.io-client';
import { Activity } from '../types/activity';

export type ActivityHandler = (activity: Activity) => void;

class WebSocketAPI {
  private socket: Socket;

  constructor(endpoint = 'http://localhost:4000') {
    this.socket = io(endpoint);
  }

  subscribe(handler: ActivityHandler) {
    this.socket.on('activity', handler);
  }

  unsubscribe() {
    this.socket.off('activity');
  }

  disconnect() {
    this.socket.disconnect();
  }
}

export default WebSocketAPI;
