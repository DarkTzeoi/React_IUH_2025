import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav, Tab, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBag, faHeart, faAddressCard, faKey } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    birthDate: '1990-01-01'
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [addressData, setAddressData] = useState({
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States'
  });
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  
  // Mock orders data
  const orders = [
    {
      id: 'ORD-123456',
      date: '2023-05-15',
      total: 249.99,
      status: 'Delivered',
      items: [
        { id: 1, name: 'Diamond Pendant', price: 199.99, quantity: 1 },
        { id: 2, name: 'Silver Bracelet', price: 49.99, quantity: 1 }
      ]
    },
    {
      id: 'ORD-789012',
      date: '2023-04-20',
      total: 399.99,
      status: 'Processing',
      items: [
        { id: 3, name: 'Gold Earrings', price: 399.99, quantity: 1 }
      ]
    }
  ];
  
  // Mock wishlist data
  const wishlist = [
    { id: 1, name: 'Pearl Necklace', price: 299.99, image: '/images/products/pearl-necklace.jpg' },
    { id: 2, name: 'Sapphire Ring', price: 599.99, image: '/images/products/sapphire-ring.jpg' },
    { id: 3, name: 'Silver Watch', price: 199.99, image: '/images/products/silver-watch.jpg' }
  ];
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateProfile = () => {
    const newErrors = {};
    
    if (!profileData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!profileData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!profileData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(profileData.email)) newErrors.email = 'Email is invalid';
    if (!profileData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validatePassword = () => {
    const newErrors = {};
    
    if (!passwordData.currentPassword) newErrors.currentPassword = 'Current password is required';
    if (!passwordData.newPassword) newErrors.newPassword = 'New password is required';
    else if (passwordData.newPassword.length < 8) 
      newErrors.newPassword = 'Password must be at least 8 characters';
    
    if (!passwordData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (passwordData.newPassword !== passwordData.confirmPassword) 
      newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateAddress = () => {
    const newErrors = {};
    
    if (!addressData.address.trim()) newErrors.address = 'Address is required';
    if (!addressData.city.trim()) newErrors.city = 'City is required';
    if (!addressData.state.trim()) newErrors.state = 'State is required';
    if (!addressData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      // Simulate API call to update profile
      setTimeout(() => {
        setSuccess('Profile updated successfully!');
        setTimeout(() => setSuccess(''), 3000);
      }, 1000);
    }
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Simulate API call to update password
      setTimeout(() => {
        setSuccess('Password updated successfully!');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        setTimeout(() => setSuccess(''), 3000);
      }, 1000);
    }
  };
  
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (validateAddress()) {
      // Simulate API call to update address
      setTimeout(() => {
        setSuccess('Address updated successfully!');
        setTimeout(() => setSuccess(''), 3000);
      }, 1000);
    }
  };
  
  const removeFromWishlist = (id) => {
    // In a real app, you would call an API to remove the item
    console.log(`Removing item ${id} from wishlist`);
  };
  
  return (
    <Container className="py-5">
      <h1 className="mb-4">My Account</h1>
      
      {success && (
        <Alert variant="success" className="mb-4">
          {success}
        </Alert>
      )}
      
      <Tab.Container id="account-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Body>
                <div className="text-center mb-4">
                  <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FontAwesomeIcon icon={faUser} size="2x" className="text-primary" />
                  </div>
                  <h5>{profileData.firstName} {profileData.lastName}</h5>
                  <p className="text-muted mb-0">{profileData.email}</p>
                </div>
                
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="profile" className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      <span>Profile</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders" className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
                      <span>Orders</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="wishlist" className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faHeart} className="me-2" />
                      <span>Wishlist</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="address" className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faAddressCard} className="me-2" />
                      <span>Address</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="password" className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faKey} className="me-2" />
                      <span>Change Password</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={9}>
            <Card>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="profile">
                    <h4 className="mb-4">Profile Information</h4>
                    <Form onSubmit={handleProfileSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={profileData.firstName}
                              onChange={handleProfileChange}
                              isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.firstName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={profileData.lastName}
                              onChange={handleProfileChange}
                              isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.lastName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleProfileChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleProfileChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Birth Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="birthDate"
                          value={profileData.birthDate}
                          onChange={handleProfileChange}
                        />
                      </Form.Group>
                      
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Form>
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="orders">
                    <h4 className="mb-4">My Orders</h4>
                    {orders.length > 0 ? (
                      orders.map(order => (
                        <Card key={order.id} className="mb-3">
                          <Card.Header className="bg-white">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6 className="mb-0">Order #{order.id}</h6>
                                <small className="text-muted">Placed on {order.date}</small>
                              </div>
                              <span className={`badge bg-${order.status === 'Delivered' ? 'success' : 'primary'}`}>
                                {order.status}
                              </span>
                            </div>
                          </Card.Header>
                          <Card.Body>
                            {order.items.map(item => (
                              <div key={item.id} className="d-flex justify-content-between mb-2">
                                <div>
                                  <span>{item.name}</span>
                                  <small className="text-muted d-block">Quantity: {item.quantity}</small>
                                </div>
                                <span>${item.price.toFixed(2)}</span>
                              </div>
                            ))}
                            <hr />
                            <div className="d-flex justify-content-between">
                              <strong>Total</strong>
                              <strong>${order.total.toFixed(2)}</strong>
                            </div>
                          </Card.Body>
                          <Card.Footer className="bg-white">
                            <Button variant="outline-primary" size="sm">View Details</Button>
                          </Card.Footer>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <p className="mb-0">You haven't placed any orders yet.</p>
                      </div>
                    )}
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="wishlist">
                    <h4 className="mb-4">My Wishlist</h4>
                    {wishlist.length > 0 ? (
                      <Row>
                        {wishlist.map(item => (
                          <Col md={4} key={item.id} className="mb-4">
                            <Card>
                              <Card.Img variant="top" src={item.image} alt={item.name} />
                              <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>${item.price.toFixed(2)}</Card.Text>
                                <div className="d-flex justify-content-between">
                                  <Button variant="primary" size="sm">Add to Cart</Button>
                                  <Button 
                                    variant="outline-danger" 
                                    size="sm"
                                    onClick={() => removeFromWishlist(item.id)}
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    ) : (
                      <div className="text-center py-4">
                        <p className="mb-0">Your wishlist is empty.</p>
                      </div>
                    )}
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="address">
                    <h4 className="mb-4">Address Information</h4>
                    <Form onSubmit={handleAddressSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={addressData.address}
                          onChange={handleAddressChange}
                          isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.address}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Row>
                        <Col md={5}>
                          <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              name="city"
                              value={addressData.city}
                              onChange={handleAddressChange}
                              isInvalid={!!errors.city}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.city}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              type="text"
                              name="state"
                              value={addressData.state}
                              onChange={handleAddressChange}
                              isInvalid={!!errors.state}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.state}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group className="mb-3">
                            <Form.Label>ZIP Code</Form.Label>
                            <Form.Control
                              type="text"
                              name="zipCode"
                              value={addressData.zipCode}
                              onChange={handleAddressChange}
                              isInvalid={!!errors.zipCode}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.zipCode}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          name="country"
                          value={addressData.country}
                          onChange={handleAddressChange}
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                        </Form.Select>
                      </Form.Group>
                      
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Form>
                  </Tab.Pane>
                  
                  <Tab.Pane eventKey="password">
                    <h4 className="mb-4">Change Password</h4>
                    <Form onSubmit={handlePasswordSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                          isInvalid={!!errors.currentPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.currentPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="newPassword"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                          isInvalid={!!errors.newPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.newPassword}
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                          Password must be at least 8 characters long.
                        </Form.Text>
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={handlePasswordChange}
                          isInvalid={!!errors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                      
                      <Button variant="primary" type="submit">
                        Update Password
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Profile;