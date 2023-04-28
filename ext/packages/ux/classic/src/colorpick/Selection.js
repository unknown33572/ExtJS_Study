/**
 * @private
 */
Ext.define('Ext.ux.colorpick.Selection', {
    mixinId: 'colorselection',

    /* eslint-disable max-len */
    config: {
        /**
         * @cfg {"hex6"/"hex8"/"#hex6"/"#hex8"/"rgb"/"rgba"/"HEX6"/"HEX8"/"#HEX6"/"#HEX8"/"RGB"/"RGBA"} [format=hex6]
         * The color format to for the `value` config. The `value` can be set using any
         * supported format or named color, but the stored value will always be in this
         * format.
         *
         * Supported formats are:
         *
         * - hex6 - For example "ffaa00" (Note: does not preserve transparency).
         * - hex8 - For example "ffaa00ff" - the last 2 digits represent transparency
         * - #hex6 - For example "#ffaa00" (same as "hex6" but with a leading "#").
         * - #hex8 - For example "#ffaa00ff" (same as "hex8" but with a leading "#").
         * - rgb - For example "rgb(255,255,0)" (Note: does not preserve transparency).
         * - rgba - For example "rgba(255,255,0,.25)"
         * - HEX6 - Same as "hex6" but upper case.
         * - HEX8 - Same as "hex8" but upper case.
         * - #HEX6 - Same as "#hex6" but upper case.
         * - #HEX8 - Same as "#hex8" but upper case.
         * - RGB - Same as "rgb" but upper case.
         * - RGBA - Same as "rgba" but upper case.
         */
        format: 'hex6',
        /* eslint-enable max-len */

        /**
         * @cfg {String} [value=FF0000]
         * The initial color to highlight; see {@link #format} for supported formats.
         */
        value: 'FF0000',

        /**
         * @cfg {Object} color
         * This config property is used internally by the UI to maintain the full color.
         * Changes to this config are automatically reflected in `value` and vise-versa.
         * Setting `value` can, however, cause the alpha to be dropped if the new value
         * does not contain an alpha component.
         * @private
         */
        color: null,
        previousColor: null,

        /**
         * @cfg {String} [alphaDecimalFormat=#.##]
         * The format used by {@link Ext.util.Format#number} to format the alpha channel's
         * value.
         * @since 7.0.0
         */
        alphaDecimalFormat: '#.##'
    },

    applyColor: function(color) {
        var c = color;

        if (Ext.isString(c)) {
            c = Ext.ux.colorpick.ColorUtils.parseColor(color, this.getAlphaDecimalFormat());
        }

        return c;
    },

    applyFormat: function(format) {
        var formats = Ext.ux.colorpick.ColorUtils.formats;

        if (!formats.hasOwnProperty(format)) {
            //<debug>
            Ext.raise('The specified format "' + format + '" is invalid.');
            //</debug>

            return;
        }

        return format;
    },

    applyValue: function(color) {
        // Transform whatever incoming color we get to the proper format
        var c = Ext.ux.colorpick.ColorUtils.parseColor(
            color || '#000000', this.getAlphaDecimalFormat()
        );

        return this.formatColor(c);
    },

    formatColor: function(color) {
        return Ext.ux.colorpick.ColorUtils.formats[this.getFormat()](color);
    },

    updateColor: function(color) {
        var me = this;

        // If the "color" is changed (via internal changes in the UI), update "value" as
        // well. Since these are always tracking each other, we guard against the case
        // where we are being updated *because* "value" is being set.
        if (!me.syncing) {
            me.syncing = true;
            me.setValue(me.formatColor(color));
            me.syncing = false;
        }
    },

    updateValue: function(value, oldValue) {
        var me = this;

        // If the "value" is changed, update "color" as well. Since these are always
        // tracking each other, we guard against the case where we are being updated
        // *because* "color" is being set.
        if (!me.syncing) {
            me.syncing = true;
            me.setColor(value);
            me.syncing = false;
        }

        this.fireEvent('change', me, value, oldValue);
    }
});
