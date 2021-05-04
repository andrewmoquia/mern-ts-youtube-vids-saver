import './HomePage.scss'
import UpdateVidForm from './updateVidForm/UpdateVIdForm'
import CreateVidForm from './createVidForm/CreateVidForm'
import { Fragment, useContext, Suspense, useEffect, lazy } from 'react'
import { fetchDataAction } from '../../action/Action'
import { Store } from '../../store/Store'
import { IVideosProps } from '../../interfaces/Interface'

const Wall = lazy<any>(() => import('./wall/Wall'));

export default function Home(): JSX.Element {

    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        state.videos.length === 0 && fetchDataAction(dispatch)
    })

    const videosProps: IVideosProps = {
        videos: state.videos
    }
    
    return (
        <Fragment>
            <Suspense
                fallback={
                    <div>
                        <h1>Loading!!!</h1>
                    </div>
                }>
                {state.editMenu.isEditMenuActivated && <UpdateVidForm />}
                <CreateVidForm />
                <main id="main">
                    <section id="vid-card-container">
                        <Wall {...videosProps} />
                    </section>
                </main>
            </Suspense>
        </Fragment>
    )
}