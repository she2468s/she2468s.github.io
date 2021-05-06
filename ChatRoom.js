const RECIEVED = 0;
const SEND = 1;


$(document).ready(function () {
    $('#messageDisplayArea').html('');
});

function send(messageType) {
    let position = "";
    let color = "";
    if (messageType === RECIEVED) {
        position = "flex-start";
        color = "rgb(179, 93, 93)";
    } else {
        position = "flex-end";
        color = "darkgrey";
    }




    let message = $('#message').val();
    let messageWrapper = '<div style="display: flex; justify-content:'+position+'; margin: 20px; color: white;">'
        + '<div style="background-color: '+color+'; max-width: 60%; border-radius: 8px; padding: 20px;">'
        + message
        + '</div>'
        + '</div>';
    $('#messageDisplayArea').append(messageWrapper);
    $("#messageDisplayArea").scrollTop($("#messageDisplayArea")[0].scrollHeight);
}

// function send2() {
//     let message = $('#message').val();
//     let messageWrapper2 = '<div style="display: flex; justify-content: flex-start; margin: 20px; color: white;">'
//         + '<div style="background-color: darkgrey; max-width: 60%; border-radius: 8px; padding: 20px;">'
//         + message
//         + '</div>'
//         + '</div>';
//     $('#messageDisplayArea').append(messageWrapper2);
//     $("#messageDisplayArea").scrollTop($("#messageDisplayArea")[0].scrollHeight);
// }