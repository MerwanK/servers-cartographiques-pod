# Objectif
- Accord sur end point API exposé aux autres machins dans le système. En ce moment, notre API est ci-dessous:
![default API](http://i.imgur.com/GvWsoi4.png)
- Serveur REST (+ dashboard) pour enregistrer les noeuds de Merwan

# Architecture
- Base de données hébergée chez mlab.com, accessible via mongoose
- Le code dans `server.js` est du classique nodejs + expressjs 

# Setup
- installer nodejs
- cloner ce repo, ou `git pull` pour mettre à jour le repo local existant
- `git checkout bear` pour changer de branche vers la branche "bear"
- aller dans le répertoire server-rest
- `npm install`

# Lancement
- base de données chez mlab toujours disponible
- `npm start` lance le serveur nodejs

# References
- https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
