/**
 * This file is a part of "[Editor] Multiple Drag'n'Drop".
 * All rights is reserved.
 *
 * Developed by SourceModders.
 */

(function($, window, document, _undefined)
{
    XF.Element.extend('editor', {
        __backup: {
            'editorInit': '_parentEditorInit'
        },

        editorInit: function()
        {
            this.ed.events.on('drop', XF.proxy(this, 'onDropEvent'), true);
            this._parentEditorInit();
        },

        onDropEvent: function (e)
        {
            var am = this.getAttachmentManager();
            if (am == null)
            {
                return;
            }

            var dataTransfer = e.originalEvent.dataTransfer;
            var files = dataTransfer == null ? [] : dataTransfer.files;

            if (files.length > 1)
            {
                // Ignore first file.
                for (var id = 1; id < files.length; ++id)
                {
                    am.flow.addFile(files[id]);
                }
            }
        }
    })
})(jQuery, window, document);
