// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    return {
        "en": {
            "meo.name": "MEO BLOCKS",
            "meo.description": "MEO3 Module",
        }
    }
    ;
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "MEO_CATEGORY": "MEO BLOCKS",
            "MEO_INIT": "init mqtt wifi",
            "MEO_WIFI_CONFIG": "set wifi ssid %1 password %2",
            "MEO_MQTT_CONFIG": "set mqtt server %1 port %2",
            "MEO_FINAL_CONFIG": "finalize config and connect (after wifi&mqtt)",
            "MEO_CHECK_WIFI": "check wifi connection",
            "MEO_WIFI_RECONNECT": "reconnect wifi",
            "MEO_MQTT_PUBLISH": "mqtt publish message %1 topic %2"
        }
    );
    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
