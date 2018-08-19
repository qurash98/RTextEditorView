var enable = function() {
    $('#summernote').summernote('enable');
};

var disable = function() {
    $('#summernote').summernote('disable');
};

var destroy = function() {
    $('#summernote').summernote('destroy');
};

var undo = function() {
    $('#summernote').summernote('undo');
};

var redo = function() {
    $('#summernote').summernote('redo');
};

var clear = function() {
    $('#summernote').summernote('reset');
};

var setFocus = function(){
    $('#summernote').summernote('focus');
};

var setHtml = function(html) {
    $('#summernote').summernote('code', html);
};

var setBold = function() {
    $('#summernote').summernote('bold');
};

var setItalic = function() {
    $('#summernote').summernote('italic');
};

var setUnderline = function() {
    $('#summernote').summernote('underline');
};

var setStrikeThrough = function() {
    $('#summernote').summernote('strikethrough');
};

var removeFormat = function() {
    $('#summernote').summernote('removeFormat');
};

var setFontSize = function(size) {
    $('#summernote').summernote('fontSize', size);
};

var setNormal = function() {
    $('#summernote').summernote('formatPara');
};

var setHeading = function(heading) {
    $('#summernote').summernote('formatH' + heading);
};

var setLineHeight = function(height) {
    $('#summernote').summernote('lineHeight', height);
}

var setSuperscript = function() {
    $('#summernote').summernote('superscript');
};

var setSubscript = function() {
    $('#summernote').summernote('subscript');
};

var setTextForeColor = function(hexColor) {
    if (!hexColor.startsWith('#')) {
        hexColor = '#' + hexColor;
    }
    $('#summernote').summernote('foreColor', hexColor);
};

var setTextBackColor = function(hexColor) {
    if (!hexColor.startsWith('#')) {
        hexColor = '#' + hexColor;
    }
    $('#summernote').summernote('backColor', hexColor);
};

var setBlockCode = function() {
    $('#summernote').summernote('formatBlock', 'pre');
};

var insertUnorderedList = function() {
    $('#summernote').summernote('insertUnorderedList');
};

var insertOrderedList = function() {
    $('#summernote').summernote('insertOrderedList');
};

var setBlockQuote = function() {
    $('#summernote').summernote('formatBlock', 'blockquote');
};

var setAlignLeft = function() {
    $('#summernote').summernote('justifyLeft');
};

var setAlignCenter = function() {
    $('#summernote').summernote('justifyCenter');
};

var setAlignRight = function() {
    $('#summernote').summernote('justifyRight');
};

var setAlignJustify = function() {
    $('#summernote').summernote('justifyFull');
};

var insertHorizontalRule = function() {
    $('#summernote').summernote('insertHorizontalRule');
};

var indent = function() {
    $('#summernote').summernote('indent');
};

var outdent = function() {
    $('#summernote').summernote('outdent');
};

var insertTable = function(dimen) {
    $('#summernote').summernote('insertTable', dimen);
};

var insertLink = function(linkTitle, linkUrl) {
    $('#summernote').summernote('createLink', {
        text: linkTitle,
        url: linkUrl,
        isNewWindow: false
    });
};

var unlink = function() {
    $('#summernote').summernote('unlink');
};

var insertText = function(text) {
    $('#summernote').summernote('insertText', text);
};

var editHtml = function() {
    $('#summernote').summernote('codeview.toggle');
};

var screenshot = function(width, height) {
    $('#summernote').scrollTop = 0;

    html2canvas(document.body, {
        width: width,
        height: height
    }).then(function(canvas)
    {
        var data = canvas.toDataURL();
        RTextEditorView.onImageCaptured(data);
    });
};

var getEditorWidth = function() {
    return $('.note-editing-area').width();
};

var getEditorHeight = function() {
    return $('.note-editable').height();
};

var scrollToTop = function() {
    window.scrollTo(0, 0);
}

document.addEventListener('touchstart', function(e) {
    RTextEditorView.onTouch();
}, false);

var focus = function() {
    $(".note-editing-area").focus();
}

var blur = function() {
    $(".note-editing-area").blur();
}

var showCursor = function() {
    $(".note-editing-area:focus").css("outline", "inherit");
}

var hideCursor = function() {
    $(".note-editing-area:focus").css("outline", "none");
}