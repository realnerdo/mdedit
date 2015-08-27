window.onload = function(){
    var converter = new showdown.Converter(),
        pad = document.getElementById('pad'),
        markdownArea = document.getElementById('markdown');

    var convertedTextAreaToMarkdown = function(){
            var markdownText = pad.value;
            html = converter.makeHtml(markdownText);
            markdownArea.innerHTML = html;
    };

    pad.addEventListener('input', convertedTextAreaToMarkdown);

    convertedTextAreaToMarkdown();
};
