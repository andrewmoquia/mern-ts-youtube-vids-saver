import { Dispatch } from '../interfaces/Interface'
import axios from 'axios'
import { IVideo, IState } from '../interfaces/Interface'

const API = "http://localhost:4000/videos"

export const fetchDataAction = async (dispatch: Dispatch) => {
    try {
        const dataJSON = await axios.get(API)
        
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON.data
        })
    } catch (error) {
        return console.log(error);
    } 
}

export const postDataAction = async (dispatch: Dispatch, video: IVideo) => {
    try {
        await axios.post(API, video)
        const dataJSON = await axios.get(API)

        return dispatch({
            type: 'CREATE_DATA',
            payload: dataJSON.data
        })
    } catch (error) {
        return console.log((error));
    }
}

export const removeVideoAction = async (video: IVideo, dispatch: Dispatch, state: IState) => {
    try {
        await axios.delete(`${API}/${video._id}`)

        const removeVideoInVideos = state.videos.filter(
        (vid:IVideo) => vid._id !== video._id)

        return dispatch({
            type: 'DELETE_DATA',
            payload: removeVideoInVideos
        })
    } catch (error) {
        return console.log(error);  
    }
}

export const updateVideoAction = async (dispatch: Dispatch, updatedVideo: IVideo, video: IVideo) => {
    try {
        await axios.put(`${API}/${video._id}`, updatedVideo)
        const dataJSON = await axios.get(API)

        return dispatch({
            type: 'UPDATE_DATA',
            payload: dataJSON.data
        })
    } catch (error) {
        return console.log(error);
    }  
}