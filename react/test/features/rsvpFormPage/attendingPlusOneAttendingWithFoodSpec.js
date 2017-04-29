describe('user visits Rsvp page for event with food', () => {
  beforeEach(() => {
    stubGlobalFetch({
      '/api/v1/email_confirmation/1234':  {
        GET: ['getEmailConfirmationWithPlusOneWithFood', 200],
        PATCH: ['patchSuccessResponse', 201]
      }
    });

    page = mountReactAppAt('/email_confirmation/1234');
    let mediumArea = page.find('.medium-up-yes-no');
    mediumArea.find('input #rsvp-yes').simulate('change', {target: { value: 'Yes'}});
  });

  describe('indicates they are coming with a plus one', () => {
    it('should show all fields', done => {
      setTimeout(() => {
        let pageText = page.text();
        expect(pageText).toMatch('Hi Priscilla!')
        expect(pageText).toMatch('Will you join us?')
        expect(pageText).toMatch('plus one')
        expect(pageText).not.toMatch("What is their name?")
        expect(pageText).not.toMatch('Is there anything we should know')
        expect(pageText).not.toMatch('Sorry to miss you!')

        page.find('input #rsvp-guest-yes').simulate('change', {target: { value: 'Yes'}});
        page.find('input #rsvp-beef').simulate('change', { target: { value: 'beef'}});
        page.find('input #rsvp-plus-chicken').simulate('change', { target: { value: 'chicken'}});
        pageText = page.text();

        expect(pageText).toMatch("What is their name?")
        expect(pageText).toMatch("What main entre would you like?")
        expect(pageText).toMatch('Is there anything we should know')

        done();
      }, 0)
    });

    it('should redirect them to the thank you page and log them in', done => {
      setTimeout(() => {
        page.find('input #rsvp-guest-yes').simulate('change', {target: { value: 'Yes'}});
        page.find('input #rsvp-beef').simulate('change', { target: { value: 'beef'}});
        page.find('input #rsvp-plus-chicken').simulate('change', { target: { value: 'chicken'}});

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
        fillIn('passwordConfirmation', { with: 'password' }, page);

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
                  rsvp: true,
                  plus_one_attending: "Yes",
                  plus_one_fullname: "Josh Something",
                  plus_one_food_choice: 'chicken',
                  notes: 'notes',
                  questions: 'questions',
                  food_choice: 'beef',
                  phone: '1231231234',
                  password: 'password',
                  password_confirmation: 'password'
                }
              })
            }
          )

          expect(page.text()).not.toMatch('Fill in your information');
          expect(page.text()).toMatch('Events');
          expect(page.text()).toMatch('Home Page');
          expect(page.text()).toMatch('Ceremony & Dinner Details');
          expect(page.text()).toMatch('All Your Events');
          done();
        }, 0)
      }, 0)
    });
  });
});
