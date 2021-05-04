export interface IVideo {
    _id?: number,
    title: string,
    url: string,
    description: string,
    createdAt?: string | Date,
    updatedAt?: string | Date
}

export interface IConfig {
    DATABASE_API: any
}

export interface IState {
    videos: Array<IVideo>,
    editMenu: {
        isEditMenuActivated: boolean,
        video: IVideo | any
    }
}

export interface IAction {
    type: string,
    payload: Array<IVideo> | any
}

export interface IVideosProps {
    videos: Array<IVideo>
}

export type Dispatch = React.Dispatch<IAction>;