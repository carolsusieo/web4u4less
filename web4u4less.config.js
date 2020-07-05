module.exports = {
apps : [
     {
       name          : 'web4u4less',
       script        : 'npx',
       interpreter   : 'none',
       args          : 'serve build -s',
       env_production : {
         NODE_ENV: 'production'
       }
     }
   ]
}
