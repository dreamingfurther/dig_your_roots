import React from 'react';
import { Row, Column, Block, Breakpoints } from 'react-foundation';
import { railsAssetImagePath } from '../constants/railsAssetImagePath';

const VipActiveProfile = ({ selectedVip }) => {
  let vipData = {
    'Tibby Pillsbury': {
      name: 'Tibby Pillsbury',
      title: 'Best Man',
      picture: 'tibby-headshot.png',
      bio: "Hello!  My name is Tibby (or Tim) Pillsbury.  I grew up in Hanover, New Hampshire and was a fellow homeschooler and friend of David's.  I enjoy good friends, a good book, good music, large words, and most things that happen out of doors."
    },
    'Noah Denton': {
      name: 'Noah Denton',
      title: 'Groomsman',
      picture: 'noah-headshot.png',
      bio: "Hello, I'm a fellow former homeschooler from the wilds of Hanover, NH. I currently reside with my wife Lynn in the lovely city of Seattle and enjoy traveling, eating, boardgames, and all the other things that sensible people delight in."
    },
    'Phoebe Tengdin': {
      name: 'Phoebe Tengdin',
      title: 'Groomswoman',
      picture: 'phoebe-headshot.png',
      bio: "I'm Phoebe, sister to the groom. I currently live in Boulder, Colorado where I enjoy the plentiful light sources, both coherent (I study laser science) and incoherent (I love spending time in the sun)!"
    },
    'Theresa Doherty': {
      name: 'Theresa Doherty',
      title: 'Maid of Honor',
      picture: 'theresa-headshot.png',
      bio: "My name is Theresa, but everyone calls me Tree. I love to have fun and enjoy what life has to offer! This feels like a dating website application."
    },
    'Patrick Meade': {
      name: 'Patrick Meade',
      title: 'Bridesman',
      picture: 'pat-headshot.png',
      bio: "I met Pat at UMass during our freshman year. At first, our friendship was based on making rings at the craft center and watching hours of Buffy. Since then, he has become a friend I can talk about hard topics with, without fear of judgement."
    },
    'Priscilla Tengdin': {
      name: 'Priscilla Tengdin',
      title: 'Bridesmaid',
      picture: 'priscilla-headshot.png',
      bio: "Hi, my names Priscilla, and I'm one of two future sister-in-laws. I'm a rookie world traveler who loves the ocean and all of the outdoors!"
    }
  }
  return(
    <div>
      <Block hideOnlyFor={Breakpoints.SMALL} className='medium-up-yes-no'>
        <div className="vip-image-title-section">
          <Column small={12} medium={6} className="vip-header-section">
            <Column small={12} className="vip-title phn">
              { vipData[selectedVip]['title'] }
            </Column>
            <Column small={12} className="vip-name">
              { vipData[selectedVip]['name'] }
            </Column>
          </Column>
          <Column small={12} medium={6}>
            <img className="vip-image" src={railsAssetImagePath(vipData[selectedVip]['picture'])}></img>
          </Column>
        </div>
      </Block>
      <Block showOnlyFor={Breakpoints.SMALL}>
        <img className="vip-image" src={railsAssetImagePath(vipData[selectedVip]['picture'])}></img>
        <Column small={12} className="vip-title">
          { vipData[selectedVip]['title'] }
        </Column>
        <Column small={12} className="vip-name">
          { vipData[selectedVip]['name'] }
        </Column>
      </Block>
      <Column small={12}>
        <div>
          { vipData[selectedVip]['bio'] }
        </div>
      </Column>
    </div>
  )
}

export default VipActiveProfile;
