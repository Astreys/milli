(function(window, document, undefined) {
'use strict';

// Source: sidebar.js
angular.module('milli').run(['$templateCache', function($templateCache) {

  $templateCache.put('views/sidebar.html', '<ul class="nav bs-sidenav"><li><a href="#getting-started">Getting started</a></li><hr style="margin: 2px 0"><li><a href="#modals">Modal</a><ul class="nav"><li><a href="#modals-examples">Examples</a></li><li><a href="#modals-usage">Usage</a></li></ul></li><li><a href="#asides">Aside</a><ul class="nav"><li><a href="#asides-examples">Examples</a></li><li><a href="#asides-usage">Usage</a></li></ul></li><li><a href="#alerts">Alert</a><ul class="nav"><li><a href="#alerts-examples">Examples</a></li><li><a href="#alerts-usage">Usage</a></li></ul></li><li><a href="#tooltips">Tooltip</a><ul class="nav"><li><a href="#tooltips-examples">Examples</a></li><li><a href="#tooltips-usage">Usage</a></li></ul></li><li><a href="#popovers">Popover</a><ul class="nav"><li><a href="#popovers-examples">Examples</a></li><li><a href="#popovers-usage">Usage</a></li></ul></li><li><a href="#typeaheads">Typeahead</a><ul class="nav"><li><a href="#typeaheads-examples">Examples</a></li><li><a href="#typeaheads-usage">Usage</a></li></ul></li><li><a href="#datepickers">Datepicker</a><ul class="nav"><li><a href="#datepickers-examples">Examples</a></li><li><a href="#datepickers-usage">Usage</a></li></ul></li><li><a href="#timepickers">Timepicker</a><ul class="nav"><li><a href="#timepickers-examples">Examples</a></li><li><a href="#timepickers-usage">Usage</a></li></ul></li><li><a href="#buttons">Button</a><ul class="nav"><li><a href="#buttons-examples">Examples</a></li><li><a href="#buttons-usage">Usage</a></li></ul></li><li><a href="#selects">Select</a><ul class="nav"><li><a href="#selects-examples">Examples</a></li><li><a href="#selects-usage">Usage</a></li></ul></li><li><a href="#tabs">Tab</a><ul class="nav"><li><a href="#tabs-examples">Examples</a></li><li><a href="#tabs-usage">Usage</a></li></ul></li><li><a href="#collapses">Collapse</a><ul class="nav"><li><a href="#collapses-examples">Examples</a></li><li><a href="#collapses-usage">Usage</a></li></ul></li><li><a href="#dropdowns">Dropdown</a><ul class="nav"><li><a href="#dropdowns-examples">Examples</a></li><li><a href="#dropdowns-usage">Usage</a></li></ul></li><li><a href="#navbars">Navbar</a><ul class="nav"><li><a href="#navbars-examples">Examples</a></li><li><a href="#navbars-usage">Usage</a></li></ul></li><li><a href="#scrollspy">Scrollspy</a><ul class="nav"><li><a href="#scrollspy-examples">Examples</a></li><li><a href="#scrollspy-usage">Usage</a></li></ul></li><li><a href="#affix">Affix</a><ul class="nav"><li><a href="#affix-examples">Examples</a></li><li><a href="#affix-usage">Usage</a></li></ul></li></ul>');

}]);

// Source: aside.tpl.js
angular.module('milli').run(['$templateCache', function($templateCache) {

  $templateCache.put('views/partials/aside.tpl.html', '<div class="aside bs-docs-aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind-html="title"></h4></div><div class="aside-body bs-sidebar" style="float:right" ng-click="$hide();"><div ng-include="\'views/sidebar.html\'"></div></div></div></div></div>');

}]);


})(window, document);
