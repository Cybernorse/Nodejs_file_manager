# Nodejs_file_manager 
This web based file manager is build on Nodejs using Cloud commander(lib==cloudcmd) is being used as middleware for expressjs(lib==express) and is quit simple and easy to use.

Installing:
sudo apt-get install npm |---- (node package manager)
sudo npm install npm@latest -g |---- (install the latest npm)
sudo npm cache clean -f |---- (clean up the cache)
sudo npm install -g n |---- (install the nodejs)
sudo n stable |---- (node version should be 10.0.0 or greater v12 is best)
PATH="$PATH" |---- (set environment variable)
sudo npm i cloudcmd express socket.io http -S |---- (Recommended way to install the libraries needed)

NOTE : Permission error problem:
try this :  sudo chown -R 1000:1000 "/home/{yourusername}/.npm"

Usage :

After the dependencies have been installed run the file_manager.js from any editor having the node kernel or 
just run it from the terminal with "node file_manager.js"

Open the browser and write "localhost:1337 -- (any port that you wrote in file_manager.js)

don't use cloud commander directly from the terminal ">>cloucmd" or it will be alot slower and you will not be able 
play videos and you won't be able to use cloud services properly. 

further cloud commander configuration details can be found at cloud commander official documentation. https://cloudcmd.io/
