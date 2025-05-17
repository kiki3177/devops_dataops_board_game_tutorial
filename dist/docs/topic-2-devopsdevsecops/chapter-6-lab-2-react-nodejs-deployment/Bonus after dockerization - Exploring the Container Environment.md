## Bonus: Exploring the Container Environment
When your React application is running inside a Docker container, you might wonder, "Is it really isolated from my local environment?" To answer this, let's dive into the container and see for ourselves.

### Starting the Stopped Container
```bash
docker start <container-id or container-name>
```

{: .info-title }
> What's the difference between docker start and docker run?
>
> `docker run` is used to create a new container from a specified image and start it immediately. `docker start` is used to start an existing container that has been stopped.

### Entering the Running Container
Docker provides a command, `docker exec`, which allows you to execute commands inside a **running container**. Using this, you can start an interactive shell session:

```bash
docker exec -it <container-id or container-name> sh
```

Here, `-it` instructs Docker to run `sh` in interactive mode in the specified container.

### Checking the Environment
Once inside the container, let's run a simple command to check the operating system information:

```sh
uname -a
```

This command prints system information about the Linux kernel, which should be different from your host machine's (especially if you're not running Alpine Linux).

You can explore further by listing the files in the current directory `ls` or checking the environment variables `env`.

When you're done, simply type `exit` or press `Ctrl + C` to leave the container shell.