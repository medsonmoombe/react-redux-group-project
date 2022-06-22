import React from 'react';

const Profiles = () => (
  <div className="profileContainer">
    <hr />
    <div className="row profileRow">
      <div className="missionProfile col-6">
        My Missions
        <div className="missionList">
          <ul><li>your list</li></ul>
        </div>
      </div>
      <div className="rocketProfile col-6">
        My Rockets
        <div className="rocketList">
          <ul><li>your list</li></ul>
        </div>
      </div>
    </div>
  </div>
);
export default Profiles;
