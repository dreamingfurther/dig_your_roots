describe('user visits Rsvp page for a second event', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/email_confirmation/1234':  {
        GET: ['getEmailConfirmationSecondEvent', 200]
      },
      '/api/v1/authorize':  { POST: ['postAuthorizeFailureResponse', 401] }
    });

    page = mountReactAppAt('/email_confirmation/1234');
    let mediumArea = page.find('.medium-up-yes-no');
    mediumArea.find('input #rsvp-yes').simulate('change', {target: { value: 'Yes'}});
  });

  describe('types in wrong password', () => {
    it('shows an incorrect password message', done => {
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
        fillIn('password', { with: 'password' }, page);
        simulateIfPresent(submitButton, 'submit');

        setTimeout(() => {
          expect(page.text()).toMatch('Wrong Password');
          expect(fetch).toHaveBeenCalledWith(
            '/api/v1/authorize',
            {
              credentials: 'same-origin',
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                user: {
                  email: 'dtjrnorris+jesse@gmail.com',
                  password: 'password'
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
