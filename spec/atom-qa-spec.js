'use babel';

var AtomQa;

AtomQa = require('../lib/atom-qa');

describe('AtomQa', () => {

  var activationPromise, ref, workspaceElement;

  ref = [], workspaceElement = ref[0], activationPromise = ref[1];

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    return activationPromise = atom.packages.activatePackage('atom-qa');
  });

  return describe('when the atom-qa:toggle event is triggered', () => {

    it('hides and shows the modal panel', () => {
      expect(workspaceElement.querySelector('.atom-qa')).not.toExist();
      atom.commands.dispatch(workspaceElement, 'atom-qa:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        var atomQaElement, atomQaPanel;
        expect(workspaceElement.querySelector('.atom-qa')).toExist();
        atomQaElement = workspaceElement.querySelector('.atom-qa');
        expect(atomQaElement).toExist();
        atomQaPanel = atom.workspace.panelForItem(atomQaElement);
        expect(atomQaPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'atom-qa:toggle');
        return expect(atomQaPanel.isVisible()).toBe(false);
      });

    });

    it('hides and shows the view', () => {
      jasmine.attachToDOM(workspaceElement);
      expect(workspaceElement.querySelector('.atom-qa')).not.toExist();
      atom.commands.dispatch(workspaceElement, 'atom-qa:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(function() {
        var atomQaElement;
        atomQaElement = workspaceElement.querySelector('.atom-qa');
        expect(atomQaElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'atom-qa:toggle');
        expect(atomQaElement).not.toBeVisible();
      });
    });
  });
});
