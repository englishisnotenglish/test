module.exports = {
    path: 'course/:courseId',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Announcements/index.js'),
                require('./routes/Assignments/index.js'),
                require('./routes/Grades/index.js')
            ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./set-daily-tweets/component/set_daily_tweets_ctrl.jsx'))
        })
    }
};
