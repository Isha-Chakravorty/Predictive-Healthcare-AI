# Evaluation Report: Heart Disease

## Model: Logistic Regression
- **Accuracy**: 0.8333
- **Precision**: 0.8462
- **Recall**: 0.7857
- **F1-Score**: 0.8148
- **ROC-AUC**: 0.9498
### Confusion Matrix
```text
[[28  4]
 [ 6 22]]
```

### Classification Report
```text
              precision    recall  f1-score   support

           0       0.82      0.88      0.85        32
           1       0.85      0.79      0.81        28

    accuracy                           0.83        60
   macro avg       0.83      0.83      0.83        60
weighted avg       0.83      0.83      0.83        60

```

## Model: Decision Tree
- **Accuracy**: 0.7000
- **Precision**: 0.7500
- **Recall**: 0.5357
- **F1-Score**: 0.6250
- **ROC-AUC**: 0.7450
### Confusion Matrix
```text
[[27  5]
 [13 15]]
```

### Classification Report
```text
              precision    recall  f1-score   support

           0       0.68      0.84      0.75        32
           1       0.75      0.54      0.62        28

    accuracy                           0.70        60
   macro avg       0.71      0.69      0.69        60
weighted avg       0.71      0.70      0.69        60

```

