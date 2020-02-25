/**
 * 
 * @param {array} arr 
 */
function addMessage(arr) {
    emit('chat:addMessage', {
      args: arr
    });
}
exports( 'addMessage', addMessage );