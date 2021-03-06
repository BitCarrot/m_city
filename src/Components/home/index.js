import React from 'react';
import Featured from './featured';
import Matches from './matches/index.js';
import MeetPlayers from './meetPlayers/index';
import Promotion from './promotion/index';

const Home = () => {
      return (
          <div className='bck_blue'>
              <Featured/>
              <Matches/>
              <MeetPlayers/>
              <Promotion/>
          </div>
      );
};

export default Home;
