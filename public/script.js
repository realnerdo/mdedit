window.onload = function(){
    var converter = new showdown.Converter(),
        pad = document.getElementById('pad'),
        markdownArea = document.getElementById('markdown');

    var previousMarkdownValue;

    var convertedTextAreaToMarkdown = function(){
            var markdownText = pad.value;
            html = converter.makeHtml(markdownText);
            markdownArea.innerHTML = html;
    };

    var didChangeOccur = function(){
            if(previousMarkdownValue != pad.value){
                return true;
            }
            return false;
    };

    setInterval(function(){
        if(didChangeOccur()){
            convertedTextAreaToMarkdown();
        }
    }, 1000);

    pad.addEventListener('input', convertedTextAreaToMarkdown);

    // convertedTextAreaToMarkdown();

    sharejs.open(document.location.pathname, 'text', function(error, doc){
        doc.attach_textarea(pad);
    });

    if(document.location.pathname.length > 1){
        var documentName = document.location.pathname.substring(1);
        sharejs.open(documentName, 'text', function(error, doc){
            doc.attach_textarea(pad);
            convertedTextAreaToMarkdown();
        });
    }

    convertedTextAreaToMarkdown();
};
