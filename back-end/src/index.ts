import app from './app/app';
import './database/database';

app.listen( app.get('port'), () => {
    console.log("server on port", app.get('port'));
});