function addMessage(msg) {
    emit('chat:addMessage', {
      args: [ msg ]
    });
}

function addSuggestion(cmdName, description, param) {
  setImmediate(() => {
    emit('chat:addSuggestion', cmdName, description, param);
  });
}

exports( 'addMessage', addMessage );
exports( 'addSuggestion', addSuggestion );