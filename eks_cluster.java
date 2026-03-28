EKS CLUSTER
        Amazon Elastic Kubernetes Service
        Run Kubernetes on AWS ( Management of Kubernetes)
        Focus on Deploy, manage, scale
        Running & Scaling of application
        Open Source Orchestration
            lifecyof of container


Kubernetes
        Open source container orchestration platform
        container Orchestration (Kubernetes manages lifecycle of container)
        Automation (Deploying)
        Scaling
        Resilience : Self healing, if container fails : restart
        Run it in various cloud producers : AWS, google cloud.
        Extensibility : Hightly/ customize

How do we use Kubernetes :
        Through command & line tool : kubectl.
        1. Containerization
                package your application & dependencies into container(using docker).
        2. Defining Application deployment
                configuration (yaml file)
                deployments (Replica of applicatoin running)
                Sercvices : Expose appliatoin to network provides stable ip and dns name
                pods  : deployable unit in kubernetes
                config maps and secrets and volume
        3. Deploying to cluster.
        4. Managing application (scaliing , monitoring, updating)
        5. Networking and access (cluster Ip, Node Port, Load Balancer, Ingress)
