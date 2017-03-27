describe('user visits welcome page', () => {
  beforeEach(() => {
    page = mountReactAppAt('/')
  });

  it('can expand the sign in form', () => {
    expect(page.text()).toMatch('Jesse & David');
    expect(page.text()).not.toMatch('email');

    clickOn('#sign-in-form', page);
    expect(page.text()).toMatch('email');

    clickOn('#sign-in-form', page);
    expect(page.text()).not.toMatch('email');
  });
});
