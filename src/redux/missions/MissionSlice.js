import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Missions from '../../components/Missions';

const GET_MISSIONS = 'react-redux-group-project/Missions/GET_MISSIONS';
const TOGGLE_MISSIONS= 'react-redux-group-project/Missions/TOGGLE_MISSIONS';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getMission = (payload) => {
return {
type: GET_MISSIONS, payload
}
};

export const FetchMissions = () => {
    return  async(dispatch) => {
    const response = await axios.get(baseUrl);
    const data = response.data;

    const missions = {};

    data.forEach((mission) => {
        missions.push({
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
            reserved: false,
        });
    });
    dispatch(getMission());
    }
}