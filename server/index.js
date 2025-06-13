const { createServer } = require('http');
const { Server }       = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

const USERS   = ['Alice','Bob','Carol','Dave','Eve'];
const ACTIONS = ['logged in','logged out','updated profile','joined meeting', 'commented on task', 'completed a task'];

io.on('connection', socket => {
  console.log('Client connected:', socket.id);

  const interval = setInterval(() => {
    const message = {
      id:        Date.now().toString(),
      user:      USERS[Math.floor(Math.random()*USERS.length)],
      action:    ACTIONS[Math.floor(Math.random()*ACTIONS.length)],
      timestamp: Date.now()
    };
    socket.emit('activity', message);
  }, 30000);

  socket.on('disconnect', () => {
    clearInterval(interval);
    console.log('Client disconnected:', socket.id);
  });
});


httpServer.listen(4000, () => {
  console.log('Mock WS server listening on port 4000');
});
