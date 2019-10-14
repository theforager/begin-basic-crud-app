@app
shiny-r51

@static

@http
get /todos
post /todos
post /todos/delete
get /title/:name

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
