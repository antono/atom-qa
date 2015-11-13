'use babel';

var AtomQa, AtomQaView, CompositeDisposable;

AtomQaView = require('./atom-qa-view');

CompositeDisposable = require('atom').CompositeDisposable;

AtomQa = {
  atomQaView: null,
  modalPanel: null,
  subscriptions: null,
  activate: function(state) {
    this.atomQaView = new AtomQaView(state.atomQaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomQaView.getElement(),
      visible: false
    });
    this.subscriptions = new CompositeDisposable;
    return this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-qa:toggle': (function(_this) {
        return function() {
          return _this.toggle();
        };
      })(this)
    }));
  },
  deactivate: function() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    return this.atomQaView.destroy();
  },
  serialize: function() {
    return {
      atomQaViewState: this.atomQaView.serialize()
    };
  },
  toggle: function() {
    console.log('AtomQa was toggled!');
    if (this.modalPanel.isVisible()) {
      return this.modalPanel.hide();
    } else {
      return this.modalPanel.show();
    }
  }
};

module.exports = AtomQa;
