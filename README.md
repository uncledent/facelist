# This is a simple boilerplate mobile application built with React Native (Expo), TypeScript and Redux on the client side and NestJS (NodeJS Framework) on the server side.

Server has only one endpoint to return a list of entities, that have the following structure:

```
[{
    id: '1',
    avatar: 'url',
    name: 'FirstName LastName'
}]
```

Mobile app fetches data and renders a virtualized list of users with name and avatar.

## Mobile application

![screenshot](https://res.cloudinary.com/dfzdapo2m/image/upload/c_scale,w_380/v1601021771/temp/Simulator_Screen_Shot_-_iPhone_11_-_2020-09-25_at_10.13.38.png)

Run locally:

```
cd mobile
yarn
yarn ios // run ios
yarn android // run android
```

If you are having troubles running the app, please refer to React Native documentation: https://reactnative.dev/docs/environment-setup

## Backend

Run locally:

```
cd backend
npm install
npm start
```

If you are having troubles running the app, please refer to NestJS documentation: https://nextjs.org/docs/getting-started
