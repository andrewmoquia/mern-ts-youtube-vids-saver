import './App.scss'
import Header from '../header/Header'
import { Fragment } from 'react'

function App(props: any): JSX.Element {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  )
};

export default App;