var QBconfig = {
    credentials: {
        appId: 5,
        authKey: 'EPbTgJQLsrD94ny',
        authSecret: 'NaWnakYta6PTh2d'
    },

    appConfig: {
        endpoints: {
        api: "apibahrainquickblox.quickblox.com", // set custom API endpoint
        chat: "chatbahrainquickblox.quickblox.com" // set custom Chat endpoint
        },
        chatProtocol: {
        active: 2 // set 1 to use BOSH, set 2 to use WebSockets (default)
        },
        debug: {mode: 1},
        webrtc: {
                    iceServers: [
                    {
                    'url': 'stun:stun.l.google.com:19302'
                    },
                    {
                    'url': 'stun:turnbahrainquickblox.quickblox.com',
                    'username': 'quickblox',
                    'credential': 'baccb97ba2d92d71e26eb9886da5f1e0'
                    },
                    {
                    'url': 'turn:turnbahrainquickblox.quickblox.com:3478?transport=udp',
                    'username': 'quickblox',
                    'credential': 'baccb97ba2d92d71e26eb9886da5f1e0'
                    },
                    {
                    'url': 'turn:turnbahrainquickblox.quickblox.com:3478?transport=tcp',
                    'username': 'quickblox',
                    'credential': 'baccb97ba2d92d71e26eb9886da5f1e0'
                    }
                    ]}
                

    }
};
// https://turnbahrainquickblox.quickblox.com
var appConfig = {
    dilogsPerRequers: 15,
    messagesPerRequest: 50,
    usersPerRequest: 15,
    typingTimeout: 3 // 3 seconds
};

var CONSTANTS = {
    DIALOG_TYPES: {
        CHAT: 3,
        GROUPCHAT: 2,
        PUBLICCHAT: 1
    },
    ATTACHMENT: {
        TYPE: 'image',
        BODY: '[attachment]',
        MAXSIZE: 2 * 1000000, // set 2 megabytes,
        MAXSIZEMESSAGE: 'Image is too large. Max size is 2 mb.'
    },
    NOTIFICATION_TYPES: {
        NEW_DIALOG: '1',
        UPDATE_DIALOG: '2',
        LEAVE_DIALOG: '3'
    }
};
