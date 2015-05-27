/**
 * Application JavaScript functions only
 * Author: Jean-Pierre Blanchette
 */

// prevent log function from breaking browsers without console (e.g. IE8)
prp.fn.init_window_console = function() {
    if (!window.console) {
        window.console = {
            log: function() {},
            debug: function() {},
            info: function() {},
            warn: function() {},
            error: function() {},
            time: function() {},
            timeEnd: function() {}
        };
    };
};

prp.fn.init_conditionizr = function() {
    conditionizr({
        debug      : false,
        scriptSrc  : 'js/libs/conditionizr/',
        styleSrc   : 'css/conditionizr/',
        ieLessThan : { active: false, version: '9', scripts: false, styles: false, classes: true, customScript: false },
        chrome     : { scripts: false, styles: false, classes: true, customScript: false },
        safari     : { scripts: false, styles: false, classes: true, customScript: false },
        opera      : { scripts: false, styles: false, classes: true, customScript: false },
        firefox    : { scripts: false, styles: false, classes: true, customScript: false },
        ie10       : { scripts: false, styles: false, classes: true, customScript: false },
        ie9        : { scripts: false, styles: false, classes: true, customScript: false },
        ie8        : { scripts: false, styles: false, classes: true, customScript: false },
        ie7        : { scripts: false, styles: false, classes: true, customScript: false },
        ie6        : { scripts: false, styles: false, classes: true, customScript: false },
        retina     : { scripts: false, styles: false, classes: true, customScript: false },
        touch      : { scripts: false, styles: false, classes: true, customScript: false },
        mac        : true,
        win        : true,
        x11        : true,
        linux      : true
    });
};

// flash detection
prp.fn.init_flash_detection = function() {
    if (FlashDetect.installed) {
        $("html").addClass("flash");
        prp.gl["flash"] = true;
    } else {
        $("html").addClass("no-flash");
        prp.gl["flash"] = false;
    }
};
prp.fn.visible_flash = function() {
    return prp.gl["flash"];
};
prp.fn.hidden_flash = function() {
    return !prp.fn.visible_flash();
};

// mobile browser detection
prp.fn.init_mobile_browser_detection = function() {
    if (jQuery.browser && jQuery.browser.mobile) {
        $("html").addClass("mobile-browser");
        prp.gl["mobile-browser"] = true;
    } else {
        $("html").addClass("no-mobile-browser");
        prp.gl["mobile-browser"] = false;
    }
};
prp.fn.visible_mobile_browser = function() {
    return prp.gl["mobile-browser"];
};
prp.fn.hidden_mobile_browser = function() {
    return !prp.fn.visible_mobile_browser();
};

// global ajax error logger
prp.fn.init_ajax_error_logger = function() {
    $(document).ajaxError(function(e, xhr, settings, exception) {
        console.log("AJAX Error: " + xhr.status + " - " + xhr.statusText + ": " + settings.url);
    });
};

// global language detection
prp.fn.init_language_detection = function() {
    var lang = $("html").attr("lang");
    if (lang) {
        prp.gl.lang = lang;
    }
};

// a simple template helper
prp.fn.compile_template = function(template, data) {
    var ret = template;
    var t1 = "{{";
    var t2 = "}}";
    $.each(data, function(key, value) {
        ret = ret.replace(t1 + key + t2, value, "g");
    });
    return ret;
};

// check if a variable is null
// parse an object value into a boolean value - true/false
prp.fn.parse_bool = function(object) {
    if (object == null) {
        return false;
    } else if (typeof object == 'undefined') {
        return false;
    } else if (typeof object == 'boolean') {
        return object;
    } else if (typeof object == 'number' && object === 1) {
        return true;
    } else if (typeof object == 'string' && object.replace(/^\s+|\s+$/g, "").toLowerCase() === "true") {
        return true;
    } else {
        return false;
    }
};

// escape special characters for jquery selector
prp.fn.jq = function(myid) {
    return myid.replace(/(:|\.|\[|\])/g,'\\$1');
};

// convert all occurances of / to //
prp.fn.addslashes = function(str) {
    return (str+'').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
};

