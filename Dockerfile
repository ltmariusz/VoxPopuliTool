FROM node:lts as build
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

FROM nginx:1.21
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/vox-populi-tool/pl/index.html /usr/share/nginx/html/index.html
COPY --from=build /app/dist/vox-populi-tool/pl/index.html /usr/share/nginx/html/ph-dashboard/index.html
COPY --from=build /app/dist/vox-populi-tool/pl/ /usr/share/nginx/html/ph-dashboard/pl/

CMD ["nginx", "-g", "daemon off;"]