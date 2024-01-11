# Use Nginx image from Docker Hub
FROM nginx:stable-alpine

# Copy the static website files to the Nginx default directory
COPY ./dist/spe3dlab-public-website /usr/share/nginx/html/spe3dlab-public-website

# Copy the custom nginx configuration
COPY ./default.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80

# Start Nginx when the container has been started
CMD ["nginx", "-g", "daemon off;"]
