Dag (Directed Acyclic graphs)
        Node => task
        Edge => Dependencies
        => Collection of task
        To define, organize and maintain pipeline and workflows.

Define Dag Dependency : task_a >> task_b

Tasks : work to perform : download data
            --> Implemented using operators
        : Scheduling

Executor : local, kubernetes, or cloud service.

Tasks : Python function, shell commands, api calls, spark jobs, data transfer

Scheduling ; automat/ manual or data driven schedule(when new data enters)

Operators  : function use to create task
        -> Bash Operator
        -> Python Operator
        -> Sql operator / postgres / mysql
        -> s3Hook / Docker/ Kubernete Pools
