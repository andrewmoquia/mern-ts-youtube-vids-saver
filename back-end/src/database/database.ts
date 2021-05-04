import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config/config';

(async () => {
    try {
        const mongooseOption: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASS}@${config.MONGO_DATABASE}.pzvvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, mongooseOption);
        console.log('database is connected', db.connection.name);
    } catch (error) {
        console.log(error)
    }
})()
