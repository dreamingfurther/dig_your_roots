describe('user visits Rsvp page for event', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/email_confirmation/1234':  {
        GET: ['getEmailConfirmationWithPlusOneWithoutFood', 200],
        PATCH: ['patchSuccessResponse', 201]
      }
    });

    page = mountReactAppAt('/email_confirmation/1234');
    page.find('input #rsvp-yes').simulate('change', {target: { value: 'Yes'}});
  });

  describe('indicates they are coming with a plus one', () => {
    it('should show all fields except plus one name', done => {
      setTimeout(() => {
        let pageText = page.text();
        expect(pageText).toMatch('Hi Priscilla!')
        expect(pageText).toMatch('Will you join us?')
        expect(pageText).toMatch('plus one')
        expect(pageText).not.toMatch('Is there anything we should know')
        expect(pageText).not.toMatch('Sorry to miss you!')

        page.find('input #rsvp-guest-no').simulate('change', {target: { value: 'No'}});
        pageText = page.text();

        expect(pageText).not.toMatch("What's their name?")
        expect(pageText).toMatch('Is there anything we should know')

        done();
      }, 0)
    });

    it('should redirect them to the thank you page', done => {
      setTimeout(() => {
        page.find('input #rsvp-guest-no').simulate('change', {target: { value: 'No'}});

        let pageText = page.text();
        expect(pageText).not.toMatch('Sorry to miss you!')
        expect(pageText).not.toMatch("What's their name?")

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
          expect(fetch).toHaveBeenCalledWith(
            '/api/v1/email_confirmation/1234',
            {
              credentials: 'same-origin',
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: '1234',
                answer: {
                  rsvp: 'Yes',
                  plus_one_attending: "No",
                  notes: 'notes',
                  questions: 'questions'
                }
              })
            }
          )
          done();
        }, 0)
      }, 0)
    });
  });
});
