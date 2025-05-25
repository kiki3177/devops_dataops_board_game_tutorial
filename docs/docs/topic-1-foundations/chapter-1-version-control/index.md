# Chapter 1 - Version Control

<div class="time-pill">ESTIMATED TIME TO COMPLETE: 25–30 MINUTES</div>

## What is version control?
Version control is **a system that records changes to a file or set of files over time** so that you can recall specific versions later. It's a critical tool in modern software development, allowing developers to work collaboratively, track every modification, and revert to previous states if necessary.

> **Example Scenario**
>
> Armine and Tigran are part of a software development team tasked with creating a new mobile application. Armine is tasked with refining the user authentication system, while Tigran is implementing an innovative feature that allows users to share media within the app.
>
> **Without Version Control**: If Armine and Tigran are editing the same file, Tigran's latest upload could accidentally overwrite the changes Armine made, resulting in a loss of progress and potential conflicts in the code.
>
> **With Version Control**: Armine and Tigran can work on their updates concurrently without the risk of interfering with each other's contributions. Here's how it unfolds:
>
> - Independently, they make their changes and commit their updates to the version control system, each creating a new version in the repository.
>
> - The version control system alerts them to the presence of new, separate updates, signaling that a merge of changes is necessary.
>
> - Together, they examine the differences, carefully integrate their respective code changes, and commit the unified version to the repository.
>
> - Should an issue arise with the authentication update, Armine can revert her portion of the code to a previous state without disrupting Tigran's feature, thanks to the version history maintained by the system.

A common tool for version control is **GitHub**. GitHub allows you acts as a central hub for all of the different versions of your code, kind of how in google docs you can see the history of your changes. Though there are many different systems for version control, we will be learning using GitHubs features. The syntax and user interface of different products are different, but the core elements are the same. 

<hr>

## What Is Repository?

Repositories are like digital libraries where all the files for a specific project are stored. It is the central hub where the creator of the repository (also known as a repo) can decide who can edit and view the files. In GitHub you can create as many repositories as you want and you will be able to control the structure and workflow you want for your project or organization.

