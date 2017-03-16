describe('user visits Rsvp page for event without a Plus One invited', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/email_confirmation/1234':  {
        GET: ['getEmailConfirmationWithoutPlusOne', 200],
        PATCH: ['patchSuccessResponse', 201]
      }
    });

    page = mountReactAppAt('/email_confirmation/1234');
    page.find('input #rsvp-yes').simulate('change', {target: { value: 'Yes'}});
  });

  describe('indicates they are coming alone', () => {
    it('should only show the notes & questions field', done => {
      setTimeout(() => {
        let pageText = page.text();
        expect(pageText).toMatch('Hi Priscilla!')
        expect(pageText).toMatch('Will you join us?')
        expect(pageText).toMatch('Is there anything we should know')
        expect(pageText).not.toMatch('plus one')
        expect(pageText).not.toMatch('Sorry to miss you!')
        done();
      }, 0)
    });

    it('should redirect them to the thank you page', done => {
      setTimeout(() => {
        let pageText = page.text();
        expect(pageText).not.toMatch('Sorry to miss you!')

        let submitButton = page.findWhere(n => {
          return n.type() === 'button' && n.text() === 'Send RSVP';
        });
        let notesField = page.findWhere(n => {
          return n.type() === 'textarea' && n.props().id === 'rsvp-notes';
        });
        let questionsField = page.findWhere(n => {
          return n.type() === 'textarea' && n.props().id === 'rsvp-questions';
        });
        simulateIfPresent(notesField, 'change', { target: { value: 'notes' } });
        simulateIfPresent(questionsField, 'change', { target: { value: 'questions' } });
        simulateIfPresent(submitButton, 'submit');

        setTimeout(() => {
          expect(page.text()).toMatch('Thank you for your RSVP');
          done();
        }, 0)
      }, 0)
    });
  });
});
