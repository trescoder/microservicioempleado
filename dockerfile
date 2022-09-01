FROM node:16.15-alpine3.14
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY . .
RUN chown -R app /opt/app
USER app
EXPOSE 1234
CMD [ "npm", "run", "start" ]