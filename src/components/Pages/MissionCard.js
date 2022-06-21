import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

const MissionCard = ({ mission }) => {
  console.log(mission);
  return (
    <>
      <tr className="innerTable-row" key={mission.mission_id}>
        <td>{mission.mission_name}</td>
        <td>{mission.description}</td>
        <td> </td>
      </tr>
    </>
  );
};
MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.number,
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default MissionCard;
