window.io = require('socket.io-client')
import Echo from 'laravel-echo'

export default ({ app, env }, inject) => {
  const echo = new Echo({
    broadcaster: 'socket.io',
    host: `${env.BASE_URL}:${env.ECHO_PORT}`,
  })

  inject('echo', echo)
}
