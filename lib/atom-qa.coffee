AtomQaView = require './atom-qa-view'
{CompositeDisposable} = require 'atom'

module.exports = AtomQa =
  atomQaView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @atomQaView = new AtomQaView(state.atomQaViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @atomQaView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'atom-qa:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @atomQaView.destroy()

  serialize: ->
    atomQaViewState: @atomQaView.serialize()

  toggle: ->
    console.log 'AtomQa was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
