import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Projects() {
  return (
    <Container>
      <Row style={{ padding: "20px" }} >
        <Col>
          <Card style={{ width: "18rem", height: "500px" }}>
            <Card.Img
              variant="top"
              height="210px"
              src="https://user-images.githubusercontent.com/98043070/200179799-52e61ef2-53f0-4b77-ab29-dca799f5c038.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Mark Down Readme Generator</Card.Title>
              <Card.Text>
                A README generator will allow the user to answer a series of
                specific questions and create // a professional complete README
                based on their responses.
              </Card.Text>
         
              <Button className="position-sticky bottom-100"
                href="https://github.com/DKILGORE79/Pro_Readme_Generator"
                variant="primary"
              >
                View Project
              </Button>
           
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <Card style={{ width: "18rem", height: "500px"}}>
            <Card.Img
              variant="top"
              height="210px"
              src="https://user-images.githubusercontent.com/98043070/200177191-3c1c0a68-a24e-4e0a-b931-980185ae9401.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
              A weather dashboard that uses the openweathermap api to acquire weather data for
              the current day as well as the five day forecast and presents them to 
              the user in a user friendly format on the user interface.
              </Card.Text>
        
              <Button className="position-sticky bottom-100"
                href="https://dkilgore79.github.io/week-6-Weather-App/"
                variant="primary"
              >
                View Project
              </Button>
             
            </Card.Body>
          </Card>
        </Col>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <Col>
          <Card style={{ width: "18rem", height: "500px" }}>
            <Card.Img
              variant="top"
              height="210px"
              src="https://user-images.githubusercontent.com/98043070/200177208-c08250b1-2a5e-4ede-8cee-9b54b7d99ce3.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Day Planner</Card.Title>
              <Card.Text>
              A calendar application that allows a user to save events for each hour of the day.
              </Card.Text>
              <Button className="row justify-content-between"
                href="https://dkilgore79.github.io/week-5-scheduler/"
                variant="primary"
              >
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    <Row style={{ padding: "20px" }} >
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <Col>
          <Card style={{ width: "18rem", height: "500px" }}>
            <Card.Img
              variant="top"
              height="210px"
              src="https://user-images.githubusercontent.com/98043070/200177789-6e15be12-946e-42c7-8b81-3994f8831351.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Random Password Generator</Card.Title>
              <Card.Text>
              This tool help you to generate random password, this tool is created using HTML, CSS and a little JavaScript

              </Card.Text>
              <Button className="row justify-content-between"
                href="https://dkilgore79.github.io/Kilgore-Random-Password-Gen/"
                variant="primary"
              >
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <Col>
          <Card style={{ width: "18rem", height: "500px" }}>
            <Card.Img
              variant="top"
              height="210px"
              src=" https://user-images.githubusercontent.com/98043070/200177993-c2a5433b-f37a-461c-85d8-c0860845fb6c.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Trivia Quiz</Card.Title>
              <Card.Text>
              This application is a coding quiz application designed using JavaScript. 
              The user is presented with different multiple choice questions. 
              User's response it stored and a score is displayed after the quiz. 

              </Card.Text>
              <Button className="row justify-content-between"
                href="https://dkilgore79.github.io/week_4_code_quiz/"
                variant="primary"
              >
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <Col>
          <Card style={{ width: "18rem", height: "500px", }} >
            <Card.Img
              variant="top"
              height="210px"
              src="https://user-images.githubusercontent.com/98043070/200177195-52a76ba0-67fd-4220-af7e-a4de71d5f5d7.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Team Profile</Card.Title>
              <Card.Text>
              This application was created to generate a team profile based on user input using the Inquirer module from Node.js 
              and displaying the information on a newly created html page with a style sheet. 
              This project demonstrates use of OOP and TDD using Jest.
              </Card.Text>
              
              <Button className="row justify-content-between"
                href="https://github.com/DKILGORE79/week-10-Team-Profile-Generator"
                variant="primary"
              >
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
