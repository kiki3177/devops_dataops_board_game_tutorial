# Chapter 2 - Lab 0 - Git Practice

<div class="time-pill">ESTIMATED TIME TO COMPLETE: 25–30 MINUTES</div>


## Prerequisites:
- Install Git on your local machine if you haven't already. You can download it from [here](https://git-scm.com/).
- Recap basic Git commands such as `git init`, `git add`, `git checkout`, `git commit`, `git status`, and `git push`.

## Hands-On Git Workflow

### Clone the Repository
Start by cloning the lab repository to your local machine.

```bash
git clone https://github.com/open-devsecops/topic-1-lab-reference-app
```

### Navigate to the Repository Directory
Move into the directory of the cloned repository on your machine.

```bash
cd <location_of_your_cloned_repo>
```

### Create a New Branch
Create a new branch named `feature-branch-<your_name>` (or a unique identifier for your branch).
    
```bash
git checkout -b feature-branch-<your_name>
```

### Make Changes
Make changes to the code or README file in the repository. This could be as simple as adding your name to a list or modifying a line of code.

### Stage and Commit Your Changes
Stage your changes and then commit your changes with a descriptive message.

```bash
    git add .
```
```bash
    git commit -m "Changed README"
```

### Push Your Branch
Push your branch to the remote repository.
    
```bash
    git push origin feature-branch
```

### Create a Pull Request
  - Navigate to the [GitHub repository page](https://github.com/open-devsecops/topic-1-lab-reference-app).
  - On the repo nav bar, click "Pull Requests."
  - On the right-hand side, click the green button titled "New Pull Request."
  - If it's not already there, change base branch to "main" and change compare to the branch you made.
  - Title it something meaningful, like "Added my name."
  - Click the green "Create pull request" button.
  - Click the green "Merge pull request" button and "Confirm."
    - **NOTE**: Typically in a professional setting, this is a step that the owner of a project will take after reviewing the changes you made. But for this exercise, you will do both steps.