var viewer;
var options = {
    env: 'AutodeskProduction',
    api: 'derivativeV2',  // for models uploaded to EMEA change this option to 'streamingV2_EU'
    getAccessToken: function(onTokenReady) {
        var token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJjb2RlOmFsbCIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiLCJidWNrZXQ6Y3JlYXRlIiwiYnVja2V0OmRlbGV0ZSIsImJ1Y2tldDpyZWFkIl0sImNsaWVudF9pZCI6IjdRZE0wRkUxZXA4dG1FUFlLaXNEenZRSUI5cVk2ZWNtIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2Fqd3RleHA2MCIsImp0aSI6IjE3WlRKVkpQckRIeUp4R2Q0UkRFRm1uRU1raDdOTEJpNHdWYmVHRklEcE1xTmpRVGg0c0g0TmdjbjJVdm80NHEiLCJleHAiOjE2ODcyMDM2MjF9.aTjlUnHDJEJNUOzyQjSQ9GairHTlhfbnPyARzlmDsjqV-bLnIp3SMeyHAUzlKmnBy530oMgZr0Xo4q5M4egJWYAbZ2pLYZ_w7X1HRx0Sh-RoiZtTnF4cqoQJqHA6fJ_8f9ztnuQRXT_o6J328rJwBKmtqGc2lywRcpMKCt3-baCQOLG9RPoC6NiPgNuZb5dh0oX_a1W-iKBL5F5saGGUniCaXSZ4Y-Hpp3M8bOUAf5I4WSNPAVZTDQ1k-oqCY6dWmThtN5rL_jSiJPmfxYk6pco-kiPz4eJDG3NL6AgqHiCa_TuFyPLMEMEM5j26aj_w4cuOvv6hS0gvsP6hLGdauQ';
        var timeInSeconds = 3600; // Use value provided by APS Authentication (OAuth) API
        onTokenReady(token, timeInSeconds);
    }
};

var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGVtb2J1Y2tldDE5L1N1c3BlbnNpb24uemlw';
Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

function onDocumentLoadSuccess(viewerDocument) {
    var defaultModel = viewerDocument.getRoot().getDefaultGeometry();
    viewer.loadDocumentNode(viewerDocument, defaultModel);
}


function onDocumentLoadFailure() {
    console.error('Failed fetching Forge manifest');
}

Autodesk.Viewing.Initializer(options, function() {

    var htmlDiv = document.getElementById('forgeViewer');
    viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv, {});

    var startedCode = viewer.start();
    if (startedCode > 0) {
        console.error('Failed to create a Viewer: WebGL not supported.');
        return;
    }

    console.log('Initialization complete, loading a model next...');

});

