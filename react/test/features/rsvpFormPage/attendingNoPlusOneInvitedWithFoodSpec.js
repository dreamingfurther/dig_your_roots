describe('user visits Rsvp page for event without a Plus One invited with food', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/email_confirmation/1234':  {
        GET: ['getEmailConfirmationWithoutPlusOneWithFood', 200],
        PATCH: ['patchSuccessResponse', 201]
      }
    });

    page = mountReactAppAt('/email_confirmation/1234');
    let mediumArea = page.find('.medium-up-yes-no');
    mediumArea.find('input #rsvp-yes').simulate('change', {target: { value: 'Yes'}});
  });

  describe('indicates they are coming alone', () => {
    it('should only show the notes & questions field', done => {
      setTimeout(() => {
        page.find('input #rsvp-beef').simulate('change', { target: { value: 'beef'}});
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
        page.find('input #rsvp-beef').simulate('change', { target: { value: 'beef'}});
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
        fillIn('password', { with: 'password' }, page);
        fillIn('passwordConfirmation', { with: 'password' }, page);
        simulateIfPresent(submitButton, 'submit');

        setTimeout(() => {
          expect(fetch).toHaveBeenCalledWith(
            '/api/v1/email_confirmation/1234',
            {
              credentials: 'same-origin',
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: '1234',
                answer: {
                  rsvp: true,
                  notes: 'notes',
                  questions: 'questions',
                  food_choice: 'beef',
                  password: 'password',
                  password_confirmation: 'password'
                }
              })
            }
          )
          expect(page.text()).toMatch('Thank you for your RSVP');
          done();
        }, 0)
      }, 0)
    });
  });
});