// run a regular expression against a string, check for match
prp.fn.reg_exp_execute = function(Pattern, StringToSearch) {
    var ret = false;

    if (StringToSearch) {
        var RegExpObj = new RegExp(Pattern,"ig");
        var match = RegExpObj.exec(StringToSearch);
        RegExpObj = null;

        if (match) {
            if (match.length > 0) {
                ret = true;
            }
        } else {
            ret = false;
        }
        match = null;
    }
    return ret;
};

// run a regular expression against a string, replace with other string
prp.fn.reg_exp_replace = function(StringToSearch, findString, replacewith) {
    var ret = StringToSearch;

    if (StringToSearch) {
        var RegExpObj = new RegExp(findString, "ig");
        //ret = StringToSearch.replace(findString, replacewith);
        ret = StringToSearch.replace(RegExpObj, replacewith);
        RegExpObj = null;
    }
    return ret;
};

// abreviate a long string of characters, with a desired char count
prp.fn.cut_string = function(strWords, charLimit) {
    if (strWords && charLimit) {
        if (strWords.length > charLimit) {
            return strWords.substring(0, charLimit) + " ...";
        } else {
            return strWords;
        }
    }
};

// CSS media querys - based on variables.less
prp.fn.visible_phone_portrait = function() {
    var test = "(max-width: " + prp.gl["media-query"]["max-phone"] + ")";
    return (matchMedia(test).matches);
};

prp.fn.visible_phone = function() {
    var test = "(max-width: " + prp.gl["media-query"]["max-tablet"] + ")";
    return (matchMedia(test).matches);
};

prp.fn.visible_tablet = function() {
    var test = "(min-width: " + prp.gl["media-query"]["min-tablet"] + ") and (max-width: " + prp.gl["media-query"]["max-desk"] + ")";
    return (matchMedia(test).matches);
};

prp.fn.visible_desktop = function() {
    var test = "(min-width: " + prp.gl["media-query"]["max-desk"] + ")";
    return (matchMedia(test).matches);
};

prp.fn.visible_desktop_only = function() {
    var test = "(min-width: " + prp.gl["media-query"]["min-desk"] + ") and (max-width: " + prp.gl["media-query"]["max-wide"] + ")";
    return (matchMedia(test).matches);
};

prp.fn.visible_wide = function() {
    var test = "(min-width: " + prp.gl["media-query"]["min-wide"] + ")";
    return (matchMedia(test).matches);
};

// hidden media query functions
prp.fn.hidden_phone_portrait = function() {
    return !prp.fn.visible_phone_portrait();
};

prp.fn.hidden_phone = function() {
    return !prp.fn.visible_phone();
};

prp.fn.hidden_tablet = function() {
    return !prp.fn.visible_tablet();
};

prp.fn.hidden_desktop = function() {
    return !prp.fn.visible_desktop();
};

prp.fn.hidden_desktop_only = function() {
    return !prp.fn.visible_desktop_only();
};

prp.fn.hidden_wide = function() {
    return !prp.fn.visible_wide();
};

// return first object that has ID
// Usuage: get_first_object_key_match(TestObj, 'id');
prp.fn.get_first_object_key_match = function(obj, key) {
  var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(get_first_object_key_match(obj[i], key));
        } else if (i == key) {
            objects.push(obj);
            break;
        }
    }
    return objects;
};

// return first object that has ID with VALUE
// Usuage: get_first_object_key_val_match(TestObj, 'id', '1234');
prp.fn.get_first_object_key_val_match = function(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(get_first_object_key_val_match(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
            break;
        }
    }
    return objects;
};

// return all objects that have ID
// Usuage: get_all_objects_key_match(TestObj, 'id');
prp.fn.get_all_objects_key_match = function(obj, key) {
  var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(get_all_objects_key_match(obj[i], key));
        } else if (i == key) {
            objects.push(obj);
        }
    }
    return objects;
};

