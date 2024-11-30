import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContent } from "./ErrorContent";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadcrumbNav from "../BreadcrummbNav";
import { BreadcrumbItems } from "../../App";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <Container className="my-5 pt-5">
       <BreadcrumbNav routes={BreadcrumbItems} />
      <ErrorContent />
      <div className="text-center">
        <Button 
          onClick={handleHomeClick}
          variant="danger"
          size="lg"
          className="my-5"
          aria-label="Navigate to home page"
        >
          Back to home page
        </Button>
      </div>
    </Container>
  );
}