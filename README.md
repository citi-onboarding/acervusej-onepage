<p align="center">
    <img src="https://raw.githubusercontent.com/jrmmendes/citi-doc-utils/master/citi_black.png">
</p>
<p align="center">
    <img src="https://img.shields.io/badge/staging%20branch-develop-ffffff.svg">
    <img src="https://img.shields.io/badge/production%20branch-main-101010.svg">
</p>
  
<h1> Acervus EJ </h1>
  
<p>Project made for AcervusEJ during the PTA 2020.2</p>
<br>
<h2>Technologies Used</h2>
  
<ul>
    <li><b>React:</b> A Javascript library built by facebook for web application development.</li>
    <li><b>Heroku:</b> Heroku is a platform that enables developers to build, run, and operate applications entirely in the cloud.</li>
    <li><b>KeystoneJS:</b> Node.js CMS & web app platform.</li>
    <li><b>MongoDB:</b> NoSQL Database.</li>
    <li><b>Cloudinary:</b> Cloud service that offers a solution to a web application's entire image management pipeline.</li>
</ul>
<br>
  
<h2>How to install and run the project</h2>
  
<h3>1. Install dependencies</h3>
<p>Run <code>yarn install</code> or <code>npm install</code> on both client and server folders, this command will install the project's dependencies.</p>    
<h3>2. Create MongoDB cluster and get the url</h3>
<ol>
    <li>If you don't have one, create a mongodb account, then create the cluster for this project.</li>    
    <li>On the cluster's screen, go to <b>Database Access > Database Users > Add New Database User</b>, then create the user (remember the username and password, we're going to need them later).</li>    
    <li>Now go to <b>Network Access > IP Whitelist > Add IP Adress > Current IP Adress</b>, to add your current IP address to the cluster's whitelist, you will need to do this with every source that will access your database.</li>    
    <li>The mongo url will be: <br> <br> mongodb://[USER]:[PASSWORD]@[SHARD_URL]/[DB_NAME]?ssl=true&replicaSet=[SHARD_NAME]&authSource=admin&retryWrites=true&w=majority</li>
</ol>
  
<h3>3. Create cloudinary account</h3>
<ol>
  <li>Go to <a href="https://cloudinary.com/">cloudinary images website</a> and create an account.</li>    
  <li>Under the <b>Account Details</b> section is a url named <b>API environment variable</b> this is your cloudinary url.</li>
</ol>
  
<h3>4. Create a env file</h3>
<p>Create a file named <code>.env</code> and, inside of it, place this:</p>
  
    PORT=[PORT]
    MONGO_URI=[MONGO_URI]
    COOKIE_SECRET=[COOKIE_SECRET]
    CLOUDINARY_URL=[CLOUDINARY_URL]
  
<p>Where:</p>
  
<ul>
    <li>[PORT] is which port you want the server to run on (usually 3001)</li>
    <li>[MONGO_URI] is the uri you got from step 2.3</li>
    <li>[COOKIE_SECRET] is a random string used for authentication on the admin.</li>
    <li>[CLOUDINARY_URL] is the url you got from step 3.2</li>
</ul>
  
<h3>5. Running in development</h3>
<p>To run this project in development mode, we will need to run two servers, the react one on <code>/client</code> andkeystone on <code>/server</code>.</p>

<p>The command to run react is <code>yarn start</code> or <code>npm start</code> depending on which tool was used on installation, thereact server will run on port <code>3000</code> by default.</p>

<p>Before running the keystone server, go to <code>/server/updates/0.0.1-admin.js</code> and change the admin user as youwant, this user will be the first created, but you will be able to create others and delete this one later.<p>

<p>To run keystoneJS server, use the command <code>node index.js</code>, the server will run on whatever port is in thevariale in the env file, you will find the admin interface in <code>http://localhost:[PORT]/admin</code></p>

<h3>6. Running in production</h3>
<p>To run the server in production, go to <code>/client</code> and run the command <code>yarn server</code>, this command will create a <code>react production optimized build</code> and move it to <code>/server</code>.</p>

<p>Then go to <code>/server</code> and run <code>node index.js</code>, you will find the project on <code>http://localhost:[PORT]</code></p>

<hr>
<h2>Project Patterns</h2>
  
<h3>Branchs off of <code>develop</code></h3>
<p>Name the branch following one of these:</p>

  <ul>
      <li>feat/name-of-the-feature</li>    
      <li>fix/name-of-the-bugfix</li>    
      <li>upgrade/name-of-the-hotfix</li>    
      <li>docs/explaning-the-upgrade-on-documentation</li>
  </ul>

<h3>Atomic commits</h3>
<p>Project commits follow this pattern:</p>

  <ul>
      <li>feat(name-of-the-branch): Atomic commit</li>    
      <li>fix(name-of-the-branch): Atomic commit</li>    
      <li>upgrade(name-of-the-branch): Atomic commit</li>    
      <li>docs(name-of-the-branch): Atomic commit</li>
  </ul>

<h3>Pull request on Github</h3>
<p>For every issue the pull request follows this pattern:</p>

    **What I did:**
    - First thing I did...
    - Second thing I did...

    **How to test:**
    - Brief notes on how to test the issue

    resolves #number-of-the-issue

<h2>Development team</h2>
  
<ul>
    <li>Victor Silva - <i>Project Manager</i> - <a href="https://github.com victormarques-ia">victormarques-ia</a></li>
    <li>Júlio Bem - <i>Developer</i> - <a href="https://github.com/PhieSouza">PhieSouza</a></li>
    <li>Sofia Melo - <i>Developer</i> - <a href="https://github.com/Sofiamdl">Sofiamdl</a></li>
    <li>Igor Phillipe - <i>Developer</i> - <a href="https://github.com/IgrPhillipe">IgrPhillipe</a></li>
</ul>
  
<h2>Design team</h2>
  
<ul>
    <li>Pedro Reis - <i>Designer</i> - <a href="https://github.com/vytris">vytris</a></li>
</ul>
