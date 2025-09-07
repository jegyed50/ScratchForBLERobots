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
