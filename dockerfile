# Use Node.js image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if necessary)
RUN npm run build

# Install Nginx to serve the application
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Command to serve the app
CMD ["serve", "-s", "build"]
