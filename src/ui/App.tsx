import { Fragment } from "react";
import { Col, Row } from "react-materialize";
import { Listings } from "~/components/Listings";
import { Search } from "~/components/Search";

export function App() {
  return (
    <Fragment>
      <header>
        <h1>GitHub Jobs</h1>
      </header>
      <main>
        <Search />

        <section>
          <Row>
            <Col s={12} m={6}>
              <Listings />
            </Col>
          </Row>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