### Creating & Editing a New Repository
Everything that is done to create or edit a repository can be done on the site itself, or through your terminal! To learn how to create or edit one, see the following GitHub Documentation:
- [Creating a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories?tool=cli)
- [Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [Adding a File to a Repo](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

## Git Areas and Commands

### Working Directory

The **working directory** is where you actively work on the files in your project. It contains all the changes you've made.

**Relevant Commands:**
- `git status`: Show the status of changes as untracked, modified, or staged.
- `git checkout`: Switch between branches or revert changes to files in your working directory.

### Staging Area

The **staging area**, or "index," is a holding area for changes that are ready to be committed. It's where you prepare and review changes before they are committed to the repository.

**Relevant Commands:**
- `git add`: Add changes from the working directory to the staging area.

### Repository

The **repository** is where Git stores the history of your project. It contains all of your commits, each of which is a snapshot of your project at a point in time.

**Relevant Commands:**
- `git commit`: Commit your staged changes to the repository.
- `git log`: View the commit history of the repository.
- `git push`: Upload your local repository content to a remote repository.

### Command Workflow

1. Make changes in the **working directory**.
2. Use `git add` to select and move these changes to the **staging area**.
3. With `git commit`, save the changes from the staging area to your **repository**.
4. If using a remote repository, like on GitHub, `git push` shares your commits from the local repository to the remote.

![Git in progress diagram](./assets/git.png)


<hr>



## What is Branch?

A **branch** in Git encapsulates an independent line of development, enabling you to work on new features, bug fixes, or experiments separately from the main codebase. It's akin to creating a parallel universe where you can make changes without affecting the 'main' or 'master' branch until you're ready to merge those changes back in.

### Purpose of Branching

Branching serves several purposes:

- **Isolation**: Each branch isolates development work from other branches in the repository. This isolation enables you to work on different tasks simultaneously without impacting the stability of the main codebase.
- **Collaboration**: Teams can collaborate on a project more effectively by using branches. Each team member can work on a specific branch without causing conflicts with others' work.
- **Parallel Development**: Branches enable concurrent development of multiple features, which can later be integrated into the main branch for release.
- **Experimentation**: You can experiment with new ideas in a branch without the risk of destabilizing the codebase. If the experiment fails, you can discard the branch without any impact.

### How Branching Works

Creating a branch in Git is a fast and simple operation because it doesn't copy files to the branch—instead, Git just creates a new pointer. Here's how you can work with branches:

- **Create a New Branch**: `git branch <branch-name>`
- **Switch to a Branch**: `git checkout <branch-name>`
- **Merge a Branch**: To incorporate changes from one branch into another, you merge them. For example, you might merge a feature branch into the main branch once the feature is complete.
- **Delete a Branch**: Once you've merged the changes and no longer need the branch, you can delete it with `git branch -d <branch-name>`.

By using branches, you can manage the development of new features, fixes, and updates in a structured and organized manner, allowing for a smoother and more controlled workflow.



### Branching Strategies

Branching in Git allows multiple developers to work on different tasks simultaneously without interfering with each other's work. Here are some common strategies:

- **Feature Branching**: Create branches for each new feature to keep changes isolated from the main codebase.
- **Release Branching**: Maintain separate branches for release candidates, allowing for bug fixes and preparation for a production release.
- **Hotfix Branching**: Quickly create branches to address urgent bugs in production code.

Each strategy serves a specific purpose and can be chosen based on the team's workflow and project requirements.


<hr>

## Types of Merging

Merging is the process of integrating changes from one branch into another. Git offers several types of merges:

- **Fast-Forward Merge**: Moves the base branch pointer forward until it equals the feature branch's pointer.
- **Three-Way Merge**: Used when two branches have diverged. A new "merge commit" is created to join the two histories.
- **Squash Merge**: Combines all feature branch commits into a single commit for a cleaner history when merging into the base branch.

Understanding the implications of each merge type is crucial for maintaining a coherent project history.


<hr>

## Advanced Concepts

Other intermediate concepts of version control include:

- **Pull Requests (PRs)**: PRs are a feature of hosting services like GitHub and GitLab. They let you tell others about changes you've pushed to a branch in a repository.
- **Workflows**: Workflows like Gitflow and GitHub Flow offer structured methods for branching and merging that fit different types of projects and development cycles.
- **Rebasing**: Rebasing is an alternative to merging, rewriting the commit history to produce a straight, linear progression of changes.
- **Stashing**: Save uncommitted changes in a stack while you switch branches.

By mastering these concepts, developers can collaborate more effectively and maintain a clean, functional codebase.


<hr>

## Effective Documentation
Proper documentation is key to the longevity and maintainability of software. You want to make sure if you abrubtly leave a project at any point, anyone else can pick it up without talking to you at all.

- **READMEs: Their Role and Key Elements to Include**:
    - A README is often the first item a visitor will see when visiting your repository. It should include a project title, description, installation instructions, usage, contributing guidelines, license information, and contact information for the maintainers.
    - Use the README to provide a high-level overview of the project and how all the pieces fit together. [Read more...](/https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)

- **Wiki: Using a Project's Wiki for Extensive Documentation**:
    - For more detailed documentation, consider using the project's wiki. It's a great place for tutorials, examples, design notes, or other detailed information that users and contributors may need. [Read more...](/https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis)

- **Code Comments: Inline Documentation for Code Clarity**:
    - Well-placed comments within the code can clarify complex algorithms, decision-making, or reasons for significant changes.
    - Use comments to explain the *why*, not the *what* — the code speaks for itself on the latter.




<hr>



## References 
<details>
  <summary>Expand</summary>
    <b>1.</b> Atlassian. “What Is Version Control: Atlassian Git Tutorial.” <i>Atlassian</i>, <a href="https://www.atlassian.com/git/tutorials/what-is-version-control" target="_blank">www.atlassian.com/git/tutorials/what-is-version-control</a>. Accessed 15 Apr. 2024.<br>
    <b>2.</b> “1.1 Getting Started - about Version Control.” <i>Git</i>, <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" target="_blank">git-scm.com/book/en/v2/Getting-Started-About-Version-Control</a>. Accessed 15 Apr. 2024.<br>
    <b>3.</b> “What Is Version Control?” <i>GitLab</i>, GitLab, 4 Apr. 2023, <a href="https://about.gitlab.com/topics/version-control/" target="_blank">about.gitlab.com/topics/version-control/</a>.<br>
    <b>4.</b> “About Repositories.” <i>GitHub Docs</i>, <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories" target="_blank">docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories</a>. Accessed 15 Apr. 2024.<br>
    <b>5.</b> “What Is a Git Repository?: Beginner Git Tutorial.” <i>GitKraken</i>, 17 Mar. 2023, <a href="https://www.gitkraken.com/learn/git/tutorials/what-is-a-git-repository" target="_blank">www.gitkraken.com/learn/git/tutorials/what-is-a-git-repository</a>.<br>
    <b>6.</b> Git Cheat Sheet, <a href="https://education.github.com/git-cheat-sheet-education.pdf" target="_blank">education.github.com/git-cheat-sheet-education.pdf</a>. Accessed 15 Apr. 2024.<br>
    <b>7.</b> “3.1 Git Branching - Branches in a Nutshell.” <i>Git</i>, <a href="https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" target="_blank">git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell</a>. Accessed 15 Apr. 2024.<br>
    <b>8.</b> “Git & Github Tutorial for Beginners #8 - Branches.” <i>YouTube</i>, YouTube, 14 June 2017, <a href="https://www.youtube.com/watch?v=QV0kVNvkMxc" target="_blank">www.youtube.com/watch?v=QV0kVNvkMxc</a>.<br>
    <b>9.</b> Atlassian. “A Guide to Optimal Branching Strategies in Git.” <i>Atlassian</i>, <a href="https://www.atlassian.com/agile/software-development/branching" target="_blank">www.atlassian.com/agile/software-development/branching</a>. Accessed 15 Apr. 2024.<br>
    <b>10.</b> Marijan, Bosko. “Git Branching Strategies: What Are Different Branching Strategies?” <i>Knowledge Base by phoenixNAP</i>, 19 Dec. 2023, <a href="https://phoenixnap.com/kb/git-branching-strategy" target="_blank">phoenixnap.com/kb/git-branching-strategy</a>.<br>
    <b>11.</b> Merrett, Luke. “Different Merge Types in Git.” <i>Luke Merrett</i>, 7 Aug. 2021, <a href="https://lukemerrett.com/different-merge-types-in-git/" target="_blank">lukemerrett.com/different-merge-types-in-git</a>.<br>
    <b>12.</b> “About Merge Methods on Github.” <i>GitHub Docs</i>, <a href="https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github" target="_blank">docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github</a>. Accessed 15 Apr. 2024.<br>
    <b>13.</b> Price, Taylor R. “Git Merge: To Squash or Fast-Forward?” <i>DEV Community</i>, 23 Mar. 2023, <a href="https://dev.to/trpricesoftware/git-merge-to-squash-or-fast-forward-3791" target="_blank">dev.to/trpricesoftware/git-merge-to-squash-or-fast-forward-3791</a>.<br>
    <b>14.</b> Wright, Mitchell. “What Is Version Control? 13 Key Concepts & Terms to Know.” <i>BloomTech</i>, 28 Feb. 2024, <a href="https://www.bloomtech.com/article/version-control-vocabulary" target="_blank">www.bloomtech.com/article/version-control-vocabulary</a>.<br>
    <b>15.</b> “About Pull Requests.” <i>GitHub Docs</i>, <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" target="_blank">docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests</a>. Accessed 15 Apr. 2024.<br>
    <b>16.</b> “About Git Rebase.” <i>GitHub Docs</i>, <a href="https://docs.github.com/articles/about-git-rebase" target="_blank">docs.github.com/articles/about-git-rebase</a>. Accessed 15 Apr. 2024.<br>
    <b>17.</b> Jamiebuilds. “Jamiebuilds/Documentation-Handbook: How to Write High-Quality Friendly Documentation That People Want to Read.” <i>GitHub</i>, <a href="https://github.com/jamiebuilds/documentation-handbook" target="_blank">github.com/jamiebuilds/documentation-handbook</a>. Accessed 15 Apr. 2024.<br>
    <b>18.</b> Maddy. “How to Write the Perfect Documentation for Your GitHub Project.” <i>DEV Community</i>, 11 July 2023, <a href="https://dev.to/maddy/how-to-write-the-perfect-documentation-for-your-github-project-4k38" target="_blank">dev.to/maddy/how-to-write-the-perfect-documentation-for-your-github-project-4k38</a> <br>
    <b>19.</b> “The Engineer’s Guide to Writing Meaningful Code Comments.” <i>Stepsize CollabGPT: AI Collaboration for Software Teams. Daily Standups and More.</i>, <a href="https://stepsize.com/blog/the-engineers-guide-to-writing-code-comments" target="_blank">stepsize.com/blog/the-engineers-guide-to-writing-code-comments</a>. Accessed 15 Apr. 2024.<br>
</details>