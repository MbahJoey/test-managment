import React, { Component, Fragment } from "react";
import Navigation from "../../components/navigation/navigation.component.jsx";
import TestItem from "../../components/test-item/test-item.component.jsx";
import TestPreview from "../../components/test-preview/test-preview.component.jsx";

import TESTS_DATA from "../../tests.data.js";

class TestPage extends Component {
  state = { tests: TESTS_DATA, open: false };

  openTestHandler = () => {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  };
  render() {
    const { tests } = this.state;
    return (
      <Fragment>
        <Navigation />
        <div>
          {tests.map(({  ...otherCollectionProps }) => (
            <div >
              <TestPreview
              
                {...otherCollectionProps}
                click={this.openTestHandler}
              />
              <TestItem
                {...otherCollectionProps}
                show={this.state.open}
              />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default TestPage;
