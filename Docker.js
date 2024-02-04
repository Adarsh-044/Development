/*

    Docker : A platform for consistently building, running and shipping of application. 

    Reasons for not working all the machines? 
        1. Some files are missing 
        2. Software versions
        3. System configuration setting
    
    Containers                                      Virtual Machinces
    Allow running multiple application              Full blown of OS
    are lightweight                                 slow to start
    use OS of the host                              Resource intensive
    start quickly  
    less hardware resources.


        Architecture
            Client ---------> Server
                    RESTApi     (Docker Engine)

    Installing : Official Website   
    Check   : docker version 


    Application         ----> Image
    Files + Docker file        -Cuts down operating system)
                               -Runtime environment(Node)
                               -Application files  
                               -Libraries
                               -Environment variables

    Dev ---> Registry ---> Test /  Prod

    Instructions to add in Dockerfile file
    FROM node:alpine           // node represents the docker hub : Registry for docker image, alpine represent which distribution do we use
    COPY . /app                //  . represent it's a current directry and /app represent the folder that we create
    WORKDIR /app                // current work dir
    CMD node app.js


    Terminal Command 

    To build the docker image 
        docker build -t hello-docker .
                    (tag) docker-name (Current directory)
    
    Download an image: 𝚍𝚘𝚌𝚔𝚎𝚛 𝚙𝚞𝚕𝚕 𝚞𝚋𝚞𝚗𝚝𝚞
    Upload an image: 𝚍𝚘𝚌𝚔𝚎𝚛 𝚙𝚞𝚜𝚑 𝚖𝚢𝚞𝚜𝚎𝚛/𝚖𝚢𝚊𝚙𝚙
    Delete an image: 𝚍𝚘𝚌𝚔𝚎𝚛 𝚛𝚖𝚒 𝚒𝚖𝚊𝚐𝚎_𝚗𝚊𝚖𝚎
    View image history: 𝚍𝚘𝚌𝚔𝚎𝚛 𝚑𝚒𝚜𝚝𝚘𝚛𝚢 𝚒𝚖𝚊𝚐𝚎_𝚗𝚊𝚖𝚎

    To check for the image  
        -docker image ls 
        -docker images

*/
