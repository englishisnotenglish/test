module.exports = {
    path: '/operation-management/tweets-ctrl',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            console.log('./components/tweets_ctrl.jsx');
            cb(null, require('./components/tweets_ctrl.jsx'));
        });
    }
};
