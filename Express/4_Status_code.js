
/*
Status Codes
short messages server  - to Browser or Client
Using a code or no. 


There are 500 status code
1)1xx - informational
2)2xx - success                     
3)3xx - Redirection
4)4xx - Client Error
5)5xx - SeverSide Error ..like server down
6)600   inf - not Recommended to make our own status code  

generally used once are:
? 200     Success
? 201     Created

301 - indicates that the requested resource has been definitively moved to the URL given by the Location headers
304 - The requested resource has not been modified since the last time you accessed it.
307
308

400 - Bad Request
401 - Unauthorized
404 - page not found

500 - Internal Server Error
502

Benefits: debug,seo

?    res.statusCode = 2xx;  [To use in the project]

*/
