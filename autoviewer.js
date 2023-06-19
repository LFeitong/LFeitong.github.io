var viewer;
var options = {
    env: 'AutodeskProduction',
    api: 'derivativeV2',  // for models uploaded to EMEA change this option to 'streamingV2_EU'
    getAccessToken: function(onTokenReady) {
        var token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIiwicGkuYXRtIjoiN3ozaCJ9.eyJzY29wZSI6WyJjb2RlOmFsbCIsImRhdGE6d3JpdGUiLCJkYXRhOnJlYWQiLCJidWNrZXQ6Y3JlYXRlIiwiYnVja2V0OmRlbGV0ZSIsImJ1Y2tldDpyZWFkIl0sImNsaWVudF9pZCI6IjdRZE0wRkUxZXA4dG1FUFlLaXNEenZRSUI5cVk2ZWNtIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2Fqd3RleHA2MCIsImp0aSI6IklicjRLSEU1SkhzeUZxYkgzQ2tDdmdWSlBOZWxTRVlVaDRVR21laHZVM04ydWlSUDM1bmJvZUl6V3ZTRlJMejgiLCJleHAiOjE2ODcyMTg5NTB9.Spvu6uL8DKXrKVGrWkwgg8NTXuGtTAF1Rp66KUH09LYMwM_RfYQgdo901nyrBXwT6HoHkVAR0fgzKt9FVTw-kPR3UATCo_K2F1d3qfCWOz_TXCLXOu-STRyPv4wIm51VqCgeYvcrxzoaAvFbGlW9Hwo7oqt7QLXJGiyXV_BbEKMgVcGzC2GuPyMDSwJIG-SMIrSc_s9D3h1gWxwvP6w2tqrQPA_MoXF3bNNOiFP3c8ILDL-j53PfAfDY56W-hvn8Y3PnzZ0Ndnj8Uskkjg2fO2vFRKESttlRK3-KJy9s421HcmXWzSr3XjPYgmABVSepNJQqoR62wiQhgtW6Uwaj9Q';
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

