# Chapter 2 - CI/CD in DataOps

<div class="time-pill">ESTIMATED TIME TO COMPLETE: 25–30 MINUTES</div>

## 1. What is DataOps?

- Data = Data Engineering + Data Management
- Ops = Operations

DataOps is a collaborative data management practice that improves the communication, integration, and automation of data flows between data managers and data consumers across an organization. The goal of DataOps is to deliver high-quality, timely data to stakeholders by applying agile methodologies, DevOps principles, and automation to the entire data lifecycle—from ingestion to analytics.

Ok, now what? You just have to start applying this to your data pipelines and team workflows?
Actually yes. The reason this curriculum is critical for anyone involved in data—whether as an analyst, engineer, or business stakeholder—is because DataOps helps ensure faster, more reliable, and more secure delivery of data products, which are essential to every part of modern business decision-making.


<hr>

## 2. Why Implement DataOps?

### The Importance of Agility in the Data Lifecycle

Traditional data workflows often suffer from bottlenecks, manual processes, and poor visibility. Data quality issues, long delivery cycles, and communication gaps between teams cause delays and erode trust in data.

DataOps solves this by creating a culture of continuous integration, testing, monitoring, and deployment of data pipelines--bringing speed, collaboration, and governance to the entire Data Lifecycle.

<hr>
## 3. Tools and Technologie

### Orchestration & Automation

In DataOps, orchestration tools automate the execution of data workflows and ensure the reliable movement of data from ingestion to transformation and reporting. These orchestration tools help define task dependencies, execute steps in sequence, and monitor pipeline performance programmatically.

- Apache Airflow: A popular open-source platform that defines workflows as code using Python. It is ideal for managing complex, dependency-driven data pipelines.
- Azure Data Factory: A cloud-based ETL/ELT service that allows users to build and schedule data pipelines visually or with code. It supports a wide range of data sources and transformation activities.
- Azure DevOps Pipelines: Enables CI/CD automation for data assets, scripts, and infrastructure—triggering deployments and tests on code changes to ensure consistency across environments.

### Infrastructure as Code (IaC)

Infrastructure as Code enables teams to manage and provision infrastructure through code instead of manual processes. In DataOps, this approach allows critical services—such as storage accounts, data warehouses, compute clusters, and networking resources—to be defined and version-controlled just like application code.

- Terraform: A widely adopted declarative IaC tool that integrates seamlessly with major cloud providers (Azure, AWS, GCP). It supports repeatable, consistent deployments of data environments.
- Pulumi: A modern IaC framework that allows infrastructure to be defined using general-purpose programming languages such as Python, TypeScript, or Go. Ideal for developer-centric teams seeking flexible, code-driven infrastructure management.

<hr>
## 4. Our DataOps Lab

To help students gain hands-on experience in building a DataOps pipeline that moves data from external systems to the cloud, we designed this practical DataOps lab.

We used NYC taxi data as our raw data source, which is publicly available online. Our ultimate goal was to extract the raw data, clean it, and analyze zone-level monthly revenue through an automated pipeline.

This dataops pipeline will have four stages:

1. Extracting the raw data from the NYC taxi data HTTP source in Azure data factory
2. Cleaning the raw data in Azure databricks
3. Exporting the clean data to Azure Synapse in Azure databricks
4. Conduct data modelling in Azure Synapse

So let's get started! 

<hr>
## 5. Other Resources

1. What is Dataops | IBM
   https://www.ibm.com/think/topics/dataops
2. Azure DevOps Pipelines Documentation
   https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops
3. Terraform by HashiCorp – Official Docs
   https://developer.hashicorp.com/terraform/docs
4. NYC Taxi & Limousine Commission – Open Data
   https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page