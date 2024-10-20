const mqttwifi = formatMessage => ({
    name: formatMessage({
        id: 'meo.name',
        default: 'MEO3 Module'
    }),
    extensionId: 'meo',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp32C3', 'thingBot_esp32C3', 'thingBot_arduinoEsp32C3'],
    author: 'undo1111hp',
    iconURL: `assets/ps2.png`,
    description: formatMessage({
        id: 'mqtt_wifi.description',
        default: 'MQTT and Wifi Module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'https://github.com/MEO-3'
});

module.exports = mqttwifi;