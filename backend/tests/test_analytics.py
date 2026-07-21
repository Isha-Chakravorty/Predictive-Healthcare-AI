from fastapi.testclient import TestClient

def test_analytics_empty_database(client: TestClient):
    client.post("/auth/register", json={"email": "analytics1@example.com", "full_name": "Doc", "password": "StrongPassword1"})
    login = client.post("/auth/login", json={"email": "analytics1@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Dashboard should be 0s
    res = client.get("/analytics/dashboard", headers=headers)
    assert res.status_code == 200
    data = res.json()
    assert data["total_patients"] == 0
    assert data["total_predictions"] == 0

    # Diseases should be empty
    res = client.get("/analytics/diseases", headers=headers)
    assert len(res.json()["distribution"]) == 0

def test_analytics_populated_database(client: TestClient):
    client.post("/auth/register", json={"email": "analytics2@example.com", "full_name": "Doc 2", "password": "StrongPassword1"})
    login = client.post("/auth/login", json={"email": "analytics2@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create patient
    patient = client.post(
        "/patients",
        json={"first_name": "Bob", "last_name": "Jones", "age": 45, "gender": "Male", "weight": 80, "height": 175},
        headers=headers
    ).json()

    # Create prediction
    client.post(
        "/predictions",
        json={
            "patient_id": patient["id"],
            "input_features": {
                "Pregnancies": 1,
                "Glucose": 110,
                "BloodPressure": 70,
                "SkinThickness": 20,
                "Insulin": 79,
                "BMI": 26.0,
                "DiabetesPedigreeFunction": 0.5,
                "Age": 45
            }
        },
        headers=headers
    )

    # Check dashboard
    res = client.get("/analytics/dashboard", headers=headers)
    assert res.status_code == 200
    data = res.json()
    assert data["total_patients"] == 1
    assert data["total_predictions"] == 1

    # Check patients
    res = client.get("/analytics/patients", headers=headers)
    assert res.status_code == 200
    data = res.json()
    assert len(data["age_distribution"]) > 0
    assert len(data["bmi_distribution"]) > 0

    # Check trends
    res = client.get("/analytics/trends", headers=headers)
    assert res.status_code == 200
    assert len(res.json()["daily"]) == 1

def test_analytics_authorization_isolation(client: TestClient):
    # Verify Doc 1 (analytics1) does not see Doc 2 (analytics2) data
    login = client.post("/auth/login", json={"email": "analytics1@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    res = client.get("/analytics/dashboard", headers=headers)
    assert res.json()["total_patients"] == 0
