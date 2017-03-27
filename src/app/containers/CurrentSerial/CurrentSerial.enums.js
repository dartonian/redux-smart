const enums = {
    initialState : {
        currentSerial: {
            title: '',
            seasons: []
        },
        currentSeason: 0,
        currentVideo: 0
    },
    UPDATE: 'UPDATE@CURRENT_SERIAL',
    GET_CURRENT_SERIAL: 'GET_CURRENT_SERIAL@CURRENT_SERIAL'
};

export default enums;