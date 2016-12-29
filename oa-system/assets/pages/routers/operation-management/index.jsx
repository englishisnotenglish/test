module.exports = {
    path: 'operation-management',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./access-log/index.jsx'),
                require('./daily-tweets/index.jsx')
            ]);
        });
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            console.log('./components/tweets_ctrl.jsx1');
            cb(null, require('./daily-tweets/components/tweets_ctrl.jsx'));
        });
    }
};
