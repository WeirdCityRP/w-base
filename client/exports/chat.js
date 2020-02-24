function localMessage(msg) {
    emit('chat:addMessage', {
      args: [ msg ]
    });
}
exports( 'localMessage', localMessage );

function addSuggestion(cmdName, description, param) {
  setImmediate(() => {
    emit('chat:addSuggestion', cmdName, description, param);
  });
}
exports( 'addSuggestion', addSuggestion );
