(() => {
    const workspaceIds = slackDebug.clientStore.workspaces.getAllWorkspaces();
    for (const workspaceId of workspaceIds) {
        const { redux } = slackDebug[workspaceId];
        const {
            wysiwyg_composer,
            wysiwyg_composer_ios,
            wysiwyg_composer_webapp,
            ...payload
        } = redux.getState().experiments;
        redux.dispatch({
            type: '[19] Bulk add experiment assignments to redux',
            payload
        });
    }
})();
