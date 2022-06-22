import React from 'react';

const Profiles = () => (
  <div className="profileContainer">
    <hr />
    <div className="row profileRow">
      <div className="missionProfile col-6">
        <h3>My Missions</h3>
        <div className="missionList">
          <ul><li>your list</li></ul>
        </div>
      </div>
      <div className="rocketProfile col-6">
        <h3>My Rockets</h3>
        <div className="rocketList">
          <ul><li>your list</li></ul>
        </div>
      </div>
    </div>
  </div>
);
export default Profiles;
