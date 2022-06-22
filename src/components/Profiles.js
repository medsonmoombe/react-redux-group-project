import React from 'react';
import { useSelector } from 'react-redux';
import Profilemission from './Profilemission';

const Profiles = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMission = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="profileContainer">
      <hr />
      <div className="row profileRow">
        <div className="missionProfile col-6">
          <h3>My Missions</h3>
          <div className="missionList">
            <ul>
              <Profilemission reservedMission={reservedMission} />
            </ul>
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
};
export default Profiles;
