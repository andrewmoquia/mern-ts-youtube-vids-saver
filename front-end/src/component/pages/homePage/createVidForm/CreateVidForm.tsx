import './CreateVidForm.scss'
import { ChangeEvent, FormEvent, Fragment, useState, useContext } from 'react'
import { IVideo } from '../../../interfaces/Interface'
import { Store } from '../../../store/Store'
import { postDataAction } from '../../../action/Action'

function CreateVidForm(): JSX.Element {

    const { dispatch } = useContext(Store)

    const initialState: IVideo = {
        title: "",
        url: "",
        description: ""
    }

    const [video, setVideo] = useState<IVideo>(initialState)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        postDataAction(dispatch, video)
        setVideo(initialState)
    }

    return (
        <Fragment>
            <div id='create-vid-form-container'>
                <form id='create-vid-form' onSubmit={handleSubmit}>
                    <label >Title</label>
                    <input type="text" onChange={handleInputChange} name="title" value={video.title}/>
                    <label>URL</label>
                    <input type="text" onChange={handleInputChange} name="url" value={video.url}/>
                    <label>Description</label>
                    <input type="text" onChange={handleInputChange} name="description" value={video.description}/>
                    <button type="submit">Create</button>
                </form>
            </div>
        </Fragment>
    )
}

export default CreateVidForm