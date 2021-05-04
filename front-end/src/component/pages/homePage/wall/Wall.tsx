import './Wall.scss'
import { IVideosProps, IVideo } from '../../../interfaces/Interface'
import { removeVideoAction } from '../../../action/Action'
import { useContext } from 'react'
import { Store } from '../../../store/Store'
import ReactPlayer from 'react-player'


export default function Wall(props: IVideosProps): Array<JSX.Element> {

    const { state, dispatch } = useContext(Store)

    const { videos } = props

    const formattedVideos = videos.map(video => {
        return {
            ...video,
            createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
            updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
        }
    }).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

    const handleRemoveItem = (video: IVideo): void => {
        removeVideoAction(video, dispatch, state)
    }

    const handleUpdateItem = (video: IVideo): void => {
        const props = {
            isEditMenuActivated: true,
            video: video
        }
        return dispatch({
            type: 'EDIT_MENU_STATE',
            payload: props
        })
    }

    return formattedVideos.map((video: IVideo) => {
        return (
            <div key={video.title} className="vid-card-wrapper">
                <button
                    className="del-video-button"
                    type="button"
                    onClick={() => handleRemoveItem(video)}>
                    x
                </button>
                <button
                    className="update-video-button"
                    type="button"
                    onClick={() => handleUpdateItem(video)}>
                    /
                </button>
                <div className="video-title"><p>{video.title}</p></div>
                <div className="video-url">
                    <ReactPlayer
                        url={video.url}
                        width='100%'
                        height='100%'
                        config={{
                            youtube: {
                                playerVars: {
                                    autoplay: 0,
                                    controls: 1,
                                    disablekb: 0,
                                    enablejsapi: 1
                                }
                            }
                        }}
                    />
                </div>
                <div className="video-description"><p>{video.description}</p></div>
            </div>
        )
    })

}
