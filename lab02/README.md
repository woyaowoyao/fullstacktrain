#run app:
cd lab02
json-server --watch json-server/db.json
cd ibm-taining-player/
npm i
ng serve



### Install 
npm install -g @angular/cli
ng version
ng new --help
ng new hello # 创建
ng new hello --skip-install --style scss --routing false # 跳过提示
ng build # 开发编译 使用environment.ts
ng build --prod # 生产环境使用environment.prod.ts
ng g c components/Playlist


watch video: http://localhost:4200
add video: http://localhost:4200/course