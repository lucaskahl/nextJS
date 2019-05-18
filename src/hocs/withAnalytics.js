import React, { Component } from "react";
import { loadGetInitialProps } from "next/dist/lib/utils";
import ReactGA from "react-ga";

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log("page_view");

      ReactGA.initialize("id_asdasdas");
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
