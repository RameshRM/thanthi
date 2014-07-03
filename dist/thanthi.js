(function($root) {
    if (typeof $root.listener === "undefined") {}
    var _messageBox = null;

    function messageBox() {
        this.id = Date.now();
        this.messages = {};
        this.post = function(message, messageData) {
            this.handleMessage(message, messageData);
        }
    }

    messageBox.prototype = {
        add: function(listener) {
            this.messages[listener.message] = listener.messagehandle;
        },
        handleMessage: function(message, messageData) {
            if (this.messages.hasOwnProperty(message)) {
                var messageHandle = this.messages[message];
                var callback = messageHandle.callback;
                var args = null;
                messageHandle['message'] = message;
                messageHandle['messageData'] = messageData;
                if (typeof messageHandle.args !== "undefined") {
                    args = Array.prototype.slice.call(messageHandle.args, 1);
                }
                callback.apply(messageHandle, args);
            }
        }
    };
    if (_messageBox === null) {
        _messageBox = new messageBox();
    }

    $root.thanthi = {
        getId: function(){
            return _messageBox.id;
        },
        send: function(message, messageData) {
            _messageBox.post(message, messageData);
        },
        add: function(messageData) {
            _messageBox.add(messageData);
        }
    }
}).call(this, ((typeof module !== "undefined" && typeof module.exports !== "undefined") ? module.exports : window));

(function($root) {
    Function.prototype.thanthi = function(message) {
        $root.thanthi.add({
            message: message,
            messagehandle: {
                callback: this,
                args: arguments
            }
        });
    }
}).call(this, ((typeof module !== "undefined" && typeof module.exports !== "undefined") ? module.exports : window));
