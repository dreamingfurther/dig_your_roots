describe('user visits Rsvp page for event', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/email_confirmation/1234':  {
        GET: ['getEmailConfirmationWithPlusOne', 200],
        PATCH: ['patchSuccessResponse', 201]
      }
    });

    page = mountReactAppAt('/email_confirmation/1234');
    page.find('input #rsvp-no').simulate('change', {target: { value: 'No'}});
  });

  describe('indicates they are not coming because they suck', () => {
    it('should only show the notes field', done => {
      setTimeout(() => {
        let pageText = page.text();
        expect(pageText).toMatch('Hi Priscilla!')
        expect(pageText).toMatch('Will you join us?')
        expect(pageText).toMatch('Sorry to miss you!')
        expect(pageText).not.toMatch('plus one')
        done();
      }, 0)
    });

    it('should redirect them to the thank you page', done => {
      setTimeout(() => {
        let pageText = page.text();
        expect(pageText).toMatch('Sorry to miss you!')

        let submitButton = page.findWhere(n => {
          return n.type() === 'button' && n.text() === 'Send RSVP';
        });
        let notesField = page.findWhere(n => {
          return n.type() === 'textarea' && n.props().id === 'rsvp-excuse';
        });
        simulateIfPresent(notesField, 'change', { target: { value: 'notes' } });
        simulateIfPresent(submitButton, 'submit');

        setTimeout(() => {
          expect(page.text()).toMatch('Thank you for your RSVP');
          done();
        }, 0)
      }, 0)
    });
  });
});
