from fastapi.testclient import TestClient

def test_create_prediction(client: TestClient):
    # Setup user and patient
    client.post("/auth/register", json={"email": "doc2@example.com", "full_name": "Doc 2", "password": "StrongPassword1"})
    login = client.post("/auth/login", json={"email": "doc2@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    patient = client.post(
        "/patients",
        json={"first_name": "Alice", "last_name": "Smith", "age": 30},
        headers=headers
    ).json()
    
    # Create prediction
    response = client.post(
        "/predictions",
        json={
            "patient_id": patient["id"],
            "input_features": {"glucose": 110, "bmi": 26, "age": 30}
        },
        headers=headers
    )
    assert response.status_code == 201
    assert "predicted_disease" in response.json()
    assert response.json()["prediction_status"] == "COMPLETED"

def test_read_predictions_and_filtering(client: TestClient):
    login = client.post("/auth/login", json={"email": "doc2@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    response = client.get("/predictions", headers=headers)
    assert response.status_code == 200
    assert len(response.json()) > 0
    
    # Test patient predictions route
    patient_id = response.json()[0]["patient_id"]
    patient_preds = client.get(f"/patients/{patient_id}/predictions", headers=headers)
    assert patient_preds.status_code == 200
    assert len(patient_preds.json()) > 0

def test_unauthorized_prediction_access(client: TestClient):
    login = client.post("/auth/login", json={"email": "doc2@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    predictions = client.get("/predictions", headers=headers).json()
    prediction_id = predictions[0]["id"]
    
    # Login as another user
    client.post("/auth/register", json={"email": "doc3@example.com", "full_name": "Doc 3", "password": "StrongPassword1"})
    login2 = client.post("/auth/login", json={"email": "doc3@example.com", "password": "StrongPassword1"})
    token2 = login2.json()["access_token"]
    headers2 = {"Authorization": f"Bearer {token2}"}
    
    # Try to access first user's prediction
    response = client.get(f"/predictions/{prediction_id}", headers=headers2)
    assert response.status_code == 404

def test_delete_prediction(client: TestClient):
    login = client.post("/auth/login", json={"email": "doc2@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    predictions = client.get("/predictions", headers=headers).json()
    prediction_id = predictions[0]["id"]

    response = client.delete(f"/predictions/{prediction_id}", headers=headers)
    assert response.status_code == 200

    # Verify deleted
    response = client.get(f"/predictions/{prediction_id}", headers=headers)
    assert response.status_code == 404