// return all objects that have ID with VALUE
// Usuage: get_all_objects_key_val_match(TestObj, 'id', '1234');
prp.fn.get_all_objects_key_val_match = function(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(get_all_objects_key_val_match(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
};

// return all object from arr, that have a distinct key value
// Usuage: get_all_objects_key_val_distinct(TestObj, 'id');
prp.fn.get_all_objects_key_val_distinct = function(arr, key) {
    var hash = {}, result = [];
    for (var i = 0, l = arr.length; i < l; ++i) {
        if (!hash.hasOwnProperty(arr[i][key])) {
            hash[arr[i][key]] = true;
            result.push(arr[i]);
        }
    }
    return result;
};

// open a new browser window
prp.fn.open_window = function(options) {
  // set up default options
  var defaults = {
    url: "#",
    name: "newwindow",
    width: 780,
    height: 600,
    status: "no",
    toolbar: "no",
    menubar: "no",
    location: "no",
    resizable: "yes",
    scrollbars: "yes"
  };

  // Overwrite default options with user provided ones and merge them into "options".
  var options = $.extend({}, defaults, options);

  // build params
  var params = "";
  params += "width=" + options.width;
  params += ",height=" + options.height;
  params += ",status=" + options.status;
  params += ",toolbar=" + options.toolbar;
  params += ",menubar=" + options.menubar;
  params += ",location=" + options.location;
  params += ",resizable=" + options.resizable;
  params += ",scrollbars=" + options.scrollbars;

  // open the window, it's hot in here
  var win = window.open(options.url, options.name, params);
  win.focus();
};

/**
 * console log helper - output onto multiple lines
 * @return {null} - nothing
 */
prp.fn.log = function() {
    if (window.console && window.console.log) {
        var args = arguments;
        var n = "\n";
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] == "object") {
                console.log(prp.fn.printo(args[i], true, 0));
            } else {
                console.log(args[i]);
            }
        }
    }
};

/**
 * console log helper - output onto single line
 * @return {null} - nothing
 */
prp.fn.logg = function() {
    if (window.console && window.console.log) {
        var args = arguments;
        var ret = "";
        var sep = "";

        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] == "object") {
                ret += prp.fn.printo(args[i], false, 0) + ", ";
            } else {
                sep = (i == 0) ? ": " : ", ";
                ret += (args[i] + sep);
            }
        }
        ret = ret.substring(0, ret.length - 2);
        console.log(ret);
    }
};

/**
 * print object to string - helper function for log and logg
 * @param  {object} o - object to be strigified
 * @param  {boolean} nl - true = newlines or false = singleline
 * @param  {integer} lvl - tab level depth (zero based)
 * @return {string} - formatted object as string for console output
 */
prp.fn.printo = function(o, nl, lvl) {
    var ret = "";
    var n = (nl) ? "\n" : " ";
    var t = (nl && lvl >= 0) ? "  " : "";
    var tend = ""; // end tab
    var treg = ""; // reg tab

    for (i = 0; i < lvl; i++) {
        tend += t;
    }
    treg = tend + t;

    if (Object.keys(o).length === 0) {
        ret += "{ empty }";
    } else {
        ret += "{" + n;
        for (var p in o) {
            if (o[p] === null) {
                ret += treg + p + ": null;" + n;

            } else if (o[p] === undefined) {
                ret += treg + p + ": undefined;" + n;

            } else if (typeof o[p] == "object") {
                ret += treg + p + ": " + prp.fn.printo(o[p], nl, lvl + 1) + n;

            } else if (typeof o[p] == "string") {
                ret += treg + p + ": '" + o[p] + "';" + n;

            } else {
                ret += treg + p + ": " + o[p] + ";" + n;
            }
        }
        ret += tend + "}";
    }

    return ret;
};

/**
 * Determine if a variable is an actual function (taken from Backbone.js)
 * @param  {Object} obj - the object to that may be a function
 * @return {boolean}    - return true if obj is function
 */
prp.fn.isFunction = function(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
};

prp.fn.init_no_conflicts = function() {
    if (prp.fn.isFunction($.fn.tooltip.noConflict)) {
        $.fn.tooltip.noConflict();
    }
    if (prp.fn.isFunction($.fn.modal.noConflict)) {
        $.fn.modal.noConflict();
    }
};

/**
 * re-render the jquery validator error messages
 * @param  {jquery object} $that - of form to process
 * @return {null}
 */
