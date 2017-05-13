import React from 'react';
import { Row, Column, Block, Breakpoints } from 'react-foundation';
import VipActiveProfile from '../components/VipActiveProfile';

const VipNameTile = ({ name, selectVip, selectedVip }) => {
  let selectedStyle, vipProfileforSmall;
  let selectVipWithName = () => {
    selectVip(name);
  }
  if(name == selectedVip){
    selectedStyle = 'selected';
    vipProfileforSmall = <VipActiveProfile selectedVip={selectedVip}/>;
  }

  return(
    <div>
      <div className={`selector-tile ${selectedStyle} phn`} onClick={ selectVipWithName }>
        <a>
          <h1>{ name }</h1>
        </a>
      </div>
      <Block showOnlyFor={Breakpoints.SMALL} className={`vip-small-profile ${selectedStyle}`}>
        { vipProfileforSmall }
      </Block>
    </div>
  )
}

export default VipNameTile;
