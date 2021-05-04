import './UpdateVidForm.scss'
import { IVideo } from '../../../interfaces/Interface'
import { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { Store } from '../../../store/Store'
import { updateVideoAction} from '../../../action/Action'



export default function UpdateVidForm(): JSX.Element {

    const { state, dispatch } = useContext(Store)

    const initialState: IVideo = {
        title: state.editMenu.video.title,
        url: state.editMenu.video.url,
        description: state.editMenu.video.description
    }

    const [video, setVideo] = useState<IVideo>(initialState)

    const handleExit = (): void => {
        const props = {
            isEditMenuActivated: false,
            video: {}
        }
        return dispatch({
            type: 'EDIT_MENU_STATE',
            payload: props
        })
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        updateVideoAction(dispatch, video, state.editMenu.video)
        handleExit()
    }

    return (
        <div id="update-vid-container">
            <div id="update-vid-wrapper">
                <button
                    className="exit-video-button"
                    type="button"
                    onClick={handleExit}
                >
                    x
            </button>
                <div id='create-vid-form-container'>
                    <form id='create-vid-form' onSubmit={handleSubmit}>
                        <label >Title</label>
                        <input type="text" onChange={handleInputChange} name="title" value={video.title} />
                        <label>URL</label>
                        <input type="text" onChange={handleInputChange} name="url" value={video.url} />
                        <label>Description</label>
                        <input type="text" onChange={handleInputChange} name="description" value={video.description} />
                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}