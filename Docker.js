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


*/