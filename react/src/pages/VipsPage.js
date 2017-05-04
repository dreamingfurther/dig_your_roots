import React, { Component } from 'react';
import { Row, Column, Block, Breakpoints } from 'react-foundation';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { selectVipProfile } from '../actions/selectVipProfile';
import VipActiveProfile from '../components/VipActiveProfile';
import VipNameTile from '../components/VipNameTile';

class VipsPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(this.props.storedUserData == undefined) {
      this.props.redirectUserToWelcome()
    }
  }

  render() {
    let vipGroomList = ['Tibby Pillsbury', 'Noah Denton', 'Phoebe Tengdin'].map((name) => {
      return(
        <VipNameTile
          key={name}
          name={name}
          selectVip={this.props.selectVip}
          selectedVip={this.props.selectedVip}
        />
      )
    });
    let vipMaidList = ['Theresa Doherty', 'Patrick Meade', 'Priscilla Tengdin'].map((name) => {
      return(
        <VipNameTile
          key={name}
          name={name}
          selectVip={this.props.selectVip}
          selectedVip={this.props.selectedVip}
        />
      )
    });

    return(
      <div id="vips-page">
        <h2 className="top-header">Meet the Wedding Party</h2>
        <Column small={12} large={6} className="vip-name-list">
          <Block showOnlyFor={Breakpoints.LARGE} className="vip-list-space">
          </Block>
          <Column small={12} medium={6} className="phs">
            { vipGroomList }
          </Column>
          <Column small={12} medium={6} className="phs">
            { vipMaidList }
          </Column>
        </Column>
        <Column small={12} large={6}>
          <Block hideOnlyFor={Breakpoints.SMALL} className="vip-list-space">
            <VipActiveProfile selectedVip={this.props.selectedVip}/>
          </Block>
        </Column>
      </div>
    )
  }
}

let mapStateToProps = (store) => {
  return {
    storedUserData: Cookies.get('userData'),
    selectedVip: store.selectedVip
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    redirectUserToWelcome: () => { dispatch(push('/?needToSignIn')) },
    selectVip: (name) => { dispatch(selectVipProfile(name)) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(VipsPage);
