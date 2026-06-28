import { Component } from 'react';

class Canvas3DErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('3D Canvas failed to load:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a graceful fallback instead of crashing the whole page
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#aaa6c3',
            fontSize: 14,
          }}
        >
          {this.props.fallback || null}
        </div>
      );
    }

    return this.props.children;
  }
}

export default Canvas3DErrorBoundary;
