module.exports = {
    path: '/operation-management/tweets-ctrl',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            console.log('/operation-management/tweets-ctrl');
            cb(null, require('./components/tweets_ctrl.js'));
        });
    }
};
