# pb-full-stack-kramer

## Technologies:

1. UI - React 18, React-Bootstrap, Recharts
2. Server side code - Python 3.11, FastApi (latest)
3. Database - MongoDB (latest)


## /frontend
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## /backend
`pipenv shell`

Activates Python virtual environment.

`python -m uvicorn main:app --reload` 

Runs the application at this URL [http://127.0.0.1:8000](http://127.0.0.1:8000)

API is visible at [http://localhost:8000/sighting/](http://localhost:8000/sighting/)

API swagger docs are at [http://localhost:8000/docs](http://localhost:8000/docs)

Create `.env.local` file and add following variables provided by MongoDB:
```
DB_URI=<mongodb_connection_string>
DB_NAME=<db_name>
```