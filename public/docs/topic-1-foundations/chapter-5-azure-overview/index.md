# Chapter 5 - Azure Overview

<div class="time-pill">ESTIMATED TIME TO COMPLETE: 25–30 MINUTES</div>

## 1. How to Register for an Azure Free Account

### 1.1 Personal Free Account

Official Link: https://azure.microsoft.com/free

- Use a personal email (e.g., Gmail) to create a Microsoft account

- Verify your identity via phone number and credit card

- Benefits:

    - $200 in credits valid for 30 days

    - 12 months of free tier services (e.g., B1S VM, 250 GB SQL DB)

    - Always-free limited-tier services (e.g., Blob Storage 5 GB)

### 1.2 Azure for Students Account

Official Link: https://azure.microsoft.com/free/students

- Requires an educational email address (.edu)

- No credit card needed

- Benefits:

    - $100 in credits valid for 12 months

    - Access to GitHub Student Developer Pack

    - Azure Dev Tools for Teaching (includes VS Code, Azure credits)

<hr>

## 2. Upgrading to Pay-As-You-Go (PAYG)

### 2.1 How to Upgrade

1. Sign in to [https://portal.azure.com](https://portal.azure.com/)

2. Go to **Subscriptions** from the left menu

3. Select your current Free Trial or Student subscription

4. Click **Upgrade to Pay-As-You-Go** and provide payment info

### 2.2 After Upgrading

- After your credit expires, services are charged based on actual usage

- Use **Budgets and Alerts** in Cost Management to avoid overspending

- Monthly invoice and usage breakdown available

<hr>

## 3. Subscription and Resource Group Management

### 3.1 What is a Subscription?

- A subscription is a billing unit and service boundary

- All resources must reside under a specific subscription

- One account can have multiple subscriptions (Free Trial, Student, PAYG)

### 3.2 What is a Resource Group?

A resource group is a logical container that holds related Azure resources such as virtual machines, storage accounts, web apps, databases, and more. It allows you to manage and organize your Azure assets as a unit.

Key characteristics:

- A logical container for related resources

- A resource can only exist in one resource group at a time

- Resources can be added or removed from a group at any time

- Resources can be moved from one group to another

- A resource group can contain resources from different Azure regions

- Resources in different groups can still interact with each other

- Resources in the same group can share lifecycle and permissions

- Deleting a resource group will delete all contained resources

Refer to [Microsoft Docs: Introduction to Azure Storage](https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction) for more information.

### Best Practices

- Use one resource group per project or use-case

- Naming convention example: `rg-nyc-taxi-pipeline`

<hr>

## 4. Azure Services Overview

| Category         | Service                  | Description                              |
| ---------------- | ------------------------ | ---------------------------------------- |
| Data Storage     | Azure Blob Storage       | Object/file storage with containers      |
| Data Pipeline    | Azure Data Factory (ADF) | Drag-and-drop ETL pipeline service       |
| Big Data Compute | Azure Databricks         | Apache Spark platform with notebook UI   |
| Data Warehouse   | Azure Synapse Analytics  | Scalable cloud DWH with T-SQL support    |
| Relational DB    | Azure SQL Database       | Managed SQL Server database              |
| NoSQL DB         | Azure Cosmos DB          | Globally distributed NoSQL DB            |
| BI & Reporting   | Power BI Embedded        | Embedded visual analytics and dashboards |

<hr>

## 5. Common Actions and Where to Find Them

| Action                           | Azure Portal Path                                     |
| -------------------------------- | ----------------------------------------------------- |
| Create a resource group          | Home → Resource Groups → Create                       |
| Create storage account           | Home → Storage Accounts → Create                      |
| Monitor billing & quota usage    | Subscriptions → Usage + Quotas                        |
| Create virtual networks/firewall | Networking → Virtual Network / Network Security       |
| Add IAM roles                    | Resource → Access control (IAM) → Add role assignment |

<hr>

## 6. Extended Tips for Beginners

- Use [Microsoft Learn](https://learn.microsoft.com/en-us/training/azure/) for hands-on modules

- Use [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) to estimate costs

- Set **budget alerts** early to avoid surprise charges

### Good Starter Tools:

- **Azure Data Studio**: lightweight SQL IDE for Synapse/Azure SQL

- **Azure Portal**: main UI for resource creation and monitoring

- **Azure CLI / Terraform**: for automating deployments

<hr>

## ✅ Learning & Project Readiness Checklist

- Successfully registered and logged into Azure Portal

- Created at least one subscription and resource group

- Familiar with basic services: ADF, Blob, Synapse, Databricks

- Set up budget and quota monitoring

- Can create and delete basic resources

If you’re preparing for a DataOps or analytics project, consider reviewing `DataOps Prerequisite` and `DataOps Foundations` documents.
