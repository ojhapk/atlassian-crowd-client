'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Group = (function () {
  function Group(groupname) {
    var description = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var active = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    _classCallCheck(this, Group);

    this.groupname = groupname;
    this.description = description;
    this.active = active;
  }

  _createClass(Group, [{
    key: 'toCrowd',
    value: function toCrowd() {
      var obj = {
        type: 'GROUP',
        name: this.groupname,
        description: this.description,
        active: this.active
      };
      return obj;
    }
  }], [{
    key: 'fromCrowd',
    value: function fromCrowd(_ref) {
      var name = _ref.name;
      var description = _ref.description;
      var active = _ref.active;

      return new Group(name, description, active);
    }
  }]);

  return Group;
})();

exports['default'] = Group;
module.exports = exports['default'];