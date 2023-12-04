/*         
TODO:                       GITHUB   ::-> 
-------------------------------------------

! Git :: Distributed Version Control System 
Why git -> Easily recover files, Roll back, Snapshot
Git generally only add data. 
Git has integrity. 

Git Installation
    Git command line tool   
    Git bash (terminal program)

! Adding user info to GIT
Git -Global info add(Default)
?    git config --global user.name "Your Name"
?    git config --global user.email "Your Email"

Git -Local info add(to specific project)
?    git config user.name "Your Name"
?    git config user.email "Your Email"


git status              
git config --list       // To get all details. 
git config user.name    // To check the user name
git config user.email   // To check the user email 

!Git Three Stage architecture
Fig 1.

Working directory
    Actual files in local
Commit 
    Snapshot
Staging Area 
    Files you wanna commit

? git init  // Initialized Empty git repository 
? git add  
    --a  or a . // Adding all the files
    fle_name    // Only Specific file   => Went into stacked area 
? git reset     // Transfer from staging area to untraked area

? git commit -m "First commit"  [-m means message]
? git commit -a -m "Comment"    [-a means all files would directly committed without going into staging area]
? git log       // To check all the commits. 


Git bash commands / linux commands
    pwd[Present Working directory]  
    ls [list documents]
    rm -rf .git    [To delete git file]
    touch file_name     // Create new file
    tree 
    
? git clone https_link new_folder name // To create a copy in local file.


? git diff [Compare the working area and staging area]
? git diff --staged [Compare the last commit to current staging area]



? git rm file_name  [To delete the file and stagged]
? git mv prev_file_name new_file_name   [To rename the document and stagged]


Git ignore
    Create .gitignore file and the names of file that you don't wanna add. 
        for multiple file of same type use *.log // *.html or something like this or even folders

    Once the file is tracked and then push into gitignore causing the tracking of same file when updated 
    so to prevent this
?       git rm --cached file_name  [It won't tracked when push into gitignore]

Commits Descriptions
    git log         [Describe the commits]
    git log -p      
    git log -p -n   [Describe the last n commits]
    git log --stat  [In short describe the no. of added and deleted files]
    git log --pretty=oneline    [Describe the commits in single line]
    git log --pretty=full
    git log --pretty=short
    git log --since=2.days  [Describe the work occur in last 2 days]

    git log --pretty=format:"get_the_required_info"     [https://git-scm.com/docs/git-log]

How to update/ edit the last commit comment
    git commit --amend 
        then i for insert and edit 
        :wq [to close the another window]
    

?   git restore --staged file_name  [Staging to tracked ]
?   git restore file_name   [tracked file to working area]

Untracked to prev_commit
?   git checkout -- file_name   [Specific file]
?   git checkout  - f           [All files]

Github : To host the git repository

SSH key authentication 

    Method -1
    https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
    Git bash
        ssh-keygen -t ed25519 -C "your_email@example.com"     
        eval "$(ssh-agent -s)"      [To check ssh generation o/p would be agent pid 1923]
        ssh-add ~/.ssh/id_ed25519   [Adding of identity]
        tail < ~/.ssh/id_ed25519.pub  [Generate ssh key]
    Then the ssh key will be generated and add to the github account

    ssh-keyscan github.com >> ~/.ssh/known_hosts // error if found 

    Method -2 
    ssh-keygen
    then cat [public key has been saved in ......{isme file ka location hona chahiye}]
    then key will be generated. 

    
Remote : jo khi aur hai like server pr

Adding file to gitHub
    ? git remote add origin https..     [Now calling online] 
    ? git remote -v [To check ]
    ? git push -u origin main


Alias   // Gives alternate names
    git config --global alias.ci commit
    git config --global alias.st status

Branches 
?       git checkout -b main   [To create new branch]
?       git checkout main      [To transfer to main branch]
?       git branch             [To obtain all branch names]
?       git merge branch_name  [To merge 2 branches]

        git branch -v            [Branch_name and last commits of all branches]
        git branch --merged      [Names of  already merged branches]
        git branch --no-merged   [Names of not already merged branches]
        git brach -d branch_name [To delete the branch][gives alert if branch is not merged]
                  -D             [Delete without alert]
    

When changing the branch the .gitignore file doesn't changes

Stashing 
    Temporarily saving changes that you have made to your working directory. 
    git stash                     [To stash only staged files]
    git stash --include-untracked [To include untracked files also]
    git stash --all               [To include everything including ignored files]
    git stash apply               [To apply latest stash]
    git stash show                [To show all stashes]
    git stash pop                 [Doesn't remove if there is merge conflicts]
    git stash drop                [Remove everything from stash]
    git stash clear               [Remove all stashes]

*/
