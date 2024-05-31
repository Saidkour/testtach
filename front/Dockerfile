# Utilisez l'image Node.js officielle comme image de base
FROM node:16-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel votre application va s'exécuter
EXPOSE 8080

# Commande pour lancer l'application
CMD ["node", "index.js"]