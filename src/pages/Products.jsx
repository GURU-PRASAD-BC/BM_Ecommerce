import axios from "axios";
import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../components/Breadcrumb";

// Styled Components
const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Title = styled.h1`
  max-width: 55rem;
  margin: 0 auto;
`;

const ResultsSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const QueryText = styled.h3`
  color: #4285F4;
`;

const SearchContainer = styled.div`
  width: 270px;
  margin: 0 auto;
  position: relative;
  text-align: center;
`;

const StyledInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 3rem;
  outline: 1px solid transparent;
  border: 1px solid #000000;
  border-radius: ${(props) => props.theme.radius};
  margin-right: 10px;
  width: 100%;
  
  &:focus {
    outline: 1px solid #4285F4;
    border-radius: ${(props) => props.theme.radius};
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 20px;
  top: 13px;
  color: #4285F4;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://bm-ecommerce-backend.onrender.com/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <Breadcrumb />
      <Title>Enhance your style with our premium collections</Title>
      <SearchContainer className="my-4">
        <StyledInput
          type="text"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon icon={faSearch} className="text-muted" />
      </SearchContainer>
      <ResultsSection>
        {query && (
          <QueryText>
            Results For: <strong className="text-muted">{query}</strong>
          </QueryText>
        )}
        <ProductsList products={filteredProducts} />
      </ResultsSection>
    </Container>
  );
};

export default Products;
