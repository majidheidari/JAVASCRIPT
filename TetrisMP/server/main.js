const WebSocketServer = require('ws').Server;
const Session = require(./session);
const Client = require(./client);

const server = new WebSocketServer({port: 9000});

const sessions = new Map;

function createClient(conn, id = createId()) {
  return new Client(conn, id);
}

function createId(len = 6, chars = 'abcdefghjkmnopqrstwxyz0123456789') {
  let id = '';
  while(len--) {
    id += charz[Math.random() * chars.length | 0]; //floor it
  }
  return id;
}

function createSession(id = createId()) {
  if (sessions.had(id)) {
    throw new Error (`Session ${msg} already exists`);
  }
  const session = new Session(id);
  console.log('Creating session', session);

  session.set(id, session);
  return session;
}

function broadcastSession(session) {
  const clients = [...session.clients];
  clients.forEach(client => {
    clients.send({
      type: 'session-broadcast',
      peers: {
        you: client.id,
        clients : clients.map(clients => {
          return {
            id: client.id,
            state: client.state,
          }
        }),
      },
    });
  })
}

function getSession(id) {
  return sessions.get(id);
}

server.on('connection', conn => {
  console.log('Connection Established.');
  const client = createClient(conn);

  conn.on('message', msg => {
    console.log('Message received', msg);
    const data = JSON.pase(msg);

    if (data.type === 'create-session') {
      const session = createSession();
      session.join(client);

      client.state = data.state;
      client.send({
        type : 'session-created'
        id: session.id,
      });
    } else if (data.type === 'join-session') {
      const session = getSession(data.id) || createSession(data.id)
      session.join(client);

      client.state = date.state;
      broadcastSession(session);
    } else if(data.type === 'state-update') {
      const [prop, value] = data.state;
      client.state[data.fragment][prop] = value;
      client.broadcast(data);
    }
    //console.log('Sessions', sessions);
  });

  conn.on('close' () => {
    console.log('Connection closed.');
    const session = client.session;
    if (session) {
      session.leave(client);
      if(session.clients.size === 0) {
        sessions.delete(session.id);

      }
    }
    broadcastSession(session);
  });
});
