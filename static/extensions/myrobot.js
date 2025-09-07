var MyRobotExtension = function () {
};

/**
 * @return {object} This extension's metadata.
 */
MyRobotExtension.prototype.getInfo = function () {
    return {
        // Required: the machine-readable name of this extension.
        // Will be used as the extension's namespace. Must not contain a '.' character.
        id: 'BLERobots',

        // Optional: the human-readable name of this extension as string.
        // This and any other string to be displayed in the Scratch UI may either be
        // a string or a call to `intlDefineMessage`; a plain string will not be
        // translated whereas a call to `intlDefineMessage` will connect the string
        // to the translation map (see below). The `intlDefineMessage` call is
        // similar to `defineMessages` from `react-intl` in form, but will actually
        // call some extension support code to do its magic. For example, we will
        // internally namespace the messages such that two extensions could have
        // messages with the same ID without colliding.
        // See also: https://github.com/yahoo/react-intl/wiki/API#definemessages
        name: 'BLE Robots',

        // Optional: URI for an icon for this extension. Data URI OK.
        // If not present, use a generic icon.
        // TODO: what file types are OK? All web images? Just PNG?
        iconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DE' +
            'UIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

        // Optional: Link to documentation content for this extension.
        // If not present, offer no link.
        docsURI: 'https://....',

        // Required: the list of blocks implemented by this extension,
        // in the order intended for display.

{
  "targets": [
    {
      "isStage": true,
      "name": "Stage",
      "variables": {},
      "lists": {},
      "broadcasts": {},
      "blocks": {},
      "currentCostume": 0,
      "costumes": [
        {
          "assetId": "cd21514d0531fdffb22204e0ec5ed84a",
          "name": "backdrop1",
          "md5ext": "cd21514d0531fdffb22204e0ec5ed84a.svg",
          "dataFormat": "svg",
          "rotationCenterX": 240,
          "rotationCenterY": 180
        }
      ],
      "sounds": [],
      "volume": 100,
      "layerOrder": 0,
      "tempo": 60,
      "videoTransparency": 50,
      "videoState": "off",
      "textToSpeechLanguage": null
    },
    {
      "isStage": false,
      "name": "Robot Controller",
      "variables": {
        "msg": ["msg", ""]
      },
      "lists": {},
      "broadcasts": {},
      "blocks": {
        "event_whenflagclicked": {
          "opcode": "event_whenflagclicked",
          "next": "connect_block",
          "parent": null,
          "inputs": {},
          "fields": {},
          "topLevel": true,
          "x": 50,
          "y": 50
        },
        "connect_block": {
          "opcode": "myrobot_connect",
          "next": null,
          "parent": "event_whenflagclicked",
          "inputs": {},
          "fields": {}
        },
        "event_key_up": {
          "opcode": "event_whenkeypressed",
          "next": "send_up",
          "parent": null,
          "inputs": {},
          "fields": {
            "KEY_OPTION": ["up arrow", null]
          },
          "topLevel": true,
          "x": 50,
          "y": 150
        },
        "send_up": {
          "opcode": "myrobot_sendCommand",
          "next": null,
          "parent": "event_key_up",
          "inputs": {
            "CMD": [1, ["s", "forward"]]
          },
          "fields": {}
        },
        "event_key_down": {
          "opcode": "event_whenkeypressed",
          "next": "send_down",
          "parent": null,
          "inputs": {},
          "fields": {
            "KEY_OPTION": ["down arrow", null]
          },
          "topLevel": true,
          "x": 50,
          "y": 250
        },
        "send_down": {
          "opcode": "myrobot_sendCommand",
          "next": null,
          "parent": "event_key_down",
          "inputs": {
            "CMD": [1, ["s", "backward"]]
          },
          "fields": {}
        },
        "event_key_left": {
          "opcode": "event_whenkeypressed",
          "next": "send_left",
          "parent": null,
          "inputs": {},
          "fields": {
            "KEY_OPTION": ["left arrow", null]
          },
          "topLevel": true,
          "x": 50,
          "y": 350
        },
        "send_left": {
          "opcode": "myrobot_sendCommand",
          "next": null,
          "parent": "event_key_left",
          "inputs": {
            "CMD": [1, ["s", "left"]]
          },
          "fields": {}
        },
        "event_key_right": {
          "opcode": "event_whenkeypressed",
          "next": "send_right",
          "parent": null,
          "inputs": {},
          "fields": {
            "KEY_OPTION": ["right arrow", null]
          },
          "topLevel": true,
          "x": 50,
          "y": 450
        },
        "send_right": {
          "opcode": "myrobot_sendCommand",
          "next": null,
          "parent": "event_key_right",
          "inputs": {
            "CMD": [1, ["s", "right"]]
          },
          "fields": {}
        },
        "when_message": {
          "opcode": "myrobot_whenMessage",
          "next": "set_msg",
          "parent": null,
          "inputs": {},
          "fields": {},
          "topLevel": true,
          "x": 300,
          "y": 150
        },
        "set_msg": {
          "opcode": "data_setvariableto",
          "next": null,
          "parent": "when_message",
          "inputs": {
            "VALUE": [3, "get_msg_reporter"]
          },
          "fields": {
            "VARIABLE": ["msg", null]
          }
        },
        "get_msg_reporter": {
          "opcode": "myrobot_getLastMessage",
          "next": null,
          "parent": "set_msg",
          "inputs": {},
          "fields": {}
        }
      },
      "currentCostume": 0,
      "costumes": [
        {
          "assetId": "cd21514d0531fdffb22204e0ec5ed84a",
          "name": "default",
          "md5ext": "cd21514d0531fdffb22204e0ec5ed84a.svg",
          "dataFormat": "svg",
          "rotationCenterX": 0,
          "rotationCenterY": 0
        }
      ],
      "sounds": [],
      "volume": 100,
      "layerOrder": 1,
      "visible": true,
      "x": 0,
      "y": 0,
      "size": 100,
      "direction": 90,
      "draggable": true,
      "rotationStyle": "all around"
    }
  ],
  "monitors": [
    {
      "id": "msg",
      "mode": "default",
      "opcode": "data_variable",
      "params": {
        "VARIABLE": "msg"
      },
      "spriteName": "Robot Controller",
      "value": "",
      "x": 5,
      "y": 5,
      "width": 0,
      "height": 0,
      "visible": true,
      "sliderMin": 0,
      "sliderMax": 100,
      "isDiscrete": true
    }
  ],
  "meta": {
    "semver": "3.0.0",
    "vm": "0.2.0",
    "agent": "TurboWarp"
  }
}

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {number} LETTER_NUM - the string value of the argument.
 * @property {string} TEXT - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 */
MyRobotExtension.prototype.myReporter = function (args) {
    // Note: this implementation is not Unicode-clean; it's just here as an example.
    const result = args.TEXT.charAt(args.LETTER_NUM);

    return ['Letter ', args.LETTER_NUM, ' of ', args.TEXT, ' is ', result, '.'].join('');
};

MyRobotExtension.prototype.noop = function () {
};

MyRobotExtension.prototype.returnTrue = function () {
    return true;
};

MyRobotExtension.prototype.returnFalse = function () {
    return false;
};

Scratch.extensions.register(new MyRobotExtension());
