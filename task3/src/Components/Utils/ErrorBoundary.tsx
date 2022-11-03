import React from "react";

import { ErrorInfo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
  info: ErrorInfo | null;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: null,
    info: null,
  };

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({
      error,
      info,
    });
  }

  render(): ReactNode {
    const { error } = this.state;
    if (error) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
