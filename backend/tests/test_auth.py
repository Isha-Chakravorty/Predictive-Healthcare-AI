from fastapi.testclient import TestClient

def test_register_user(client: TestClient):
    response = client.post(
        "/auth/register",
        json={"email": "testuser@example.com", "full_name": "Test User", "password": "StrongPassword1"}
    )
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == "testuser@example.com"
    assert "id" in data
    assert "password" not in data

def test_register_duplicate_email(client: TestClient):
    client.post(
        "/auth/register",
        json={"email": "duplicate@example.com", "full_name": "User 1", "password": "StrongPassword1"}
    )
    response = client.post(
        "/auth/register",
        json={"email": "duplicate@example.com", "full_name": "User 2", "password": "StrongPassword1"}
    )
    assert response.status_code == 400
    assert response.json()["detail"] == "The user with this email already exists in the system."

def test_login_success(client: TestClient):
    client.post(
        "/auth/register",
        json={"email": "login@example.com", "full_name": "Login User", "password": "StrongPassword1"}
    )
    response = client.post(
        "/auth/login",
        json={"email": "login@example.com", "password": "StrongPassword1"}
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data
    assert data["token_type"] == "bearer"

def test_login_invalid_password(client: TestClient):
    client.post(
        "/auth/register",
        json={"email": "invalid@example.com", "full_name": "Invalid User", "password": "StrongPassword1"}
    )
    response = client.post(
        "/auth/login",
        json={"email": "invalid@example.com", "password": "WrongPassword2"}
    )
    assert response.status_code == 401
    assert response.json()["detail"] == "Incorrect email or password"

def test_protected_route_without_token(client: TestClient):
    response = client.get("/auth/me")
    assert response.status_code == 401

def test_protected_route_with_token(client: TestClient):
    client.post(
        "/auth/register",
        json={"email": "me@example.com", "full_name": "Me User", "password": "StrongPassword1"}
    )
    login_response = client.post(
        "/auth/login",
        json={"email": "me@example.com", "password": "StrongPassword1"}
    )
    token = login_response.json()["access_token"]
    
    response = client.get("/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    assert response.json()["email"] == "me@example.com"
