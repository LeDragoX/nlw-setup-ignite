# NLW Setup Ignite

## Server

```sh
cd server
npm install
npm run dev
```

## Web

```sh
cd web
npm install
npm run dev
```

## Mobile

```sh
cd mobile
npm install -g expo-cli
npm install
npx expo start # or npm run android
```

_Make sure the server is running on your network!_

### Configuration

On `mobile/src/lib/axios.ts` change the ip to 0.0.0.0 or 127.0.0.1 or the one showed in **expo** (except the port).

### Standalone APK

<https://expo.dev/artifacts/eas/dJUX2HiHibyFK3Prbqc4DN.apk>
