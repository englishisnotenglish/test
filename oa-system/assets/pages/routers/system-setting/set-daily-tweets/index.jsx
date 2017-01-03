module.exports = {
    path: 'course/:courseId',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Announcements/index.js'),
                require('./routes/Assignments'),
                require('./routes/Grades')
            ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Course'))
        })
    }
};
