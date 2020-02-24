function localMessage(args) {
    emit('chat:addMessage', {
      args: args
    });
}
exports( 'localMessage', localMessage );

function addSuggestion(cmdName, description, param) {
  setImmediate(() => {
    emit('chat:addSuggestion', `/${cmdName}`, description, param);
  });
}
exports( 'addSuggestion', addSuggestion );