function addMessage(msg) {
    emit('chat:addMessage', {
      args: [ msg ]
    });
}
exports( 'addMessage', addMessage );