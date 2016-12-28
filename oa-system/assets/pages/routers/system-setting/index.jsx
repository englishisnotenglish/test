module.exports = {
    path: 'course/:courseId',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Announcements/index.jsx'),
                require('./routes/Assignments/index.jsx'),
                require('./routes/Grades/index.jsx')
            ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./set-daily-tweets/component/set_daily_tweets_ctrl.jsx'))
        })
    }
};
