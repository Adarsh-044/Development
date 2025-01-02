					Git 
Distribution Version Control system
Continuous improvement of project 
Each commit is a snapshot. 
	
Pull Request : Request to merge your branch into another branch.  

Git
Distributed Version Control System 
Easily recover files, Roll back, Snapshot
	Series of snapshots & Commits. 


	(local Repo 1)   ======> Remote Repo    ⇐====  (local Repo 2) 


Git Installation
    Git command line tool    [ git -- version] 
    Git bash (terminal program)

Syntax : git [command] [--flag] [argument]

git fakeCommand (-p / –patch) [<id>] [--] [<paths>....] 

-f or –flag 
| Or 
[optional] 
<placeholder> 
[<optional placeholder>] 
() grouping 
– Disambiguates the command 
… multiple occurrence possible 
 

Setting user info to GIT
git config [--local | –global | –system] <key> [<value>]    
–system : For all user on computer 
–global : For every repo on computer
–local : only for one repo (highest precedence)
Ex:  git config --global user.name "Your Name"
       git config --global user.email "Your Email"

git config <key> 
Ex: git config user.name 

         
git config --list       // To get all details. 
git config user.name    // To check the user name
git config user.email   // To check the user email 


SSH key authentication 
       https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
    Git bash
        ssh-keygen -t ed25519 -C "your_email@example.com"     
        eval "$(ssh-agent -s)"      [To check ssh generation o/p would be agent pid 1923]
        ssh-add ~/.ssh/id_ed25519   [Adding of identity]
        tail < ~/.ssh/id_ed25519.pub  [Generate ssh key]
    Then the ssh key will be generated and add to the github account

    ssh-keyscan github.com >> ~/.ssh/known_hosts // error if found 


!Git Three Stage architecture
Fig 1.

Working directory =====> Staging Area ======> Local Repository =====> Remote Repository 
    Actual files in local		(Commit)		(Local) 			(Web)

	|<============Project Directory===============>|


Git bash commands / linux commands
    pwd [Present Working directory]  
    ls [list documents]
    rm -rf .git    [To delete git file]
    touch file_name     // Create new file
    mkdir folder_name	// Create a folder
    echo “This is my file” >> file_name  [To write something in file] 
    tree 
  


 git init   // Initialized Empty git repository 
 git add  
    --a  or a . 	// Adding all the files
   file_name    // Only Specific file   => Went into stacked area 
git reset     	// Transfer from staging area to untraked area
git commit -m "First commit"  [-m means message]
git commit -a -m "Comment"    [-a means all files would directly committed without going into staging area]
git log       // To check all the commits. 
git status
git log --oneline


    


Git uses Directed acyclic graph (DAG) to represent commit history. 

Git Objects : 
Commit object - A small text file
﻿﻿Annotated tag - A reference to a specific commit
Tree - Directories and filenames in the project
﻿﻿Blob - The content of a file in the project
Git Id’s : Name of git objects / named with SHA -1. 
Ex : e784d5f722c8bb856f93f762eac77ec0378f447c [e784d5]

Branch label : Points to tip of the branch. 
Reference : A commit SHA-1 Hash	
	cd .git > refs 

Head : Reference to current commit 
		Head → Master 
View Head : 
.git → cat HEAD (cat : To view Files)	
git log –oneline –graph 
git show HEAD 
git show HEAD~ or HEAD~2  (~ Refer to prior commits)
git show HEAD ^ or HEAD^2  (^ Refer to merge commits) 

Tags : Reference / Label attached to specific commit. 
Lightweight : Reference to commit 
	git tag <tag_name> [<commit>] ; byDefault its HEAD 
Annotated : Reference to commit + Tag Info (stamp)
git tag -a [-m <msg> | -F <file>] <tag_name> [<commit>] 
	git tag -a -m "includes feature 1" v0.1
	
	To transfer Tags : 
		git push <remote> <tag_name> (Single Tag)
		git push <remote> –tags	    (All Tags) 



