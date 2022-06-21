import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionCard from './Pages/MissionCard';
import { FetchMissions } from '../redux/missions/MissionSlice';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMissions());
  }, []);
  return (
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
          {
            missions.map((mission) => <MissionCard key={mission.mission_id} mission={mission} />)
          }
        </tbody>
      </table>
    </>
  );
};
export default Missions;
