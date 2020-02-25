/**
 * 
 * @param {Number} src 
 * @param {Array} arr 
 */
function addMessage(src, arr) {
  emitNet("chat:addMessage", src, {
    args: arr
  });
}
exports( 'addMessage', addMessage );