Branches : Set of commits that trace back to project’s commits. 
       git branch             [To obtain all branch names]
       git branch <branch_name>  [create new branch]
       git checkout <branch or commit>     [To transfer to main branch]
       git checkout -b feature   [To create new branch & transfer to feature branch]
   
       git reflog [local record of all changes made to branch pointers (like HEAD) in a Git repository 

Create a new branch with deleted branch using the commit id
Ex : git checkout -b featureX <commitId(check via reflog)> 


Merge : 
Fast-forward merge 
Merge Commit 
Squash Merge
Rebase

Fast Forward : 
	Moves the base branch label to tip of topic branch
No other commit have been made to base branch 
featureX            	 |B|  ←  |C|
		                ←				|A| ← |B| ← |C| 
master    	         |A|

			Before 
git checkout master
git merge featureX

Merging is by default a fast-forward(FF) 

Merge Commit 
git merge  --no --ff featureX 
Conflicts : 
	Updating a single file in both branches while merging the branches. 

Resolutions : 
	Involves 3 commits : 
		I. Tip of current branch : “ours” or “mine” 
Ii. Tip of branch to be added : “theirs” 
Iii. Common ancestors : Merge base 
* Conflicted Hunks : 
	Surrounded by <<<<<   & >>>>>
		Ex : 	feature 1 
			<<<<<< HEAD 	
			feature 2 
			========
			feature 3 
			>>>>>> featureX 
			
		Text from HEAD commit is between <<<<<<  and ======
		Text from branched to merged commit is between ====== and >>>>>> 





Tracking Branches : 
Local branch that represent remote branches. 
Named : <remote>/<branch>  Ex : origin/master 
Updated with network commands like push, pull 

	origin/master 
	      | 
A  ← B ←  C ← D 
		  | 
		 HEAD 


git branch  --all 
git remote set-head <remote> <branch> { Changing the remote/origin/heads } 
 


        git merge branch_name  [To merge 2 branches]
        git merge --abort 
        git branch -v            [Branch_name and last commits of all branches]
        git branch --merged      [Names of  already merged branches]
        git branch --no-merged   [Names of not already merged branches]
        git branch -d branch_name [To delete the branch][gives alert if branch is not merged]
                  -D             [Delete without alert]




NETWORK COMMANDS

Clone-
Copies a remote repository
git clone https_link new_folder name  // To create a copy in local file.

Fetch-
git fetch <repository> 
Retrieves new objects and references from the remote repository
Tracking branches are updated. 


Pull- 
git pull [<repository>] [<branch>]
Combines git fetch and git merge FETCH_HEAD 
If objects are fetched, the tracking branch is merged into the current local branch
This is similar to a topic branch merging into a base branch
MERGING OPTIONS
-- ff (default) - fast-forward if possible, otherwise perform a merge commit
--no-ff - always include a merge commit
--ff-only - cancel instead of doing a merge commit
--rebase [--preserve-merges]

Push-
 Adds new objects and references to the remote repository
git push [-u] [<repository>] [<branch>] 
-u : track the branch. (--set -upstream) 




Rebase
Moves commits to new parent(base) 

	Feature	        C ⇐ D  		  C’ ⇐ D’ 		
			     /				/
	Master 	A ⇐ B			A ⇐ B 


It’s a merge 
git rebase <upstream_branch> <feature_branch> 
git rebase --continue {In case of sorting the merge conflicts} 
git rebase --abort {To stop the rebasing} 


Amending the Commits 
Change the most recent commit message. 
Change the most recent project file. 
This creates a new SHA-1. 
git commit --amend -m “<msg>”. 
Use --no-edit option to reuse the same previous commit msg.    
  


Squash Merge 
Merge the tip of the feature branch onto the tip of the base branch. 
Result would be in staging, need to merge again.
Rewrites the merge history. 
git checkout master
git merge --squash featureX
git commit [accept or modify the squash msg]  




Pull Requests 
To merge the branch. 


git diff [Compare the working area and staging area]
git diff --staged [Compare the last commit to current staging area]


git rm file_name  [To delete the file and stagged]
git mv prev_file_name new_file_name   [To rename the document and stagged]

Git ignore
    Create .gitignore file and the names of file that you don't wanna add. 
        for multiple file of same type use *.log // *.html or something like this or even folders
  



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

