function globalMessage(src, args) {
  emitNet("chat:addMessage", src, {
    args: args
  });
}
exports( 'globalMessage', globalMessage );