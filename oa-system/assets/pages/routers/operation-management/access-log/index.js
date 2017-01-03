module.exports = {
    path: '/operation-management/access-log',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/access_log.jsx'));
        });
    }
};
