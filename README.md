# Car Price Prediction Model  

This project focuses on building a car price prediction model using data scraped from popular Moroccan car listing websites: **Avito**, **Wandaloo**, and **Moteur.ma**. The model leverages the **XGBoost** algorithm for accurate predictions, with comprehensive data preprocessing and feature engineering steps.  

## Features  

- **Web Scraping**:  
    Data is collected from Avito, Wandaloo, and Moteur.ma using Python libraries such as `BeautifulSoup` and `requests`.  
- **Data Preprocessing**:  
    - Handling missing values.  
    - Encoding categorical variables.  
    - Normalizing and scaling numerical features.  
    - Removing outliers.  
- **Feature Engineering**:  
    - Extracting relevant features such as car brand, model, year, premiere Main, puissance fiscal,kilometrage, and price.  
    - Creating new features to improve model performance.  
- **Model Training**:  
    - Using **XGBoost**, a gradient boosting framework, for regression tasks.  
    - Hyperparameter tuning to optimize model performance.  
- **Evaluation**:  
    - Metrics such as RMSE, MAE, and R² are used to evaluate the model.  


## Results  

The model achieves high accuracy in predicting car prices, making it a valuable tool for buyers and sellers in the Moroccan car market.  

## Future Work  

- Incorporate more data sources for better generalization.  
- Experiment with other machine learning algorithms.  
- Deploy the model as a web application.  
