FROM node:lts as build
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

FROM nginx:1.25
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/m-b2-b-ph-panel-page/pl/index.html /usr/share/nginx/html/index.html
COPY --from=build /app/dist/m-b2-b-ph-panel-page/pl/index.html /usr/share/nginx/html/ph-dashboard/index.html
COPY --from=build /app/dist/m-b2-b-ph-panel-page/pl/ /usr/share/nginx/html/ph-dashboard/pl/

CMD ["nginx", "-g", "daemon off;"]