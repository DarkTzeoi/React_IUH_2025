import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Accordion,
  FormSelect,
  Pagination,
  Spinner,
  Alert,
} from "react-bootstrap";
import "./search.css";
import { BsFilterLeft, BsStarFill, BsStar } from "react-icons/bs";
import RecipeCard from "../../components/RecipeCard";
import { useLocation } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get("q") || "";

  const [allRecipes, setAllRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeFilters, setActiveFilters] = useState({
    type: [],
    time: { min: 0, max: 120 },
    rating: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAllRecipes(data);
        setIsLoading(false);
      })
      .catch((fetchError) => {
        setError("Could not load recipes. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  const filteredRecipes = useMemo(() => {
    let recipes = [...allRecipes];
    if (searchKeyword.trim()) {
      const lowerCaseKeyword = searchKeyword.trim().toLowerCase();
      recipes = recipes.filter((recipe) =>
        recipe.name?.toLowerCase().includes(lowerCaseKeyword)
      );
    }
    return recipes;
  }, [allRecipes, searchKeyword, activeFilters]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchKeyword, activeFilters]);

  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderRatingStars = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= ratingValue ? (
          <BsStarFill key={i} className="star-icon filled" />
        ) : (
          <BsStar key={i} className="star-icon empty" />
        )
      );
    }
    return stars;
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const paginationItems = useMemo(() => {
    const items = [];
    const pageLimit = 5;
    const maxVisiblePages = pageLimit - 2;

    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
    );

    if (totalPages <= pageLimit) {
      for (let number = 1; number <= totalPages; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    } else {
      items.push(
        <Pagination.Item
          key={1}
          active={1 === currentPage}
          onClick={() => handlePageChange(1)}
        >
          {1}
        </Pagination.Item>
      );

      if (currentPage > Math.ceil(maxVisiblePages / 2) + 1) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
      }

      let startPage = Math.max(
        2,
        currentPage - Math.floor((maxVisiblePages - 1) / 2)
      );
      let endPage = Math.min(
        totalPages - 1,
        currentPage + Math.ceil((maxVisiblePages - 1) / 2)
      );

      if (currentPage <= Math.ceil(maxVisiblePages / 2) + 1) {
        endPage = Math.max(startPage + maxVisiblePages - 1, maxVisiblePages);
      }
      if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
        startPage = Math.min(
          endPage - maxVisiblePages + 1,
          totalPages - maxVisiblePages
        );
      }

      startPage = Math.max(2, startPage);
      endPage = Math.min(totalPages - 1, endPage);

      for (let number = startPage; number <= endPage; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }

      if (currentPage < totalPages - Math.floor(maxVisiblePages / 2)) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      }

      items.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    items.push(
      <Pagination.Next
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    );
    return items;
  }, [currentPage, totalPages]);

  const filterTypes = [
    "Pan-fried",
    "Stir-fried",
    "Grilled",
    "Roasted",
    "Sauteed",
    "Baked",
    "Steamed",
    "Stewed",
  ];

  return (
    <MainLayout>
      <Row>
        <Col lg={3} md={4} className="filter-sidebar mb-4 mb-md-0">
          <Card className="filter-card shadow-sm">
            <Card.Header className="filter-header d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsFilterLeft className="me-2 filter-icon-main" />
                <span className="fw-bold">FILTERS</span>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen flush>
                <Accordion.Item eventKey="0" className="filter-section">
                  <Accordion.Header>Type</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      {filterTypes.map((type) => (
                        <Col xs={6} key={type} className="mb-2">
                          <Form.Check
                            type="checkbox"
                            id={`type-${type.replace(/\s+/g, "-")}`}
                            label={type}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="filter-section">
                  <Accordion.Header>Time</Accordion.Header>
                  <Accordion.Body>
                    <div className="time-slider-placeholder">
                      <div className="slider-track">
                        <div
                          className="slider-thumb"
                          style={{ left: "20%" }}
                        ></div>
                        <div
                          className="slider-thumb"
                          style={{ left: "70%" }}
                        ></div>
                      </div>
                      <div className="d-flex justify-content-between mt-2 text-muted small">
                        <span>{activeFilters.time.min} minutes</span>
                        <span>{activeFilters.time.max} minutes</span>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="filter-section">
                  <Accordion.Header>Rating</Accordion.Header>
                  <Accordion.Body>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <Form.Check
                        key={rating}
                        type="radio"
                        name="ratingGroup"
                        id={`rating-${rating}`}
                        className="rating-option mb-2"
                        label={
                          <span className="rating-stars ms-2">
                            {renderRatingStars(rating)} & up
                          </span>
                        }
                      />
                    ))}
                    <Form.Check
                      key="any-rating"
                      type="radio"
                      name="ratingGroup"
                      id="rating-any"
                      className="rating-option mb-2"
                      label="Any Rating"
                      defaultChecked
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer className="filter-footer">
              <div className="d-grid"></div>
            </Card.Footer>
          </Card>
        </Col>

        <Col lg={9} md={8} className="main-content">
          <Row className="mb-3 align-items-center">
            <Col xs={12} sm={8} md={9}>
              <h2 className="page-title mb-0">
                {searchKeyword.trim()
                  ? `Results for "${searchKeyword}"`
                  : "All Recipes"}
                {!isLoading && ` (${filteredRecipes.length})`}
              </h2>
            </Col>
            <Col
              xs={12}
              sm={4}
              md={3}
              className="d-flex justify-content-sm-end mt-2 mt-sm-0"
            >
              <FormSelect
                aria-label="Sort by"
                size="sm"
                className="sort-dropdown"
              >
                <option value="relevance">Relevance</option>
                <option value="a-z">Name (A-Z)</option>
                <option value="z-a">Name (Z-A)</option>
              </FormSelect>
            </Col>
          </Row>

          {isLoading ? (
            <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p className="mt-2">Loading recipes...</p>
            </div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : currentRecipes.length > 0 ? (
            <Row>
              {currentRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  id={recipe.idMeal}
                  image={recipe.image}
                  title={recipe.title}
                  time={recipe.time}
                  chef={recipe.chef}
                  chefImage={recipe.chefImage}
                />
              ))}
            </Row>
          ) : (
            // <div className="text-center py-5">
            //   <p>No recipes found matching your criteria.</p>
            // </div>
            <div className="flex flex-col items-center justify-center py-12">
              <h2 className="font-bold text-2xl text-gray-800 mb-6">
                Sorry, no results
              </h2>
              <img
                src="/images/Logo/nothing.png"
                alt="No results found"
                className="w-32 h-32 mb-6"
              />
              <p className="text-lg text-gray-600 mb-8">
                We have all your Independence Day sweets covered.
              </p>
              <div className="flex flex-row gap-3">
                <button className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors">
                  Sweet Cake
                </button>
                <button className="px-4 py-2 bg-pink-100 text-purple-600 rounded-full hover:bg-pink-200 transition-colors">
                  Black Cake
                </button>
                <button className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors">
                  Rozele Verde
                </button>
                <button className="px-4 py-2 bg-pink-100 text-green-600 rounded-full hover:bg-pink-200 transition-colors">
                  Healthy food
                </button>
              </div>
            </div>
          )}

          {!isLoading && !error && totalPages > 1 && (
            <Row className="mt-4">
              <Col className="d-flex justify-content-center">
                <Pagination className="pagination-custom">
                  {paginationItems}
                </Pagination>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Search;
