describe('user visits welcome page', () => {
  beforeEach(() => {
    page = mountReactAppAt('/')
  });

  it('can toggle the sign in form', () => {
    expect(page.text()).toMatch('Jesse & David');
    expect(page.text()).not.toMatch('Email');

    clickOn('#sign-in-form', page);
    expect(page.text()).toMatch('Email');

    clickOn('#sign-in-form', page);
    expect(page.text()).not.toMatch('Email');
  });

  it('shows sign in form', () => {
    clickOn('#sign-in-form', page);
    expect(page.text()).toMatch('Email');
    expect(page.text()).toMatch('Password');
    let signInButton = page.find('#sign-in-button');
    expect(signInButton.text()).toMatch('Sign In');
  });
});
