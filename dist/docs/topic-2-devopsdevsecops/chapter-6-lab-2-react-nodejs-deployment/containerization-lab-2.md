## Generating Temporary AWS IAM Credentials

### Credential Generation
- On the dashboard, use the _AWS IAM Assume Role_ credential generator. This utility provides you with temporary credentials granting limited access to AWS services.
- Note down the generated Access Key ID, Secret Access Key, and Session Token.

### Configure AWS CLI with Temporary Credentials
- Run `aws configure` to input the temporary credentials. When prompted, enter the Access Key ID, Secret Access Key, and specify the default region `us-west-1`. For the output format, you can choose `json`.
- Now, we need to add the _AWS Session Token_ as part of the credential configuration. When you used the AWS IAM Assume Role credential generator, it provided temporary security credentials that include a Session Token. Failure to include the Session Token will result in AWS rejecting requests made with these credentials

**For MacOS/Linux:**
Run the following commands to add the temporary credentials to your AWS credentials file:
```bash
echo "aws_session_token = YOUR_SESSION_TOKEN" >> ~/.aws/credentials
```

**For Windows:**
Run the following commands to add the temporary credentials to your AWS credentials file:
```bash
echo aws_session_token=YOUR_SESSION_TOKEN >> %USERPROFILE%\.aws\credentials
```



## Interacting with AWS ECR
AWS Elastic Container Registry (ECR) is a managed Docker container registry service that makes it easy for developers to share Docker container images.

### Creating an Image Repository
**In AWS ECR, each Docker image is stored in a repository**, which acts as a collection or a namespace for your Docker images. Let's create a repository where you can push and share your Docker image.

```bash
aws ecr create-repository --repository-name <repository-name>
```

{: .warning}
When creating a new repository, it's important to choose a unique name. If you try to create a repository with a name that already exists within the AWS account in the same region, AWS will throw a `RepositoryAlreadyExistsException`. You can use the `aws ecr describe-repositories` command to list all available repositories.

### Authenticate Docker Client to AWS ECR
Authenticate your Docker client to the AWS ECR service to enable pushing and pulling images.

```bash
aws ecr get-login-password | docker login --username AWS --password-stdin <shared-registry-url>
```
`<shared-registry-url>` can be found in the internal dashboard.

### Tag and Push Your Docker Image
Tag your local Docker image with the ECR repository URI

```bash
docker tag my-app <shared-registry-url>/<repository-name>
```

After tagging, push your Docker image to the AWS ECR repository

```bash
docker push <shared-registry-url>/<repository-name>
```

## Managing Docker Images Locally and Pulling from AWS ECR (Buddy Activity)
Okay, now that your image is successfully pushed to the company's shared registry, it's accessible to anyone with the right permissions within your organization.

### Pulling the Docker Image from AWS ECR
Let's try pulling a repository of your classmate's image from the shared AWS ECR. You can obtain the names of their Docker images stored in AWS ECR by either asking directly or using an AWS CLI command to list all available repositories `aws ecr describe-repositories`.

Once you have the repository name, proceed to pull.
```bash
docker pull <shared-registry-url>/<repository-name>
```

Check the Docker images currently stored on your machine.
```bash
docker images
```

After pulling the image, run it locally to see the application your classmate developed!

{: .warning}
Don't forget to deactivate your VPN connection after you have completed the lab exercise!