# Evaluation Report: Diabetes

## Model: Logistic Regression
- **Accuracy**: 0.7143
- **Precision**: 0.6087
- **Recall**: 0.5185
- **F1-Score**: 0.5600
- **ROC-AUC**: 0.8230
### Confusion Matrix
```text
[[82 18]
 [26 28]]
```

### Classification Report
```text
              precision    recall  f1-score   support

           0       0.76      0.82      0.79       100
           1       0.61      0.52      0.56        54

    accuracy                           0.71       154
   macro avg       0.68      0.67      0.67       154
weighted avg       0.71      0.71      0.71       154

```

## Model: Decision Tree
- **Accuracy**: 0.7922
- **Precision**: 0.7037
- **Recall**: 0.7037
- **F1-Score**: 0.7037
- **ROC-AUC**: 0.7835
### Confusion Matrix
```text
[[84 16]
 [16 38]]
```

### Classification Report
```text
              precision    recall  f1-score   support

           0       0.84      0.84      0.84       100
           1       0.70      0.70      0.70        54

    accuracy                           0.79       154
   macro avg       0.77      0.77      0.77       154
weighted avg       0.79      0.79      0.79       154

```

