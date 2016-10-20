# donald-vs-hillary
This is a Demo of tweets sentiment Analysis with Trump vs Clinton via Twitter stream api using red node

## 1) How To Run Node-Red

### via Docker

Run the Command `docker run -it -p 1880:1880 --name mynodered nodered/node-red-docker`

[Node-Red Docker Docs](http://nodered.org/docs/platforms/docker)

### via NPM

`sudo npm install -g --unsafe-perm node-red`

[Node-Red Docs](http://nodered.org/docs/getting-started/installation) 

## 2) Install Twitter Stream node

1. Go to `http://{host-ip}:1880` 
Where `{host-ip}` the **docker IP**, **localhost** or **127.0.0.1** ect

2. Click the **menu** in the top right corner 

3. Click **Mange palette**

4. Click the **install** tab under **Mange palette** window

5. Write `node-red-contrib-twitter-stream` in the search bar, then click install

[node-red-contrib-twitter-stream Docs](http://flows.nodered.org/node/node-red-contrib-twitter-stream)


## 3) How To Load The Flows

1. Open the flows.json file --> [flows.json](https://raw.githubusercontent.com/Khalid-Nowaf/donald-vs-hillary/master/flows.js) then copy the json string `Ctrl + C` or `cmd + C`

2. Go to `http://{host-ip}:1880` 
Where `{host-ip}` the **docker IP**, **localhost** or **127.0.0.1** ect

3. Click the **menu** in the top right conran

4. Click  **Import**

5. Click **Clipboard**

6. Paste in the text box `Crtl + P` or `cmd + P`

7. Click **Import**


## Configure Twitter Stream node

In order to complete this step you need **Twitter app**, if you don't have one please follow this tutorial [How to Register a Twitter App in 8 Easy Steps](https://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/). 
After, than **Make a note of your OAuth Settings**, becuse we will need them soon.

1. Go Back to Red-Node `http://{host-ip}:1880` 
Where `{host-ip}` the **docker IP**, **localhost** or **127.0.0.1** ect

2. Double-Click on **Twitter Stream node**

3. Click **Edit** The Connection

4. fill the fields with your **OAuth info**

5. Click **Add**.

## Run The Flow and The Web Page 

At this point you are almost set, Click Deploy and you should see no Errors. If every thing is OK, Run the HTML file in the Broswer.

> If your Red-Node **IP** not **localhost** or **127.0.0.1**, then **you need to edit the IP in the webpage sourcecode**, make sure to use your IP.