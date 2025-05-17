# Chapter 3 - ETL Pipeline Walkthrough

This chapter walks you through building a four-stage ETL pipeline using Azure tools, from ingesting NYC Taxi data to modeling and optional visualization. You’ll gain hands-on experience with Data Factory, Databricks, Synapse, and Power BI.

## Learning Objectives


- Use Azure Data Factory to automate downloading Parquet files and store them in Blob Storage, organized by year and month.

- Use Databricks and PySpark to read, clean, and standardize raw taxi data, then write it into Synapse raw tables.

- In Synapse, model the data by creating staging tables and joining with zone lookup to build a unified fact_trip table for analysis.

- Build data models and create aggregated views for business insights, optionally visualized in Power BI.

By the end of this chapter, you’ll have built a functional, end-to-end ETL pipeline capable of handling structured data for analytics, gaining practical experience in the tools and processes essential to modern data engineering.