FROM node:16.15-alpine3.14
RUN mkdir -p /opt/application
WORKDIR /opt/application
RUN adduser -S app
COPY ./. .
RUN npm install
RUN chown -R app /opt/application
USER app
EXPOSE 1234
CMD [ "npm", "run", "start" ]
