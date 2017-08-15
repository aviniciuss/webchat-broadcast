const http = require('http')
const express = require('express')

const app = express()
const server = http.Server(app);

const socketio = require('socket.io')(server, { wsEngine: 'uws' })
const Redis = require('ioredis')

const redis = new Redis(6379, '127.0.0.1')

redis.psubscribe('*', () => {
    redis.on('pmessage', (pattern, channel, message) => {
        socketio.emit(channel, message)
    })
})

socketio.on('connection', (socket) => {
    socket.on('agent-connected', (data) => {
        socketio.emit('agent-connected', data)
    })

    socket.on('agent-disconnected', (data) => {
        socketio.emit('agent-disconnected', data)
    })

    socket.on('agent-created', (data) => {
        socketio.emit('agent-created', data)
    })

    socket.on('client-connected', (data) => {
        socketio.emit('client-connected', data)
    })

    socket.on('client-disconnected', (data) => {
        socketio.emit('client-disconnected', data)
    })

    socket.on('send-message-client', (data) => {
        socketio.emit(data.channel, data.message)
    })

    socket.on('ping-agents', () => {
        socketio.emit('ping-agents')
    })
})

server.listen(3000, () => {
    console.log('Listening on Port 3000')
})