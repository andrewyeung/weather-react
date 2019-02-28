git init => give a .git folder to the repo => tracked by Git
git status => check the repo file progress => tracked/ untracked
  touch .gitignore => for files that don't wanna be tracked.

Working Directory <---> Staging Area <---> .git directory
1)
git add [file] / git add -A => add files to staging area (Initial commit)
git reset => remove files from staging area

2) ** Commit
git commit -m "Message of the changes" => commited files
git log => track the changes

3) ** Clone from a remote repo
git clone <url>

4) 
git remote -v => info on the repo
git branch -a => info on local and remote branches

5) Commite Changes
git diff => the changes you've made to the code
git status
git add -A
git commit -m "random"
git remote add origin https://github.com/andrewyeung/weather-react.git => use HTTPS!
git pull origin master => pulled from any changes since the last time we pulled
git push origin master => push to the master branch of remote repo

6) Create a branch for desired feature
git branch name
git checkout name
  => commit files to the branch => push to remote repo
git push -u origin name
git branch name

7) Merge a branch
git checkout master => switch to master branch
git pull origin master => up to date?
git branch --merged => which branch is merged already?
git merge name => merge the branch to the master
git push origin master => push to the remote repo master branch