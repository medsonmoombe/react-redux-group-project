import React from 'react';
import MissionCard from './Pages/MissionCard';

const Missions = () => (
  <>
    <table>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Discription</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <MissionCard />
      </tbody>
    </table>
  </>
);
export default Missions;
