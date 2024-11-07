/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#FF3399';
    const secondaryColour = '#C71585';

    Blockly.Blocks.meo_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_INIT,
                colour: '#5d3beb',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_setMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_SET_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            ['forward', 'forward'],
                            ['backward', 'backward'],
                            ['left', 'left'],
                            ['right', 'right'],
                            ['stop', 'stop']
                        ]
                    },
                ],
                colour: '#2e7ee4',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_buzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_BUZZER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SOUND'
                    },
                ],
                colour: "#dc356f",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_stopBuzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_STOP_BUZZER,
                colour: '#dc356f',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_setLed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_SET_LED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LED',
                        options: [
                            ['left', 'left_led'],
                            ['right', 'right_led'],
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['on', 'on'],
                            ['off', 'off']
                        ]
                    },
                    
                ],
                colour: '#884db0',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_wificonfig = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_WIFI_CONFIG,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWORD'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_mqttconfig = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_MQTT_CONFIG,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SERVER'
                    },
                    {
                        type: 'input_value',
                        name: 'PORT'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_finalconfig = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_FINAL_CONFIG,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_checkwifi = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_CHECK_WIFI,
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };
    Blockly.Blocks.meo_wifireconnect = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_WIFI_RECONNECT,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.meo_mqttpublish = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MEO_MQTT_PUBLISH,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MESSAGE'
                    },
                    {
                        type: 'input_value',
                        name: 'TOPIC'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly
}

exports = registerBlocks;
