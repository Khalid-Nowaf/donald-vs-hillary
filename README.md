# donald-vs-hillary
This is a Demo of tweets sentiment Analysis with Trump vs Clinton via Twitter stream api using red node

## 1) How To Run Node-Red

### via Docker

Run the Command `docker run -it -p 1880:1880 --name mynodered nodered/node-red-docker`

[Node-Red Docker Docs](http://nodered.org/docs/platforms/docker)

### via NPM

`sudo npm install -g --unsafe-perm node-red`

[Node-Red Docs](http://nodered.org/docs/getting-started/installation) 

## Install Twitter Stream node

1. Go to `http://{host-ip}:1880` 
Where `{host-ip}` the **docker IP**, **localhost** or **127.0.0.1** ect

2. Click the **menu** in the top right conran

3. Click **Mange palette**

4. Click the **install** tab under **Mange palette** window

5. Write `node-red-contrib-twitter-stream` in the search bar, then click install

[node-red-contrib-twitter-stream Docs](http://flows.nodered.org/node/node-red-contrib-twitter-stream)


##How To Load The Flow

Go to `http://{host-ip}:1880` 
Where `{host-ip}` the **docker IP**, **localhost** or **127.0.0.1** ect

