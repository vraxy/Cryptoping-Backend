### Demo Site :

Heroku Hosted Demo Application.

[CryptoPing](https://cryptoping.heroku.com/)

### CryptoPing Application

A cryptocurrency ```ticker``` cum ```ping``` application built on a ```Node.js``` backend.

### Install. 

Make sure you have ```Node.js```, ```Redis``` & ```MongoDB``` installed for your specific platform. 

```bash
$ sudo apt-get install nodejs -y
$ sudo npm install 
$ sudo npm start
```

```SSL Certificates are self signed and needs to be installed as Trusted Root Store. ```

1. Node.js [Node.js Install](https://nodejs.org/en/download/)

2. MySQL [MySQL Install](https://dev.mysql.com/downloads/)

3. MySQL Windows [MySQL Windows](https://dev.mysql.com/downloads/windows/)

4. REDIS [Redis Install](https://redis.io/download)

5. MongoDB [Mongo Install](https://www.mongodb.com/download-center/community)

### The Model. 

```1. Backend :  Works on Node.js, Express, Yarn backend. ```

```2. Datastore : API & WebSockets requests via XHR or rpc to Bittrex, Poloniex, Binance backend.```

```3. Frontend : Connects to Node.js backend and fires XHR every 100ms time for auto updation.```

```4. Website : To be hosted on VPS along with seperate backend data store. ```

### Diagram : 

![alt-tag](https://github.com/SpawnTree/CryptoPing-Backend/blob/master/public/images/CryptoPing.jpeg)


