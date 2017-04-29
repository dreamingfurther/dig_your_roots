describe('user visits Rsvp page for event without food', () => {
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

  describe('types in no password', () => {
    it('forces the password and password confirmation to match', done => {
      setTimeout(() => {
        page.find('input #rsvp-guest-yes').simulate('change', {target: { value: 'Yes'}});

        let pageText = page.text();
        expect(pageText).not.toMatch('Sorry to miss you!')
        expect(pageText).toMatch("What is their name?")

        let submitButton = page.findWhere(n => {
          return n.type() === 'button' && n.text() === 'Send RSVP';
        });
        let plusOneNameField = page.findWhere(n => {
          return n.type() === 'input' && n.props().id === 'rsvp-plus-one-name';
        });
        let notesField = page.findWhere(n => {
          return n.type() === 'textarea' && n.props().id === 'rsvp-notes';
        });
        let questionsField = page.findWhere(n => {
          return n.type() === 'textarea' && n.props().id === 'rsvp-questions';
        });
        simulateIfPresent(plusOneNameField, 'change', { target: { value: 'Josh Something' } });
        simulateIfPresent(notesField, 'change', { target: { value: 'notes' } });
        simulateIfPresent(questionsField, 'change', { target: { value: 'questions' } });
        fillIn('phone', { with: '1231231234' }, page);

        fillIn('password', { with: 'password' }, page);
        fillIn('passwordConfirmation', { with: 'passwordx' }, page);
        simulateIfPresent(submitButton, 'submit');

        expect(page.text()).toMatch('Password must match Password Confirmation');
        expect(page.text()).not.toMatch('Thank you for your RSVP');
        expect(page.text()).not.toMatch('Events');
        expect(page.text()).not.toMatch('Photos');
        done();
      }, 0)
    });

    it('forces the user to fill out the password', done => {
      setTimeout(() => {
        page.find('input #rsvp-guest-yes').simulate('change', {target: { value: 'Yes'}});

        let pageText = page.text();
        expect(pageText).not.toMatch('Sorry to miss you!')
        expect(pageText).toMatch("What is their name?")

        let submitButton = page.findWhere(n => {
          return n.type() === 'button' && n.text() === 'Send RSVP';
        });
        let plusOneNameField = page.findWhere(n => {
          return n.type() === 'input' && n.props().id === 'rsvp-plus-one-name';
        });
        let notesField = page.findWhere(n => {
          return n.type() === 'textarea' && n.props().id === 'rsvp-notes';
        });
        let questionsField = page.findWhere(n => {
          return n.type() === 'textarea' && n.props().id === 'rsvp-questions';
        });
        simulateIfPresent(plusOneNameField, 'change', { target: { value: 'Josh Something' } });
        simulateIfPresent(notesField, 'change', { target: { value: 'notes' } });
        simulateIfPresent(questionsField, 'change', { target: { value: 'questions' } });
        fillIn('phone', { with: '1231231234' }, page);

        simulateIfPresent(submitButton, 'submit');

        expect(page.text()).toMatch('Password Required');
        expect(page.text()).toMatch('Password Confirmation Required');
        expect(page.text()).not.toMatch('Thank you for your RSVP');
        expect(page.text()).not.toMatch('Events');
        expect(page.text()).not.toMatch('Photos');
        done();
      }, 0)
    });
  });
});
