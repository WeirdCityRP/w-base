function globalMessage(args) {
  emitNet("chat:addMessage", -1, {
    args: args
  });
}
exports( 'globalMessage', globalMessage );

function printThis() {
  console.log('export injected');
}
exports( 'printThis', printThis );