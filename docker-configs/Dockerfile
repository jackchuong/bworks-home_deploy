FROM 16.15.1-slim as build
ENV NODE_OPTIONS=--max_old_space_size=8192
WORKDIR /app
COPY ./ ./
RUN yarn install --prefer-offline
RUN yarn build
EXPOSE 8000
CMD ["yarn", "start"]
