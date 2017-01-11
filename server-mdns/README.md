# Objectif
Serveur multicast DNS, pour que les noeuds de Merwan peuvent voir et s'enregistrer sur mon serveur REST

## Avahi
Avahi permet (entre autres) de découvrir les autres appareils connectés sur le réseau.
Cependant, cela demande de configurer l'appareil.

* Avoir installer Avahi et libnss-mdns (Ubuntu) :

```
sudo apt-get install avahi-daemon avahi-dnsconfd avahi-discover avahi-utils libnss-mdns
```

* Modifier le fichier de configuration (sudo obligatoire)

```
/etc/avahi/avahi-daemon.conf
```
Modifier la ligne suivante et changer la valeur no à yes. (Enlever le # si celui-ci est présent)

```
publish-workstation=yes
```

* Relancer avahi-daemon

```
sudo service avahi-daemon restart
```

* Run 

```
avahi-discover
```

