import {app} from './app';
import env from './config/env';
import {connect} from './database/postgres'

app.listen(process.env.PORT, (error?: Error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`app running on port: ${process.env.PORT}`);
  }
});

connect();