prp.fn.render_validation = function ($that) {
    $that.find('.field-validation-error').each(function () {

        // Get the name of the element the error message is intended for
        // Note: ASP.NET MVC replaces the '[', ']', and '.' characters with an
        // underscore but the data-valmsg-for value will have the original characters
        var inputElem = '#' + $(this).attr('data-valmsg-for').replace('.', '_').replace('[', '_').replace(']', '_');
        var $inputElem = $(inputElem);

        //var corners = ['left center', 'right center'];
        //var flipIt = $(inputElem).parents('span.right').length > 0;

        // Hide the default validation error
        $(this).addClass('hide');

        // Show the validation error using qTip
        $inputElem.filter(':not(.valid)').attr('title', $(this).text());
        $inputElem.tooltip({ persistent: true, classname: "tooltip2" });
    });

    // add the associated validation error class for each label
    $that.find(".input-validation-error").each(function () {
        var $label = $that.find("label[for='" + $(this).attr("id") + "']");

        var data_error = $label.attr("data-error") || "error-lab-right";
        if (data_error) {
            $label.addClass(data_error);
        }

        var data_info = $label.attr("data-info") || "req-lab-right";
        if (data_info) {
            $label.removeClass(data_info);
        }
    });
};

/**
 * show an overlay to block user input
 * @param  {jquery object} $overlay - the overlay
 * @param  {jquery object} $target - what overlay will block
 * @param  {class selector} spinner - selector in overlay
 * @param  {integer} size - of spinner width and height
 * @return {null}
 */
/*
<div id="loading" class="behave-spinner-box">
    <img class="behave-spinner" width="32" height="32" src="respdes/images/icons/throbber-grey.gif"  alt="Loading" />
</div>
*/
prp.fn.show_overlay_blocker = function($overlay, $target, spinner, size) {
    // args
    // console.log("$overlay: " + $overlay);
    // console.log("$target: " + $target);
    // console.log("spinner: " + spinner);

    // target position
    var offset = $target.position();

    // target size
    var width = $target.outerWidth(true);
    var height = $target.outerHeight(true);
    // console.log("width: " + width);
    // console.log("height: " + height);

    // spinner size
    // console.log("size: " + size);

    // spinner location
    var top_val = (height / 2) - (size / 2);
    var left_val = (width / 2)- (size / 2);
    // console.log("top_val: " + top_val);
    // console.log("left_val: " + left_val);

    // set wrapper size
    $overlay.width(width);
    $overlay.height(height);

    // set spinner location
    $overlay.find(spinner).position({
        top: top_val,
        left: left_val
    });
};

// console all external and embedded stylesheet selector counts with pass or fail result.
prp.fn.console_count_css = function(silent) {
    var log = ""; // console output
    var limit = 4095; // CSS selector limit for IE6+

    if (!document.styleSheets) {
        return;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
        var count = 0; // css selector count
        var failed = false; // true if failed
        var sheet = document.styleSheets[i]; // external or embedded stylesheet

        if (sheet && sheet.cssRules) {
            for (var j = 0, l = sheet.cssRules.length; j < l; j++) {
                if( !sheet.cssRules[j].selectorText ) {
                    continue;
                }
                count += sheet.cssRules[j].selectorText.split(",").length;
            }

            failed = (count > limit);

            log += "\nFile: " + (sheet.href ? sheet.href : "inline <style> tag");
            if (failed) {
                log += "\nFAIL = ";
            } else {
                log += "\nPASS = ";
            }
            // log += "Rules: " + sheet.cssRules.length + ", "; // not necessary output
            log += "Selectors: " + count + ", ";
            log += "Limit: " + limit + ", ";
            if (failed) {
                log += "Ignored: " + (count - limit) + " selectors (by IE 6-9 only).";
            } else {
                log += "Remaining: " + (limit - count) + " selectors (until IE 6-9 ignores).";
            }
            log += "\n";
        }
    }

    if (console) {
        console.log(log);
    }
};

// used by main login form
prp.fn.submit_login_body = function (e) {
    var $form = $('#whl-form-login');
    var $fields = $('#whl-form-login-fields');
    var $throbber = $('#whl-form-throbber');
    var ret = false;

    if ($form.valid()) {
        $fields.hide();
        $throbber.show();
        ret = true;
    }
    return ret;
};

// process the main login form
prp.fn.process_login_body = function (action) {
    var $form = $('#whl-form-login');

    if ($('#endLogin').val() == "end") {
        document.location.href = $('#redirectTo').val();
    }
    $form[0].action = action;

    prp.fn.render_validation($form);
}
