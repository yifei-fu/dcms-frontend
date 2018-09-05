# dcms-frontend
Vue.js frontend for [dcms](https://github.com/yifei-fu/dcms). Created with [vue-cli](https://github.com/vuejs/vue-cli).
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Deploy with Docker and Nginx
```
# change the backend API address in src/api/common.js
npm run build
docker build -t dcms-frontend-image:v1
docker run -d dcms-frontend-image:v1
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
