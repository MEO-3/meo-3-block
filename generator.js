/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    Blockly.Arduino.meo_init = function () {
        Blockly.Arduino.definitions_['define_left_motor_pin_a'] = '#define PWM_PIN_L_A 2';
        Blockly.Arduino.definitions_['define_left_motor_pin_b'] = '#define PWM_PIN_L_B 10';
        Blockly.Arduino.definitions_['define_right_motor_pin_a'] = '#define PWM_PIN_R_A 6';
        Blockly.Arduino.definitions_['define_right_motor_pin_b'] = '#define PWM_PIN_R_B 5';
        Blockly.Arduino.definitions_['define_buzzer_pin'] = '#define buzzer 12';   // PLACEHOLDER
        Blockly.Arduino.definitions_['define_right_led_pin'] = '#define right_led 11';  // PLACEHOLDER
        Blockly.Arduino.definitions_['define_left_led_pin'] = '#define left_led 13';  // PLACEHOLDER

        Blockly.Arduino.definitions_['define_channel_1'] = `#define left_motor_channel_a 0`;
        Blockly.Arduino.definitions_['define_channel_2'] = `#define left_motor_channel_b 1`;
        Blockly.Arduino.definitions_['define_channel_3'] = `#define right_motor_channel_a 2`;
        Blockly.Arduino.definitions_['define_channel_4'] = `#define right_motor_channel_b 3\n`;
        Blockly.Arduino.definitions_['define_speed'] = `uint8_t vspeed = 100;\nuint8_t tspeed = 100;\n`;
        Blockly.Arduino.definitions_['define_speed_after'] = `uint8_t vspeed_l = vspeed;\nuint8_t tspeed_l = tspeed;\nuint8_t vspeed_r = vspeed * 1.1;\nuint8_t tspeed_r = tspeed * 1.1;\n`;
        return `ledcAttachChannel(PWM_PIN_L_A, 5000, 8, left_motor_channel_a);\nledcAttachChannel(PWM_PIN_L_B, 5000, 8, left_motor_channel_b);\nledcAttachChannel(PWM_PIN_R_A, 5000, 8, right_motor_channel_a);\nledcAttachChannel(PWM_PIN_R_B, 5000, 8, right_motor_channel_b);\n\npinMode(right_led, OUTPUT);\npinMode(left_led, OUTPUT);\n\n`;
    };
    Blockly.Arduino.meo_setMotor = function (block) {
        const direction = block.getFieldValue('DIRECTION');
        if (direction == 'forward') {
            return `ledcWriteChannel(left_motor_channel_a, vspeed_l);\nledcWriteChannel(left_motor_channel_b, 0);\nledcWriteChannel(right_motor_channel_a, vspeed_r);\nledcWriteChannel(right_motor_channel_b, 0);\n`;
        }
        if (direction == 'backward') {
            return `ledcWriteChannel(left_motor_channel_a, 0);\nledcWriteChannel(left_motor_channel_b, vspeed_l);\nledcWriteChannel(right_motor_channel_a, 0);\nledcWriteChannel(right_motor_channel_b, vspeed_r);\n`;
        }
        if (direction == 'left') {
            return `ledcWriteChannel(left_motor_channel_a, 0);\nledcWriteChannel(left_motor_channel_b, tspeed_l);\nledcWriteChannel(right_motor_channel_a, tspeed_r);\nledcWriteChannel(right_motor_channel_b, 0);\n`;
        }
        if (direction == 'right') {
            return `ledcWriteChannel(left_motor_channel_a, tspeed_l);\nledcWriteChannel(left_motor_channel_b, 0);\nledcWriteChannel(right_motor_channel_a, 0);\nledcWriteChannel(right_motor_channel_b, tspeed_r);\n`;
        }
        if (direction == 'stop') {
            return `ledcWriteChannel(left_motor_channel_a, 0);\nledcWriteChannel(left_motor_channel_b, 0);\nledcWriteChannel(right_motor_channel_a, 0);\nledcWriteChannel(right_motor_channel_b, 0);\n`;
        }
    };
    Blockly.Arduino.meo_buzzer = function (block) {
        const sound = Blockly.Arduino.valueToCode(block, 'SOUND', Blockly.Arduino.ORDER_ATOMIC);
        return `tone(buzzer, ${sound});\n`;
    };
    Blockly.Arduino.meo_stopBuzzer = function () {
        return `noTone(buzzer);\n`;
    };
    Blockly.Arduino.meo_setLed = function (block) {
        const led = block.getFieldValue('LED');
        const state = block.getFieldValue('STATE');
        if (state == 'on') {
            return `digitalWrite(${led}, HIGH);\n`;
        }
        if (state == 'off') {
            return `digitalWrite(${led}, LOW);\n`;
        }
    };
    Blockly.Arduino.meo_wificonfig = function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
        const password = Blockly.Arduino.valueToCode(block, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC);
        return `meo_con.setWifiConfig(${ssid}, ${password});\n`;
    };
    Blockly.Arduino.meo_mqttconfig = function (block) {
        const server = Blockly.Arduino.valueToCode(block, 'SERVER', Blockly.Arduino.ORDER_ATOMIC);
        const port = Blockly.Arduino.valueToCode(block, 'PORT', Blockly.Arduino.ORDER_ATOMIC);
        return `meo_con.setMqttConfig(${server},  ${port});\n`;
    };
    Blockly.Arduino.meo_finalconfig = function () {
        Blockly.Arduino.includes_.meo_mqttinit = `#include "MeoConnect.h"\n#include "MeoMessage.h"`
        Blockly.Arduino.definitions_.meo_mqttinit = `MeoConnect meo_con = MeoConnect();\nMeoMessage meo_me = MeoMessage();\n`;
        
        return `Serial.begin(115200);\n\nmeo_con.initConfig();\n\n`;
    };
    Blockly.Arduino.meo_checkwifi = function () {
        return [`meo_con.client.connected()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.meo_wifireconnect = function () {
        return `meo_con.reconnect();\n\n`;
    };
    Blockly.Arduino.meo_mqttpublish = function (block) {
        const message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);
        const topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC);
        return `meo_me.textMessageSetter(${message});\nmeo_con.pubMessageToTopic(meo_me.messageStorage, ${topic});\nmeo_me.reset();\nmeo_con.client.loop();\n`;
    };

    return Blockly;
}

exports = registerGenerators;
