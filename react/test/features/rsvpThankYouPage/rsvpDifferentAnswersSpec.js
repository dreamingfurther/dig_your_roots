describe('user visits the RSVP thank you page', () => {
  describe('that user has not answered the rsvp', () => {
    it('redirects back to the rsvp form page', done => {
      stubGlobalFetch({
        '/api/v1/email_confirmation/1234':  {
          GET: ['getEmailConfirmationWithoutPlusOneWithoutFood', 200]
        }
      });
      page = mountReactAppAt('/thank_you/1234')

      setTimeout(() => {
        expect(page.text()).toMatch('Will you join us?')
        expect(page.text()).not.toMatch('Thank you for your RSVP');
        done();
      }, 0)
    });
  });

  describe('that user has answered the rsvp no', () => {
    it('renders the thank you page without further links', done => {
      stubGlobalFetch({
        '/api/v1/email_confirmation/1234':  {
          GET: ['getEmailConfirmationRsvpNo', 200]
        }
      });
      page = mountReactAppAt('/thank_you/1234')

      setTimeout(() => {
        expect(page.text()).toMatch('Thank you for your RSVP');
        expect(page.text()).not.toMatch('Home Page');
        expect(page.text()).not.toMatch('Event Details');
        expect(page.text()).not.toMatch('All Events');
        expect(page.text()).not.toMatch('Will you join us?')
        done();
      }, 0)
    });
  });

  describe('that user has answered the rsvp yes', () => {
    it('renders the thank you page with further links', done => {
      stubGlobalFetch({
        '/api/v1/email_confirmation/1234':  {
          GET: ['getEmailConfirmationRsvpYes', 200]
        }
      });
      page = mountReactAppAt('/thank_you/1234')

      setTimeout(() => {
        expect(page.text()).toMatch('Thank you for your RSVP');
        expect(page.text()).toMatch('Ceremony & Dinner Details');
        expect(page.text()).toMatch('All Your Events');
        expect(page.text()).not.toMatch('Will you join us?')
        done();
      }, 0)
    });
  });
});
