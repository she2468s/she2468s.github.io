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

const messaging = firebase.messaging();
messaging.usePublicVapidKey('BJK5AGnOwtOILLi13QssRk3x0K1s0GKj-Jd5-8u3YlHtTAft9cw2XQexVtBOo3cTnH7ThG6yzlHovQC_yH7-SQY');
messaging.requestPermission()
    .then(res => {
        // 若允許通知 -> 向 firebase 拿 token
        return messaging.getToken();
    }, err => {
        // 若拒絕通知
        console.log(err);
    })
    .then(token => {
        // 成功取得 token
        console.log(token);
    })

messaging.onMessage(payload => {
    console.log(payload);
});
