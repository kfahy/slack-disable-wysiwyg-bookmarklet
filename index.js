javascript:(function() {
    const teamId = window.slackDebug.activeTeamId;
    const redux = window.slackDebug[teamId].redux;
    const experiments = redux.getState().experiments;
    const filteredExperiments = {};
    for (const key in experiments) {
        if (!key.includes('wysiwyg')) {
            filteredExperiments[key] = experiments[key];
        }
    }
    redux.dispatch({
        type: '[19] Bulk add experiment assignments to redux',
        payload: filteredExperiments
    });
})();
