from fastapi.testclient import TestClient

def test_create_patient(client: TestClient):
    # Register and login user
    client.post("/auth/register", json={"email": "doc@example.com", "full_name": "Doc", "password": "StrongPassword1"})
    login = client.post("/auth/login", json={"email": "doc@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create patient
    response = client.post(
        "/patients",
        json={
            "first_name": "John",
            "last_name": "Doe",
            "age": 45,
            "phone": "+1234567890",
            "email": "john.doe@example.com"
        },
        headers=headers
    )
    assert response.status_code == 201
    assert response.json()["first_name"] == "John"
    assert "id" in response.json()

def test_read_patients(client: TestClient):
    login = client.post("/auth/login", json={"email": "doc@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    response = client.get("/patients", headers=headers)
    assert response.status_code == 200
    assert len(response.json()) > 0
    assert response.json()[0]["first_name"] == "John"

def test_search_patients(client: TestClient):
    login = client.post("/auth/login", json={"email": "doc@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    response = client.get("/patients?search=John", headers=headers)
    assert response.status_code == 200
    assert len(response.json()) == 1

    response = client.get("/patients?search=Nonexistent", headers=headers)
    assert response.status_code == 200
    assert len(response.json()) == 0

def test_update_patient(client: TestClient):
    login = client.post("/auth/login", json={"email": "doc@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    patients = client.get("/patients", headers=headers).json()
    patient_id = patients[0]["id"]

    response = client.put(
        f"/patients/{patient_id}",
        json={"age": 46},
        headers=headers
    )
    assert response.status_code == 200
    assert response.json()["age"] == 46
    assert response.json()["first_name"] == "John"

def test_delete_patient(client: TestClient):
    login = client.post("/auth/login", json={"email": "doc@example.com", "password": "StrongPassword1"})
    token = login.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    patients = client.get("/patients", headers=headers).json()
    patient_id = patients[0]["id"]

    response = client.delete(f"/patients/{patient_id}", headers=headers)
    assert response.status_code == 200
    assert response.json()["is_deleted"] == True

    # Should not appear in list anymore
    response = client.get("/patients", headers=headers)
    assert len(response.json()) == 0

def test_unauthorized_access(client: TestClient):
    response = client.get("/patients")
    assert response.status_code == 401
