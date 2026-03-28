Gitlab Pipeline

    To successful Build & Deployment
    Stage : Build
                -> Find a docker Image
                -> Run commands to execute it

    To use some image :
    use of artifcats come
        artifacts :
            paths :
                -Build

    Build :
        To download all dependencies
            ex: npm install (java), pip install
        Code to binary (compilation)
        Packaging (Artifact creation)
            Bundles everything
                        format : .jar or .war or docker image

    Configured by :
        Jenkins / gitlab / gihub action

 Pre-Requisitive :x`
    A. Source Code
            Actual project files.
            Connection to version
                -> Repo urls, branch
                -> Creds if private :
                        -> access keys or token to fetch code
    B. Build env :
            Where build actually runs
            Agent / Runner Label
                Pipeline to specific os (ubuntu-)
                docker container (image : node-16)

     C. Build script :
            mvn clean install
            artifact destination : dist / folder

    D. Hidden Dependencies :
            List of all ext. library
                package.json / pom.xml / requirements.txt
            Environment Variables