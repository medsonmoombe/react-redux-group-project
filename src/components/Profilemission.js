import React from 'react';
import PropTypes from 'prop-types';

const Profilemission = ({ reservedMission }) => {
  console.log(reservedMission);
    <>
      <li>
        {
        reservedMission.map((mission) => (
          <li className="joined-mission" key={mission.mission_id}>
            <span>{mission.mission_name}</span>
          </li>
        ))
      }
      </li>
    </>;
};

Profilemission.propTypes = {
  reservedMission: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};
export default Profilemission;
