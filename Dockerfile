FROM wordpress:5-php7.1-apache
RUN echo "test ci"
RUN mkdir -p /app
WORKDIR /app
RUN echo "done"
