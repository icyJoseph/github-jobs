import "materialize-css";
import { Fragment } from "react";
import { Col, Row } from "react-materialize";
import { Listings } from "~/components/Listings";
import { Search } from "~/components/Search";

export function App() {
  return (
    <Fragment>
      <header>
        <Row>
          <Col>
            <h1>GitHub Jobs</h1>
          </Col>
        </Row>
      </header>
      <main>
        <Search />

        <section>
          <Row>
            <Col offset="s2 m3" s={8} m={6}>
              <Listings />
            </Col>
          </Row>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
