module.exports = {
    path: 'operation-management',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./daily-tweets/index.js'),
                require('./access-log/index.js')
            ]);
        });
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            console.log('/operation-management/tweets-ctrl');
            cb(null, require('./daily-tweets/components/tweets_ctrl'));
        });
    }
};
